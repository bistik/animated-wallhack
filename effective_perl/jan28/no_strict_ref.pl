use strict 'refs';
use feature qw(say);

$name = 'foo';

@{$name} = qw(foo bar egg); # cannot use string 'foo'...

say "@foo";
