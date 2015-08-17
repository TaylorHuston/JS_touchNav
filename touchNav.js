$('document').ready(function () {
  console.log("loaded");
  $('.hasSub > a').click(function () {
    $(this).toggleClass('clicked');
    $(this).closest('li').find('ul').toggleClass('visible');
    return !$(this).hasClass('clicked');
  });

  $(document).click(function() {
    $('.hasSub > a').removeClass('clicked');
    $('.subNav').removeClass('visible');
    console.log("clicked");
  });
});
