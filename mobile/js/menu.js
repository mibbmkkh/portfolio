//기업정보
//회사소개






 var timeonoff1;   //타이머들어가니까 타이머온오프 들어가고용  홍길동 정보
 var colorCount=3;   //이미지 총개수
 var cnt1=1;   //이미지 순서 1 2 3 

 $('.btn1 span').fadeIn('fast');
 
 function moveg(){
  
  cnt1++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
  
  $('.mbutton').animate({'width':'30px'},'fast'); // 버튼 원래의 너비
  $('.btn'+cnt1).animate({'width':'100px'},'fast');    

  $('.mbutton span').fadeOut('fast'); //텍스트의 초기화
  $('.btn'+cnt1).children('span').fadeIn('fast');
  
    if(cnt1==colorCount)cnt1=0;  //카운트의 초기화 0
  }

 $('.tabs .tab1,.tabs .tab2').click(function(e){
    e.preventDefault();
    clearInterval(timeonoff1);
 });

 $('.tabs .tab3').click(function(e){
    e.preventDefault();
    timeonoff1=setInterval( moveg , 3000);
 });




//세로 아코디언

$('.headquarters li').removeClass('card');
$('.headquarters li:eq(0)').addClass('card');

$('.headquarters li a').click(function(e){
  e.preventDefault();
    $('.headquarters li').removeClass('card');
    $(this).parent('li').addClass('card');
 
});


//세로 아코디언

  $('.ethical div:eq(1) a').toggle(function(e){
    e.preventDefault();
    $('.ethical div:eq(1) a').removeClass('card');
    $(this).addClass('card');
}, function(){
    $(this).removeClass('card');
});


// 슬라이드 액션?

$('.cooperation>a>i').toggle(function(e){
  e.preventDefault();
  $('.cooperation>a').animate({right:10}, 'slow');
  $('.cooperation>a>i').attr('class','fa-solid fa-chevron-right');
      $('.cooperation>a>i').removeClass('start');
}, function(){
  $('.cooperation>a').animate({right:-130}, 'slow');
  $('.cooperation>a>i').attr('class','fa-solid fa-chevron-left');
      $('.cooperation>a>i').removeClass('start');
});
    
  var startX, endX;
     
 $('.cooperation>a').on('touchstart mousedown',function(e){
     // 웹이랑 모바일이랑 둘 다 설정
   
  e.preventDefault();
        
  startX=e.pageX || e.originalEvent.touches[0].pageX;
        
 });
     
     
 $('.cooperation>a').on('touchend mouseup',function(e){
     
  e.preventDefault();
        
  endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
 //  앞에가 웹, 뒤에가 폰
         
     
  if(startX<endX) {
     // 처음 터치한 지점보다 끝난 지점이 더 컷을때 (오른쪽방향)
            
      $('.cooperation>a').animate({right:-130}, 'slow');
      $('.cooperation>a>i').attr('class','fa-solid fa-chevron-left');
      $('.cooperation>a>i').removeClass('start');
      
  }else{      
      $('.cooperation>a').animate({right:10}, 'slow');
      $('.cooperation>a>i').attr('class','fa-solid fa-chevron-right');
      $('.cooperation>a>i').removeClass('start');
  }
       
  });

  // 대리점안내
  $('.work ul li a').toggle(function(e){
    e.preventDefault();
    $('.work ul li a dl').removeClass('card');
    $(this).find('dl').addClass('card');
}, function(){
    $(this).find('dl').removeClass('card');
});

$('.ic_work ul li a').toggle(function(e){
  e.preventDefault();
  $('.ic_work ul li').removeClass('slide');
  $(this).parents('li').addClass('slide');
}, function(){
  $(this).parents('li').removeClass('slide');
});


// 채용절차

$('.procedure ul li a dd').css('display','none');
$('.procedure ul li:eq(0) a dd').css('display','block');

$('.procedure ul li a').click(function(e){
  e.preventDefault();
  $('.procedure ul li a dd').css('display','none');
  $(this).find('dd').css('display','block');

  $('.procedure ul li a span').css('background-color','#ccc');
  $(this).children('span').css('background-color','#fdaf17');
});

// 팝업창


$('.introduction .pop').hide();
$('.introduction .openBtn').each(function (index){
  $(this).click(function(e){
      e.preventDefault();

      var ind = $(this).index('.introduction .openBtn');
      // console.log(ind);

      $('.introduction .pop').hide();
      $(this).parents('.introduction').find(".pop:eq("+ind+")").fadeIn('fast');      // parent fine, parent children 등등
      $('.modal_box').show();
      $('.introduction .popup div:eq(0)').css('display','block').css('background','#fff');
  })});

$('.close_btn, .modal_box').on('click', function(e){  // 닫기버튼 또는 거무튀튀 클릭
  e.preventDefault();

  $('.pop').fadeOut('fast');    // 어차피 떠있는건 빅 하나니까 이걸 닫으면 됨
  // this parent (big)도 가능
  $('.modal_box').hide();
  $('.introduction .popup div:eq(0)').css('display','none');
});


$('.program ul:eq(0) li').removeClass('color');
$('.program ul:eq(0) li a dd').css('display','none');
$('.program ul:eq(0) li:eq(0)').addClass('color');
$('.program ul:eq(0) li:eq(0)').find('dd').css('display','block');

$('.program ul:eq(0) li a').click(function(e){
  e.preventDefault();
  $('.program ul:eq(0) li').removeClass('color');
  $('.program ul:eq(0) li a dd').css('display','none');
  $(this).parent('li').addClass('color');
  $(this).find('dd').css('display','block');
});