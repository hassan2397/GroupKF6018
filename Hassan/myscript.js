// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.z = 10;
camera.position.y = 10;

// Render
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// Add mouse/camera controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////LIGHTING//////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ambient light
var lightAmbient = new THREE.AmbientLight( 0x888888 ); 
//scene.add(lightAmbient);

// Point light
var lightThis = new THREE.PointLight(0xffffff);
lightThis.position.set(3, 20, 3);
lightThis.intensity = 1.5;
scene.add(lightThis);

// light visualizer 
var lGeoPoint = new THREE.SphereGeometry(0.5,10,10);
var lMatPoint = new THREE.MeshBasicMaterial({color: "yellow"});
var lMeshPoint = new THREE.Mesh(lGeoPoint, lMatPoint);
scene.add(lMeshPoint);
lMeshPoint.parent = lightThis;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////3D ENVIRONMENT/////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Floor
var gFloor = new THREE.PlaneGeometry(50, 80);
var mFloor = new THREE.MeshPhongMaterial( {color: 0x33FF33, side: THREE.DoubleSide} );
var floor = new THREE.Mesh(gFloor, mFloor);
floor.rotation.x = 3.14/2;
floor.position.z = 0.0;
floor.position.y = -5;
scene.add(floor);

// backWall
var gBackWall = new THREE.PlaneGeometry(50, 20);
var mBackWall = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var backWall = new THREE.Mesh(gBackWall, mBackWall);
backWall.position.z = -40.0;
backWall.position.y = 5;
scene.add(backWall);

// backWall
var gBackWall = new THREE.PlaneGeometry(50, 20);
var mBackWall = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var backWall = new THREE.Mesh(gBackWall, mBackWall);
backWall.position.z = -40.0;
backWall.position.y = 5;
scene.add(backWall);

// sideWall Left
var gSideWallL = new THREE.PlaneGeometry(80, 20);
var mSideWallL = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var sideWallL = new THREE.Mesh(gSideWallL, mSideWallL);
sideWallL.position.z = 0;
sideWallL.position.y = 5;
sideWallL.position.x = -25;
sideWallL.rotation.y = (3.14/2);
scene.add(sideWallL);

// sideWall Right
var gSideWallR = new THREE.PlaneGeometry(80, 20);
var mSideWallR = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var sideWallR = new THREE.Mesh(gSideWallR, mSideWallR);
sideWallR.position.z = 0;
sideWallR.position.y = 5;
sideWallR.position.x = 25;
sideWallR.rotation.y = (3.14/2);
scene.add(sideWallR);

// Target
var gTargetTorso = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso = new THREE.MeshPhongMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso = new THREE.Mesh(gTargetTorso, mTargetTorso);
targetTorso.position.z = backWall.position.z+1;
targetTorso.position.y = 0;
scene.add(targetTorso);
targetTorso.scale.set(2,2,2);

//Target Head
var gTargetHead = new THREE.CircleGeometry(0.6,20);
var mTargetHead = new THREE.MeshPhongMaterial( {color: 0x666666});
var targetHead = new THREE.Mesh(gTargetHead, mTargetHead);
targetHead.position.y = 1.0;
targetHead.position.z = 0.05;
scene.add(targetHead);

// Target 2
var gTargetTorso2 = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso2 = new THREE.MeshPhongMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso2 = new THREE.Mesh(gTargetTorso2, mTargetTorso2);
targetTorso2.position.z = backWall.position.z+1;
targetTorso2.position.y = 10;
scene.add(targetTorso2);
targetTorso2.scale.set(2,2,2);

//Target Head 2
var gTargetHead2 = new THREE.CircleGeometry(0.6,20);
var mTargetHead2 = new THREE.MeshPhongMaterial( {color: 0x666666});
var targetHead2 = new THREE.Mesh(gTargetHead2, mTargetHead2);
targetHead2.position.y = 1.0;
targetHead2.position.z = 0.05;
scene.add(targetHead2);

//parent child relationship between target head and torso
targetHead.parent = targetTorso; 
targetHead2.parent = targetTorso2;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////WEAPONS/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bullets/weapon setup
//https://stackoverflow.com/questions/50965025/three-js-shooting-bullet


var weaponRH = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 1), new THREE.MeshBasicMaterial({color:  "green"}));
weaponRH.position.set(0,0,0);
scene.add(weaponRH);

var weaponLH = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 1), new THREE.MeshBasicMaterial({color: "red"}));
weaponLH.position.set(0,0,0);
scene.add(weaponLH);

var bulletsRH = [];
var bulletsLH = [];

