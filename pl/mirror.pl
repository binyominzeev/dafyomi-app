#!/usr/bin/perl
use strict;
use warnings;

use Data::Dumper;

# ========= parameters =========

my $datedir="20190318";

# ========= initialize =========

my $basedir="dafyomi.co.il";
my @dirs=qw/azarah bbasra bechoros beitzah berachos bkama bmetzia chagigah chulin erchin eruvin gitin horayos kerisus kesuvos kidushin kinim makos megilah meilah menachos midos mkatan nazir nedarim nidah pesachim rhashanah sanhedrin shabbos shekalim shevuos sotah sukah taanis tamid temurah yevamos yoma zevachim/;

# ========= process =========

for my $subdir (@dirs) {
	my $dir="$basedir/$subdir/points";
	my @ls=split/\n/, `ls "$dir"`;
		
	for my $file (@ls) {
		my $cmd="wget -P \"$datedir/$subdir\" \"http://$dir/$file\"";
		`$cmd`;
	}
}
