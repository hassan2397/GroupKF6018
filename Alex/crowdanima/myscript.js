// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.z = 100;
camera.position.y = 6;

// Render
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// Ambient light
var lightAmbient = new THREE.AmbientLight( 0x888888 ); 
scene.add(lightAmbient);

// Point light
var lightThis = new THREE.PointLight(0xffffff);
lightThis.position.set(0, 10, 3);
lightThis.intensity = 2;
scene.add(lightThis);

// Floor
var gFloor = new THREE.PlaneGeometry(500, 500);
var mFloor = new THREE.MeshPhongMaterial( {color: 0x33FF33, side: THREE.DoubleSide} );
var floor = new THREE.Mesh(gFloor, mFloor);
floor.rotation.x = 3.14/2;
floor.position.z = 0.0;
floor.position.y = -2.0;
scene.add(floor);

// Wall
var gWall = new THREE.PlaneGeometry(20,20);
var mWall = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var wall = new THREE.Mesh(gWall, mWall);
wall.position.z = -6.0;
scene.add(wall);









// An array of particles
var iNumber = 20;

var geoArray = [];
var matArray = [];
var headArray = [];


var geoArray2 = [];
var matArray2 = [];
var hat1Array = [];


var geoArray3 = [];
var matArray3 = [];
var hat2Array = [];

var geoArray4 = [];
var matArray4 = [];
var glass1Array = [];

var geoArray5 = [];
var matArray5 = [];
var glass2Array = [];

var geoArray6 = [];
var matArray6 = [];
var eye1Array = [];

var geoArray7 = [];
var matArray7 = [];
var eye2Array = [];

var geoArray8 = [];
var matArray8 = [];
var eyelineArray = [];

var geoArray9 = [];
var matArray9 = [];
var bodyArray = [];

var geoArray10 = [];
var matArray10 = [];
var bodylineArray = [];

var geoArray11 = [];
var matArray11 = [];
var bodydownArray = [];

var geoArray12 = [];
var matArray12 = [];
var leg1Array = [];

var geoArray13 = [];
var matArray13 = [];
var leg2Array = [];

var geoArray14 = [];
var matArray14 = [];
var shoesArray = [];

var geoArray15 = [];
var matArray15 = [];
var hand1Array = [];

var geoArray16 = [];
var matArray16 = [];
var hand2Array = [];

var geoArray17 = [];
var matArray17 = [];
var palm1Array = [];

var geoArray18 = [];
var matArray18 = [];
var palm2Array = [];

var geoArray19 = [];
var matArray19 = [];
var beardArray = [];

var geoArray20 = [];
var matArray20 = [];
var mouthArray = [];

var geoArray21 = [];
var matArray21 = [];
var mouth2Array = [];

var geoArray22=[];
var matArray22=[];
var shoulder1Array=[];

var geoArray23=[];
var matArray23=[];
var shoulder2Array=[];

var geoArray24=[];
var matArray24=[];
var joint1Array=[];

var geoArray25=[];
var matArray25=[];
var joint2Array=[];



