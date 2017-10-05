/* 1. Draw multiple cars on a wide road (y-Axis)
 * 2. Animate the cars to race each other at random speeds
 */

var x = 100;
var y = 470;
var car1, car2, car3, car4, car5;
var carSpeeds = [];

function setup() {
    createCanvas(800, 600);
    car1 = new Car('#34d75a', x, 100);
    car2 = new Car('#f4310f', x, 200);
    car3 = new Car('#3137bd', x, 300);
    car4 = new Car('#d716c4', x, 400);
    car5 = new Car('#f1da0c', x, 500);

    for (i = 0; i < 5; i++) {
        carSpeeds.push(Math.round(random(0, 20))); // create random car speeds
    }

}

function draw() {
    background(159, 154, 161);
    car1.drive(carSpeeds[0]);
    car1.render();
    car2.drive(carSpeeds[1]);
    car2.render();
    car3.drive(carSpeeds[2]);
    car3.render();
    car4.drive(carSpeeds[3]);
    car4.render();
    car5.drive(carSpeeds[4]);
    car5.render();
}

class Car {

    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
    }

    drive(speed) {
        this.x += speed;
    }

    render() {
        fill(this.color); // car fill
        noStroke();
        rect(this.x, this.y, 100, 20); // car bottom
        rect(this.x + 20, this.y - 20, 60, 20); // car top
        fill(0, 0, 0); // wheel fill
        ellipse(this.x + 20, this.y + 25, 10); // back wheel
        ellipse(this.x + 80, this.y + 25, 10); // front wheel
    }

}