use Dancer2;
use DBI;
use File::Spec;
use File::Slurper qw(read_text);
use Template;

set 'database'      => File::Spec->catfile(File::Spec->tmpdir(), 'dancr.db');
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
    $db->do($schema) or die $db->errstr;
}
