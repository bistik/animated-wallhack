while (<STDIN>) {
last if /__END__/;
print $_;
}
