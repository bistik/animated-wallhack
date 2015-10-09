use strict;
use warnings;

use Test::More;

use FindBin;
use lib "$FindBin::Bin/../";

plan tests => 10;

eval "use YaspPage";

ok !$@, "loading YaspPage" or BAIL_OUT "Cannot use YaspPage";

can_ok 'YaspPage', 'new' or BAIL_OUT "Missing sub new";
can_ok 'YaspPage', '_url' or BAIL_OUT "Missing sub _url";
can_ok 'YaspPage', '_write_to_cache' or BAIL_OUT "Missing sub _write_to_cache";
can_ok 'YaspPage', '_read_from_cache' or BAIL_OUT "Missing sub _read_from_cache";
can_ok 'YaspPage', '_get_cache_filename' or BAIL_OUT "Missing sub _get_cache_filename";
can_ok 'YaspPage', '_get_date_hour' or BAIL_OUT "Missing sub _get_date_hour";
can_ok 'YaspPage', 'get_page' or BAIL_OUT "Missing sub get_page";

my $yp = YaspPage->new( 206772858 );

is $yp->_url, 'http://yasp.co/players/206772858', 'Id matches _url';
my ($hour, $mday, $mon, $year) = (localtime())[2..5];
$mon++;
$mon  = "0$mon"  if $mon < 10;
$mday = "0$mday" if $mday < 10;
$year += 1900;
is $yp->_get_cache_filename(), $yp->{id} . "_$year$mon$mday$hour", 'filename matches <ID_DATE> format';

$yp->get_page;
