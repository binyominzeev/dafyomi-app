Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

var current_daf=0;
var next_slide_num=3;

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

function zev_page_link (num) {
	masechet="zevachim/zv";
	masechet_show="Zevachim";
	masechet_size=120;

	page_link(num);
}

function men_page_link (num) {
	masechet="menachos/mn";
	masechet_show="Menachos";
	masechet_size=110;

	page_link(num);
}

function chul_page_link (num) {
	masechet="chulin/ch";
	masechet_show="Chulin";
	masechet_size=142;

	page_link(num);
}

function pes_page_link (num) {
	masechet="pesachim/ps";
	masechet_show="Pesachim";
	masechet_size=121;

	page_link(num);
}

function shkl_page_link (num) {
	masechet="shekalim/sk";
	masechet_show="Shekalim";
	masechet_size=22;

	page_link(num);
}

function yom_page_link (num) {
	masechet="yoma/yo";
	masechet_show="Yoma";
	masechet_size=88;

	page_link(num);
}

function suk_page_link (num) {
	masechet="sukah/su";
	masechet_show="Sukah";
	masechet_size=56;

	page_link(num);
}

function btz_page_link (num) {
	masechet="beitzah/bt";
	masechet_show="Beitzah";
	masechet_size=40;

	page_link(num);
}


function page_plus(plus) {
	var fd=current_daf+plus;
	var fdp=fd.pad(3);
	var fdp_url='masechet/'+masechet+'-ps-' + fdp;
	
	if (url_exists(fdp_url+'.html')) {
		return fdp_url;
	} else {
		return 0;
	}
}

function page_link (num) {
	current_daf = num;
	
	swiper.removeAllSlides();
	swiper.appendSlide([
		'<div class="swiper-slide"><div id="slide-0" class="daf-slide"></div></div>',
		'<div class="swiper-slide"><div id="slide-1" class="daf-slide"></div></div>',
		'<div class="swiper-slide"><div id="slide-2" class="daf-slide"></div></div>',
	]);

	var padded=current_daf.pad(3);
	include('slide-1', 'masechet/'+masechet+'-ps-' + padded);

	swiper.slideTo(1, 0, false);
	
	var before=page_plus(-1);
	var after=page_plus(1);
	
	if (before) {
		include('slide-0', before);
	} else {
		swiper.removeSlide(0);
	}
	
	if (after) {
		include('slide-2', after);
	} else {
		swiper.removeSlide(2);
	}
	
	var mas_name=masechet.substr(0, masechet.indexOf('/'));

	$('#titlebar').html('<a href="#" onclick="toggle_menu(); my_open_page(\''+mas_name+'\')">'+masechet_show+' ' + current_daf+'</a>');
	backPage();
}

function toggle_menu() {
	$("#masechet_menu").toggle();
}

function my_open_page(pagename) {
	toggle_menu();
	openPage(pagename);
}

function url_exists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

var swiper=new Swiper('.swiper-container', {
	initialSlide: 1,
	onSlideChangeEnd: function (swiper) {
		var act = swiper.activeIndex;
		var prev= swiper.previousIndex;
		var diff=act-prev;
		
		current_daf = current_daf + diff;
		var padded=current_daf.pad(3);
		
		var before=page_plus(-1);
		var after=page_plus(1);

		if (swiper.isBeginning && before) {
			swiper.prependSlide('<div class="swiper-slide"><div id="slide-'+next_slide_num+'" class="daf-slide"></div></div>');
			
			include('slide-'+next_slide_num, before);
			next_slide_num++;
		} else if (swiper.isEnd && after) {
			swiper.appendSlide('<div class="swiper-slide"><div id="slide-'+next_slide_num+'" class="daf-slide"></div></div>');
			
			include('slide-'+next_slide_num, after);
			next_slide_num++;
		}

		if (masechet_show != "") {
			var mas_name=masechet.substr(0, masechet.indexOf('/'));

			$('#titlebar').html('<a href="#" onclick="toggle_menu(); my_open_page(\''+mas_name+'\')">'+masechet_show+' ' + current_daf+'</a>');
			//$('#titlebar').html(masechet_show+' ' + current_daf);
		}
	},
});

document.addEventListener('openMenu', function(e){
	$("#menuDiscover").toggle();
  //It does something when the menu is opened
  //You can access name of menu in: e.detail.menu
})

document.addEventListener('closeMenu', function(e){
	$("#menuDiscover").toggle();
  //It does something when the menu is closed.
  //You can access name of menu in: e.detail.menu
})

