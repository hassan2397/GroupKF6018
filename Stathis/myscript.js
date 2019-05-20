// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.z = 40;
camera.position.y = 10;

// Render
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );


// Ambient light
var lightAmbient = new THREE.AmbientLight( 0x888888 ); 
scene.add(lightAmbient);

// Point light
var lightThis = new THREE.PointLight(0x82CA0E);
lightThis.position.set(3, 10, 3);
lightThis.intensity = 0.8;
scene.add(lightThis);


// Floor
//var floorTexture = new THREE.TextureLoader().load( 'grasstexture.jpg' );
//var floorTextureNormalMap = new THREE.TextureLoader().load( 'grasstexturenormalmap.png' );

var gFloor = new THREE.PlaneGeometry(300, 300);
var mFloor = new THREE.MeshPhongMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
var floor = new THREE.Mesh(gFloor, mFloor);
floor.rotation.x = 3.14/2;
floor.position.z = 0.0;
floor.position.y = -2.0;
scene.add(floor);

//torus11
var gTorus11 = new THREE.TorusGeometry( 130, 17, 4, 100 );
var mTorus11 = new THREE.MeshPhongMaterial( { color: 0x0EEEF0 } );
var torus11 = new THREE.Mesh( gTorus11, mTorus11 );
torus11.rotation.x = Math.PI / 2;
torus11.position.y = 12;
scene.add( torus11 );

/////////////// HOT AIR BALLOON ///////////////////////////////////////////////

//box
var gBox = new THREE.BoxGeometry( 5, 5, 5 );
var mBox = new THREE.MeshStandardMaterial( {color: 0x7B6659, roughness: 0.26} );
var cube = new THREE.Mesh( gBox, mBox );
cube.position.y = 85;
cube.position.x = 85;
scene.add( cube );

//sphere
var gSphere = new THREE.SphereGeometry( 7, 25, 32 );
var mSphere = new THREE.MeshBasicMaterial( {color: 0x25AEDD} );
var sphere = new THREE.Mesh( gSphere, mSphere );
sphere.position.y = 14;
scene.add( sphere );

//torus design
var gTorus0 = new THREE.TorusGeometry( 5, 2, 16, 100 );
var mTorus0 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus0 = new THREE.Mesh( gTorus0, mTorus0 );
torus0.rotation.x = Math.PI / 2;
scene.add( torus0 );

//torus
var gTorus1 = new THREE.TorusGeometry( 3, 1.2, 16, 100 );
var mTorus1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus1 = new THREE.Mesh( gTorus1, mTorus1 );
torus1.rotation.x = Math.PI / 2;
torus1.position.y = -6;
scene.add( torus1 );

//cylinder
var gCylinder = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
var mCylinder = new THREE.MeshBasicMaterial( {color: 0xF1F0EA} );
var cylinder = new THREE.Mesh( gCylinder, mCylinder );
cylinder.position.y = 4;
cylinder.position.x = -2;
cylinder.position.z = -2;
scene.add( cylinder );

//cylinder1
var gCylinder1 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
var mCylinder1 = new THREE.MeshBasicMaterial( {color: 0xF1F0EA} );
var cylinder1 = new THREE.Mesh( gCylinder1, mCylinder1 );
cylinder1.position.y = 4;
cylinder1.position.x = 2;
cylinder1.position.z = 2;
scene.add( cylinder1 );

//cylinder2
var gCylinder2 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
var mCylinder2 = new THREE.MeshBasicMaterial( {color: 0xF1F0EA} );
var cylinder2 = new THREE.Mesh( gCylinder2, mCylinder2 );
cylinder2.position.y = 4;
cylinder2.position.x = 2;
cylinder2.position.z = -2;
scene.add( cylinder2 );

//cylinder3
var gCylinder3 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
var mCylinder3 = new THREE.MeshBasicMaterial( {color: 0xF1F0EA} );
var cylinder3 = new THREE.Mesh( gCylinder3, mCylinder3 );
cylinder3.position.y = 4;
cylinder3.position.x = -2;
cylinder3.position.z = 2;
scene.add( cylinder3 );

//parent child relationship Hot AIr Balloon
sphere.parent = cube;
torus0.parent = sphere;
torus1.parent = sphere;
cylinder.parent = cube;
cylinder1.parent = cube;
cylinder2.parent = cube;
cylinder3.parent = cube;


