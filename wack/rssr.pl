#!/usr/bin/env perl
use strict;
use warnings;

use feature 'say';
use LWP::UserAgent;
use XML::RSS;
use Data::Dumper;

my $ua = LWP::UserAgent->new;
my @uris = qw(
http://reddit.com/r/perl/.rss
http://reddit.com/r/nba/.rss
http://reddit.com/r/racket/.rss
http://www.spin.ph/rss
https://news.ycombinator.com/rss
);

binmode STDOUT, ":encoding(UTF-8)";

foreach my $uri (@uris) {
    say "[$uri]";
    my $response = $ua->get($uri);

    if ($response->is_success) {
        my $rss = XML::RSS->new;
        $rss->parse($response->decoded_content);
        while (my $item = shift @{$rss->{'items'}}) {
            #say join ", ", keys $item;
            say $item->{title}, "\n";
            say $item->{link}, "\n";
        }
    } else {
        print $response->status_line;
    }
}
