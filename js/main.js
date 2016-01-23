$(document).on('ready', function () {

  $('.btn-equals').on('click', function () {
    var $input = $('.field-input').val();
    var $output = $('.field-output');

    $output.append($input);
  });

});
