use strict;
use warnings;

use Test::More;
use FindBin;
use lib "$FindBin::Bin/../";

plan tests => 1;

eval "use YaspTable";

ok !$@, "use YaspTable" or BAIL_OUT "Error calling 'use YaspTable'";

can_ok 'YaspTable', 'new' or BAIL_OUT "Error calling 'YaspTable->new'";
