#!/usr/bin/env perl

use Term::ANSIColor;

main();

sub main {
    my $file_to_grep = @ARGV[0];
    my $start = quotemeta $ARGV[1];
    my $end = quotemeta $ARGV[2];

    unless ($file_to_grep) {
        usage();
        exit 0;
    }

    unless ($start or $end) {
        usage();
        exit 0;
    }

    open my $fh, $file_to_grep or die "Can't open $file_to_grep: $!";

    my ($out, $is_grabbing) = ('', 0);

    while (my $line = <$fh>) {
        if ($line =~ /$start/ and !$is_grabbing) {
                $is_grabbing = 1;
                $out .= $line;
                next;
        }

        $out .= $line if $is_grabbing;

        last if $line =~ /$end/ and $is_grabbing;
    }

    print $out;
}

sub usage {
    print "\nUsage: ./$0 file start end";
    print "\n   file: file to grep";
    print "\n  start: pattern to mark start of search";
    print "\n    end: pattern to mark end of search\n";
}
