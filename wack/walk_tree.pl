use feature 'say';

sub walk_tree {
    my ($dir, $filefunc, $dirfunc) = @_;

    if (-d $dir) {
        $dirfunc->($dir);
        opendir my $dh, $dir or return;
        while (my $file = readdir $dh) {
            next if $file eq '.' || $file eq '..' || $file eq '.git';
            walk_tree("$dir/$file", $filefunc, $dirfunc);
        }
    } else {
        $filefunc->($dir);
    }
}

my $func_to_kb = sub {
    $_[0] * 0.001;    
};

walk_tree($ARGV[0], sub { say $func_to_kb->(-s $_[0]), " -- $_[0]" }, sub { $_[0] });
