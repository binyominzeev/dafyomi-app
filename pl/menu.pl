#!/usr/bin/perl
use strict;
use warnings;

my $page=100;
my $masechet="shab";

for my $line (1..9) {
	print "<p>\n".
		"<div class=\"buttons-group full\">\n";

	for (1..3) {
#		print "<button class=\"green big\" onclick=\"$masechet"."_page_link('$page', '0$page')\">$page</button>\n";
		print "<button class=\"green big\" onclick=\"$masechet"."_page_link('$page', '$page')\">$page</button>\n";
		$page++;
		
		print "<button class=\"green-200 big\" onclick=\"$masechet"."_page_link('$page', '$page')\">$page</button>\n";
		$page++;
	}

	print "<button class=\"green big\" onclick=\"$masechet"."_page_link('$page', '$page')\">$page</button>\n";
	$page++;

	print "</div>\n</p>\n";
}

