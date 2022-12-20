function preload() {
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}
function draw() {
    image(video, 72, 50, 500, 400);
    fill('red');
    stroke('red');
    circle(18, 18, 30);
    circle(619, 18, 30);
    circle(619, 462, 30);
    circle(18, 462, 30);
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
function take_snapshot(){
    save('student_name.png');
}