#!/usr/bin/env perl
use strict;
use warnings;
use feature 'say';

use String::Tokenizer;

sub test {
    my ($str, $del, $whitespace) = @_;
    $whitespace ||= 0;

    my $tk = String::Tokenizer->new;
    $tk->tokenize($str, $del, $whitespace);
    {
        local $, = ", ";
        say @{[$tk->getTokens()]};
    }
}

test("((5 + 5) - 10)", '()', 0);
test("((5 + 5) - 10)", '()', 1);
my $vdf = <<'VDF';
"n1"
{
            "n2" "v2"
                "n3"
                    {
                                "n4"  "v4"
                                    }
}
VDF

test($vdf, '{}', 0);
