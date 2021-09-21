
//マウスホバーでクラスのつけかえ

// $(function(){
// 	$(".menu-link").hover(
// 		function () {
// 			$(this).addClass("is-active");
// 		},
// 		function () {
// 			// $(this).removeClass("is-active");
// 		}
// 	);
// });


//クリックでクラスのつけかえ
$(function(){
	$(".menu-link").click(function() {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
		}
	);
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// <!--  wowを使う初期化 -->
//HTMLではなく、ｊｓで書くならscript囲みは当然いらない

// ハンバーガーをクリックしたときの動作
$('.page-header__hamburger').on('click',function(e){
  e.preventDefault(); // aタグを開いたりしても推移しないように。
  $(this).toggleClass("is-active");
  $(".hamburger__background").toggleClass("is-active");
  $(".hamburger__items").toggleClass("is-active");
  // $(this).addClass("hamburger__content");
  // $('.hamburger__close').toggleClass('slide-in');
  // $('.hamburger__content').toggleClass('slide-in');
  // $('body').toggleClass('noscroll');
  return false; // aタグを開いたりしても推移しないように。
});



  $(".hamburger__background").on('click',function(){
    // $('.header-hamburger').trigger('click');
    $(".hamburger__items").toggleClass("is-active");
    $(".page-header__hamburger").removeClass("is-active");
    $(".hamburger__background").toggleClass("is-active");

   
  });

  $(".menu-link").on('click',function(){
    // $('.header-hamburger').trigger('click');
    $(".hamburger__items").toggleClass("is-active");
    $(".page-header__hamburger").removeClass("is-active");
    $(".hamburger__background").toggleClass("is-active");

   
  });



//wowを使用するためのインスタンス作成
new WOW().init();


// $(window).on("scroll", function($) {
//   if (jQuery(this).scrollTop() > 100) {
//     jQuery('footer__totop').show();
//   } else {
//     jQuery('footer__totop').hide();
//   }
// });

// jQuery('footer__totop').click(function () {
//   jQuery('body,html').animate({
//     scrollTop: 0
//   }, 500);
//   return false;
// });

//トップスクロール
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.footer__totop').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.footer__totop').removeClass( 'is-show' );
  }
});


// #から始まるURLがクリックされた時,つまりIDタグのリンクがある場合
jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".page-header").innerHeight();
  let speed = 500;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  console.log(target);
  console.log(id);
  // その分だけ移動すればヘッダーと被りません
  //ターゲットまでの移動距離をpositionで調節するイメージ
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

//アコーディオン
jQuery('.accordion__head').click(function() {
  jQuery(this).next().slideToggle("slow");
  jQuery(this).children('.accordion__icon').toggleClass( 'is-open' );
});

//モーダル
jQuery('.js-modal-open').click(function(e) {
  e.preventDefault();
  //.for-modalクラスがついてる要素に.is-showクラスを追加する
  jQuery('.modal__inner').addClass( 'is-show' );
  $('.modal__background').addClass( 'is-show' );
  // $('.modal__inner').addClass( 'fadeInUp' );
  // jQuery('.modal__inner').addClass( 'fadeInUp' );

  return false;


});

jQuery('.modal__icon').click(function(e) {
// jQuery('.modal__inner').click(function(e) {
  e.preventDefault();
  //.for-modalクラスがついてる要素に.is-showクラスを削除する
  jQuery('.modal__inner').removeClass( 'is-show' );
  $('.modal__background').removeClass( 'is-show' );
  

  return false;

  
});
jQuery('.modal__button-a').click(function(e) {
  e.preventDefault();
  //.for-modalクラスがついてる要素に.is-showクラスを削除する
  jQuery('.modal__inner').removeClass( 'is-show' );
  jQuery('.modal__background').removeClass( 'is-show' );
  

  return false;

  
});