/*
//control via spacebar on keyboard
window.addEventListener("keypress", onSpacePressed);
function onSpacePressed() {
	let bullet = new THREE.Mesh(new THREE.SphereGeometry(0.25, 4, 4), new THREE.MeshBasicMaterial({color: "aqua"}));
	bullet.position.copy(camera.getWorldPosition()); // start position - tip of weapon;
	bullet.quaternion.copy(camera.quaternion); // apply the camera's quaternion
	scene.add(bullet);
	bullets.push(bullet);
}
*/


//speed of the bullets
var speed = 15;
//clock 
var clock = new THREE.Clock();
//fire boolean flag
var fire = false;

//render the bullets and move them along local z axis
(function render() {
	requestAnimationFrame (render);
	delta = clock.getDelta();
	for(let i =0; i< bulletsRH.length; i++)
	{
		// move along the local z axis
		bulletsRH[i].translateZ(-speed * delta); 
		// move along the local z axis
		bulletsLH[i].translateZ(-speed * delta);	
	}
	renderer.render(scene, camera);
})()


//variable to store the time of collision between each target and a bullet
var lastTimeCollidedTarget1 = 0;
var lastTimeCollidedTarget2 = 0;

//radius of the ball distance
var bulletRadiusDistance = 40;
//variables to store collision result
var bCollideTarget;
var bCollideTarget2;

//score of the shooting minigame
var shootingScore = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////ANIMATION////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//frame count
var iFrame = 0;

// The animate function: called every frame
function animate()
{
	requestAnimationFrame(animate);

	//move targets using sigmoid functions
	targetTorso.position.x = Math.sin(iFrame/120) * 20;
	targetTorso2.position.x = Math.cos(iFrame/60) * 20;
	
	if(targetTorso.material.color.getHexString() == "ff0000")
		targetTorso.rotation.y = 0;
	else
		targetTorso.rotation.y +=0.1;
	if(targetTorso2.material.color.getHexString() == "ff0000")
		targetTorso2.rotation.y = 0;
	else
		targetTorso2.rotation.y +=0.1;

//if weapon is fired, create bullets for the gun
	if(fire && iFrame%5==0)
{
	let bulletRH = new THREE.Mesh(new THREE.SphereGeometry(0.25, 4, 4), new THREE.MeshBasicMaterial({color: "green"}));
	bulletRH.position.copy(weaponRH.getWorldPosition()); // start position - tip of weapon;
	bulletRH.quaternion.copy(weaponRH.quaternion); // apply the camera's quaternion
	scene.add(bulletRH);
	bulletsRH.push(bulletRH);
	
	let bulletLH = new THREE.Mesh(new THREE.SphereGeometry(0.25, 4, 4), new THREE.MeshBasicMaterial({color: "red"}));
	bulletLH.position.copy(weaponLH.getWorldPosition()); // start position - tip of weapon;
	bulletLH.quaternion.copy(weaponLH.quaternion); // apply the camera's quaternion
	scene.add(bulletLH);
	bulletsLH.push(bulletLH);

}

//Collisions between bullets and targets.
	for(let i = 0; i < bulletsRH.length; i++)
	{
		//the distance between the bullets and the targets
		var fDistanceBetweenTarget = Math.sqrt(  
		Math.pow((bulletsRH[i].position.x - targetTorso.position.x), 2) +
		Math.pow((bulletsRH[i].position.y - targetTorso.position.y),2) +
		Math.pow((bulletsRH[i].position.z - targetTorso.position.z),2)
		);
		var fDistanceBetweenTarget2 = Math.sqrt(  
		Math.pow((bulletsRH[i].position.x - targetTorso2.position.x), 2) +
		Math.pow((bulletsRH[i].position.y - targetTorso2.position.y),2) +
		Math.pow((bulletsRH[i].position.z - targetTorso2.position.z),2)
		);
		
		var fDistanceBetweenTarget3 = Math.sqrt(  
		Math.pow((bulletsLH[i].position.x - targetTorso.position.x), 2) +
		Math.pow((bulletsLH[i].position.y - targetTorso.position.y),2) +
		Math.pow((bulletsLH[i].position.z - targetTorso.position.z),2)
		);
		var fDistanceBetweenTarget4 = Math.sqrt(  
		Math.pow((bulletsLH[i].position.x - targetTorso2.position.x), 2) +
		Math.pow((bulletsLH[i].position.y - targetTorso2.position.y),2) +
		Math.pow((bulletsLH[i].position.z - targetTorso2.position.z),2)
		);
		
		//radius of the collision boolean
		var fSumOfRadius = 5;
		bCollideTarget = fDistanceBetweenTarget < fSumOfRadius;
		bCollideTarget = fDistanceBetweenTarget3 < fSumOfRadius;
		bCollideTarget2 = fDistanceBetweenTarget2 < fSumOfRadius;
		bCollideTarget2 = fDistanceBetweenTarget4 < fSumOfRadius;
		
		//If collision between the bottom target and ball is true
		if (bCollideTarget)
		{  
			//store time collision occurred with frame number
			lastTimeCollided1 = iFrame;
			//set colour of target to red
			targetTorso.material.color.setHex(0xFF0000);
			//increment score
			shootingScore +=1;
		}
		else if(targetTorso.material.color.getHexString() == "ff0000" && iFrame - lastTimeCollided1 > 60)
		{
			 targetTorso.material.color.setHex(0xAAAAAA);
		}
		//If collision between the top target and ball is true
		if (bCollideTarget2)
		{
			//store time collision occurred with frame number
			lastTimeCollided2 = iFrame;
			//set colour of target to red
			targetTorso2.material.color.setHex(0xFF0000);
			//increment score
			shootingScore +=1;
		}
		else if(targetTorso2.material.color.getHexString() == "ff0000" && iFrame - lastTimeCollided2 > 60)
		{
			 targetTorso2.material.color.setHex(0xAAAAAA);
		}
		
		//removing bullets after certain radius distance for better performance
		if(bulletsRH[i].position.x < -bulletRadiusDistance || bulletsRH[i].position.x > bulletRadiusDistance 
		|| bulletsRH[i].position.y < -bulletRadiusDistance || bulletsRH[i].position.y > bulletRadiusDistance
		|| bulletsRH[i].position.z < -bulletRadiusDistance || bulletsRH[i].position.z > bulletRadiusDistance)
		{
			scene.remove(bulletsRH[i]);
			bulletsRH[i].material.dispose();
			bulletsRH[i].geometry.dispose();
		}
		if(bulletsLH[i].position.x < -bulletRadiusDistance || bulletsLH[i].position.x > bulletRadiusDistance 
		|| bulletsLH[i].position.y < -bulletRadiusDistance || bulletsLH[i].position.y > bulletRadiusDistance
		|| bulletsLH[i].position.z < -bulletRadiusDistance || bulletsLH[i].position.z > bulletRadiusDistance)
		{
			scene.remove(bulletsLH[i]);
			bulletsLH[i].material.dispose();
			bulletsLH[i].geometry.dispose();
		}
	}
	
	//add the updated score to the page
	document.getElementById("score").innerText = "Score: " + shootingScore;

/*	
// get json
 if (jsonFrm>0) {
 getBodies(jsonMotion[iFrame]);
 iFrame ++;
 iFrame = iFrame % jsonFrm; // keep looping the frames
 }
 */
	iFrame++;
   	renderer.render(scene, camera);
}
animate();


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////KINECTRON CODE STARTS HERE/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

