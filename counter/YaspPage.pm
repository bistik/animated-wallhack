package YaspPage;

use strict;
use warnings;

use WWW::Mechanize;
use Data::Dumper;

sub new {
    my ($class, $id) = @_;
    bless { id => $id }, $class;
}

sub get_page {
    my $self = shift;
    my $mech = WWW::Mechanize->new();
    $mech->agent_alias('Windows Mozilla');
    my $page = $mech->get($self->_url);
    $page->decoded_content;
}

sub _url {
    my $self = shift;
    return "http://yasp.co/players/" . $self->{id};
}

sub _write_to_cache {
    my ($self, $filename, $page) = @_;

    unless (-e $filename) {
        open my $fh, ">", $filename or die "cannot write to cache: $!";
        print $fh $page;
        close $fh;
    }
}

sub _get_cache_filename {
    my $self = shift;
    return $self->{id} . "_" . $self->_get_date_hour();
}

sub _get_date_hour {
    my $self = shift;
    my ($hour, $mday, $mon, $year) = (localtime())[2..5];
    $mon++;
    $mon  = "0$mon"  if $mon < 10;
    $mday = "0$mday" if $mday < 10;
    $year += 1900;

    return "$year$mon$mday$hour";
}

sub _read_from_cache {
}

1;
