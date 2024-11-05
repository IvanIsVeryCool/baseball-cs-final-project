var field;
var cameraPos=[100,1000,1000]
var cameraDir=[0,-15]
function preload(){
    field=loadImage("ohio field.png");
}
function setup(){
    createCanvas(1000,1000,WEBGL);
}
function draw(){
    background(200);
    fill("white")
    rotateZ(-190)
    image (field,0,0,400,400)
    rotateZ(-90)
    camera(cameraPos[0],cameraPos[1],cameraPos[2],cameraPos[0]+cos(cameraDir[0])*(cos(cameraDir[1])*cameraScope),cameraPos[1]-sin(cameraDir[1])*cameraScope,cameraPos[2]-sin(cameraDir[0])*(cos(cameraDir[1])*cameraScope))
}
