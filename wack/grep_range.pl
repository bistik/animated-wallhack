#!/usr/bin/env perl

open my $fh, $ARGV[0] or die "Can't open $ARGV[0] or maybe there is no argument? $!";

my ($out, $is_grabbing) = ('', 0);

my ($start, $end) = ($ARGV[1], $ARGV[2]);

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
