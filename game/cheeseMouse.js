var cavnasheight = 1000;
var cavnaswidth = 800;
var up = false;
var down = false;
var right = false;
var left = false;
var x = 0;
var y = 0;
var movement = 'stop';

function setup() {
    createCanvas(cavnaswidth, cavnasheight);
};

function draw() {
    background('yellow');
    maze();
    // if (y < 250) {

    // }


    movement = keyPressed()
    if (movement === "up") {
        if (-325 < y) {
            y -= 3;
        }
    }
    if (movement === "down") {
        if (325 > y) {
            y += 3;
        }
    } else if (movement === "right") {
        if (x < 325) {
            x += 3;
        }

    } else if (movement === "left") {
        if (x > -325) {
            x -= 3;
        }
    }
    mouse(x, y);

}
//mouse
function mouse(x, y) {
    fill('brown');
    ellipse(400 + x, 600 + y, 40, 40);

};

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        return "left";
    } else if (keyCode === RIGHT_ARROW) {
        return "right";
    } else if (keyCode === DOWN_ARROW) {
        return "down";
    } else if (keyCode === UP_ARROW) {
        return "up";
    };
};

function maze() {
    fill('black');
    //x,y,w,h
    //top 
    rect(0, 200, 800, 50);
    //bottom
    rect(0, 950, 800, 50);
    //left
    rect(0, 600, 250, 50);
    //right
    rect(0, 500, 150, 50);
    rect(550, 600, 250, 50);
    rect(0, 500, 150, 50);
    rect(650, 500, 150, 50);
}