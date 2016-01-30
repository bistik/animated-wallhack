use strict;

use Devel::Peek qw(Dump);

my $s = "12foobar34";

print Dump($s);

my $s2 = $s + 0;

print Dump($s2);

my $n = 5;
my $n2 = $s;

print Dump($n);
print Dump($n2);
