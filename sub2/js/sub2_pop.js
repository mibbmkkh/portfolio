$('.furniture .openBtn').each(function (index){
    $(this).click(function(e){
        e.preventDefault();

        var ind = $(this).index('.furniture .openBtn');

        $(this).parents('.furniture').find('.pop').hide();
        $(this).parents('.furniture').find(".pop:eq("+ind+")").fadeIn('slow');      // parent fine, parent children 등등
        $('.modal_box').show();
    })});

$('.close_btn, .modal_box').on('click', function(e){  // 닫기버튼 또는 거무튀튀 클릭
    e.preventDefault();

    $('.pop').fadeOut('fast');    // 어차피 떠있는건 빅 하나니까 이걸 닫으면 됨
    // this parent (big)도 가능
    $('.modal_box').hide();
});