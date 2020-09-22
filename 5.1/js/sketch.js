// // 3: maak 2 cirkels naast elkaar

// var ellipseWidth = 40;
// var ellipseHeight = 40;
// //var ellipseX = 50;
// //var ellipseY = 50;

// function setup() {
//   createCanvas(100, 200);
//   strokeWeight(1); //dikte van lijnen en punten
//   point(20,5);
//   point(5,20);
// }

// function draw() {
//   ellipse(25, 50, ellipseWidth, ellipseHeight);
//   ellipse(75, 50, ellipseWidth, ellipseHeight);
// }



// //3A: Squares

// function setup () {
//   createCanvas (500,500)
//   background (240)
// }

// function draw () {
//   //kleur
//   noStroke (0)
//   fill (220,50,50)
//   rect (50,50,50,50)

//   fill (255,255,100)
//   rect (150,50,50,50)

//   fill (100,255,255)
//   rect (250,50,50,50)

//   fill (130,240,110)
//   rect (350,50,50,50)

//   //alpha
//   stroke (1)
//   fill (255)
//   rect (50,200,50,50)

//   fill (220)
//   rect (150,200,50,50)

//   fill (170)
//   rect (250,200,50,50)

//   fill (110)
//   rect (350,200,50,50)
// }



// // 3B: Funny pan flute

// function setup () {
//   createCanvas (300,300)
//   background (240)
// }

// function draw () {
//     strokeWeight (1)
//     stroke (255,150,0)
//     line (50,50, 50, 250)

//     strokeWeight (5)
//     stroke (255,150,0)
//     line (100 ,50, 100, 200, 100)

//     strokeWeight (1)
//     stroke (255,150,0)
//     line (150,50, 150, 150)

//     strokeWeight (5)
//     stroke (255,150,0)
//     line (200,50, 200, 100, 100)
// }



// // Opdracht 3C: Circles for the win

// function setup () {
//   createCanvas (400,400)
//   background (240)
// }

// function draw () {
//     strokeWeight (1)
//     stroke (0)
//     line (70, 70, 275, 300)

//     fill (200,150,50)
//     noStroke ()
//     ellipse (115,115, 115 ,115)

//     fill (255)
//     noStroke ()
//     ellipse (70,70, 90 ,90)
    
//     stroke (0, 125, 0)
//     strokeWeight (5)
//     point (70,70)

//     fill (200)
//     noStroke ()
//     ellipse (275,300, 50 ,50)
    
//     stroke (255, 0, 0)
//     strokeWeight (5)
//     point (275,300)
// }




// // Opdracht 4A: Order matters!

// function setup () {
//   createCanvas (750,750)
//   background (240)
// }

// function draw () {
//     // figuur 1
//     noStroke ()
//     fill (200)
//     rect (50, 75, 200, 200)

//     noStroke ()
//     fill (255,125,50)
//     ellipse (250,175,200,200)

//     fill (255)
//     rect (250,175, 100, 100)

//     fill (200)
//     rect (150,175, 100, 100)

//     stroke (0)
//     strokeWeight (7)
//     point (250,175)

//     // figuur 2
//     noStroke ()
//     fill (255,125,50)
//     ellipse (600,175,200,200)
    
//     noStroke ()
//     fill (200)
//     rect (400,75,200,200)

//     stroke (0)
//     strokeWeight (7)
//     point (600,175)
// }



// // Opdracht 4B: Your own Mondriaan, Composition n i with red and blue 1931 Piet Mondriaan

// function setup () {
//   createCanvas (600,600)
//   background (240)
// }

// function draw () {
//   strokeWeight (15)
//   line (240,0,240,750)

//   line (0,355, 750, 355)

//   line (525,360, 525,600)

//   line (525, 585,250,585)

//   strokeWeight (30)
//   line (700, 460, 535, 460)

//   noStroke ()
//   fill (200,0,0)
//   rect (0,362, 233, 250)

//   fill (0,50,100)
//   rect (532, 362, 150, 83)
// }

// // Opdracht 4C: Scenery
// // Opdracht 4D: Sign your work

// function setup () {
//   createCanvas (800,800)
//   background (43, 76, 100)
// }

// function draw () {

//   textSize(32);
//   fill(0, 102, 153);
//   text('Helen Gilissen', 30, 50);

//   // gebouw 2 (grootste gebouw)
//   // achtergrond
//   noStroke ()
//   fill (70,118,173)
//   rect (390, 35, 155, 765)
//   fill (100, 166, 215)
//   rect (545, 35, 155, 765)

//   // ramen
//   fill (255)
//   rect (410, 80, 270, 30)
//   rect (410, 140, 270, 30)
//   rect (410, 200, 270, 30)
//   rect (410, 260, 270, 30)
//   rect (410, 320, 270, 30)
//   rect (410, 380, 270, 30)
//   rect (410, 440, 270, 30)
//   rect (410, 500, 270, 30)
//   rect (410, 560, 270, 30)
//   rect (410, 620, 270, 30)
    
