package MyFrame;

use Wx;
use Wx::Event qw(EVT_BUTTON);
use base 'Wx::Frame';

sub new {
    my $ref = shift;
    my $self = $ref->SUPER::new(
            undef,
            -1,
            'MyFrame',
            [-1, -1],
            [150, 100],
    );
                                
    my $panel = Wx::Panel->new($self, -1);

    my $button = Wx::Button->new(
            $panel,
            -1,
            'Click Me!',
            [30, 20],
            [-1, -1],
    );

    return $self;
}

1;
