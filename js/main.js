var $output = $('.field-output');
var $input = $('.field-input');
vex.defaultOptions.className = 'vex-theme-default';

function empty(param) {
    if (!($output.is(':empty'))) {
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

$('.number').on('click', function () {
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


$('.btn-graph').on('click', function () {
    vex.dialog.prompt({
        message: 'Enter an equation:',
        placeholder: 'ax^2+bx+c',
        callback: function (value) {
            functionPlot({
                target: '.graph-here',
                data: [{ fn: value }]
            });
            $('.graph-equation').empty();
            $('.graph-equation').append('y=' + value)
            $('.graph').show();
        }
    });
});


$('.graph').on('click', function () {
    $('.graph').hide();
});