////////////////////  TARGET WALL  ///////////////////////////////////////////////////////


// Wall1
var gWall1 = new THREE.PlaneGeometry(50, 25);
var mWall1 = new THREE.MeshPhongMaterial( {color: 0x100F0F, side: THREE.DoubleSide} );
var wall1 = new THREE.Mesh(gWall1, mWall1);
wall1.position.z = -90.0;
wall1.position.y = 11.0;
scene.add(wall1);

//Target 1
var gTarget1 = new THREE.TorusGeometry(11, 1.5, 2, 100 );
var mTarget1 = new THREE.MeshPhongMaterial( {color: 0x22F30B});
var target1 = new THREE.Mesh(gTarget1, mTarget1);

target1.position.z = 0.1;

//Target 2
var gTarget2 = new THREE.TorusGeometry(8, 1.5, 2, 100 );
var mTarget2 = new THREE.MeshPhongMaterial( {color: 0xFFFC02});
var target2 = new THREE.Mesh(gTarget2, mTarget2);

target2.position.z = 0.1;

//Target 3
var gTarget3 = new THREE.TorusGeometry(5, 1.5, 2, 100 );
var mTarget3 = new THREE.MeshPhongMaterial( {color: 0xF31D0B});
var target3 = new THREE.Mesh(gTarget3, mTarget3);

target3.position.z = 0.1;

//Target 4
var gTarget4 = new THREE.TorusGeometry(2, 1.5, 2, 100 );
var mTarget4 = new THREE.MeshPhongMaterial( {color: 0x09ABF0});
var target4 = new THREE.Mesh(gTarget4, mTarget4);

target4.position.z = 0.1;

//Target 5
var gTarget5 = new THREE.CircleBufferGeometry( 0.5, 32 );
var mTarget5 = new THREE.MeshPhongMaterial( {color: 0xFFFFFF});
var target5 = new THREE.Mesh(gTarget5, mTarget5);

target5.position.z = 0.1;

scene.add(target1);
scene.add(target2);
scene.add(target3);
scene.add(target4);
scene.add(target5);

// parent child relationship big target 

target1.parent = wall1;
target2.parent = wall1;
target3.parent = wall1;
target4.parent = wall1;
target5.parent = wall1;

/////////////////////////////// FISH TANK /////////////////////////////////////////////

/*
var gTank = new THREE.CylinderBufferGeometry( 12, 12, 5, 64, 64, true );
var mTank = new THREE.MeshPhongMaterial( {color: 0x3195AD} );
var tank = new THREE.Mesh( gTank, mTank );
tank.position.z = -25;
scene.add( tank );
*/
var gTank = new THREE.TorusGeometry(11, 5.5, 3, 100 );
var mTank = new THREE.MeshPhongMaterial( {color: 0x3195AD} );
var tank = new THREE.Mesh( gTank, mTank );
tank.position.x = 75;
tank.position.y = -2;
tank.position.z = -25;
tank .rotation.x = Math.PI / 2;


//
var gBot = new THREE.CircleBufferGeometry( 8.5, 32 );
var mBot = new THREE.MeshPhongMaterial( {color: 0x56CAE6});
var bot = new THREE.Mesh(gBot, mBot);
bot.position.z = -0.2;
bot .rotation.x = Math.PI / 1;
 
scene.add( tank );
scene.add( bot );

// parent child relationship fish tank

bot.parent = tank;

////////////////////////////////// HOLES GAME ////////////////////////

var gHole1 = new THREE.TorusGeometry(3, 1.5, 3, 100 );
var mHole1 = new THREE.MeshPhongMaterial( {color: 0x3195AD} );
var hole1 = new THREE.Mesh( gHole1, mHole1 );
hole1.position.x = 15;
hole1.position.y = -2;
hole1.position.z = -5;
hole1.rotation.x = Math.PI / 2;

var gHole2 = new THREE.TorusGeometry(2, 1, 3, 100 );
var mHole2 = new THREE.MeshPhongMaterial( {color: 0xF10F0F} );
var hole2 = new THREE.Mesh( gHole2, mHole2 );
hole2.position.x = -15;
hole2.position.y = -2;
hole2.position.z = -5;
hole2.rotation.x = Math.PI / 2;

