$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenBlock = $(window).height()-67;
      //screenHeight = $(window).height();  //스크린의 높이

      $(".block").css('margin-top',screenBlock);
      //$("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          $(".down img").attr('src','./images/gimmick2.png');
          $("top img").attr('src','./images/gimmick2.png');
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          $(".down img").attr('src','./images/gimmick5.png');
          $(".top img").attr('src','./images/gimmick5.png');
          current=false;
      }
    }screen_size();  //최초 실행시 호출
  
  $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
  screen_size();
}); 

});