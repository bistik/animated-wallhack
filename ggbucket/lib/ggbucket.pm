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

    debug "\n\n\tTEST\n\n";
    $tokens->{'css_url'} = request->base . 'css/style.css';
    $tokens->{'login_url'} = uri_for('/login');
    $tokens->{'logout_url'} = uri_for('/logout');
};

get '/' => sub {
    my $db = connect_db();
    my $sql = 'select id, name, primary_attr, roles from heroes order by id desc';
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

    my $db = connect_db();
    my $sql = 'insert into heroes (name, primary_attr, roles) values (?, ?, ?)';
    my $sth = $db->prepare($sql) or die $db->errstr;
    my @roles = params->{'roles'};
    debug "ROLES: @roles";
    $sth->execute(params->{'name'}, params->{'primary_attr'}, join ',', @roles) or die $sth->errstr;

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
