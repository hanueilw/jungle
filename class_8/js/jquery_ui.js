$(function(){
	//메인 헤더 스크롤 이벤트
	

	//네비 열기
	

	//네비 닫기


	//메인 베너 슬라이드
	  $(".section.visual > ul").bxSlider({
		  sliderWidth:1000,
		  slideMargin:209,
		  minSliders:1,
		  maxSlides:2,
		  moveSlides:1,
		  onSliderLoad:function(){
			  //처음 페이지가 실행될때 
			slide_resize();
		  }
	  });

	  $(window).resize(function(){
		slide_resize();
	  })

	  function slide_resize(){
		var main_slide_w = ($(".visual").width() - $(".visual .bx-wrapper ul >li").width())/2;
		console.log(main_slide_w)
		$(".visual .bx-wrapper ul").css({"margin-left":main_slide_w});
	}

	//베스트 아이템 슬라이드 
})