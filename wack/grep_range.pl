#!/usr/bin/env perl

use Getopt::Std;
use Term::ANSIColor qw(:constants);

main();

sub main {
    my %opt;
    getopts('qn', \%opt);

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

    open my $fh, $file_to_grep or die "Can't open $file_to_grep: $!";

    my $is_grabbing = 0;
    my $line_num = 0;

    while (my $line = <$fh>) {

        $line_num++ if $opt{n};

        if ($line =~ /(?<start>$start)/ and !$is_grabbing) {
                $is_grabbing = 1;
                print YELLOW, $line_num, "\t", RESET if $opt{n};
                print_colored_match($line, $+{start}, $line_num);
                next;
        }

        if ($is_grabbing) {
            print YELLOW, $line_num, "\t", RESET if $opt{n};
            if ($line =~ /(?<end>$end)/) {
                print_colored_match($line, $+{end}, $line_num);
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

sub usage {
    print BOLD, GREEN, "\nUsage: ./$0 file start end", RESET;
    print "\n   file: file to grep";
    print "\n  start: pattern to mark start of search";
    print "\n    end: pattern to mark end of search\n";
}