// Create the particles
for (var i=0; i<iNumber; i++)
{
	
	geoArray.push(new THREE.BoxGeometry(1.7, 1.7, 1.7));
    matArray.push(new THREE.MeshPhongMaterial({color:0xe0bea5}))
    headArray.push(new THREE.Mesh(geoArray[i], matArray) );	

	geoArray2.push(new THREE.BoxGeometry(2.5, 0.2, 2.5));
    matArray2.push(new THREE.MeshPhongMaterial({color:0x000000}))
    hat1Array.push(new THREE.Mesh(geoArray2[i],matArray2));


	geoArray3.push(new THREE.BoxGeometry(1, 1, 1));
    matArray3.push(new THREE.MeshPhongMaterial({color:0x000000}))
    hat2Array.push(new THREE.Mesh(geoArray3[i],matArray3));


	geoArray4.push(new THREE.BoxGeometry(0.7, 0.4, 0.1));
    matArray4.push(new THREE.MeshPhongMaterial({color:0xFFFFFF}))
    glass1Array.push(new THREE.Mesh(geoArray4[i],matArray4));


	geoArray5.push(new THREE.BoxGeometry(0.7, 0.4, 0.1));
    matArray5.push(new THREE.MeshPhongMaterial({color:0xFFFFFF}))
    glass2Array.push(new THREE.Mesh(geoArray5[i],matArray4)); //matarray4


	geoArray6.push(new THREE.BoxGeometry(0.2, 0.2, 0.01));
    matArray6.push(new THREE.MeshPhongMaterial({color:0x000000}))
    eye1Array.push(new THREE.Mesh(geoArray6[i],matArray6)); 

	geoArray7.push(new THREE.BoxGeometry(0.2, 0.2, 0.01));
    matArray7.push(new THREE.MeshPhongMaterial({color:0x000000}))
    eye2Array.push(new THREE.Mesh(geoArray7[i],matArray7)); 

	geoArray8.push(new THREE.BoxGeometry(0.5, 0.07, 0.01));
    matArray8.push(new THREE.MeshPhongMaterial({color:0x000000}))
    eyelineArray.push(new THREE.Mesh(geoArray8[i],matArray8)); 

	geoArray9.push(new THREE.BoxGeometry(2.5, 2.2, 2));
    matArray9.push(new THREE.MeshPhongMaterial({color:0x000000}))
    bodyArray.push(new THREE.Mesh(geoArray9[i],matArray9)); 

	geoArray10.push(new THREE.BoxGeometry(0.5, 1.5, 0.2));
    matArray10.push(new THREE.MeshPhongMaterial({color:0xFFFFFF}))
    bodylineArray.push(new THREE.Mesh(geoArray10[i],matArray10)); 

	geoArray11.push(new THREE.BoxGeometry(1.2, 0.5, 1.5));
    matArray11.push(new THREE.MeshPhongMaterial({color:0x000000}))
    bodydownArray.push(new THREE.Mesh(geoArray11[i],matArray11)); 

	geoArray12.push(new THREE.BoxGeometry(0.5, 1.5, 0.5));
    matArray12.push(new THREE.MeshPhongMaterial({color:0x000000}))
    leg1Array.push(new THREE.Mesh(geoArray12[i],matArray12));

	geoArray13.push(new THREE.BoxGeometry(0.5, 1.5, 0.5));
    matArray13.push(new THREE.MeshPhongMaterial({color:0x000000}))
    leg2Array.push(new THREE.Mesh(geoArray12[i],matArray13));

	geoArray14.push(new THREE.BoxGeometry(1.2, 0.5, 1.5));
    matArray14.push(new THREE.MeshPhongMaterial({color:0x585858}))
    shoesArray.push(new THREE.Mesh(geoArray14[i],matArray14));

	geoArray15.push(new THREE.BoxGeometry(0.3, 2.3, 0.5));
    matArray15.push(new THREE.MeshPhongMaterial({color:0x000000}))
    hand1Array.push(new THREE.Mesh(geoArray15[i],matArray15));

	geoArray16.push(new THREE.BoxGeometry(0.3, 2.3, 0.5));
    matArray16.push(new THREE.MeshPhongMaterial({color:0x000000}))
    hand2Array.push(new THREE.Mesh(geoArray16[i],matArray16));

	geoArray17.push(new THREE.BoxGeometry(0.5, 0.5, 0.5));
    matArray17.push(new THREE.MeshPhongMaterial({color:0xe0bea5}))
    palm1Array.push(new THREE.Mesh(geoArray17[i],matArray17));

	geoArray18.push(new THREE.BoxGeometry(0.5, 0.5, 0.5));
    matArray18.push(new THREE.MeshPhongMaterial({color:0xe0bea5}))
    palm2Array.push(new THREE.Mesh(geoArray18[i],matArray18));

	geoArray19.push(new THREE.BoxGeometry(0.9, 0.7, 0.1));
    matArray19.push(new THREE.MeshPhongMaterial({color:0xbb7344}))
    beardArray.push(new THREE.Mesh(geoArray19[i],matArray19));

	geoArray20.push(new THREE.BoxGeometry(0.5, 0.3, 0.1));
    matArray20.push(new THREE.MeshPhongMaterial({color:0xe0bea5}))
    mouthArray.push(new THREE.Mesh(geoArray20[i],matArray20));

	geoArray21.push(new THREE.BoxGeometry(0.3, 0.1, 0.1));
    matArray21.push(new THREE.MeshPhongMaterial({color:0x000000}))
    mouth2Array.push(new THREE.Mesh(geoArray21[i],matArray21));

	geoArray22.push(new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32))
	matArray22.push(new THREE.MeshPhongMaterial({color:0x585858}))
	shoulder1Array.push(new THREE.Mesh(geoArray22[i],matArray22));

	geoArray23.push(new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32))
	matArray23.push(new THREE.MeshPhongMaterial({color:0x585858}))
	shoulder2Array.push(new THREE.Mesh(geoArray23[i],matArray23));

	geoArray24.push(new THREE.SphereGeometry(0.2, 0.2, 32))
	matArray24.push(new THREE.MeshPhongMaterial({color:0x585858}))
	joint1Array.push(new THREE.Mesh(geoArray24[i],matArray24));

	geoArray25.push(new THREE.SphereGeometry(0.2, 0.2, 32))
	matArray25.push(new THREE.MeshPhongMaterial({color:0x585858}))
	joint2Array.push(new THREE.Mesh(geoArray25[i],matArray25));

	

    headArray[i].position.y = 5;
    headArray[i].position.x = 8;
    headArray[i].position.z =i*4;
	hat1Array[i].position.y = 0.9;
    hat2Array[i].position.y = 1;
    glass1Array[i].position.x=-0.5
    glass1Array[i].position.y=0.2;
    glass1Array[i].position.z=0.9;
	glass2Array[i].position.x=0.5
    glass2Array[i].position.y=0.2;
    glass2Array[i].position.z=0.9;
  	eye1Array[i].position.z=0.1;
  	eye2Array[i].position.z=0.1;
  	eyelineArray[i].position.y=0.15;
  	eyelineArray[i].position.z=0.9;
  	bodyArray[i].position.y=-1.9;
  	bodyArray[i].position.z=-0.2;
  	bodylineArray[i].position.z=1;
  	bodydownArray[i].position.y=-1.3;
  	leg1Array[i].position.x=-0.35;
  	leg1Array[i].position.y=-1;
  	leg2Array[i].position.x=0.35;
  	leg2Array[i].position.y=-1;
  	shoesArray[i].position.x=0.3;
  	shoesArray[i].position.y=-1;
  	shoesArray[i].position.z=0.5;
  	hand1Array[i].position.x=-0.25;
  	hand1Array[i].position.y=-0.8;
	hand2Array[i].position.x=0.25;
  	hand2Array[i].position.y=-0.8;
  	palm1Array[i].position.y=-1.4;
  	palm2Array[i].position.y=-1.4;
  	beardArray[i].position.y=-0.6;
	beardArray[i].position.z=0.9;
	mouthArray[i].position.y=-0.6;
	mouthArray[i].position.z=1;
	mouth2Array[i].position.z=0.1;
	shoulder1Array[i].position.y=0.8;
	shoulder1Array[i].position.x=-1.4;
	shoulder2Array[i].position.y=0.8;
	shoulder2Array[i].position.x=1.4;
	joint1Array[i].position.x=-1.4;
	joint1Array[i].position.y=0.8;
	joint2Array[i].position.x=1.4;
	joint2Array[i].position.y=0.8;



    scene.add(headArray[i]);
    scene.add(hat1Array[i]);
    scene.add(hat2Array[i]);
    scene.add(glass1Array[i]);
    scene.add(glass2Array[i]);
    scene.add(eye1Array[i]);
    scene.add(eye2Array[i]);
    scene.add(eyelineArray[i]);
    scene.add(bodyArray[i]);
    scene.add(bodylineArray[i]);
    scene.add(bodydownArray[i]);
    scene.add(leg1Array[i]);
    scene.add(leg2Array[i]);
	scene.add(shoesArray[i]);
	scene.add(hand1Array[i]);
	scene.add(hand2Array[i]);
	scene.add(palm1Array[i]);
	scene.add(palm2Array[i]);
	scene.add(beardArray[i]);
	scene.add(mouthArray[i]);
	scene.add(mouth2Array[i]);
	scene.add(shoulder1Array[i]);
	scene.add(shoulder2Array[i]);
	scene.add(joint1Array[i]);
	scene.add(joint2Array[i]);

    hat1Array[i].parent=headArray[i];
    hat2Array[i].parent=headArray[i];
	glass1Array[i].parent=headArray[i];
	glass2Array[i].parent=headArray[i];
	eye1Array[i].parent=glass1Array[i];
	eye2Array[i].parent=glass2Array[i];
	eyelineArray[i].parent=headArray[i];
	bodyArray[i].parent=headArray[i];
	bodylineArray[i].parent=bodyArray[i];
	bodydownArray[i].parent=bodyArray[i];
	leg1Array[i].parent=bodydownArray[i];
	leg2Array[i].parent=bodydownArray[i];
	shoesArray[i].parent=leg1Array[i];
	hand1Array[i].parent=joint1Array[i];
	hand2Array[i].parent=joint2Array[i];
	palm1Array[i].parent=hand1Array[i];
	palm2Array[i].parent=hand2Array[i];
	beardArray[i].parent=headArray[i];
	mouthArray[i].parent=headArray[i];
	mouth2Array[i].parent=mouthArray[i];
	shoulder1Array[i].parent=bodyArray[i];
	shoulder2Array[i].parent=bodyArray[i];
	joint1Array[i].parent=bodyArray[i];
	joint2Array[i].parent=bodyArray[i];






