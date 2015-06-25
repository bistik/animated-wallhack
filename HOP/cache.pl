#!/usr/bin/env perl

use strict;
use warnings;
use feature 'say';

sub binary {
    my $n = shift;
    return $n if $n == 0 || $n == 1;

    my $k = int($n / 2);
    my $b = $n % 2;
    my $E = binary($k);
    return $E . $b;
}

{
    my %cache;
    sub binary_with_cache {
        my $n = shift;
        return $cache{$n} if exists $cache{$n};

        $cache{$n} = $n if $n == 0 || $n == 1;

        my $k = int($n / 2);
        my $b = $n % 2;
        my $E = binary($k);
        $cache{$n} = $E . $b;

        return $cache{$n};
    }
}
say "binary(4) ", binary(4);
say "binary(2) ", binary(2);
say "binary(3) ", binary(3);
say "binary(9) ", binary(9);
say "binary(255) ", binary(255);

say "binary_with_cache(4) ", binary_with_cache(4);
say "binary_with_cache(2) ", binary_with_cache(2);
say "binary_with_cache(3) ", binary_with_cache(3);
say "binary_with_cache(9) ", binary_with_cache(9);
say "binary_with_cache(255) ", binary_with_cache(255);
