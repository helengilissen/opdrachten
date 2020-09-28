//3A: Squares

function setup () {
  createCanvas (500,500)
  background (240)
}

function draw () {
  //kleur
  noStroke (0)
  fill (220,50,50)
  rect (50,50,50,50)

  fill (255,255,100)
  rect (150,50,50,50)

  fill (100,255,255)
  rect (250,50,50,50)

  fill (130,240,110)
  rect (350,50,50,50)

  //alpha
  stroke (1)
  fill (255)
  rect (50,200,50,50)

  fill (220)
  rect (150,200,50,50)

  fill (170)
  rect (250,200,50,50)

  fill (110)
  rect (350,200,50,50)
}
