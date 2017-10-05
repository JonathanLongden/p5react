const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 300;

function Particle(x, y) {
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT / 2;

    this.show = function() {
        fill('orange');
        ellipse(this.x, this.y, 55, 55);
    };
}


function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
    var p = new Particle(mouseX, mouseY);

    background('blue');
    p.show();
}