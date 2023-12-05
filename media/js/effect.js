
// 인덱스 어바웃
var content = "a-dan-ta-dan-ta-dan-ta ♫".split("");
var typingIdx = 0;  //방번호


function typing () {
    if (typingIdx < content.length) {
        $(".bgm").append(content[typingIdx]);
        typingIdx++; 
    } 
}

var screenHeight= $(window).height();
var tstart=false;
var onoff;

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면

    var scroll = $(window).scrollTop();

    if(scroll>screenHeight && tstart==false){
        onoff = setInterval(typing , 100);
         tstart=true;
    }else if(scroll<screenHeight){
        clearInterval(onoff);
        $(".bgm").text('T');
         tstart=false;
         typingIdx = 0;
    }

}) 



// 인덱스 캐릭터
var ind;
$('.character li a').toggle(function (e) {
  e.preventDefault();
  var ind = $(this).index('.character li a');
  // console.log(ind);

  // 모든 캐릭터의 이미지를 원래 이미지로 초기화합니다.
  $(".character li a img").each(function (index) {
    $(this).attr('src', './images/character' + (index + 1) + '.png');
  });

  // 클릭한 캐릭터와 연관된 이미지를 변경합니다.
  $(this).find('img').attr('src', './images/character' + (ind + 1 + 10) + '.png').css('filter', 'brightness(0.6)');
  $(".character li a").find('span').css('display','none');
  $(this).find('span').css('display','block');

}, function () {
  $(".character li a img").each(function (index) {
    $(this).attr('src', './images/character' + (index + 1) + '.png').css('filter', 'brightness(1)');
  });
  $(this).find('span').css('display','none');
});




  // 오디오
  var audio = document.getElementById('main_audio');
var currnum = 1;  // 현재 선택된 사운드 순서
var ps = false; // false(stop), true(play)

function changeS() {
  $('.playerImg img').addClass("current");
}

function changeMn(num) {
  $('.playerImg img:eq(1)').attr('src', './music/music' + num + '.png');
}

function changeSound(num) {  // 1 2 3 4
  $('#main_audio').attr('src', './music/music' + num + '.mp3');
  setTimeout(function () {
    audio.play();
  }, 500);

  $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');    // stop 버튼으로 바뀐다

  $('.playInfo li a').removeClass('curr');
  $('.playInfo li:eq(' + (num - 1) + ') a').addClass('curr');  // 클릭한 리스트만 활성화
  currnum = num;
  ps = true;

  $('.playerImg img:eq(0)').attr('src', './music/mu' + num + '.png');
  setTimeout(function () {
    changeMn(num);
  }, 300);

  $('.playerImg img').removeClass("current");
  setTimeout(changeS, 500);
}

$('#controlPlay').click(function (e) {    // 재생, 정지 기능
  e.preventDefault();

  if (ps == false) { // 중지중이면
    setTimeout(function () {
      audio.play();
    }, 500);

    $('.playerImg img').addClass("current");
    $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');
    ps = true;
  } else {  // 재생중이면 true
    audio.pause();

    $('.playerImg img').removeClass("current");
    $('#controlPlay i').removeClass().addClass('fa-solid fa-play');
    ps = false;
  }
});

function changeMc() {
  $('.playerImg img:eq(1)').attr('src', './music/music' + currnum + '.png');
}

function np_play() { // 재생기능

  $('.playInfo li a').removeClass('curr');    // 다른 리스트 비활성화
  $('.playInfo li:eq(' + (currnum - 1) + ') a').addClass('curr');   // 현재 리스트만 활성화

  $('#controlPlay i').removeClass().addClass('fa-solid fa-stop'); // 중지버튼 모양 변경
  ps = true;

  $('#main_audio').attr('src', './music/music' + currnum + '.mp3');
  setTimeout(function () {
    audio.play();
  }, 500);

  $('.playerImg img:eq(0)').attr('src', './music/mu' + currnum + '.png');
  setTimeout(function () {
    changeMc();
  }, 300);

  $('.playerImg img').removeClass("current");
  setTimeout(changeS, 500);
}

$('#controlNext').click(function (e) {  // 다음버튼 클릭시
  e.preventDefault();

  currnum++; // 1 2 3 4
  if (currnum == 5) currnum = 1;
  np_play(); // 재생한다
});

$('#controlPrev').click(function (e) { // 이전버튼 클릭시
  e.preventDefault();

  currnum--; // 4 3 2 1
  if (currnum == 0) currnum = 4;
  np_play();// 재생한다
});