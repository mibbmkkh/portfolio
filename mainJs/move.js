// JavaScript Document

// 비주얼 이미지

  var timeonoff;   //타이머들어가니까 타이머온오프 들어가고용  홍길동 정보
  var imageCount=$('.gallery ul li').size();   //이미지 총개수
  var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
  
  $('.btn1').css('background','#d7182a'); //첫번째 불켜
  $('.btn1').css('width','100px'); // 버튼의 너비 증가
  
  $('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다..
  $('.gallery .link1>span').delay(1000).animate({top:350, opacity:1},'fast');
  // 이건 이미지 위에 올라가는 글자 애니메이션임 송미옥선생...

  function moveg(){
    if(cnt==imageCount+1)cnt=1;
    if(cnt==imageCount)cnt=0;  //카운트 초기화
    //넥스트 백때문에 추가된 기능

    cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
    
  //  for(var i=1;i<=imageCount;i++){
  //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  //  }
  
  $('.gallery li').fadeOut('fast'); //모든 이미지 안보인다.
    $('.gallery .link'+cnt).fadeIn('fast'); //자신만 이미지가 보인다..
                        
  //  for(var i=1;i<=imageCount;i++){
  //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
  //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
  //   }
    
    $('.mbutton').css('background','rgba(255,255,255,.2)'); //버튼불다꺼!!
    $('.mbutton').css('width','50px'); // 버튼 원래의 너비
    $('.btn'+cnt).css('background','#d7182a');//자신만 불켜
    $('.btn'+cnt).css('width','100px');    

    $('.gallery li>span').css('top',450).css('opacity',0); //텍스트의 초기화
    //글자 숨겨놧다가 위로 올라가는 거잖아. 원위치 시켜두는거임.
    $('.gallery .link'+cnt).children('span').delay(1000).animate({top:350, opacity:1},'fast');
    
      if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
    }
    
  timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
    //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
    //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


  $('.mbutton').click(function(event){  //각각의 버튼 클릭시
      var $target=$(event.target); //클릭한 버튼 $target == $(this)
      clearInterval(timeonoff); //타이머 중지     
  
    //  for(var i=1;i<=imageCount;i++){
    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
    //    } 
    $('.gallery li').fadeOut('fast'); //모든 이미지 안보인다.

    if($target.is('.btn1')){  //첫번째 버튼 클릭??
        cnt=1;  //클릭한 해당 카운트를 담아놓는다
    }else if($target.is('.btn2')){  //두번째 버튼 클릭??
        cnt=2; 
    }else if($target.is('.btn3')){ 
        cnt=3; 
    }
    // if문 개수정도만 바꾸는 센스가 있으면 댐! 이거만 고치래! 이거 아니면 딱히 고칠게! 없!
    // 아 글자 위치도 고치래ㅎ

    $('.gallery .link'+cnt).fadeIn('fast');  //자기 자신만 이미지가 보인다
    
    // for(var i=1;i<=imageCount;i++){
    //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
    //   $('.btn'+i).css('width','16');
    // }
    $('.mbutton').css('background','rgba(255,255,255,.2)'); //버튼 모두불꺼
    $('.mbutton').css('width','50px');
    $('.btn'+cnt).css('background','#d7182a');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','100px');
    
    $('.gallery li>span').css('top',450).css('opacity',0); 
    $('.gallery .link'+cnt).children('span').delay(1000).animate({top:350, opacity:1},'fast');
    //텍스트 원위치 후 지꺼만 애니메이션 ㅇㅇ

    if(cnt==imageCount)cnt=0;  //카운트 초기화
    
    timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
    
    if(onoff==false){ //중지상태냐??
          onoff=true; //동작~~        // 부활 했을때 타이머가 꺼져있을수도 있으니까 얘도 동작 시켜.
          $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-stop"></i>'); //태그 교체할때 .html 쓰나봄. 버튼을 스탑버튼으로.
    }

    
  });

  //stop/play 버튼 클릭시 타이머 동작/중지
$('.ps').click(function(){ 
    if(onoff==true){ // 타이머가 동작 중이냐??
        clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
        $(this).html('<span class="hidden">play</span><i class="fa-solid fa-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
        onoff=false;   
    }else{  // false 타이머가 중지 상태냐??
      timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
      $(this).html('<span class="hidden">stop</span><i class="fa-solid fa-stop"></i>');
      onoff=true; 
    }
});	

  //왼쪽/오른쪽 버튼 처리
  $('.visual .btn').click(function(){

    clearInterval(timeonoff); //살인마

    if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
        if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
        // 무한히 늘어나면 안되니까 ㅇㅇ
        //if(cnt==imageCount+1)cnt=1;  
        cnt++; //카운트 1씩증가
    }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
        if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
        // 아래서 1 감소 할거라 6-1 = 5가 되게끔 1을 더하는거임.
        if(cnt==0)cnt=imageCount;
        // 다 섞여있어서 골때리는거임ㅎ 다섯번째 불버튼?을 누르면 5였다가 카운트 초기화해서 0이 되니까 왼쪽으로 가면 -1이 되니까 그렇게 되지 않도록 다시 5로 만들어줌. 그래야 1빼면 4가 되니까.
        cnt--; //카운트 감소
    }

  // for(var i=1;i<=imageCount;i++){
  //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  // }
  $('.gallery li').hide(); //모든 이미지를 보이지 않게.
  $('.gallery .link'+cnt).fadeIn('fast'); //자신만 이미지가 보인다..
                      
  $('.mbutton').css('background','rgba(255,255,255,.2)'); //버튼 모두불꺼
  $('.mbutton').css('width','50');
  $('.btn'+cnt).css('background','#d7182a');//자신 버튼만 불켜 
  $('.btn'+cnt).css('width','100px');

  $('.gallery li>span').css('top',450).css('opacity',0);
  $('.gallery .link'+cnt).children('span').delay(1000).animate({top:350, opacity:1},'fast');

  // if($(this).is('.btnRight')){
  //   if(cnt==imageCount)cnt=0;
  // }else if($(this).is('.btnLeft')){
  //   if(cnt==1)cnt=imageCount+1;
  // }

  timeonoff= setInterval( moveg , 4000); //부활

  if(onoff==false){
    onoff=true;
    $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-stop"></i>');
  }
});



     
// 아코디언

    $('.eventSlideMenu ul li>span').mouseenter(function(event){
       var $target=$(event.target);  // var $target = $(this)
       $('.eventSlideMenu ul li>span').css('width','0');
      

     $('.eventSlideMenu ul li').removeClass('current');
     $(this).parent().addClass('current');  // 마우스 오버 한 메뉴버튼의 li만 current 추가

        if($target.is('.buttonMenu01')){  //첫번째 버튼에 마우스 오버되면
           $('.eventSlideMenu .img02').animate({left:600},500,'easeOutQuad').clearQueue();
           $('.eventSlideMenu .img03').animate({left:900},500,'easeOutQuad').clearQueue();
            cnt=1;
        }else if($target.is('.buttonMenu02')){//두번째 버튼에 마우스 오버되면
            $('.eventSlideMenu .img02').animate({left:[300,'easeOutQuad']},500).clearQueue();
            $('.eventSlideMenu .img03').animate({left:[900,'easeOutQuad']},500).clearQueue();
            cnt=2;
        }else if($target.is('.buttonMenu03')){
            $('.eventSlideMenu .img02').animate({left:[300,'easeOutQuad']},500).clearQueue();
            $('.eventSlideMenu .img03').animate({left:[600,'easeOutQuad']},500).clearQueue();
            cnt=0;
        }});

        $('.eventSlideMenu ul li').mouseleave(function(event){
                  var $target=$(event.target);  // var $target = $(this)
                  $('.eventSlideMenu ul li').removeClass('current');
                  $('.eventSlideMenu ul li:eq(0)').animate({left:[0,'easeOutQuad']},500).clearQueue();
                  $('.eventSlideMenu ul li:eq(1)').animate({left:[400,'easeOutQuad']},500).clearQueue();
                  $('.eventSlideMenu ul li:eq(2)').animate({left:[800,'easeOutQuad']},500).clearQueue();
                  $('.eventSlideMenu ul li>span').css('width','400');
                  $('.eventSlideMenu ul li div').removeClass('current');
    })


