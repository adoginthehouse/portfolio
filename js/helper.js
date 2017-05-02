$(document).ready(function() { //begin doc ready
  $('#drawer-toggle').click(function() {
    $(this).toggleClass('active');
    $('.body-overlay').toggleClass('active');
    $('#sidecar').toggleClass('active');
    $('#siteWrapper').toggleClass('active');
    $('body').toggleClass('locked');
  });

  $('.body-overlay, .close-drawer').click(function() {
    $('.body-overlay').removeClass('active');
    $('#drawer-toggle').removeClass('active');
    $('#sidecar').removeClass('active');
    $('#siteWrapper').removeClass('active');
    $('body').removeClass('locked');
  });

  body, html {
    cursor: url(cursor.gif), pointer;
}

}); //end doc ready
