#!/usr/bin/perl
use strict;
use warnings;

# ======== constants ========

my $page_per_line=7;

# ======== config ========

#my $msch="shab";
#my $masechet="shabbos";
#my $masechet_title="Shabbos";

#my $msch="eru";
#my $masechet="eruvin";
#my $masechet_title="Eruvin";

#my $msch="rh";
#my $masechet="rhashanah";
#my $masechet_title="Rosh Hashanah";

#my $msch="tan";
#my $masechet="taanis";
#my $masechet_title="Ta'anis";

#my $msch="meg";
#my $masechet="megilah";
#my $masechet_title="Megilah";

#my $msch="mk";
#my $masechet="mkatan";
#my $masechet_title="Moed Katan";

#my $msch="chag";
#my $masechet="chagigah";
#my $masechet_title="Chagigah";

#my $msch="yev";
#my $masechet="yevamos";
#my $masechet_title="Yevamos";

#my $msch="kes";
#my $masechet="kesuvos";
#my $masechet_title="Kesuvos";

#my $msch="ned";
#my $masechet="nedarim";
#my $masechet_title="Nedarim";

#my $msch="naz";
#my $masechet="nazir";
#my $masechet_title="Nazir";

#my $msch="sot";
#my $masechet="sotah";
#my $masechet_title="Sotah";

#my $msch="git";
#my $masechet="gitin";
#my $masechet_title="Gitin";

#my $msch="kid";
#my $masechet="kidushin";
#my $masechet_title="Kidushin";

#my $msch="bk";
#my $masechet="bkama";
#my $masechet_title="Bava Kama";

#my $msch="bm";
#my $masechet="bmetzia";
#my $masechet_title="Bava Metzia";

#my $msch="bb";
#my $masechet="bbasra";
#my $masechet_title="Bava Basra";

#my $msch="san";
#my $masechet="sanhedrin";
#my $masechet_title="Sanhedrin";

#my $msch="mak";
#my $masechet="makos";
#my $masechet_title="Makos";

#my $msch="shev";
#my $masechet="shevuos";
#my $masechet_title="Shevuos";

#my $msch="az";
#my $masechet="azarah";
#my $masechet_title="Avodah Zarah";

#my $msch="hor";
#my $masechet="horayos";
#my $masechet_title="Horayos";



#my $msch="bech";
#my $masechet="bechoros";
#my $masechet_title="Bechoros";

my $msch="erch";
my $masechet="erchin";
my $masechet_title="Erchin";

my $msch="tem";
my $masechet="temurah";
my $masechet_title="Temurah";

my $msch="ker";
my $masechet="kerisus";
my $masechet_title="Kerisus";

my $msch="mei";
my $masechet="meilah";
my $masechet_title="Me'ilah";

#my $msch="kin";
#my $masechet="kinim";
#my $masechet_title="Kinim";

#my $msch="tmd";
#my $masechet="tamid";
#my $masechet_title="Tamid";

#my $msch="mid";
#my $masechet="midos";
#my $masechet_title="Midos";

#my $msch="nid";
#my $masechet="nidah";
#my $masechet_title="Nidah";

#my $msch="zev";
#my $masechet="zevachim";
#my $masechet_title="Zevachim";

#my $msch="men";
#my $masechet="menachos";
#my $masechet_title="Menachos";

#my $msch="chul";
#my $masechet="chulin";
#my $masechet_title="Chulin";

#Peszáchim, Sekálim, Jomá, Szuká, Bécá

#my $msch="pes";
#my $masechet="pesachim";
#my $masechet_title="Pesachim";

#my $msch="shkl";
#my $masechet="shekalim";
#my $masechet_title="Shekalim";

#my $msch="yom";
#my $masechet="yoma";
#my $masechet_title="Yoma";

#my $msch="suk";
#my $masechet="sukah";
#my $masechet_title="Sukah";

#my $msch="btz";
#my $masechet="beitzah";
#my $masechet_title="Beitzah";



# ======== initialize ========

my @ls=split/\n/, `ls ../www/masechet/$masechet`;
my $last_page=(scalar @ls)+1;

my $prefix=substr($ls[0],0,2);

print "function $msch"."_page_link (num) {\n".
	"\tmasechet=\"$masechet/$prefix\";\n".
	"\tmasechet_show=\"$masechet_title\";\n".
	"\tmasechet_size=$last_page;\n\n".
	"\tpage_link(num);\n".
	"}\n\n";

my $lines=int(($last_page-1)/$page_per_line);
my $generated=$lines*$page_per_line;
my $remains=$last_page-1-$generated;

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

for my $line (1..$lines) {
	#print OUT "<p>\n".
	print OUT "<div class=\"buttons-group row pages-menu\">\n";
	#	"<div class=\"buttons-group full\">\n";
	
	for (1..3) {
		print OUT menu_button("green", $page++).
			menu_button("green-200", $page++);
	}

	print OUT menu_button("green", $page++).
		"</div>\n<br />\n";
		#"</div>\n</p>\n";
}

# ======== last line ========

print OUT "<p>\n".
	"<div class=\"buttons-group row pages-menu\">\n";
#	"<div class=\"buttons-group full\">\n";

my $pairs=int($remains/2);
my $last=$remains % 2;
my $white=$page_per_line;

for (1..$pairs) {
	print OUT menu_button("green", $page++).
		menu_button("green-200", $page++);
	
	$white-=2;
}

if ($last == 1) {
	print OUT menu_button("green", $page++);
	$white--;
}

for (1..$white) {
#	print OUT "<button class=\"white\"></button>\n";
	print OUT "<div class=\"col\"><button class=\"white border-white radius\"></button></div>\n";
}

#print OUT "</div>\n</p>\n".
print OUT "</div>\n\n".
	"</div>\n</div>";
close OUT;

# ======== functions ========

sub menu_button {
	my ($class, $page)=@_;
	#return "<button class=\"$class\" onclick=\"$msch"."_page_link($page)\">$page</button>\n";
	return "<div class=\"col\"><button class=\"$class border-teal radius\" onclick=\"$msch"."_page_link($page)\">$page</button></div>\n";
}

