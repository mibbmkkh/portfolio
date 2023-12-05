$(document).ready(function(){  		
    
 var startX, endX;
    

$('.wrap').on('touchstart mousedown',function(e){
  // 웹이랑 모바일이랑 둘 다 설정

 e.preventDefault();
       
 startX=e.pageX || e.originalEvent.touches[0].pageX;
      //  앞에가 웹, 뒤에가 폰

 $('body').append(startX + '<br>');
       
    
});
    
    



$('.wrap').on('touchend mouseup',function(e){
    
 e.preventDefault();
       
 endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
        
 $('body').append(endX + '<br>');
    
     
       
 if(startX<endX) {
           // 처음 터치한 지점보다 끝난 지점이 더 컷을때 (오른쪽방향)
     $('body').append(' 오른쪽으로 터치드래그' + '<br>');
     $('.wrap').css('background','#f00');
 }else{      
     $('body').append(' 왼쪽로 터치드래그' + '<br>');
     $('.wrap').css('background','#0f0');
 }
      


  
   
 });


});















