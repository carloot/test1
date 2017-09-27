function setup() {
  createCanvas(800,800);
 background(100,0,0);
}

function draw() {

  colorMode(HSB);
  strokeWeight(3); //noStroke(); se non voglio contorni
  stroke(20,30,150); 
  //line(67,500,200,500); //line(x,y,x2,y2)
  
  colorMode(RGB);
  fill(100,0,255,135);
  stroke("#00ff00"); //codice colore RGB
  strokeWeight(10);
  //rect(50,250,300,350); //rectangle(x,y (of the upper left square), width, height)
  
  //noFill();
  //stroke(0,255,0,135); //valori RGB, che vanno da 0 a 255 , il quarto valore indica l'Opacità
  //ellipse(x and y of the center of ellipse, width, height)
  //ellipse(200,410,200,600);

  //ellipse(width/2, height/2,150,150); // width/4 e height/2 indicano la posizione del C in base a width e height del foglio
  // si può fare anche(width/4)*3 
  
  //ellipse(mouseX,mouseY,150,150); //il cerchio seguirà il mouse disegnando un sacco di cerchi quindi se non voglio vederli devo mettere un background
  
  line(pmouseX,pmouseY,mouseX,mouseY); //per disegnare
  
}

//la differenza tra setup() e draw() è che quel che metto nel primo viene generato una volta e basta mentre nel secondo le funzioni sono ripetute