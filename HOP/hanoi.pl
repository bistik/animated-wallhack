#!/usr/bin/env perl

use strict;
use warnings;

sub hanoi {
    my ($n, $start, $end, $extra, $func) = @_;

    if ($n == 1) {
        $func->(1, $start, $end);
    } else {
        hanoi($n-1, $start, $extra, $end, $func);
        $func->($n, $start, $end);
        hanoi($n-1, $extra, $end, $start, $func);
    }
}

sub print_hanoi {
    my ($n, $start, $end) =  @_;
    print "Move disk #$n from $start to $end.\n";
}

hanoi(3, 'A', 'C', 'B', \&print_hanoi );
