Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

var current_daf=0;
var next_slide_num=3;
var first_daf=0;
var last_daf=0;

function ber_page_link (num) {
	var longnum = num.pad(3);
	current_daf=num;

	var lt=current_daf-1;
	var rt=current_daf+1;
	
	var ltp=lt.pad(3);
	var rtp=rt.pad(3);
	
	first_daf=lt;
	last_daf=rt;

	var padded=current_daf.pad(3);
	
	include('slide-0', 'masechet/berachos/br-ps-' + ltp);
	include('slide-1', 'masechet/berachos/br-ps-' + padded);
	include('slide-2', 'masechet/berachos/br-ps-' + rtp);
				
	$('#titlebar').html('Dafyomi – Berachos ' + current_daf);
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
		var num = swiper.realIndex;
		var act = swiper.activeIndex;
		var prev= swiper.previousIndex;
		var diff=act-prev;
		
		current_daf = current_daf + diff;

		var lt=current_daf-1;
		var rt=current_daf+1;
		
		var ltp=lt.pad(3);
		var rtp=rt.pad(3);
		
		var padded=current_daf.pad(3);

		if (swiper.isBeginning && first_daf > 2) {
			swiper.prependSlide('<div class="swiper-slide"><div id="slide-'+next_slide_num+'" class="daf-slide"></div></div>');
			
			first_daf--;
			var ltp=first_daf.pad(3);
			
			include('slide-'+next_slide_num, 'masechet/berachos/br-ps-' + ltp);
			next_slide_num++;
		} else if (swiper.isEnd && last_daf < 64) {
			swiper.appendSlide('<div class="swiper-slide"><div id="slide-'+next_slide_num+'" class="daf-slide"></div></div>');
			
			last_daf++;
			var rtp=last_daf.pad(3);
			
			include('slide-'+next_slide_num, 'masechet/berachos/br-ps-' + rtp);
			next_slide_num++;
		}

		$('#titlebar').html('Dafyomi – Berachos ' + current_daf);
	},
});



