
var isScrolling = false;
var scrolling = 0;
let timeStart = 0;

var particleBackground = true;
// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(1,6);
        this.r_ = random(255); // r is a random number between 0 - 255
        this.g_ = random(100,200); // g is a random number betwen 100 - 200
        this.b_ = random(100); // b is a random number between 0 - 100
        this.a_ = random(200,255); // a is a random number between 200 - 255
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        fill(this.r_, this.g_, this.b_, this.a_);
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    }
    
    // an array to add multiple particles
    let particles = [];
    
    function setup() {
      var canvas = createCanvas(windowWidth, windowHeight);
      canvas.style('display', 'block');
      canvas.position(0,0);
      canvas.style('z-index',-1);
      for(let i = 0;i<width/2;i++){
        particles.push(new Particle());
      }
      timeStart = millis();
    }
    
    function draw() {
      background(1000);
      if (particleBackground) {
        if (mouseIsPressed) {
          for(let i = 0;i<particles.length;i++) {
              particles[i].createParticle();
              particles[i].moveParticle();
          }
        }
      }
    }
    
    function keyPressed() {
      if (key == ' ') {
        if (particleBackground) {
            particleBackground = false;
        } else {
            particleBackground = true;
        }
      }
    }

    function windowResized() {
        resizeCanvas(windowWidth, document.body.scrollHeight);
    }