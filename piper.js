const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;
const BELOW_TITLE = 200;
const TRI_WIDTH = 300;
//aways Centered
const X_1 = (CANVAS_WIDTH / 2); //middle
const X_2 = ((CANVAS_WIDTH / 2) - TRI_WIDTH); //left
const X_3 = ((CANVAS_WIDTH / 2) + TRI_WIDTH); //right

const Y_1 = BELOW_TITLE; //top
const Y_2 = TRI_WIDTH + BELOW_TITLE; //bottom
const Y_3 = Y_2; //bottom


function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
    background("black");
    title();
    body();
    fill("yellow");
    //(x1,y1,x2,y2,x3,y3)
    triangle(X_1, Y_1, X_2, Y_2, X_3, Y_3);


}

function body() {
    stroke("orange");
    //x1, y1, x2, y2
    line(0, BELOW_TITLE, CANVAS_WIDTH, BELOW_TITLE);
}

function title() {

}