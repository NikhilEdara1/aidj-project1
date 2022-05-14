song1 = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song1status = "";
song2status = "";
function preload(){
    song1 = loadSound("infinity.mp3");
    song2 = loadSound('eminem.mp3');
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(650, 220);
    video = createCapture(VIDEO);
    video.hide();
    x = ml5.poseNet(video, modeloaded);
    x.on('pose', gotposes);
}

function modeloaded(){
    console.log("AI DJ MUSIC APP™®© IS READY TO FUNCTION!");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        rightWristY = result[0].pose.rightWrist.y;
        leftWristY = result[0].pose.leftWrist.y;
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
       scoreLeftWrist = result[0].pose.keypoints[9].score;
       scoreRightWrist = result[0].pose.keypoints[10].score;
        console.log("rightwristx ", rightWristX, "y ", rightWristY, "leftwristx ", leftWristX, "y", leftWristY);
    }
}
function draw(){
    image(video, 0, 0, 600, 500);
    stroke("#00FF00");
    fill("#FF0000");
    song1status = song1.isPlaying();
    song2status = song2.isPlaying();
    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        song1.stop();
        if(song2status = "false"){
            song2.stop();
            song2.play();
            document.getElementById("naM").innerHTML = "Song name: Till i collapse";
        }
    }
    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1status = "false"){
            song1.stop();
song1.play();
document.getElementById("naM").innerHTML = "Song name: infinity";
    }
    }
    
}