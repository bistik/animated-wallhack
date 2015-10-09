package BuffPage;

use strict;
use warnings;

use LWP::Simple;

sub new {
    my ($class, %attr) = @_;

    return bless \%attr, $class;
}

sub get_page {
    my $self = shift;
    my $cache_file  = $self->_get_cache_filename();
    my $cache = $self->_read_from_cache($cache_file);
    my $page;

    if ($cache) {
        $page = $cache;
    } else {
        $page = get($self->_url);
        $self->_write_to_cache($cache_file, $page);
    }

    return $page;
}

sub _url {
    my $self = shift;
    my $type = lc $self->{type};
    if (($type) eq 'list' ) {
        return "http://www.dotabuff.com/heroes";
    }
    if ($type eq 'hero' || $type eq 'items') {
        return "http://www.dotabuff.com/heroes/" . $self->{hero};
    }
}

sub _write_to_cache {
    my ($self, $filename, $page) = @_;

    unless (-e $filename) {
        open my $fh, ">", $filename or die "cannot write to cache: $!";
        print $fh $page;
        close $fh;
    }
}

sub _read_from_cache {
    my ($self, $filename) = @_;

    return 0 unless (-e $filename);

    open my $fh, '<', $filename or die "cannot read from cache: $!";
    $/ = undef; # slurp
    my $cache = <$fh>;
    close $fh;

    return $cache;
}

sub _get_cache_filename {
    my $self = shift;
    my $prefix;

    my ($hour, $mday, $mon, $year) = (localtime())[3..5];
    $mon++;
    $mon  = "0$mon"  if $mon < 10;
    $mday = "0$mday" if $mday < 10;
    $year += 1900;

    if ( (lc $self->{type}) eq 'items') {
        $prefix = "items" . $self->{hero};
    }
    if ( (lc $self->{type}) eq 'hero') {
        $prefix = $self->{hero};
    }
    if ( (lc $self->{type}) eq 'list') {
        $prefix = 'heroes';
    }

    return $prefix . $year . $mon . $mday . $hour;
}

1;
