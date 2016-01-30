my %az;

@az{'a'..'z'} = 1 .. 30;
{
last;
foreach my $key (sort keys %az) {
if (defined $az{$key}) {
	print "$key : $az{$key}";
}
}
}

# swap
my %fruit_color = (
	banana => 'yellow',
	apple  => 'red',
    guava  => 'green',
);

my %animal_eat = (
	lion => 'meat',
    cow  => 'grass',
);

print_hash(\%fruit_color);

@fruit_color{keys %fruit_color} = @animal_eat{keys %animal_eat};

print_hash(\%fruit_color);

sub print_hash {
	my $hash_ref = shift;

	foreach my $k (sort keys %{$hash_ref}) {
		print "$k: $hash_ref->{$k}";
	}
}