/*
var gHole3 = new THREE.TorusGeometry(1, 0.5, 3, 100 );
var mHole3 = new THREE.MeshPhongMaterial( {color: 0x074EF7} );
var hole3 = new THREE.Mesh( gHole3, mHole3 );
hole3.position.x = 1;
hole3.position.y = 0;
hole3.position.z = 0;
hole3.rotation.x = Math.PI / 2;
*/

scene.add( hole1 );
scene.add( hole2 );
//scene.add( hole3 );



var gDetectCir = new THREE.CircleGeometry( 4, 32 );
var mDetectCir = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir = new THREE.Mesh( gDetectCir, mDetectCir );
detectCir.rotation.x = Math.PI / 1;
detectCir.position.z = -0.5;

scene.add( detectCir );


////////////////////////////////////////////////////
///////////////// PHYSICAL ANIMATION


// create the sphere and torus material
var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00AACC });// Earth
var torusMaterial = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });

// set up the sphere and torus vars
var radius = 2, segments = 16, rings = 16;
var radius1 = 5, tube = 2.5, radialSegments = 3, tubularSegments = 100;


// create a new mesh with sphere geometry -
var sphere = new THREE.Mesh(
   new THREE.SphereGeometry(radius, segments, rings),
   sphereMaterial);

// create a new mesh with torus geometry -
var torus = new THREE.Mesh(
   new THREE.TorusGeometry(radius1, tube, radialSegments, tubularSegments),
   torusMaterial);

// add the sphere to the scene
scene.add(sphere);
scene.add(torus);

// Cannon
var world = new CANNON.World();
world.gravity.set(0,-9.82,0);   // set gravity in negative y direction

world.solver.iterations = 20; // Increase solver iterations (default is 10)
world.solver.tolerance = 0.01;   // Force solver to use all iterations

// a simple one is available in the library
world.broadphase = new CANNON.NaiveBroadphase();

// a simple one is available in the library
var mass = 10;
var mass1 = 10;

//////////BALL/////////////
var sphereShape = new CANNON.Sphere(radius);    // Step 1
var sphereBody = new CANNON.Body({mass: mass}); // Step 2
sphereBody.addShape(sphereShape);
sphereBody.position.set(0,50,0);
world.add(sphereBody);                          // Step 3

//////////////HOLE//////////////
var torusShape = new CANNON.Trimesh.createTorus(radius1, tube, radialSegments, tubularSegments);    // Step 1
var torusBody = new CANNON.Body({mass1: mass1}); // Step 2
torusBody.addShape(torusShape);
torusBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody.position.set(3,0,0);
world.add(torusBody);                          // Step 3


var plane = new CANNON.Plane();
var groundBody = new CANNON.Body({ mass: 0});
groundBody.addShape(plane);
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
world.add(groundBody);

// add a ground plane to the scene
var geometry = new THREE.PlaneGeometry(200,200,1,1);   // xy plane
var gMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, gMaterial );
scene.add( plane );
// ... you need some transformation here ...

torus.rotation.set(Math.PI/2, 0, 0);
torus.position.set(3, 0, 0);
plane.position.set(0, 0, 0);
plane.rotation.set(Math.PI/2, 0, 0);

var timeStep = 1.0 / 60.0;   // seconds

detectCir.parent = torus;

//////////////////////////////////////////////////////////////////////

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

//hot ballon rotation
cube.rotation.y += 0.006;

  world.step(timeStep);
   // ... update visualization ...
   sphere.position.x = sphereBody.position.x;
   sphere.position.y = sphereBody.position.y;
   sphere.position.z = sphereBody.position.z;
   //toru.position.x = torusBody.position.x;
  // toru.position.y = torusBody.position.y;
  // toru.position.z = torusBody.position.z;
   // ... 


	// Collision bettween ball and hole
	var bCollideFloor = (sphere.position.y < 2) && (sphere.position.y > -2);

    if (bCollideFloor)
    {
        torus.material.color.setHex(0xFF0000);
    }
    else
    {
        torus.material.color.setHex(0x9017A9);      
    }


    iFrame++
/*
 // get json
 if (jsonFrm>0) {
 getBodies(jsonMotion[iFrame]);
 iFrame ++;
 iFrame = iFrame % jsonFrm; // keep looping the frames
 }
*/
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


//kinectron = new Kinectron(); // Define and create an instance of kinectron



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

/*
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
