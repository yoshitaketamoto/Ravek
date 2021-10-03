$(function() {
  

  $('.drawer-hamburger').click(function() {
    $('.drawer-menu-title').toggle();
  });

  


$(document).ready(function() {
  $('.drawer').drawer();
  $('.drawer-nav').on('click', function() {
    $('.drawer').drawer('close');
});

});


if(window.matchMedia("(min-width: 768px)").matches){
	jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
}
});