$('document').ready(function () {
  console.log("loaded");
  $('li a').click(function () {
    $(this).toggleClass('clicked');
    return !$(this).hasClass('clicked');
  });
});
