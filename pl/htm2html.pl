#!/usr/bin/perl
use strict;
use warnings;

use Data::Dumper;

my $maindir="../www/masechet";

my @ls=split/\n/, `ls $maindir/`;

for my $dir (@ls) {
	`rm $maindir/$dir/*.html`;
	my @files=split/\n/, `ls $maindir/$dir/*.htm`;

	for my $file (@files) {
		my $cmd="mv $file $file"."l";
		`$cmd`;
	}
}