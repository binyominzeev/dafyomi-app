Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

var current_daf=0;

function ber_page_link (num) {
	var longnum = num.pad(3);
	current_daf=num;

	include('slide-0', 'masechet/berachos/br-ps-' + longnum);
	
	var left1=num-1;
	var left2=num-2;
	var right1=num+1;
	var right2=num+2;
	
	var left1long=left1.pad(3);
	var left2long=left2.pad(3);
	var right1long=right1.pad(3);
	var right2long=right2.pad(3);

//	include('left-slide', 'masechet/berachos/br-ps-' + left1long);
//	include('right-slide', 'masechet/berachos/br-ps-' + right1long);

//	include('left-1-slide', 'masechet/berachos/br-ps-' + left1long);
//	include('left-2-slide', 'masechet/berachos/br-ps-' + left2long);
//	include('right-1-slide', 'masechet/berachos/br-ps-' + right1long);
//	include('right-2-slide', 'masechet/berachos/br-ps-' + right2long);

	var num = swiper.realIndex;
	var prev= 0;
	var diff=num-prev;
				
	$('#titlebar').html('Dafyomi – Berachos ' + current_daf + ' (active: '+num+')');
	backPage();
}

function shab_page_link (num, longnum) {
	include('myFrame', 'masechet/shabbos/sh-ps-' + longnum);
	$('#titlebar').html('Dafyomi – Shabbos ' + num);
	backPage();
}

var swiper=new Swiper('.swiper-container', {
//	loop: true,
//	slidesPerView: 1,
//	spaceBetween: 30,
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

		if (num == 0) {
			include('slide-0', 'masechet/berachos/br-ps-' + padded);
			include('slide-1', 'masechet/berachos/br-ps-' + rtp);
			include('slide-2', 'masechet/berachos/br-ps-' + ltp);
		} else if (num == 1) {
			include('slide-0', 'masechet/berachos/br-ps-' + ltp);
			include('slide-1', 'masechet/berachos/br-ps-' + padded);
			include('slide-2', 'masechet/berachos/br-ps-' + rtp);
		} else if (num == 2) {
			include('slide-0', 'masechet/berachos/br-ps-' + rtp);
			include('slide-1', 'masechet/berachos/br-ps-' + ltp);
			include('slide-2', 'masechet/berachos/br-ps-' + padded);
		}
		
		$('#titlebar').html('Dafyomi – Berachos ' + current_daf + ' (active: '+num+')');
	},
});



