video="";
Status="";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
}

function draw(){
    image(video,0,0,280,280);
}


function start(){
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects ";
}

function modelLoaded(){
    console.log("model Loaded!!");
    Status =true;
    video.loop();
    video.speed(1);
    video.volume(0);
}