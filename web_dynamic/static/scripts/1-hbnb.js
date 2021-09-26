const $ = window.$;
$(document).ready(function () {
  const amenitiesId = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      amenitiesId[$(this).data('id')] = $(this).data('name');
    } else if ($(this).prop('checked') === false) {
      delete amenitiesId[$(this).attr('data-id')];
    }
    $('div.amenities H4').text(Object.values(amenitiesId).join(', '));
  });
});
