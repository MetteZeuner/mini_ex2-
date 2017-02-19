function setup() {
createCanvas (600, 400);
}

function draw(){
background(0); 

if (mouseX > 400){
remove(); 
}
      fill (0, 204, 153);  
triangle(240, 340, 300, 230, 360, 340); 
    fill (255, 127, 80);
 //Cartoon sketch    
ellipse (300, 200, 80, 80);
ellipseMode(RADIUS);
 fill (255);
ellipse (285, 190, 10, 10);
ellipseMode(CENTER);
 fill (0);
ellipse (285, 190, 10, 10);
ellipseMode(RADIUS);
 fill(255);
ellipse(315, 190, 10, 10);
ellipseMode(CENTER);
 fill(0);
ellipse (315, 190, 10, 10);
line (300, 190, 308, 210);
line (295, 210, 308, 210);
    
}

