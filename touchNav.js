$('document').ready(function () {
  console.log("loaded");
  $('.hasSub > a').click(function () {
    $(this).toggleClass('clicked');
    return !$(this).hasClass('clicked');
  });
});
