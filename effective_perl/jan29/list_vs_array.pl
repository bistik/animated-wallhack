my $e = qw( foo bar egg );
my @e = qw( foo bar egg );
my $n = @e;
my $c = () = qw(foo bar egg);

print "\$e: $e\n";
print "\@e: @e\n";
print "\$n = \@e: $n\n";
print "\$c = () = qw(foo bar egg): $c\n";
