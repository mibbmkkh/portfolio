//첫번째 내용글 애니메이션 처리
//     var smh= 3253;  //메인 비주얼의 높이
//     var h1= $('.education').offset().top-200;

//      //스크롤의 좌표가 변하면.. 스크롤 이벤트
//     $(window).on('scroll',function(){
//         var scroll = $(window).scrollTop();
//         //스크롤top의 좌표를 담는다
       
//         $('.text').text(scroll);})
//         // 스크롤 좌표의 값을 찍는다.
        
// //         // sticky menu 처리
//         if(scroll>smh){     //스크롤 탑 좌표가 메인 비주얼의 높이보다 커지면~ 스크롤이 내려오면~
//             $('.back_1').addClass('navOn1');
//             $('.arrow2::before').addClass('navOn2');
//             $('.arrow3::before').addClass('navOn3');
//         }else{
//             $('.navBox').removeClass('navOn');
//             //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
//             $('header').show();
//         }

//     $('.subNav li').find('a').removeClass('spy');
//     $('.history section').removeClass('boxMove');

//     if(scroll>=0 && scroll<h1){ //이프문으로 범위를 만드는거야!
//         // (scroll>=0 && scroll<404)처럼 안에 범위를 직접 적어도 좋지만 식을 쓰면 편하니까 위에 옵셋탑 가져와 써!
//         $('.subNav li:eq(0)').find('a').addClass('spy');
//         //첫번째 서브메뉴 활성화! 시작하자마자 켜져있어야지!
//         //보통 화면에서 중간정도 오면 애니메이션을 날리던가!
//         $('.history section:eq(0)').addClass('boxMove');
//         // 첫번째 내용 콘텐츠 애니메이션
//     }else if(scroll>=h1 && scroll<h2){
//         $('.subNav li:eq(1)').find('a').addClass('spy');
//         //두번째 서브메뉴 활성화
        
//         $('.history section:eq(1)').addClass('boxMove');
//     }else if(scroll>=h2){
//         $('.subNav li:eq(2)').find('a').addClass('spy');
//         //세번째 서브메뉴 활성화
        
//         $('.history section:eq(2)').addClass('boxMove');
//     }   //여기까지가 클래스 넣었다 뻈다!
//     // 메뉴랑 콘텐츠 때되면 효과주는거 다 묶어서 만든거임.
// });