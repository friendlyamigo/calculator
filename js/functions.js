$('.function').on('click', function () {
  var $this = $(this);
  var value = $this.attr('value');






  // clear
  if (value == 'clear') {
    $input.val('');
    $output.empty();
    console.log('clear');
  }





  // equals
  else if  (value == 'equals') {
    var input = $input.val();
    var withPi = piFun(input);
    var answer = eval(withPi);

    $output.empty();
    $output.append(answer)

    addOutput(answer);

    console.log(input);
  }





  // negate
  else if (value == 'negate') {
    empty();

    var $value = $input.val();

    if ($value.slice(-1) != '-') {
      $input.val($value + '-');
    } else {
      $input.val($value.substring(0, $value.length - 1));
    };

    console.log('negate');
  }





  // pi
  else if (value == 'pi') {
    empty();

    var $value = $input.val();

    $input.val($value + 'π');

    console.log('pi');
  }





  else {

  };

});