//   // // gebouw 1 (op een na grootste gebouw)
//   // // basis
//   noStroke()
//   fill (70, 118, 173)
//   rect (50, 235, 285, 600)

//   fill (255)
//   rect (230, 185, 95, 50 )

//   // ramen
//   rect (80, 270, 230, 23)
//   rect (30, 320, 325, 45)
//   rect (70, 770, 245, 45)
//   rect (30, 385, 325, 45)

//   // vierkante raampjes
//   // rij 1
//   rect (90, 460, 40, 50)
//   rect (145, 460, 40, 50)
//   rect (200, 460, 40, 50)
//   rect (255, 460, 40, 50)

//   // rij2
//   rect (90, 525, 40, 50)
//   rect (145, 525, 40, 50)
//   rect (200, 525, 40, 50)
//   rect (255, 525, 40, 50)

//   // rij3
//   rect (90, 590, 40, 50)
//   rect (145, 590, 40, 50)
//   rect (200, 590, 40, 50)
//   rect (255, 590, 40, 50)

//   //  gebouw 4 (kleinste gebouw)
//   // basis
//   noStroke ()
//   fill (100, 166, 215)
//   rect (335, 610, 155, 300)

//   fill (255)
//   rect ( 335, 595, 155, 15)

//   // ramen
//   fill (255)
//   rect ( 335, 650, 130, 25)

//   fill (255)
//   rect ( 335, 700, 130, 25)

//   fill (255)
//   rect ( 335, 750, 130, 25)

//   // gebouw 3 (op een na kleinste gebouw)
//   // basis
//   strokeWeight (5)
//   fill (110, 166, 215)
//   stroke (255)
//   ellipse (675, 435, 150, 150)

//   fill (255)
//   strokeWeight (16)
//   line (550,427, 800, 427) 

//   noStroke()
//   fill (68, 119, 175)
//   rect (550, 435, 250, 400)

//   // ramen
//   fill (255)
//   rect (580, 470, 40, 310)

//   fill (255)
//   rect (630, 470, 40, 310)

//   fill (255)
//   rect (680, 470, 40, 310)

//   fill (255)
//   rect (730, 470, 40, 310)
// }




// // Opdracht 5A: Divide and Conquer

// function setup () {
//   createCanvas (windowWidth/2, windowHeight/2);
//   background (240);
// }

// function draw () {
//   line(0, height /3/1*2, width, height /3/1*2);
//   line(0, height /3, width, height /3);

//   line(width /4, 0, width /4, height);
//   line(width /2/2*3, 0, width /2/2*3, height);
//   line(width /2, 0, width/2, height);
//   line(width, 0, width, height);

//   fill (255,0,0)
//   rect (width / 4, height / 3, width / 4, height /3)
//   rect (width / 2, 0, width / 4, height /3)
//   rect (width /2/2*3, height /3/1*2, width, height /3)
// }



// // Opdracht 5B: Accelerating square

// var rectX = 0;

// function setup () {
// createCanvas (400, 400);
// }

// function draw () {
// background (240);

// fill (255,0,0)
// rect (rectX,150, 50,50)

// rectX = rectX + 1 
// rectX = rectX * 2
// }

// // Opdracht 5C: Resize!

// var rectX = 0;
// var rectY = 0;

// function setup () {
//   createCanvas (400, 400);
// }

// function draw () {
//   background (240);

//   fill (255,0,0)
//   rect (0, 0, rectX,rectY)

//   rectX = rectX + 1
//   rectX = rectX * 2

//   rectY = rectY + 1
//   rectY = rectY * 2
// }



// Opdracht 5D: Opposite squares

var rectX = 0;
var rectY = 600;

function setup () {
  createCanvas (600, 600);
}

function draw () {
  background (240);

  fill (0,255,0)
  rect (rectX,mouseY,50,50)
  rect (rectY,mouseY,50,50)

  rectX = rectX + 2
  rectY = rectY -2
}



// // Opdracht 5E: Using input

// var color1 = (255,0,0)

// function setup () {
//   createCanvas (windowWidth/2, windowHeight/2);
//   background (240);
// }

// function draw () {
//   line(0, height /3/1*2, width, height /3/1*2);
//   line(0, height /3, width, height /3);

//   line(width /4, 0, width /4, height);
//   line(width /2/2*3, 0, width /2/2*3, height);
//   line(width /2, 0, width/2, height);
//   line(width, 0, width, height);

//   fill (color1)
//   rect (width / 4, height / 3, width / 4, height /3)
//   rect (width / 2, 0, width / 4, height /3)
//   rect (width /2/2*3, height /3/1*2, width, height /3)
// }
  
//   function mouseClicked() {
//   color1 (255,0,0)
 

  
// }

  



