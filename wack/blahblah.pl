#!/usr/bin/env perl

# print to stdout N lines of text with N number of chars

use strict;
use warnings;


main();

sub usage {
    print "\nUsage: ./$0 num1 num2";
    print "\n num1: number of lines. number >= 1";
    print "\n num2: number of characters per line. number >= 1. this is optional, default value is 80";
}

sub main {
    unless ($ARGV[0]) {
        usage();
        exit 0;
    }
    my @az_set = ('A' .. 'Z', 'a' .. 'z', 0 .. 9);
    my @punc_set = (' ', "'", split //, '-_+={}[]|:;"\/<>,.?$');
    my $n = $ARGV[0];

    my $w = $ARGV[1] || 80;

# print to stdout n number of lines with random characters
    for (1..$n) {
        my $line = '';

        for(1..$w) {
            if (int(rand(100)) < 80) {
                $line .= $az_set[int(rand(scalar @az_set))];
            } else {
                $line .= $punc_set[int(rand(scalar @punc_set))];
            }
        }

        print $line, "\n";
    }
}
