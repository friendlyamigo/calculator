vex.defaultOptions.className = 'vex-theme-default';
var a, b, c;


// to get values
$('.btn-graph').on('click', function () {

  vex.dialog.prompt({
    message: 'Value for c:',
    placeholder: 'value',
    callback: function (value) {
      c = parseInt(value);
      $('.graph').show();
    }
  });

  vex.dialog.prompt({
    message: 'Value for b:',
    placeholder: 'value',
    callback: function (value) {
      b = parseInt(value);
    }
  });

  vex.dialog.prompt({
    message: 'Value for a:',
    placeholder: 'value',
    callback: function (value) {
      a = parseInt(value);
    }
  });
});

void setup() {
  size(800, 402);
  frameRate(50);
};

void draw()
{
  background(255,255,255);


  var x = -10;
  var y;

  // Actual quadratic equation
  for(var i = 0;i<=20;i++)
  {
    stroke(0,0,0);
    strokeWeight(5);
    y = a*x*x+b*x+c;
    y2 = a*(x+1)*(x+1)+b*(x+1)+c;
    // grid 0,0 is -40, 18
    //point(x, y)
    pushMatrix();
    translate(400, 200);
    point(x*20,y*-10);
    line(x*20, y*-10, (x+1)*20, y2*-10);
    popMatrix();
    resetMatrix();
    x+=1;
  }

  // horizontal axis, x-axis, blue numbers
  for(var i = -40;i<=40;i+=2)
  {
    strokeWeight(1);
    stroke(0,0,0);
    line(0, i*20,800,i*20);

    fill(0,17,255);
    textSize(10);
    text(i, i*20+400, 200);
  }

  // vertical axis, y-axis, red numbers
  for(var i =-40;i<=40;i+=2){
      strokeWeight(1);
      stroke(0,0,0);
      line(i*10+400,0, i*10+400,400);

      fill(255,0,0);
      textSize(10);
      if(i<22){
      text(i*-1, 400, i*10+200);
    }
  }
}
