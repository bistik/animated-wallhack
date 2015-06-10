#!/usr/bin/env perl
use strict;
use warnings;
use feature 'say';

say "I have @{[1 + 1]} eggs";
say "5 monkeys need @{[give_me_banana(5)]}";

sub give_me_banana {
   ("banana") x $_[0];
}
