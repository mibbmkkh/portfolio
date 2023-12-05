//세로 아코디언

var timeonoff;
var cnt=1;	

var cnt=$('.qualities li').size();
$('.qualities li dd').hover(function(event){
    var $target=$(event.target);
     clearInterval(timeonoff);

   if($target.is('.qualities li:eq(0) dd')){
    $('.qualities li:eq(0) dt').animate({top:[50,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(1) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(2) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(3) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.top_down').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.bottom_up').animate({top:[0,'easeOutQuad']},250).clearQueue();
   }else if($target.is('.qualities li:eq(1) dd')){
       $('.qualities li:eq(0) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
       $('.qualities li:eq(1) dt').animate({top:[150,'easeOutQuad']},250).clearQueue();
       $('.qualities li:eq(2) dt').animate({top:[75,'easeOutQuad']},250).clearQueue();
       $('.top_down').animate({top:[210,'easeOutQuad']},250).clearQueue();
       $('.bottom_up').animate({top:[110,'easeOutQuad']},250).clearQueue();
       cnt=1;
   }else if($target.is('.qualities li:eq(2) dd')){
    $('.qualities li:eq(0) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(1) dt').animate({top:[-75,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(2) dt').animate({top:[75,'easeOutQuad']},250).clearQueue();
    $('.top_down').animate({top:[-110,'easeOutQuad']},250).clearQueue();
    $('.bottom_up').animate({top:[110,'easeOutQuad']},250).clearQueue();
       cnt=2;
   }else if($target.is('.qualities li:eq(3) dd')){
    $('.qualities li:eq(0) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(1) dt').animate({top:[-75,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(2) dt').animate({top:[-150,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(3) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.top_down').animate({top:[-110,'easeOutQuad']},250).clearQueue();
    $('.bottom_up').animate({top:[-210,'easeOutQuad']},250).clearQueue();
        cnt=0;
    }
});

var cnt1=$('.qualities i').size();

$('.qualities li dd').each(function (index) {  // index=0 1 2
    $('.qualities li dd').mouseenter(function(event){
        var ind = $(this).index('.qualities li dd');
        $('.qualities i').css('opacity','0').css('transform','scale(1)');
        $('.qualities i:eq('+ind+')').css('opacity','1');
})});

$('.qualities li dd').mouseleave(function(event){
    var $target=$(event.target);  // var $target = $(this)
    $('.qualities i').css('opacity','0').css('transform','scale(.5)');
    $('.qualities li:eq(0) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(1) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(2) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.qualities li:eq(3) dt').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.top_down').animate({top:[0,'easeOutQuad']},250).clearQueue();
    $('.bottom_up').animate({top:[0,'easeOutQuad']},250).clearQueue();
});



// 팝업창

$('.introduction .openBtn').each(function (index){
    $(this).click(function(e){
        e.preventDefault();

        var ind = $(this).index('.introduction .openBtn');

        $(this).parents('.introduction').find('.pop').hide();
        $(this).parents('.introduction').find(".pop:eq("+ind+")").fadeIn('slow');      // parent fine, parent children 등등
        $('.modal_box').show();
    })});

$('.close_btn, .modal_box').on('click', function(e){  // 닫기버튼 또는 거무튀튀 클릭
    e.preventDefault();

    $('.pop').fadeOut('fast');    // 어차피 떠있는건 빅 하나니까 이걸 닫으면 됨
    // this parent (big)도 가능
    $('.modal_box').hide();
});
