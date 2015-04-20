#!/usr/bin/env perl

use strict;
use warnings;

# print to stdout N lines of text with N number of chars
# usage: ./blahblah.pl 100 80

my @set = (' 'x5, 'A' .. 'Z', 'a' .. 'z', 0 .. 9, "'", (split //, '-_+={}[]|:;"\/<>,.?$') );
my $n = $ARGV[0];
my $w = $ARGV[1] || 80;
# print to stdout n number of lines with random characters
for (1..$n) {
        my $line = '';
        for(1..$w) {
            $line .= $set[rand(scalar @set)];
        }
        print $line, "\n";
        
}