headArray[i].rotation.y =Math.PI/2;
shoulder1Array[i].rotation.z=Math.PI/2;
shoulder2Array[i].rotation.z=Math.PI/2;
// hand1Array[i].rotation.z=Math.PI/2;
// hand2Array[i].rotation.z=Math.PI/2





}






// Target
var gTargetTorso = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso = new THREE.MeshPhongMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso = new THREE.Mesh(gTargetTorso, mTargetTorso);
targetTorso.position.z = -5.95;
scene.add(targetTorso);

//Target Head
var gTargetHead = new THREE.CircleGeometry(0.6,20);
var mTargetHead = new THREE.MeshPhongMaterial( {color: 0x666666});
var targetHead = new THREE.Mesh(gTargetHead, mTargetHead);
targetHead.position.y = 1.0;
targetHead.position.z = 0.05;

scene.add(targetHead);

//parent child relationship between target head and torso
targetHead.parent = targetTorso; 

// Add a ball for the left hand
var gLH= new THREE.SphereGeometry(0.1, 18, 18);
var mLH = new THREE.MeshPhongMaterial( { color: 0xCCCCCC } );
var meshLH = new THREE.Mesh(gLH, mLH);
scene.add(meshLH);
// Add a ball for the right hand
var gRH= new THREE.SphereGeometry(0.1, 18, 18);
var mRH = new THREE.MeshPhongMaterial( { color: 0x00CCCC } );
var meshRH = new THREE.Mesh(gRH, mRH);
scene.add(meshRH);