////JSON Initialize kinectron
//kinectron = new Kinectron(); // Define and create an instance of kinectron

// Initialize Kinectron
kinectron = new Kinectron("192.168.60.56"); // Define and create an instance of kinectron
kinectron.makeConnection(); // Create connection between remote and application
kinectron.startTrackedBodies(getBodies); // Start tracked bodies and set callback

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////KINECT MESHES//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
// Add a ball for the left hand
var gLH= new THREE.SphereGeometry(0.2, 18, 18);
var mLH = new THREE.MeshPhongMaterial( { color: 0xFF0000 } ); 
var meshLH = new THREE.Mesh(gLH, mLH);
scene.add(meshLH);

// Add a ball for the right hand
var gRH= new THREE.SphereGeometry(0.2, 18, 18);
var mRH = new THREE.MeshPhongMaterial( { color: 0x00CCCC } ); 
var meshRH = new THREE.Mesh(gRH, mRH);
scene.add(meshRH);
*/

// Add a ball for the head
var gHead= new THREE.SphereGeometry(0.2, 18, 18);
var mHead = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.75, emissive: "grey"} ); 
var meshHead = new THREE.Mesh(gHead, mHead);
scene.add(meshHead);

// Add a cube for the spine
var gSpine= new THREE.BoxGeometry(0.3,1,0.2);  
var mSpine = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.75, emissive: "grey"} ); 
var meshSpine = new THREE.Mesh(gSpine, mSpine);
scene.add(meshSpine);

// Add a ball for the left foot
var gLF= new THREE.SphereGeometry(0.2, 18, 18);
var mLF = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.75, emissive: "grey"} ); 
var meshLF= new THREE.Mesh(gLF, mLF);
scene.add(meshLF);

// Add a ball for the right foot
var gRF= new THREE.SphereGeometry(0.2, 18, 18);
var mRF = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.75, emissive: "grey"} ); 
var meshRF= new THREE.Mesh(gRF, mRF);
scene.add(meshRF);


