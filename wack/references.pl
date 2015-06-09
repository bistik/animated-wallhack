#!/usr/bin/env perl

use strict;
use warnings;
use feature 'say';

my @classes = qw(ember berser outland);

sub add_class_to_ref {
    push @{$_[0]}, $_[1];
}


sub add_class_to_ref_copy {
    my ($my_ref, $class) = @_;

    push @{$my_ref}, $class;
}

sub add_class_to_ar_copy {
    my ($my_ref, $class) = @_;
    my @my_ar = @{$_[0]};

    push @my_ar, $_[1];
}

{
        local $, = ", ";
# @classes is modified inside sub
        add_class_to_ref(\@classes, "frog");
        say @classes;

# reference to @classes is copied, but still points to same array
        add_class_to_ref_copy(\@classes, "fish");
        say @classes;

# does not modify @classes
        add_class_to_ar_copy(\@classes, "snout"); 
        say @classes;
}
