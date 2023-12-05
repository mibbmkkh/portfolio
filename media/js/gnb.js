//햄버거

$(document).ready(function() {
  $('.menu_ham').toggle(function() {
    $("#gnb").slideDown('slow');
    $(".menu_ham span::before").css({
        "transform" : "rotate(45deg)",
        "top": "0"});
        $('#headerArea').addClass('mn_open');
}, function() {
    $("#gnb").slideUp('fast');
    $('#headerArea').removeClass('mn_open');
});
    
     // 스크롤 처리

     screenBlock2 = $(window).height()-67;
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  
  if(scroll>screenBlock2-1){ //500이상의 거리가 발생되면
      $('#headerArea').css('background','rgba(2,7,15,1)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.3)');  //top보여라~~~~
  }else{
      $('#headerArea').css('background','none').css('box-shadow','none');
  }
  });
  });





var screenBlock2, screenHeight;
screenBlock2 = $(window).height()-67;


$(document).ready(function () {



  // 충돌 할까봐 호버랑 클릭에 각각 네임스페이스 달아둠.
  $(".top").on("mouseenter.hoverEvent", function () {
    if (window.innerWidth > 1024) {
      $('#footerArea div:eq(0)>img').animate({ 'bottom': '113' }, 800);
    }
  }).on("mouseleave.hoverEvent", function () {
    if (window.innerWidth > 1024) {
      $('#footerArea div:eq(0)>img').animate({ 'bottom': '25' }, 500);
    }
  });
  // 해상도 1024 초과일때만 호버로 마리오가 움직임.

  
  // 해상도 1024 이하부터는 마리오도 클릭으로 움직임.
  // 클릭 이벤트는 총 3게로 순서를 정해줬다.
  $(".top").on("click.clickEvent", function (e) {
    e.preventDefault();
    if (window.innerWidth <= 1024 && window.innerWidth > 640) {
      $('#footerArea div:eq(0)>img').animate({'bottom':'103'},800);
    } else {
      $('#footerArea div:eq(0)>img').animate({'bottom':'93'},800);
    }
  })

// 나름 마리오가 먼저 움직이고, 스크롤이 움직이도록 설정함.
// 근데 같이 움직임... 왜?
  .on("click.clickEvent", function(e) {
    e.preventDefault();
    $("html,body").stop().animate({ "scrollTop": 0 }, 1000);
})

// 스크롤이 움직이고나서 마리오가 원위치로 돌아오도록 설정함. 이건 정상작동하는듯.
.on("click.clickEvent", function(e) {
  e.preventDefault();
if (window.innerWidth <= 1024 && window.innerWidth > 640) {
  $('#footerArea div:eq(0)>img').animate({'bottom':'15'},800);
} else {
  $('#footerArea div:eq(0)>img').animate({'bottom':'5'},800);
}
})



// 위와 같다.
$(".down").on("mouseenter.hoverEvent", function () {
  if (window.innerWidth > 1024) {
    $('.videoBox>img:eq(1)').animate({ 'bottom': '140' }, 800);
  }
}).on("mouseleave.hoverEvent", function () {
  if (window.innerWidth > 1024) {
    $('.videoBox>img:eq(1)').animate({ 'bottom': '244' }, 800);
  }
});

$(".down").on("click.clickEvent", function (e) {
  e.preventDefault();
  if (window.innerWidth <= 1024 && window.innerWidth > 640) {
    $('.videoBox>img:eq(1)').animate({'bottom':'124'},800);
  } else {
    $('.videoBox>img:eq(1)').animate({'bottom':'120'},800);
  }
})

.on("click.clickEvent", function(e) {
  e.preventDefault();
$("html,body").stop().animate({'scrollTop':screenBlock2}, 1000);
})

.on("click.clickEvent", function(e) {
e.preventDefault();
if (window.innerWidth <= 1024 && window.innerWidth > 640) {
$('.videoBox>img:eq(1)').animate({'bottom':'209'},500);
} else {
$('.videoBox>img:eq(1)').animate({'bottom':'224'},500);
}
})

});