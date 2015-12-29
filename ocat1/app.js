var main = function() {
  $('current.description').show();

  $('.article').click(function() {
      $('.article').removeClass('current');
      $('.description').hide();

      $(this).addClass('current');
      $(this).children('.description').toggle();
    });
  }

$(document).ready(main);
