use Data::Dumper;

sub init {
        my $i = shift;
$list = $i;

push @{$list}, 1 .. 4;


print Dumper $list;
}

init(undef);
init([]);

%h = qw(a bar);
# h{b} and h{b}{z} were magically created by perl
$h{b}{z}{x} = 'foo';

print Dumper \%h;
