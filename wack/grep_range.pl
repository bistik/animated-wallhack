#!/usr/bin/env perl

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
        print "\nUsage:\n";
        print "\tperl $0 <file_to_grep> <start_pattern> <end_pattern>";
}
