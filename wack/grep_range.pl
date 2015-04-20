#!/usr/bin/env perl

open my $fh, $ARGV[0] or die "Can't open $ARGV[0] or maybe there is no argument? $!";

my ($out, $is_grabbing) = ('', 0);

my $start = quotemeta $ARGV[1];
my $end = quotemeta $ARGV[2];

unless ($start or $end) {
        print "no start and end patterns provided";
        exit;
}


while (my $line = <$fh>) {
    if ($line =~ /$start/ and !$is_grabbing) {
        $is_grabbing = 1;
        $out .= $line;
        next;
    }

    $out .= $line if $is_grabbing;

    if ($line =~ /$end/ and $is_grabbing) {
        last;
    }
}

print $out;
