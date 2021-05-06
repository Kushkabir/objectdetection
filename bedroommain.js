img="";
status="";
objects=[];
function preload(){
img=loadImage("bedroom.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:Detecting objects"
}
function draw(){
image(img,0,0,640,420);
if(status!=""){
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Status: object detected";
    fill("#00FF00");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#00FF00");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}

}
function modelloaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}