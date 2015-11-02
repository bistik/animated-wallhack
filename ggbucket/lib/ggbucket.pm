package ggbucket;
use Dancer2;

our $VERSION = '0.1';

get '/' => sub {
    template 'index';
};

get '/hello/:name' => sub {
    return "Hi there " . params->{name};
};

true;
