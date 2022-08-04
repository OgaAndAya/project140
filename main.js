function preload(){
	
}

function setup() {
	canvas = createCanvas(700,600);
	canvas.parent("canvas");

	

	video=createCapture(VIDEO);
	video.size(700,600);
	video.hide();
	poseNet= ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
    
}

function modelLoaded(){
console.log("Pose Net is Initialized");
}
 
function gotPoses(results){
if(results.length>0){
	
}
}






