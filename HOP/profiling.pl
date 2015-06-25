#!/usr/bin/env perl

use strict;
use warnings;

use Time::HiRes 'time';

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

my (%time, %calls);

sub profile {
    my ($func, $name) = @_;

    my $stub = sub {
        my $start = time;
        my $return = $func->(@_);
        my $end = time;
        my $elapsed = $end - $start;
        $calls{$name} += 1;
        $time{$name}  += $elapsed;

        return $return;
    };

    return $stub;
}

my $binary_func_ref   = \&binary;
my $binary_with_cache_func_ref = \&binary_with_cache;
my $prof_plain  = profile($binary_func_ref, "binary");
my $prof_cached = profile($binary_with_cache_func_ref, "binary_with_cache");

$prof_plain->(12255);
$prof_plain->(1225895);
$prof_plain->(895342);
$prof_plain->(995231);
$prof_plain->(7225895);
$prof_plain->(7225895123);
$prof_plain->(7225895123);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(12389120387012732343242342342343243324);
$prof_plain->(12389120387012732343242342342343243324);
$prof_plain->(12389120387012732343242342342343243324);
$prof_plain->(1239187372810371289073231231123123);
$prof_plain->(8991231902309809123123120312798213);

$prof_cached->(12255);
$prof_cached->(1225895);
$prof_cached->(895342);
$prof_cached->(995231);
$prof_plain->(7225895);
$prof_plain->(7225895123);
$prof_plain->(7225895123);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(1289123671230879123423423423234234223423422342342);
$prof_plain->(12389120387012732343242342342343243324);
$prof_plain->(12389120387012732343242342342343243324);
$prof_plain->(12389120387012732343242342342343243324);
$prof_plain->(1239187372810371289073231231123123);
$prof_plain->(8991231902309809123123120312798213);


END {
    printf STDERR "%-12s %9s %6s\n", "Function", "# calls", "Elapsed";
    for my $name (sort {$time{$b} <=> $time{$a}} (keys %time)) {
        printf STDERR "%-12s %9d %6.6f\n", $name, $calls{$name}, $time{$name};
    }
}
