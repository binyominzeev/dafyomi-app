Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

var current_daf=0;

function ber_page_link (num) {
	var longnum = num.pad(3);
	current_daf=num;

	include('center-slide', 'masechet/berachos/br-ps-' + longnum);
	
	var left1=num-1;
	var left2=num-2;
	var right1=num+1;
	var right2=num+2;
	
	var left1long=left1.pad(3);
	var left2long=left2.pad(3);
	var right1long=right1.pad(3);
	var right2long=right2.pad(3);

	include('left-1-slide', 'masechet/berachos/br-ps-' + left1long);
	include('left-2-slide', 'masechet/berachos/br-ps-' + left2long);
	include('right-1-slide', 'masechet/berachos/br-ps-' + right1long);
	include('right-2-slide', 'masechet/berachos/br-ps-' + right2long);

	$('#titlebar').html('Dafyomi – Berachos ' + num);
	backPage();
}

function shab_page_link (num, longnum) {
	include('myFrame', 'masechet/shabbos/sh-ps-' + longnum);
	$('#titlebar').html('Dafyomi – Shabbos ' + num);
	backPage();
}

var swiperH=new Swiper('.swiper-container-h', {
	initialSlide: 2,
	loop: true,
	onSlideChangeEnd: function (swiperH) {
		var num = swiperH.activeIndex;
		var prev= swiperH.previousIndex;
		var diff=num-prev;
		
		current_daf = current_daf + diff
		
		$('#titlebar').html('Dafyomi – Berachos ' + current_daf);
	},
});

var swiperV=new Swiper('.swiper-container-v', {
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	mousewheel: true
});


