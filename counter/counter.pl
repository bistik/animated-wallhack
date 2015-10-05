#!/usr/bin/env perl
use strict;
use warnings;

use LWP::Simple;

my $hero_list_page = get("http://www.dotabuff.com/heroes");
if ($hero_list_page =~ /(<div class="hero-grid">.*?<p class="footnote">.*?<\/div>)/s ) {
    $hero_list_page = $1;
}

print $hero_list_page;

my @draft = @ARGV;

my %counter = (
    'cm', [qw(am hus)],
    'am', [qw(riki lc)],
    'pl', [qw(es lc)],
    'pudge', [qw(ls necro)],
    'riki', [qw(bh slardar)],
);

foreach my $h (@draft) {
    if (exists($counter{$h})) {
        print "$h : @{$counter{$h}}\n";
    }
}
