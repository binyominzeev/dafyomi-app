#!/usr/bin/perl
use strict;
use warnings;

# ======== config ========

my @masechet=qw/azarah bbasra bechoros beitzah berachos bkama bmetzia chagigah chulin erchin eruvin gitin horayos kerisus kesuvos kidushin kinim makos megilah meilah menachos midos mkatan nazir nedarim nidah pesachim rhashanah sanhedrin shabbos shekalim shevuos sotah sukah taanis tamid temurah yevamos yoma zevachim/;

my @msch=qw/az bb bech btz ber bk bm chag chul erch eru git hor ker kes kid kin mak meg mei men mid mk naz ned nid pes rh san shab shkl shev sot suk tan tmd tem yev yom zev/;

my @masechet_title=qw/Avodah_Zarah Bava_Basra Bechoros Beitzah Berachos Bava_Kama Bava_Metzia Chagigah Chulin Erchin Eruvin Gitin Horayos Kerisus Kesuvos Kidushin Kinim Makos Megilah Me'ilah Menachos Midos Moed_Katan Nazir Nedarim Nidah Pesachim Rosh_Hashanah Sanhedrin Shabbos Shekalim Shevuos Sotah Sukah Ta'anis Tamid Temurah Yevamos Yoma Zevachim/;

#my $msch="ber";
#my $masechet="berachos";
#my $masechet_title="Berachos";

# ======== initialize ========

my $msch="";

open SCR, ">script.js";

for my $i (0..$#masechet) {
	my $masechet=$masechet[$i];
	$msch=$msch[$i];
	my $masechet_title=$masechet_title[$i];
	
	$masechet_title=~s/_/ /;

	my @ls=split/\n/, `ls ../www/masechet/$masechet`;
	my $last_page=(scalar @ls)+1;

	my $prefix=substr($ls[0],0,2);

	print SCR "function $msch"."_page_link (num) {\n".
		"\tmasechet=\"$masechet/$prefix\";\n".
		"\tmasechet_show=\"$masechet_title\";\n".
		"\tmasechet_size=$last_page;\n\n".
		"\tpage_link(num);\n".
		"}\n\n";

	$last_page--;
	my $pairs=int($last_page/2);
	my $remains=$last_page-$pairs*2;

	# ======== main lines ========

	open OUT, ">../www/$masechet.html";

	print OUT "<div class=\"page\">\n".
		"<div class=\"header blue\">\n".
		"<div class=\"left\">\n".
		"<button class=\"icon ion-ios-arrow-back\" onclick=\"backPage()\"></button>\n".
		"</div>\n".
		"<h1 class=\"title align-center\">$masechet_title</h1>\n".
		"</div>\n\n".
		"<div class=\"content has-header\">\n\n<br />";

	my $page=2;

	print OUT "<div class=\"buttons-group pages-menu\">\n";

	for (1..$pairs) {
		print OUT menu_button("green", $page++).
			menu_button("green-200", $page++);
	}

	for (1..$remains) {
		print OUT menu_button("green", $page++);
	}

	print OUT "</div>\n\n".
		"</div>\n</div>";
	close OUT;
}

close SCR;

# ======== functions ========

sub menu_button {
	my ($class, $page)=@_;
	return "<div class=\"page-but\"><button class=\"$class border-teal radius\" onclick=\"$msch"."_page_link($page)\">$page</button></div>\n";
}

