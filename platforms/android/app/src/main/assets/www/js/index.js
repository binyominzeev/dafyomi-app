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

function shab_page_link (num, longnum) {
	include('myFrame', 'masechet/shabbos/sh-ps-' + longnum);
	$('#titlebar').html('Dafyomi – Shabbos ' + num);
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

		$('#titlebar').html('Dafyomi – '+masechet_show+' ' + current_daf);
	},
});



