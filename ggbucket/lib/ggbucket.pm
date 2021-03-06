package ggbucket;

our $VERSION = '0.1';

use Dancer2;
use DBI;
use File::Spec;
use File::Slurper qw(read_text);
use Template;

set 'database'      => File::Spec->catfile(File::Spec->curdir(), 'dancr.db');
set 'session'       => 'Simple';
set 'template'      => 'template_toolkit';
set 'logger'        => 'console';
set 'log'           => 'debug';
set 'log_level'     => 'debug';
set 'show_errors'   => 1;
set 'startup_info'  => 1;
set 'warnings'      => 1;
set 'username'      => 'admin';
set 'password'      => 'password';
set 'layout'        => 'main';

my $flash;

sub set_flash {
    my $message = shift;

    $flash = $message;
}

sub get_flash {
    my $msg = $flash;
    $flash = "";

    return $msg;
}

sub hero_columns {
    my $func = shift;

    my @columns = qw(id name primary_attr roles lore
                     str agi int str_growth agi_growth
                     int_growth hp mana hp_regen mana_regen
                     damage bat move_speed day_vision night_vision
                     attack_range turn_rate missile_speed);
    my @transformed;
    foreach my $col ( @columns ) {
        my $transformed_value = $func->($col);
        push @transformed, $func->($col);
    }

    return grep { defined $_ } @transformed;
}

sub connect_db {
    my $dbh = DBI->connect("dbi:SQLite:dbname=".setting('database')) or die $DBI::errstr;
    return $dbh;
}

sub init_db {
    my $db = connect_db();
    my $schema = read_text('./schema.sql');
    $db->do($schema) or die "ERICK: $db->errstr";
}

hook before_template => sub {
    my $tokens = shift;

    $tokens->{'css_url'} = request->base . 'css/style.css';
    $tokens->{'login_url'} = uri_for('/login');
    $tokens->{'logout_url'} = uri_for('/logout');
};

get '/' => sub {
    my $db = connect_db();
    my $do_nothing = sub { return $_[0] };
    my $columns = join ',', hero_columns( $do_nothing );
    my $sql = 'select ' . $columns . ' from heroes order by id desc';
    my $sth = $db->prepare($sql) or die $db->errstr;
    $sth->execute or die $sth->errstr;
    template 'show_heroes.tt', {
        'msg' => get_flash(),
        'add_entry_url' => uri_for('/add'),
        'heroes' => $sth->fetchall_hashref('id'),
    };
};

post '/add' => sub {
    if (not session('logged_in')) {
        send_error("Not logged in", 401);
    }

    my $all_except_id = sub { return $_[0] ne 'id' ? $_[0] : undef };
    my $all_except_id_placeholder = sub { return $_[0] ne 'id' ? '?' : undef };
    my $columns = join ', ', hero_columns( $all_except_id );
    my $db = connect_db();
    my $sql = 'insert into heroes (' . $columns . ')';
    $columns = join ', ', hero_columns( $all_except_id_placeholder );
    $sql .= ' values (' . $columns . ')';
    my $sth = $db->prepare($sql) or die $db->errstr;
    my $roles = join ',', @{ params->{'roles'} } ;
    $sth->execute(params->{'name'}, params->{'primary_attr'}, $roles, params->{'lore'}, params->{'str'},
                params->{'agi'}, params->{'int'}, params->{'str_growth'}, params->{'agi_growth'}, params->{'int_growth'},
                params->{'hp'}, params->{'mana'}, params->{'hp_regen'}, params->{'mana_regen'}, params->{'damage'},
                params->{'bat'}, params->{'move_speed'}, params->{'day_vision'}, params->{'night_vision'},
                params->{'attack_range'}, params->{'turn_rate'}, params->{'missile_speed'}
                ) or die $sth->errstr;

    set_flash('New hero posted!');
    redirect '/';
};

any ['get', 'post'] => '/login' => sub {
    my $err;

    if (request->method() eq "POST") {
        if (params->{'username'} ne setting('username')) {
            $err = 'Invalid username';
        }
        elsif (params->{'password'} ne setting('password')) {
            $err = 'Invalid password';
        }
        else {
            session 'logged_in' => true;
            set_flash('You are logged in.');
            return redirect '/';
        }
    }

    template 'login.tt', {
        'err' => $err,
    };
};

get '/logout' => sub {
    app->destroy_session;
    set_flash('You are logged out.');
    redirect '/';
};

get '/faq' => sub {
    send_file 'faq.html';
};

init_db();
start;
