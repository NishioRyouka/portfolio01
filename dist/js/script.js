
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
  
  //swiper
  const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 40,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
      768: {
          slidesPerView: 2.75,
      }
    },
  });

  // ハンバーガーメニュー
  $(".js-hamburger").click(function () {
    $(this).toggleClass('is-active');

    $('.js-nav').fadeToggle();
      
    // if($(this).hasClass('.is-active')) {
    //   $('.js-nav').fadeIn();
    // } else {
    //   $('.js-nav').fadeOut();
    // }
  });

  $('.js-nav a').on('click',function() {
    $(".js-hamburger").trigger('click')
  });
})
