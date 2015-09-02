#!/usr/bin/perl

use strict;
use warnings;

my ($hp, $armor) = @ARGV;
die "missing hp arg" unless $hp;
die "missing armore arg" unless $armor;
my $ehp = $hp * (1 + $armor * 0.06);

print "\nEHP : $ehp\n";
