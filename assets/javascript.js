$( document ).ready(function() {
  let win$ = $(window);
  let mastheadMenu$ = $('.masthead-menu');

  $('.masthead-menu-trigger').click(function(e) {
    e.preventDefault();
    mastheadMenu$.toggle();
  });

  win$.resize(function(e) {
    if(win$.width() >= 768) {
      mastheadMenu$.show();
    }
    else {
      mastheadMenu$.hide();
    }
  });

});
