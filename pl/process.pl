#!/usr/bin/perl
use strict;
use warnings;

my @files=split/\n/, `ls *.htm`;

for my $filename (@files) {
	my $content=`cat $filename`;
	$content=~/<div id="content">/;
	$content=$';
	
	$content=~/<\/div>/;
	$content=$`;
	
	open OUT, ">out/$filename"."l";
	print OUT $content;
	close OUT;
}