// Add mouse/camera controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

// The animate function: called every frame
var iFrame = 0;
function animate()
{
	requestAnimationFrame(animate);

	targetTorso.position.x = Math.sin(iFrame/100) * 4.25;
		//targetTorso.position.y = Math.sin(iFrame/100) * 4.25;


	for(let i =0; i< joint1Array.length; i++)
	{
		joint1Array[i].rotation.x +=0.1;
		joint2Array[i].rotation.x +=0.1;
	}


    iFrame++
   	renderer.render(scene, camera);
}
animate();


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Kinectron codes starting from here///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Initialize kinectron
kinectron = new Kinectron("192.168.60.56"); // Define and create an instance of kinectron
kinectron.makeConnection(); // Create connection between remote and application
kinectron.startTrackedBodies(getBodies); // Start tracked bodies and set callbac

// Add a ball for the left hand
var gLH= new THREE.SphereGeometry(0.1, 18, 18);
var mLH = new THREE.MeshPhongMaterial( { color: 0xCCCCCC } ); 
var meshLH = new THREE.Mesh(gLH, mLH);
scene.add(meshLH);

// Add a ball for the right hand
var gRH= new THREE.SphereGeometry(0.1, 18, 18);
var mRH = new THREE.MeshPhongMaterial( { color: 0x00CCCC } ); 
var meshRH = new THREE.Mesh(gRH, mRH);
scene.add(meshRH);

// Draw a line with 4 points
var mLine = new THREE.LineBasicMaterial({color: 0xff9999});
var gLine = new THREE.Geometry();
gLine.vertices.push(new THREE.Vector3(0,0,0));
gLine.vertices.push(new THREE.Vector3(0,1,0));
gLine.vertices.push(new THREE.Vector3(0,1,1));
gLine.vertices.push(new THREE.Vector3(0,2,2));
gLine.vertices.push(new THREE.Vector3(0,2,2));
gLine.vertices.push(new THREE.Vector3(0,2,2));
gLine.vertices.push(new THREE.Vector3(0,2,2));
var meshLine = new THREE.Line(gLine, mLine);
scene.add(meshLine);

