$(document).on('ready', function () {

  var $output = $('.field-output');
  var $input = $('.field-input')

  function addOutput(answer) {
    $output.empty();
    $output.append(answer);
    console.log(answer);
  };


  $('.btn-equals').on('click', function () {
    var input = $input.val();

    var answer = eval(input);

    addOutput(answer);
  });


  $('.number').on('click', function (){
    var $this = $(this)
    var value = $this.attr('value');
    var inputval = $input.val();

    $input.val(inputval + value);
    console.log(value);
  });


  $('.operation').on('click', function () {
    var $this = $(this)
    var value = $this.attr('value');
    var inputval = $input.val();

    $input.val(inputval + value);
    console.log(value);
  });

});
