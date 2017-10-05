var arr = ["apple", "apple", "mouse", "dog", "mouse"];
console.log(arr);

function removedups(arr) {
    var NewArray = [];
    for (i = 0; i < arr.length; i++) {
        var word = arr[i];
        console.log(word);
        //do not go pass position of prevoius word
        for (j = 0; j < i; j++) {
            var test = arr[j];
            console.log(test);
            if (word != test) {
                NewArray.push(word);
            }
        }

    }
    return NewArray;
}



var item = removedups(arr);
console.log(item);


var value = 0;
var car = 0;

function setup() {
    createCanvas(500, 400);
    // var x1 = randxloc();
    // var x2 = randxloc();
    // var x3 = randxloc();
    // var x4 = randxloc();

};
var y = 0;

var x = 0;

var x1 = randxloc();
var x2 = randxloc();
var x3 = randxloc();
var x4 = randxloc();
var y1 = Math.floor((Math.random() * 250) + 30);
var y2 = Math.floor((Math.random() * 250) + 30);
var y3 = Math.floor((Math.random() * 250) + 30);
var y4 = Math.floor((Math.random() * 250) + 30);

function draw(yy) {
    if (x < 285) {
        x += 3;
    } else {
        x = -250;
    }
    background('#18BCF7');

    //car
    CreateTruck(x);

    //x,y,w,h
    //highway
    fill(88, 72, 5);
    rect(0, 310, 500, 20);
    fill(205, 133, 63);
    rect(0, 330, 500, 70);

    //sun
    fill('yellow');
    ellipse(500, 0, 250, 250);

    CreateSunlines(x - 300);
    CreateSunlines(x - 275);
    CreateSunlines(x - 250);
    CreateSunlines(x - 225);
    CreateSunlines(x - 200);
    CreateSunlines(x - 175);
    CreateSunlines(x - 150);
    CreateSunlines(x - 125);
    CreateSunlines(x - 100);
    CreateSunlines(x - 75);
    CreateSunlines(x - 50);
    CreateSunlines(x - 25);
    CreateSunlines(x);
    CreateSunlines(x + 25);
    CreateSunlines(x + 50);
    CreateSunlines(x + 75);
    CreateSunlines(x + 100);
    CreateSunlines(x + 125);
    CreateSunlines(x + 150);
    CreateSunlines(x + 175);
    CreateSunlines(x + 200);
    CreateSunlines(x + 225);
    CreateSunlines(x + 250);
    CreateSunlines(x + 275);
    CreateSunlines(x + 300);
    CreateSunlines(x + 325);
    CreateSunlines(x + 350);
    CreateSunlines(x + 375);
    CreateSunlines(x + 400);
    CreateSunlines(x + 425);
    CreateSunlines(x + 450);
    CreateSunlines(x + 475);
    //keeps Rest of the Lines Black
    stroke('black');

    // fill(value);
    // rect(25, 25, 50, 50);
    //Create 4 diferent birds that don't overlap
    CreateBird((x + x1), y1);
    CreateBird((x + x2), y2);
    CreateBird((x + x3), y3);
    CreateBird((x + x4), y4);



}

function randxloc() {
    x = Math.floor((Math.random() * 500) + 0);
    return x;
}


// function keyPressed() {
//     if (keyCode === LEFT_ARROW) {
//         value = 255;
//     } else if (keyCode === RIGHT_ARROW) {
//         value = 0;
//     }
// }

function CreateSunlines(x) {
    //Sun Rays
    stroke('yellow');
    //x1,y1,x2,y2
    line(500, 0, 300 + x, 50 + x);
}

function CreateTruck(x) {
    //x,y,w,h
    //cab
    fill('blue');
    rect(235 + x, 240, 30, 30);
    //cab window
    fill('gray');
    rect(245 + x, 245, 20, 20);
    //cab body
    fill('blue');
    rect(200 + x, 260, 80, 30);

    //x,y,w,h
    //outerwheel
    fill('black');
    ellipse(215 + x, 300, 20, 20);
    ellipse(265 + x, 300, 20, 20);
    //inner wheel
    fill('grey');
    ellipse(215 + x, 300, 15, 15);
    ellipse(265 + x, 300, 15, 15);
    //Hub Cap wheel
    fill('black');
    ellipse(215 + x, 300, 5, 5);
    ellipse(265 + x, 300, 5, 5);
}

function CreateBird(x, yy) {
    xx = 0;
    //bird
    //x y w h
    fill('orange');

    //body 
    ellipse((xx + 350) + x, yy, 30, 15);
    //head
    ellipse((xx + 365) + x, yy, 15, 15);
    fill('black');
    //eye
    ellipse((xx + 366) + x, yy, 3, 3);
    //wing
    //x y
    if (x % 2 === 0) {
        ellipse(350 + x, yy, 15, 30);
    }

}