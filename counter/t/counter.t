use strict;
use warnings;

use FindBin;

use Test::More;

use lib "$FindBin::Bin/../";

eval "use BuffPage";

ok !$@, "Cannot load BUffPage" or BAIL_OUT "Cannot 'use BuffPage'";

my $bp;

$bp = BuffPage->new( type => 'list' );

is $bp->_url, "http://www.dotabuff.com/heroes", "correct list url";

$bp = BuffPage->new( type => 'items', hero => 'lion' );

is $bp->_url, "http://www.dotabuff.com/heroes/lion", "correct hero/items url";

$bp = BuffPage->new( type => 'hero', hero => 'lion' );

is $bp->_url, "http://www.dotabuff.com/heroes/lion", "correct hero/items url";

plan tests => 4;
