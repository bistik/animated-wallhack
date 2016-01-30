my @a = qw(dog cat frog mouse);
print "@a";

# swap dog and mouse
@a[0, -1] = @a[-1, 0];
print "@a";

my %zoo = (
  cage => 'lion',
  aquarium => 'turtle'
);
print %zoo;

# put lion in aquarium and turtle in cage
@zoo{'cage', 'aquarium'} = @zoo{'aquarium', 'cage'};
print %zoo;
