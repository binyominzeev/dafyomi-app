#!/usr/bin/perl
use strict;
use warnings;

use Data::Dumper;

# ========= parameters =========

my $datedir="20190318";

# ========= initialize =========

my $basedir="dafyomi.co.il"; # 2019-03-03 (kb. 2 hete)
my @dirs=qw/azarah bbasra bechoros beitzah berachos bkama bmetzia chagigah chulin erchin eruvin gitin horayos kerisus kesuvos kidushin kinim makos megilah meilah menachos midos mkatan nazir nedarim nidah pesachim rhashanah sanhedrin shabbos shekalim shevuos sotah sukah taanis tamid temurah yevamos yoma zevachim/;

# ========= process =========

for my $subdir (@dirs) {
	my @filenames=split/\n/, `ls -la $basedir/$subdir/points | tr -s ' ' | cut -d" " -f9`;

	my $orig_sizes=`ls -la $basedir/$subdir/points | tr -s ' ' | cut -d" " -f5`;
	my $fresh_sizes=`ls -la $datedir/$subdir/ | tr -s ' ' | cut -d" " -f5`;
	
	if ($orig_sizes ne $fresh_sizes) {
		print "DIFF: $subdir\n";
	}

	my @orig_sizes=split/\n/, `ls -la $basedir/$subdir/points | tr -s ' ' | cut -d" " -f5`;
	my @fresh_sizes=split/\n/, `ls -la $datedir/$subdir/ | tr -s ' ' | cut -d" " -f5`;
	
	if (scalar @fresh_sizes == scalar @orig_sizes) {
		for my $i (0..$#filenames) {
			if ($orig_sizes[$i] ne $fresh_sizes[$i]) {
				my $filename=$filenames[$i];

				my $diff_cmd="diff $basedir/$subdir/points/$filename $datedir/$subdir/$filename";
				my $diff=`$diff_cmd`;

				print "$filename\n$diff\n";
			}
		}
	}
}
