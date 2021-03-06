Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

var current_daf=0;
var next_slide_num=3;
var first_daf=0;
var last_daf=0;

var masechet="";
var masechet_show="";
var masechet_size=0;

function ber_page_link (num) {
	masechet="berachos/br";
	masechet_show="Berachos";
	masechet_size=64;
	
	page_link(num);
}

function shab_page_link (num) {
	masechet="shabbos/sh";
	masechet_show="Shabbos";
	masechet_size=157;
	
	page_link(num);
}

function bk_page_link (num) {
	masechet="bkama/bk";
	masechet_show="Bava Kama";
	masechet_size=119;

	page_link(num);
}

function bm_page_link (num) {
	masechet="bmetzia/bm";
	masechet_show="Bava Metzia";
	masechet_size=119;

	page_link(num);
}

function bb_page_link (num) {
	masechet="bbasra/bb";
	masechet_show="Bava Basra";
	masechet_size=176;

	page_link(num);
}

function san_page_link (num) {
	masechet="sanhedrin/sn";
	masechet_show="Sanhedrin";
	masechet_size=113;

	page_link(num);
}

function mak_page_link (num) {
	masechet="makos/ma";
	masechet_show="Makos";
	masechet_size=24;

	page_link(num);
}

function shev_page_link (num) {
	masechet="shevuos/sv";
	masechet_show="Shevuos";
	masechet_size=49;

	page_link(num);
}

function az_page_link (num) {
	masechet="azarah/az";
	masechet_show="Avodah Zarah";
	masechet_size=76;

	page_link(num);
}

function hor_page_link (num) {
	masechet="horayos/ho";
	masechet_show="Horayos";
	masechet_size=14;

	page_link(num);
}

function eru_page_link (num) {
	masechet="eruvin/ev";
	masechet_show="Eruvin";
	masechet_size=105;

	page_link(num);
}

function rh_page_link (num) {
	masechet="rhashanah/rh";
	masechet_show="Rosh Hashanah";
	masechet_size=35;

	page_link(num);
}

function tan_page_link (num) {
	masechet="taanis/tn";
	masechet_show="Ta'anis";
	masechet_size=31;

	page_link(num);
}

function meg_page_link (num) {
	masechet="megilah/mg";
	masechet_show="Megilah";
	masechet_size=32;

	page_link(num);
}

function mk_page_link (num) {
	masechet="mkatan/mo";
	masechet_show="Moed Katan";
	masechet_size=29;

	page_link(num);
}

function chag_page_link (num) {
	masechet="chagigah/cg";
	masechet_show="Chagigah";
	masechet_size=27;

	page_link(num);
}

function yev_page_link (num) {
	masechet="yevamos/ye";
	masechet_show="Yevamos";
	masechet_size=122;

	page_link(num);
}

function kes_page_link (num) {
	masechet="kesuvos/ks";
	masechet_show="Kesuvos";
	masechet_size=112;

	page_link(num);
}

function ned_page_link (num) {
	masechet="nedarim/nd";
	masechet_show="Nedarim";
	masechet_size=91;

	page_link(num);
}

function naz_page_link (num) {
	masechet="nazir/nz";
	masechet_show="Nazir";
	masechet_size=66;

	page_link(num);
}

function sot_page_link (num) {
	masechet="sotah/so";
	masechet_show="Sotah";
	masechet_size=49;

	page_link(num);
}

function git_page_link (num) {
	masechet="gitin/gi";
	masechet_show="Gitin";
	masechet_size=90;

	page_link(num);
}

function kid_page_link (num) {
	masechet="kidushin/kd";
	masechet_show="Kidushin";
	masechet_size=82;

	page_link(num);
}

function bech_page_link (num) {
	masechet="bechoros/be";
	masechet_show="Bechoros";
	masechet_size=61;

	page_link(num);
}

function erch_page_link (num) {
	masechet="erchin/er";
	masechet_show="Erchin";
	masechet_size=34;

	page_link(num);
}

function tem_page_link (num) {
	masechet="temurah/tm";
	masechet_show="Temurah";
	masechet_size=34;

	page_link(num);
}

function ker_page_link (num) {
	masechet="kerisus/kr";
	masechet_show="Kerisus";
	masechet_size=28;

	page_link(num);
}

function mei_page_link (num) {
	masechet="meilah/ml";
	masechet_show="Me'ilah";
	masechet_size=22;

	page_link(num);
}

function kin_page_link (num) {
	masechet="kinim/ml";
	masechet_show="Kinim";
	masechet_size=5;

	page_link(num);
}

function tmd_page_link (num) {
	masechet="tamid/ml";
	masechet_show="Tamid";
	masechet_size=10;

	page_link(num);
}

function mid_page_link (num) {
	masechet="midos/ml";
	masechet_show="Midos";
	masechet_size=5;

	page_link(num);
}

function nid_page_link (num) {
	masechet="nidah/ni";
	masechet_show="Nidah";
	masechet_size=73;

	page_link(num);
}






function page_link (num) {
	current_daf = num;

	first_daf=current_daf-1;
	last_daf=current_daf+1;
	
	var fdp=first_daf.pad(3);
	var ldp=last_daf.pad(3);

	var padded=current_daf.pad(3);
	
	swiper.removeAllSlides();
	swiper.appendSlide([
		'<div class="swiper-slide"><div id="slide-0" class="daf-slide"></div></div>',
		'<div class="swiper-slide"><div id="slide-1" class="daf-slide"></div></div>',
		'<div class="swiper-slide"><div id="slide-2" class="daf-slide"></div></div>',
	]);
	swiper.slideTo(1, 0, false);
	
	include('slide-0', 'masechet/'+masechet+'-ps-' + fdp);
	include('slide-1', 'masechet/'+masechet+'-ps-' + padded);
	include('slide-2', 'masechet/'+masechet+'-ps-' + ldp);
				
	$('#titlebar').html('Dafyomi – '+masechet_show+' ' + current_daf);
	backPage();
}

var swiper=new Swiper('.swiper-container', {
	initialSlide: 1,
	onSlideChangeEnd: function (swiper) {
		var act = swiper.activeIndex;
		var prev= swiper.previousIndex;
		var diff=act-prev;
		
		current_daf = current_daf + diff;

		var padded=current_daf.pad(3);

		if (swiper.isBeginning && first_daf > 2) {
			swiper.prependSlide('<div class="swiper-slide"><div id="slide-'+next_slide_num+'" class="daf-slide"></div></div>');
			
			first_daf--;
			var fdp=first_daf.pad(3);
			
			include('slide-'+next_slide_num, 'masechet/'+masechet+'-ps-' + fdp);
			next_slide_num++;
		} else if (swiper.isEnd && last_daf < masechet_size) {
			swiper.appendSlide('<div class="swiper-slide"><div id="slide-'+next_slide_num+'" class="daf-slide"></div></div>');
			
			last_daf++;
			var ldp=last_daf.pad(3);
			
			include('slide-'+next_slide_num, 'masechet/'+masechet+'-ps-' + ldp);
			next_slide_num++;
		}

		if (masechet_show != "") {
			$('#titlebar').html('Dafyomi – '+masechet_show+' ' + current_daf);
		}
	},
});



