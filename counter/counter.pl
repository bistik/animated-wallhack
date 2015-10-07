#!/usr/bin/env perl
use strict;
use warnings;

use LWP::Simple;
use HTML::TableExtract;

my $DEBUG = 1;

counter_counter();

# MAIN
sub counter_counter {
    my @indexes = get_picks(@ARGV);
    my @heroes  = get_heroes();

    foreach my $hero (@heroes[@indexes]) {
        $hero =~ s/\s/-/g;
        $hero =~ s/'//g; # nature's prophet
        $hero = lc $hero;
        print "\n" . "*" x 60 . "\n";
        get_best_worst($hero);
        print "\n";
        get_items($hero);
    }
}

sub get_items {
    my $hero = shift;    
    my $cache_file  = get_cache_filename("items$hero");
    my $items_cache = read_from_cache($cache_file);
    my $items_page;

    if ($items_cache) {
        $items_page = $items_cache;
    } else {
        $items_page = get("http://www.dotabuff.com/heroes/$hero");
        write_to_cache($items_page, $cache_file);
    }
    my $te = HTML::TableExtract->new( 
        headers => ["Item",
            "", # name, added cause of colspan=2 
            "Matches", 
            "Wins", 
            "Win Rate"],
        strip_html_on_match => 1
    );
    $te->parse($items_page);

    foreach my $ts ($te->tables) {
        printf "%-10.10s\t%-10.10s\t%-10.10s\t%-10.10s\n", "-ITEM-", "-MATCHES-", "-WINS-", "-WIN RATE-";
        foreach my $row ($ts->rows) {
            foreach my $cell (@$row[1..4]) {
                printf "%-10.10s\t", $cell;
            }
            print "\n";
        }
    }
}

sub get_best_worst {
    my $hero = shift;
    my @table_headings = ("Best Versus", "Worst Versus");
    my $cache_file = get_cache_filename($hero);
    my $hero_cache = read_from_cache($cache_file);
    my $hero_page;

    if ($hero_cache) {
        $hero_page = $hero_cache;
    } else {
        $hero_page = get("http://www.dotabuff.com/heroes/$hero");
        write_to_cache($hero_page, $cache_file);
    }
    my $te = HTML::TableExtract->new( 
        headers => ["Item",
                "", # name, added cause of colspan=2 
                "Advantage", 
                "Win Rate", 
                "Matches"],
        strip_html_on_match => 1
    );
    $te->parse($hero_page);
    
    print "$hero\n";

    foreach my $ts ($te->tables) {
        print "\n" . $table_headings[0] . "\n";
        shift @table_headings if @table_headings;
        printf "%-10.10s\t%-10.10s\t%-10.10s\t%-10.10s\n", "Hero", "Advantage", "Win Rate", "Matches";
        foreach my $row ($ts->rows) {
            foreach my $cell (@$row[1..4]) {
                printf "%-10.10s\t", $cell;
            }
            print "\n";
        }
    }
}

sub get_heroes {
    my $cache_file   = get_cache_filename("heroes");
    my $heroes_cache = read_from_cache($cache_file);

    my $hero_list_page;

    if ($heroes_cache) {
        $hero_list_page = $heroes_cache;
    } else {
        $hero_list_page = get("http://www.dotabuff.com/heroes");
        write_to_cache($hero_list_page, $cache_file);
    }

    if ($hero_list_page =~ /(<div class="hero-grid">.*?<p class="footnote">.*?<\/div>)/s ) {
        $hero_list_page = $1;
    }

    my (@heroes) = $hero_list_page =~ /<div class="name">(.*?)<\/div>/g;

    return @heroes;
}

