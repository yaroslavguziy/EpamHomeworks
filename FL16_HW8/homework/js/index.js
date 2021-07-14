$(document).ready(function () {
  $('.calc').click(function () {
    $('#display').val($('#display').val() + $(this).val());
  });
  $('.clear').click(function () {
    $('#display').attr('placeholder', '0').val('').css('color', 'black');
  });
  $('.result').click(function () {
    const result = function (fn) {
      return new Function('return ' + fn)();
    };

    const currentValue = $('#display').val();

    if (currentValue.includes('/0')) {
      $('#display').val('ERROR').css('color', 'red');
    } else {
      const log = $('<div/>').addClass('log');
      const circle = $('<div/>').addClass('circle');
      const info = $('<div/>')
        .addClass('info')
        .text(currentValue + '=' + result(currentValue));
      if (info.text().includes('48')) {
        info.css('text-decoration', 'underline');
      } else {
        info.css('text-decoration', 'none');
      }
      const deleteLog = $('<button/>').addClass('delete').text('x');
      log.append(circle);
      log.append(info);
      log.append(deleteLog);
      $('#logs').prepend(log);

      $('#display').val(result(currentValue));
    }

    const logs = $('.calculator-logs');
    if (logs.scroll()) {
      console.log(logs.scrollTop());
    }

    $('.circle').click(function () {
      $(this).toggleClass('red');
    });

    $('.delete').click(function () {
      $(this).closest('div').remove();
    });
  });
});
