#!/usr/bin/perl
use strict;
use warnings;

# ========== parameters ==========

my $from_dir="/home/bz/websites/dafyomi/20190318";
my $to_dir="/home/bz/cordova/dafyomi-app/www/masechet";

# ========== initialize ==========

#my @dirs=qw/beitzah/;
my @dirs=qw/azarah bbasra bechoros beitzah berachos bkama bmetzia chagigah chulin erchin eruvin gitin horayos kerisus kesuvos kidushin kinim makos megilah meilah menachos midos mkatan nazir nedarim nidah pesachim rhashanah sanhedrin shabbos shekalim shevuos sotah sukah taanis tamid temurah yevamos yoma zevachim/;

my $dedication_1="<p class=[\"]*dedicationbox[\"]*>";
my $dedication_1_show="<p class=\"dedicationbox\">";
my $dedication_2="<\/p>";

# ========== process ==========

for my $dir (@dirs) {
	print "$dir\n";
	
	my @files=split/\n/, `ls $from_dir/$dir/*.htm | xargs -n 1 basename`;
	
	if (! -d "$to_dir/$dir") {
		mkdir "$to_dir/$dir";
	}

	for my $filename (@files) {
		my $content=`cat $from_dir/$dir/$filename`;
		
		my $dedication="";
		if ($content =~ /$dedication_1/) {
			$dedication=$';
			$dedication=~/$dedication_2/;
			
			$dedication=$dedication_1_show.$`.$dedication_2;
		}
		
		if ($content=~/<div id="content">/) {
			$content=$';
			
			if ($content =~ /<!-- End #content -->/) {
				$content=$`;
			} else {
				$content=~/<\/div>/;
				$content=$`;
			}
		} elsif ($content=~/$dedication_1/) {
			# Currently: Kinim, Midot, Tamid
			
			$content=$';
			$content=~/$dedication_2/;
			$content=$';
			$content=~/<p class=normal>/;
			$content=$`;
			
		} else {
			print "($filename)!";
		}
		
		open OUT, ">$to_dir/$dir/$filename"."l" or die "cannot create: $to_dir/$dir/$filename";
		print OUT $dedication.$content;
		close OUT;
	}
}
