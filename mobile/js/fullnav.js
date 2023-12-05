$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menu_ham, #headerArea .box").click(function(e) { //메뉴버튼 클릭시
     e.preventDefault(); 
        
        var documentHeight =  $(document).height();
        // 바디의 높이를 담아
        $("#gnb").css('height',documentHeight); 
       // gnb높이를 전체 페이지 높이와 동일하게 바디에 맞춰
 
       if(op==false){
         $("#gnb").animate({left:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
         $('#headerArea .box').show();
       }else{
         $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
         $('#headerArea .box').hide();
       }
 
    });
    
    
    // 아코디언으로 써도 된다고 함.
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false]; // 열고(true) 닫을(false) 1depth 메뉴만큼 만들어둠
     var arrcount=onoff.length;  //전체 메뉴 개수. 6개!
     
     // console.log(arrcount);
     
     $('#gnb .depth1 h3 a').click(function(e){  //햄버거
       e.preventDefault();
         var ind=$(this).parents('.depth1').index(); //  0~5
         // var ind=$(this).index('#gnb .depth1 h3 a'); 같은말ㅇㅇ
         
         // console.log(ind);
         
        if(onoff[ind]==false){ //클릭한 1depth 메뉴가 닫혀있냐?
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow');  //응 그니까 나만 열리고
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //다 닫혀
          for(var i=0; i<arrcount; i++) onoff[i]=false; // 다 false상태로 
          onoff[ind]=true; //나한테 있는 온오프 배열만 트루로
            
          $('.depth1 span').text('expand_more');   //모두 +
          $(this).find('span').text('expand_less');   //해당 메뉴만 -
             
        }else{ //클릭한 메뉴가 열려있냐?
          $(this).parents('.depth1').find('ul').slideUp('fast');   //그럼 닫아 
          onoff[ind]=false;   //닫으라고
            
          $(this).find('span').text('expand_more');     
        }
     });    
   
         // 스크롤 처리
         var visual_height = $('.visual').height(); //500
 
         $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
 
           var scroll = $(window).scrollTop(); //스크롤의 거리
 
        
 
           if(scroll>visual_height){ //500이상의 거리가 발생되면
 
               $('#headerArea').css('background','rgba(255,255,255,1)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.3)');  //top보여라~~~~
               $('#headerArea').addClass('mn_down');
 
           }else{
 
             $('#headerArea').css('background','rgba(255,255,255,.6)').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,0)');
             $('#headerArea').removeClass('mn_down');
           }
 
         });
 
 
 
   });


       // footer
            // topmove
            $('.top_move').hide();
            $(window).on('scroll',function(){
              var scroll = $(window).scrollTop();
              
              if(scroll > 500){
                  $('.top_move').fadeIn('slow');   
              }else{
                  $('.top_move').fadeOut('fast');
              }
          });
          
          $('.top_move').click(function(e){
              e.preventDefault();
              $("html,body").stop().animate({"scrollTop":0},500);
          });


          // familysite open
          $('.family .arrow').toggle(function(e){
              e.preventDefault();

              $('.family ul').stop().slideDown(200);
              $(this).addClass('on');
          
          }, function(e){
              e.preventDefault();

              $(this).removeClass('on');
              $('.family ul').stop().slideUp(200);
          });
