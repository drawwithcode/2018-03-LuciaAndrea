function preload(){

}

var colorList = ['#f59200',
                 '#E80C7A',
                 '#5D00FF',
                 '#0080F5'];

function setup() {


    createCanvas(windowWidth, windowHeight);
background(255, 157, 154);
frameRate(200)
}

function draw() {


  var x = random() * width;
    var y = random() * height;
    var r = random() * 110;



          if(random()<0.25){
             fill(colorList[0]);
          }
          else if (random()>0.25 && random()<0.5) {
            fill(colorList[1]);
          }
          else if (random()>0.5 && random()<0.75) {
            fill(colorList[2]);
          }
          else  {
            fill(colorList[3]);
          }

    noStroke();

    ellipse(x, y, r);


}