// The getBodies callback function: called once every time kinect obtain a frame
function getBodies(skeleton) 
{ 
	//tracking geometry onto joints
	/*
	meshLH.position.x = skeleton.joints[kinectron.HANDLEFT].cameraX;
	meshLH.position.y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	meshLH.position.z = skeleton.joints[kinectron.HANDLEFT].cameraZ;
	
	meshRH.position.x = skeleton.joints[kinectron.WRISTRIGHT].cameraX;
	meshRH.position.y = skeleton.joints[kinectron.WRISTRIGHT].cameraY;	
	meshRH.position.z = skeleton.joints[kinectron.WRISTRIGHT].cameraZ;
	*/
	
	meshHead.position.x = skeleton.joints[kinectron.HEAD].cameraX;
	meshHead.position.y = skeleton.joints[kinectron.HEAD].cameraY;
	meshHead.position.z = skeleton.joints[kinectron.HEAD].cameraZ;
	
	meshSpine.position.x = skeleton.joints[kinectron.SPINEMID].cameraX;
	meshSpine.position.y = skeleton.joints[kinectron.SPINEMID].cameraY;
	meshSpine.position.z = skeleton.joints[kinectron.SPINEMID].cameraZ;
	
	meshLF.position.x = skeleton.joints[kinectron.FOOTLEFT].cameraX;
	meshLF.position.y = skeleton.joints[kinectron.FOOTLEFT].cameraY;
	meshLF.position.z = skeleton.joints[kinectron.FOOTLEFT].cameraZ;

	meshRF.position.x = skeleton.joints[kinectron.FOOTRIGHT].cameraX;
	meshRF.position.y = skeleton.joints[kinectron.FOOTRIGHT].cameraY;
	meshRF.position.z = skeleton.joints[kinectron.FOOTRIGHT].cameraZ;
	
	//weapon tracking onto kinect joints
	weaponRH.quaternion.set(
	skeleton.joints[kinectron.HANDRIGHT].orientationX,
	skeleton.joints[kinectron.HANDRIGHT].orientationY,
	skeleton.joints[kinectron.HANDRIGHT].orientationZ,
	skeleton.joints[kinectron.HANDRIGHT].orientationW);
	
	weaponLH.quaternion.set(
	skeleton.joints[kinectron.HANDRIGHT].orientationX,
	skeleton.joints[kinectron.HANDRIGHT].orientationY,
	skeleton.joints[kinectron.HANDRIGHT].orientationZ,
	skeleton.joints[kinectron.HANDRIGHT].orientationW);
	
	weaponRH.position.x = skeleton.joints[kinectron.HANDRIGHT].cameraX +2;
	weaponRH.position.y = skeleton.joints[kinectron.HANDRIGHT].cameraY;
	weaponRH.position.z = skeleton.joints[kinectron.HANDRIGHT].cameraZ;

	weaponLH.position.x = skeleton.joints[kinectron.HANDLEFT].cameraX -2;
	weaponLH.position.y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	weaponLH.position.z = skeleton.joints[kinectron.HANDLEFT].cameraZ;	
	
	
	//filtering
	
	
	

//FPS camera 
	//camera.up = new THREE.Vector3(0,0,1);
	camera.position.set(skeleton.joints[kinectron.HEAD].cameraX,1,skeleton.joints[kinectron.HEAD].cameraZ+5);
	camera.lookAt(skeleton.joints[kinectron.HEAD].cameraX, skeleton.joints[kinectron.HEAD].cameraY +0.75, skeleton.joints[kinectron.HEAD].cameraZ);
	
    var fDistanceWithFeet = Math.sqrt(
	Math.pow((skeleton.joints[kinectron.FOOTLEFT].cameraX - skeleton.joints[kinectron.FOOTRIGHT].cameraX),2) +
	Math.pow((skeleton.joints[kinectron.FOOTLEFT].cameraY - skeleton.joints[kinectron.FOOTRIGHT].cameraY),2) +
	Math.pow((skeleton.joints[kinectron.FOOTLEFT].cameraZ - skeleton.joints[kinectron.FOOTRIGHT].cameraZ),2));
	
	
	//sum of radius between the right foot and left foot;
	var fSumOfRadius = 0.25;

    if(fDistanceWithFeet < fSumOfRadius)
    {
    	fire = true;
    }
	else
		fire = false;

}

/*
////////////////////////////////////////////////////////////////////////////////////
//////////////////////READING FROM JSON MOTION FILE/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
var jsonFrm = 0;
var jsonMotion = null;

// reading json file
readTextFile("motion.json", function(text){
 jsonMotion = JSON.parse(text);
 var count = Object.keys(jsonMotion).length;
 console.log(count);
 jsonFrm = count;
 iFrame = 0;
});
function readTextFile(file, callback) {
 var rawFile = new XMLHttpRequest();
 rawFile.overrideMimeType("application/json");
 rawFile.open("GET", file, true);
 rawFile.onreadystatechange = function() {
 if (rawFile.readyState === 4) {//} && rawFile.status == "200") {
 callback(rawFile.responseText);
 }
 }
 rawFile.send(null);
}
*/