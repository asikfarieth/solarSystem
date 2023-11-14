
// Further idea: Added another different sized moon that rotates around the earth with different speed and distance.
var speed;

function setup() {
    createCanvas(1500, 1200);
}

function draw() {
    background(0);
    speed = frameCount;

    push();
    translate(width/2, height/2);
rotate(radians(speed/3));
    celestialObj(color(255,150,0), 200); // SUN
    pop();

    push(); // EARTH
    translate(width/2, height/2);
    rotate(radians(speed));
    translate(300, 300);
    rotate(radians(speed));
    celestialObj(color(0,0,255), 80);

    // push();
    // rotate(radians(speed*2));
    // translate(100,100);
    // rotate(radians(-speed*2));
    // celestialObj(color(255,255,255), 30);
    // pop();
    

    pop();

    // push();
    // translate(width/2, height/2);
    // rotate(radians(speed));
    // translate(150, 150);
    // rotate(radians(speed));
    // rotate(radians(-speed*2));
    // translate(50,50);
    // celestialObj(color(255,255,255), 30);

    // // push();
    
    // // rotate(radians(speed));
    // // translate(2,2);
    // // celestialObj(color(255,255,255),10);
    // // pop();

    // pop();

    
    // push();
    // translate(width/2, height/2);
    // rotate(radians(speed));
    // translate(150, 150);
    // rotate(radians(speed));
    // //rotate(radians(-speed*3));
    // //translate(-65,-65);
    // celestialObj(color(255,255,255), 40);
    // pop();

    push(); // MOON #1
    translate(width/2, height/2);
    rotate(radians(speed));
    translate(300, 300);
    rotate(radians(-speed*2));
    translate(100,100);
    celestialObj(color(255,255,255), 40);
pop();

push(); // MOON #2
translate(width/2, height/2);
rotate(radians(speed));
translate(300, 300);
rotate(radians(-speed*3));
translate(150,150);
celestialObj(color(255,255,255), 20);
pop();

}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
