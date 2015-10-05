#!/usr/bin/env perl
use strict;
use warnings;

use LWP::Simple;
use HTML::TableExtract;
use Data::Dumper;

my $te = HTML::TableExtract->new( 
            headers => ["Item",
                        "", # name, added cause of colspan=2 
                        "Advantage", 
                        "Win Rate", 
                        "Matches"],
            strip_html_on_match => 1,
            debug => 1
        );

my $cache_file   = get_cache_filename("heroes");
my $heroes_cache = read_from_cache($cache_file);

my $hero_list_page;

if ($heroes_cache) {
    $hero_list_page = $heroes_cache;
} else {
    $hero_list_page = get("http://www.dotabuff.com/heroes");
    write_to_cache($hero_list_page, $cache_file);
}

if ($hero_list_page =~ /(<div class="hero-grid">.*?<p class="footnote">.*?<\/div>)/s ) {
    $hero_list_page = $1;
}

my (@heroes) = $hero_list_page =~ /<div class="name">(.*?)<\/div>/g;

foreach my $h (@heroes[8..9]) {
    $h =~ s/\s/-/g;
    $h = lc $h;
    my $hero_page = get("http://www.dotabuff.com/heroes/$h");
    $te->parse($hero_page);
    foreach my $ts ($te->tables) {
        foreach my $row ($ts->rows) {
            foreach my $cell (@$row[1..4]) {
                print Dumper($cell);
            }
        }
    }
}
print "@heroes";

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


sub get_cache_filename {
    my $cache_type = shift;

    my ($mday, $mon, $year) = (localtime())[3..5];
    $mon++;
    $mon  = "0$mon"  if $mon < 10;
    $mday = "0$mday" if $mday < 10;
    $year += 1900;

    return $cache_type . $year . $mon . $mday;
}

sub write_to_cache {
    my ($page, $filename) = @_;

    unless (-e $filename) {
        open my $fh, ">", $filename or die "cannot write to cache: $!";
        print $fh, $page;
    }

}

sub read_from_cache {
    my $filename = shift;

    return 0 unless (-e $filename);

    open my $fh, '<', $filename or die "cannot read from cache: $!";
    $/ = undef; # slurp
    my $cache = <$fh>;
    close $fh;

    return $cache;
}
