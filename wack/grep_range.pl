#!/usr/bin/env perl

use strict;
use warnings;
use Getopt::Std;
use autodie;
use English qw( -no_match_vars );
use Term::ANSIColor qw(:constants);

main();

sub main {
    my %opt;
    getopts('qni', \%opt);

    my $file_to_grep = $ARGV[0];
    my $start = $ARGV[1];
    my $end = $ARGV[2];
    if($opt{q}) {
        $start = quotemeta $start;
        $end = quotemeta $end;
    }

    unless ($file_to_grep) {
        usage();
        exit 0;
    }

    unless ($start or $end) {
        usage();
        exit 0;
    }

    open my $fh, '<', $file_to_grep;

    my $is_grabbing = 0;
    my $line_num = 0;

    while (my $line = <$fh>) {

        $line_num++ if $opt{n};

        unless ($is_grabbing) {
            # we haven't found start match
            my $match_start = grep_line( $line, $start, $opt{i});
            if ($match_start) {
                $is_grabbing = 1;
                print YELLOW, $line_num, "\t", RESET if $opt{n};
                print_colored_match($line, $match_start, $line_num);
                next;
            }
        } else {
            # grab text until we find end match
            print YELLOW, $line_num, "\t", RESET if $opt{n};
            my $match_end = grep_line( $line, $end, $opt{i});
            if ($match_end) {
                print_colored_match($line, $match_end, $line_num);
                last;
            } else {
                print $line;
            }
        }
    }
}

sub print_colored_match {
    my ($line, $match, $line_num) = @_;
    my ($start, $end) = split /$match/, $line, 2;

    print $start;
    print BOLD, GREEN, $match, RESET;
    print $end;
}

sub grep_line {
    my ($line, $pattern, $not_case_sensitive) = @_;
    if($not_case_sensitive) {
        if ($line =~ /(?<match>$pattern)/i) {
                return $LAST_PAREN_MATCH{match};
        }
    } else {
        if ($line =~ /(?<match>$pattern)/) {
                return $LAST_PAREN_MATCH{match};
        }
    }
    return 0;
}

sub usage {
    print BOLD, GREEN, "\nUsage: ./$0 file start end", RESET;
    print "\n   file: file to grep";
    print "\n  start: pattern to mark start of search";
    print "\n    end: pattern to mark end of search";
    print BOLD, GREEN, "\n\nOptions", RESET;
    print "\n     -q: flag to enable escaping of regex special character. Example: '.' becomes '\\.'. This is disabled by default.";
    print "\n     -n: flag to display line numbers. Default has no line numbers.";
    print "\n     -i: flag to make patterns case-insensitive. Patterns are case-sensitive by default.";
    print "\n";
}
