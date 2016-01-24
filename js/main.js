var $output = $('.field-output');
var $input = $('.field-input');





function empty(param) {
  if (  !(  $output.is(':empty')  )  ) {
    $output.empty();
    $input.val('');
  };
  console.log('empty')
};

function addOutput(answer) {
  $output.empty();
  $output.append(answer);
  console.log(answer);
};






$('.number').on('click', function (){
  empty();

  var $this = $(this)
  var value = $this.attr('value');
  var inputval = $input.val();

  $input.val(inputval + value);
  console.log(value);
});


$('.operation').on('click', function () {
  empty();

  var $this = $(this)
  var value = $this.attr('value');
  var inputval = $input.val();

  $input.val(inputval + value);
  console.log(value);
});

$('canvas').on('click', function () {
  $('.graph').hide();
});
