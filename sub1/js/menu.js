//기업소개

var key, value;

function getParams() {

// 현재 페이지의 url   tab.html?num=1
var url = decodeURIComponent(location.href);
// url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
url = decodeURIComponent(url);  //  'tab.html?num=1'

var params='';
// url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
params = url.substring( url.indexOf('?')+1, url.length );   
// 'abcdefg'.substring(2,4);=> 'cdef'
// params = "num=1" 

key = params.split("=")[0];  //'num'
value = params.split("=")[1];  // '1'

value = Number(value);  //  value=1;
 
  //alert(key);
  //alert(typeof(key));
}
    
getParams();  //함수호출

//value=1 , value=2 

if(!value){
    value=1;
}else{
    $("html,body").stop().animate({"scrollTop":1917},1000); 
}


var cnt=$('.tab_menu li').size();  //탭메뉴 개수 ***
//$('img').attr('src','./images/content1/Management'+value+'.jpg');
$('.tabs .contlist').hide();
$('.tabs .contlist:eq('+(value-1)+')').show(); // 첫번째 탭 내용만 열어라
$('.tabs .tab'+value).css('background','#d7182a').css('color','#fff').css('font-weight',700); //첫번째 탭메뉴 활성화
           //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  // .tab'+value가 tab1 tab2 tab3
$('.tabs .tab').click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
      
      var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
      //console.log(ind);

      $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
      $(".tabs .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
      $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
      $(this).css('background','#d7182a').css('color','#fff').css('font-weight',700); // 클릭한 해당 탭메뉴만 활성화

 });



 

// 연혁

$('.subNav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('.history section:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    var smh= 822;  //메인 비주얼의 높이
    var h1= $('.history section:eq(1)').offset().top-200;
    var h2= $('.history section:eq(2)').offset().top-200;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
        // console .log(scroll);})
       
        $('.text').text(scroll);
        // 스크롤 좌표의 값을 찍는다.
        
        // sticky menu 처리
        if(scroll>smh){     //스크롤 탑 좌표가 메인 비주얼의 높이보다 커지면~ 스크롤이 내려오면~
            $('.navBox').addClass('navOn');

            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }

    $('.subNav li').find('a').removeClass('spy');
    $('.history section').removeClass('boxMove');

    if(scroll>=0 && scroll<h1){ //이프문으로 범위를 만드는거야!
        // (scroll>=0 && scroll<404)처럼 안에 범위를 직접 적어도 좋지만 식을 쓰면 편하니까 위에 옵셋탑 가져와 써!
        $('.subNav li:eq(0)').find('a').addClass('spy');
        //첫번째 서브메뉴 활성화! 시작하자마자 켜져있어야지!
        //보통 화면에서 중간정도 오면 애니메이션을 날리던가!
        $('.history section:eq(0)').addClass('boxMove');
        // 첫번째 내용 콘텐츠 애니메이션
    }else if(scroll>=h1 && scroll<h2){
        $('.subNav li:eq(1)').find('a').addClass('spy');
        //두번째 서브메뉴 활성화
        
        $('.history section:eq(1)').addClass('boxMove');
    }else if(scroll>=h2){
        $('.subNav li:eq(2)').find('a').addClass('spy');
        //세번째 서브메뉴 활성화
        
        $('.history section:eq(2)').addClass('boxMove');
    }   //여기까지가 클래스 넣었다 뻈다!
    // 메뉴랑 콘텐츠 때되면 효과주는거 다 묶어서 만든거임.
});



$('.subNav li').find('a').click(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드

     var value=0; //이동할 스크롤의 거리

     if($(this).is('.subNav li:eq(0) a')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
        value= $('.history section:eq(0)').offset().top;  // 해당 콘테츠의 상단의 거리~~
        //.offset().top; 째로 외워라. offset이 반경이래. 위쪽반경.
     }else if($(this).is('.subNav li:eq(1) a')){
        value= $('.history section:eq(1)').offset().top; 
     }else if($(this).is('.subNav li:eq(2) a')){
        value= $('.history section:eq(2)').offset().top; 
     }

     value-=100; //백만큼 덜가기~
     
   $("html,body").stop().animate({"scrollTop":value},1000);
 });


 
$(window).on('scroll',function(){
    var scroll1 = $(window).scrollTop();
    
    $('.his_year').removeClass('navOn1');
    
    if(scroll1>=822 && scroll1<6156){
        $('#his_2022_2015 .his_year1').addClass('navOn1');
    }
    else if(scroll1>=6157 && scroll1<9911){ 
        $('#his_2014_2002 .his_year2').addClass('navOn1');
    }
    else if(scroll1>=9912){ 
        $('#his_1999_1970 .his_year3').addClass('navOn1');
    }
});



$(window).on('scroll',function(){
    var scroll2 = $(window).scrollTop();
    
    if(scroll2>=822 && scroll2<1242){
        $('.his_year1 .year').css('transform','translateY(0)');
    }
    else if(scroll2>=1242 && scroll2<2524){ 
        $('.his_year1 .year').css('transform','translateY(-217px)');
    }
    else if(scroll2>=2524 && scroll2<3509){ 
        $('.his_year1 .year').css('transform','translateY(-434px)');
    }
    else if(scroll2>=3509 && scroll2<4392){ 
        $('.his_year1 .year').css('transform','translateY(-651px)');
    }
    else if(scroll2>=4392 && scroll2<5275){ 
        $('.his_year1 .year').css('transform','translateY(-868px)');
    }
    else if(scroll2>=5275 && scroll2<5808){ 
        $('.his_year1 .year').css('transform','translateY(-1085px)');
    }
    else if(scroll2>=5808 && scroll2<6207){ 
        $('.his_year1 .year').css('transform','translateY(-1302px)');
    }



    else if(scroll2>=6208 && scroll2<7260){ 
        $('.his_year2 .year').css('transform','translateY(0)');
    }
    else if(scroll2>=7260 && scroll2<8019){ 
        $('.his_year2 .year').css('transform','translateY(-217px)');
    }
    else if(scroll2>=8019 && scroll2<8326){ 
        $('.his_year2 .year').css('transform','translateY(-434px)');
    }
    else if(scroll2>=8326 && scroll2<8633){ 
        $('.his_year2 .year').css('transform','translateY(-651px)');
    }
    else if(scroll2>=8633 && scroll2<9290){ 
        $('.his_year2 .year').css('transform','translateY(-868px)');
    }
    else if(scroll2>=9290 && scroll2<9597){ 
        $('.his_year2 .year').css('transform','translateY(-1085px)');
    }
    else if(scroll2>=9597 && scroll2<9955){ 
        $('.his_year2 .year').css('transform','translateY(-1302px)');
    }



    else if(scroll2>=9955 && scroll2<10211){ 
        $('.his_year3 .year').css('transform','translateY(0)');
    }
    else if(scroll2>=10211 && scroll2<10518){ 
        $('.his_year3 .year').css('transform','translateY(-217px)');
    }
    else if(scroll2>=10518 && scroll2<10825){ 
        $('.his_year3 .year').css('transform','translateY(-434px)');
    }
    else if(scroll2>=10825 && scroll2<11168){ 
        $('.his_year3 .year').css('transform','translateY(-651px)');
    }
    else if(scroll2>=11168 && scroll2<11475){ 
        $('.his_year3 .year').css('transform','translateY(-868px)');
    }
    else if(scroll2>=11475 && scroll2<11783){ 
        $('.his_year3 .year').css('transform','translateY(-1085px)');
    }
    else if(scroll2>=11783){ 
        $('.his_year3 .year').css('transform','translateY(-1302px)');
    }
});