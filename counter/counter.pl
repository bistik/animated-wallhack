#!/usr/bin/env perl
use strict;
use warnings;

my @draft = @ARGV;

my %counter = (
    'cm', [qw(am hus)],
    'am', [qw(riki lc)],
);

foreach my $h (@draft) {
        if (exists($counter{$h})) {
                print "$h : @{$counter{$h}}\n";
        }
}