sub get_picks {
    my @indexes;
    my @aliases = (
    'aba abaddon artas arthas',
    'alch alchemist alch',
    'aa ancient apparition',
    'am antimage anti-mage anti mage magina',
    'axe mogul khan',
    'bane',
    'bat batrider bat rider bat-rider',
    'beast beastmaster beast master bm rexxar',
    'blood seeker bloodseeker blood-seeker bs strygwyr',
    'bounty bountyhunter bounty hunter bh gondar',
    'brew brewmaster brew master panda brew-master mangix pandaren',
    'bristle bristleback bristle back bristle-back bb rigwarl',
    'brood broodmother broodmama',
    'centaur warrunner cw centaur-warrunner bradwarden',
    'chaos knight ck chaos-knight',
    'chen',
    'clinkz bone fletcher',
    'clock clockwerk rattletrap clock-werk werk',
    'cm maiden crystal maiden',
    'dark seer darkseer dark-seer',
    'dazzle',
    'death prophet dp death-prophet krobelus',
    'disruptor',
    'doom lucifer',
    'dragon knight dragon-knight davion dragonknight',
    'drow ranger drow-ranger drowranger traxex',
    'earth spirit earth-spirit',
    'earthshaker earth-shaker shaker raigor',
    'elder titan elder-titan eldertitan et',
    'ember spirit ember-spirit emberspirit',
    'enchantress',
    'enigma',
    'faceless-void faceless void',
    'gyro gyrocopter gyro-copter',
    'huskar',
    'invoker kael',
    'io wisp',
    'jakiro twin-head twin head',
    'jugg juggernaut jugger yurnero',
    'keeper-of-the-light kotl gandalf keeper of the light ezalor',
    'kunkka',
    'legion-commander legion lc',
    'leshrac',
    'lich lich-king',
    'lifestealer ls naix',
    'lina lina inverse slayer',
    'lion demon-witch demon witch',
    'lone druid lone-druid syllabear',
    'luna moonfang moon-rider moonrider',
    'lycan lycanthrope',
    'magnus magnataur',
    'medusa gorgon',
    'meepo geomancer',
    'mirana potm',
    'morphling morph',
    'naga siren naga-siren slithice',
    'natures prophet natures-prophet np furion',
    'necro necrophos',
    'nightstalker night-stalker ns stalker balanar',
    'nyx-assassin nyx',
    'ogre ogre-magi magi aggron',
    'omniknight omni',
    'oracle',
    'od outworld devourer outworld-devourer',
    'pa phantom assassin phantom-assassin mortred',
    'phantom lancer pl cancer phantom-lancer',
    'phoenix',
    'puck fairy-dragon fairy dragon',
    'pudge hook',
    'pugna',
    'qp qop queen of pain queen-of-pain',
    'razor',
    'riki rikimaru',
    'rubick',
    'sand king sand-king sk',
    'shadow demon shadow-demon',
    'shadow fiend sf shadow-fiend',
    'shadow shaman shadow-shaman',
    'silencer nortrom',
    'skywrath mage skywrath-mage',
    'slardar',
    'slark',
    'sniper kardel',
    'spectre spec',
    'spirit breaker spirit-breaker barathrum sb',
    'storm storm-spirit',
    'sven rogue-knight rogue knight',
    'techies',
    'ta templar assassin templar-assassin',
    'terrorblade tb',
    'tidehunter tide-hunter tide hunter',
    'timbersaw timber timber-saw',
    'tinker',
    'tiny',
    'treant protector treant-protector',
    'troll warlord troll-warlord', 
    'tusk',
    'undying',
    'ursa',
    'venge vengeful-spirit vengeful',
    'veno venomancer',
    'viper',
    'visage',
    'warlock',
    'weaver',
    'windranger windrunner wind-runner',
    'winter-wyvern winter wyvern',
    'witch-doctor witch doctor',
    'wraith king skeleton king leoric wk wraith-king skeleton-king',
    'zeus',
    );

    foreach my $pick (@_) {
        push @indexes, grep { $aliases[$_] =~ /\b$pick\b/ } 0..$#aliases;
    }

    print "PICKS: @_\n" if $DEBUG;
    print "INDEX: " . join '---', @aliases[@indexes] if $DEBUG;

    return @indexes;
}

sub get_cache_filename {
    my $cache_type = shift;

    my ($mday, $mon, $year) = (localtime())[3..5];
    $mon++;
    $mon  = "0$mon"  if $mon < 10;
    $mday = "0$mday" if $mday < 10;
    $year += 1900;

    return $cache_type . $year . $mon . $mday;
}

sub write_to_cache {
    my ($page, $filename) = @_;

    unless (-e $filename) {
        open my $fh, ">", $filename or die "cannot write to cache: $!";
        print $fh $page;
        close $fh;
    }

}

sub read_from_cache {
    my $filename = shift;

    return 0 unless (-e $filename);

    open my $fh, '<', $filename or die "cannot read from cache: $!";
    $/ = undef; # slurp
    my $cache = <$fh>;
    close $fh;

    return $cache;
}
