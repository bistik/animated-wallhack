#!/usr/bin/env perl

package main;

my $app = HelloWorld->new;
$app->MainLoop;

package HelloWorld;
use Wx;
use base 'Wx::App';

# OnInit is called automatically thru Wx::App
sub OnInit {
    my ($self) = @_;

    my $frame = Wx::Frame->new(
        undef,          # parent window
        -1,             # ID, -1 means any
        'Hello World',  # title
        [-1, -1],       # default position (top left?)
        [250, 150],     # size
    );

    $frame->Show(1);

    return 1; # must return a true value
}