// The getBodies callback function: called once every time kinect obtain a frame
function getBodies(skeleton) 
{ 
	meshLH.position.x = skeleton.joints[kinectron.HANDLEFT].cameraX;
	meshLH.position.y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	meshLH.position.z = skeleton.joints[kinectron.HANDLEFT].cameraZ;
	meshRH.position.x = skeleton.joints[kinectron.HANDRIGHT].cameraX;
	meshRH.position.y = skeleton.joints[kinectron.HANDRIGHT].cameraY;
	meshRH.position.z = skeleton.joints[kinectron.HANDRIGHT].cameraZ;

	//camera.up = new THREE.Vector3(0,0,1);
	//camera.position.set(skeleton.joints[kinectron.HEAD].cameraX,skeleton.joints[kinectron.HEAD].cameraY,skeleton.joints[kinectron.HEAD].cameraZ+1);
	//camera.LookAt(skeleton.joints[kinectron.HEAD].cameraX, skeleton.joints[kinectron.HEAD].cameraY, skeleton.joints[kinectron.HEAD].cameraZ);

	// Updating lines
	meshLine.geometry.vertices[0].x = skeleton.joints[kinectron.HANDLEFT].cameraX;
	meshLine.geometry.vertices[0].y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	meshLine.geometry.vertices[0].z = skeleton.joints[kinectron.HANDLEFT].cameraZ;
	meshLine.geometry.vertices[1].x = skeleton.joints[kinectron.WRISTLEFT].cameraX;
	meshLine.geometry.vertices[1].y = skeleton.joints[kinectron.WRISTLEFT].cameraY;
	meshLine.geometry.vertices[1].z = skeleton.joints[kinectron.WRISTLEFT].cameraZ;
	meshLine.geometry.vertices[2].x = skeleton.joints[kinectron.ELBOWLEFT ].cameraX;
	meshLine.geometry.vertices[2].y = skeleton.joints[kinectron.ELBOWLEFT ].cameraY;
	meshLine.geometry.vertices[2].z = skeleton.joints[kinectron.ELBOWLEFT ].cameraZ;
	meshLine.geometry.vertices[3].x = skeleton.joints[kinectron.SHOULDERLEFT  ].cameraX;
	meshLine.geometry.vertices[3].y = skeleton.joints[kinectron.SHOULDERLEFT  ].cameraY;
	meshLine.geometry.vertices[3].z = skeleton.joints[kinectron.SHOULDERLEFT  ].cameraZ;
	meshLine.geometry.vertices[4].x = skeleton.joints[kinectron.SHOULDERRIGHT].cameraX;
	meshLine.geometry.vertices[4].y = skeleton.joints[kinectron.SHOULDERRIGHT].cameraY;
	meshLine.geometry.vertices[4].z = skeleton.joints[kinectron.SHOULDERRIGHT].cameraZ;
	meshLine.geometry.vertices[5].x = skeleton.joints[kinectron.ELBOWRIGHT].cameraX;
	meshLine.geometry.vertices[5].y = skeleton.joints[kinectron.ELBOWRIGHT].cameraY;
	meshLine.geometry.vertices[5].z = skeleton.joints[kinectron.ELBOWRIGHT].cameraZ;
	meshLine.geometry.vertices[6].x = skeleton.joints[kinectron.WRISTRIGHT].cameraX;
	meshLine.geometry.vertices[6].y = skeleton.joints[kinectron.WRISTRIGHT].cameraY;
	meshLine.geometry.vertices[6].z = skeleton.joints[kinectron.WRISTRIGHT].cameraZ;
	meshLine.geometry.verticesNeedUpdate = true;

	// Collision between right hand and ball
	var fDistanceWithRH = Math.sqrt(  
	(meshRH.position.x - meshLH.position.x) * (meshRH.position.x - meshLH.position.x) +
	(meshRH.position.y - meshLH.position.y) * (meshRH.position.y - meshLH.position.y) +
	(meshRH.position.z - meshLH.position.z) * (meshRH.position.z - meshLH.position.z)
    );
    var fSumOfRadiusRH = 0.5 + 0.1;
    var bCollideWithRH = fDistanceWithRH < fSumOfRadiusRH;

    if (bCollideWithRH)
    {
        meshLH.material.color.setHex(0xFF0000);
    }
    else
    {
        meshLH.material.color.setHex(0x660066);      
    }

}