//     // 뉴스

var position=30;  //최초위치
    var movesize=$('.newsul ul li').outerWidth(true);    //최신문법
        //outerWidth(true) -> 마진+보더+패딩+width
    //console.log(movesize);
    var timeonoff1;
    var ulwidth=$('.newsul ul').width()-30;
   
    $('.newsul ul').after($('.newsul ul').clone());   //바로 복제해
 
    function moveG() {
        position-=movesize;  // 368씩 감소
        $('.newsul').animate({left:position}, 'fast',
            function(){							
            if(position<=-ulwidth){
                $('.newsul').css('left',30);
                position=30;
            }
        }).clearQueue();
    }

    timeonoff1= setInterval(moveG, 2000);    // 3초마다 moveG함수

        //슬라이드 겔러리를 한번 복제
 
  $('.button').click(function(e){
     e.preventDefault();

     clearInterval(timeonoff1);
     
     if($(this).is('.prev')){  //이전버튼 클릭
        // 지금 클릭한게 클래스 prev을 가지고 있느냐?
         
          position-=movesize;  // 368씩 감소
         $('.newsul').animate({left:position}, 'fast',function(){
            //이 펑션이 포인트! callback함수 콜백함수 (아직도 콜백이 뭔지 모름ㅎ 전에 찾아봣는데...)
            if(position<=-ulwidth){ // 하나 분량이네 전체가 아니라! 어쩐쥐시발!
                position=30; // 콜백함수 없이 쓰면 위에꺼랑 겹쳐서 개판됨. 거의 동시에 계산된다고 함. 콜백함수를 쓰면 애니메이션이 모두 계산된 후 계산이 된다!!
                $('.newsul').css('left',30);  //0으로 보내
             }
         }).clearQueue();  

     }else if($(this).is('.next')){  //다음버튼 클릭
        // 지금 클릭한게 클래스 next를 가지고 있느냐?
           if(position>=0){ //최초 다음버튼 클릭시 좌표 이동. 안해주면 박살남~
                $('.newsul').css('left',-ulwidth);
                position=-ulwidth;
            }
 
            position+=movesize; // 150씩 증가
            $('.newsul').animate({left:position}, 'fast',
                function(){							
                    if(position>=30){
                        $('.newsul').css('left',-ulwidth);   //-750으로 보내
                        position=-ulwidth;
                    }
                }).clearQueue();
  
      }
   });
       $('.newsul').hover(function(){
   clearInterval(timeonoff1);	//마우스 올라오면 죽여
 },function(){
   timeonoff1= setInterval(moveG, 2000);	
 });	//마우스 때면 살려

