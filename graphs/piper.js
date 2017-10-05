/*jshint esversion: 6 */
const BORDER = 10;
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;
const BELOW_TITLE = CANVAS_WIDTH - CANVAS_HEIGHT - BORDER;
const TRI_WIDTH = BELOW_TITLE;
//aways Centered
const X_1 = (CANVAS_WIDTH / 2); //middle
const X_2 = ((CANVAS_WIDTH / 2) - TRI_WIDTH); //left
const X_3 = ((CANVAS_WIDTH / 2) + TRI_WIDTH); //right

const Y_1 = BELOW_TITLE; //top
const Y_2 = CANVAS_HEIGHT - BORDER; //bottom
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

function mouseClicked() {
    var imgIndex = findindex(mouseX, mouseY);
    console.log(imgIndex);
}

function findindex(x, y) {
    var clickedx = x; //(i % ROWS) * IMAGE_WIDTH;
    var clickedy = y; //Math.floor(i / ROWS) * IMAGE_HEIGHT;

    if (insideTriangle(clickedx, clickedy)) {
        return 1;
    }

    return -1;
}

function insideTriangle(clickedx, clickedy) {
    var triangleArea = tArea(X_1, X_2, X_3, Y_1, Y_2, Y_3);
    var A = tArea(clickedx, X_2, X_3, clickedy, Y_2, Y_3);
    var B = tArea(X_1, clickedx, X_3, Y_1, clickedy, Y_3);
    var C = tArea(X_1, X_2, clickedx, Y_1, Y_2, clickedy);
    return (triangleArea === A + B + C);
}

function tArea(x1, x2, x3, y1, y2, y3) {
    area = Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
    return area;
}