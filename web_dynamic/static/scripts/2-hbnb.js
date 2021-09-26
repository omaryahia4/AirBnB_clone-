$(document).ready(function () {
    const ca = {};
    const name = [];
    $('INPUT[type="checkbox"]').click(function () {
      if ($(this).prop('checked') === true) {
        ca[$(this).attr('data-name')] = $(this).attr('data-id');
        name.push($(this).attr('data-name'));
      } else {
        delete ca[$(this).attr('data-name')];
        name.splice(name.indexOf($(this).attr('data-name')), 1);
      }
      $('DIV.amenities h4').text(name.join(', '));
    });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.getJSON(url, function (data) {
      if (data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
          $('DIV#api_status').removeClass('available');
      }
      });
  });
  