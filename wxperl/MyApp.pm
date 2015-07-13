package MyApp;

use MyFrame;
use base 'Wx::App';

sub OnInit {
    my $frame = MyFrame->new;

    $frame->Show(1);

    return 1;
}

1;
