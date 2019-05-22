// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.z = 20;
camera.position.y = 25;

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


////////////////////////////////// HOLES GAME ////////////////////////

////////////////////////////////////////////////////
///////////////// PHYSICAL ANIMATION

  // Cannon
var world = new CANNON.World();
world.gravity.set(0,-9.82,0);   // set gravity in negative y direction

world.solver.iterations = 20; // Increase solver iterations (default is 10)
world.solver.tolerance = 0.01;   // Force solver to use all iterations

// a simple one is available in the library
world.broadphase = new CANNON.NaiveBroadphase();

// mass weight var for sphere and torus
var mass = 0.0005;
var mass1 = 10;

//////////////FLOOR///////////////
var plane = new CANNON.Plane();
var groundBody = new CANNON.Body({ mass: 0});
groundBody.addShape(plane);
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
groundBody.position.y = -2;
world.add(groundBody);

// add a ground plane to the scene
var geometry = new THREE.PlaneGeometry(200,200,1,1);   // xy plane
var gMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, gMaterial );
plane.position.set(0, -3, 0);
plane.rotation.set(Math.PI/2, 0, 0);
scene.add( plane );

var timeStep = 1.0 / 60.0;   // seconds



// create the sphere and torus material
var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00AACC });
var torusMaterial = new THREE.MeshLambertMaterial({ color: 0x1C7FA9 });
var torusMaterial1 = new THREE.MeshLambertMaterial({ color: 0xF10F0F });
var torusMaterial2 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial3 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial4 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial5 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial6 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial7 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial8 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });
var torusMaterial9 = new THREE.MeshLambertMaterial({ color: 0x0A34E3 });


// set up the sphere and torus vars
var radius = 0.70, segments = 16, rings = 16;

// create a new mesh with sphere geometry -
var sphere1 = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, rings),
   	sphereMaterial);
   	sphere1.position.set(0, 0, 0);
	scene.add(sphere1);

//sphere cannon body
var sphereShape = new CANNON.Sphere(radius);    // Step 1
var sphereBody = new CANNON.Body({mass: mass}); // Step 2
sphereBody.addShape(sphereShape);
sphereBody.position.set(0, 10, 0.9);
world.add(sphereBody); 							// Step 3
   
/////////////////   TORUS TARGETS  //////////////////////////  

//                  
var radius0 = 4, tube = 1.5, radialSegments = 3, tubularSegments = 100;
var radius1 = 3, tube1 = 1.1, radialSegments1 = 3, tubularSegments1 = 100;
var radius2 = 2.6, tube2 = 1, radialSegments2 = 3, tubularSegments2 = 100;
var radius3 = 3.4, tube3 = 1.2, radialSegments3 = 3, tubularSegments3 = 100;
var radius4 = 1.4, tube4 = 0.6, radialSegments4 = 5, tubularSegments4 = 100;
var radius5 = 3.7, tube5 = 1.3, radialSegments5 = 3.5, tubularSegments5 = 100;
var radius6 = 1.5, tube6 = 0.6, radialSegments6 = 3, tubularSegments6 = 100;
var radius7 = 1.4, tube7 = 0.6, radialSegments7 = 5, tubularSegments7 = 100;
var radius8 = 1.4, tube8 = 0.6, radialSegments8 = 5, tubularSegments8 = 100;
var radius9 = 2.8, tube9 = 0.9, radialSegments9 = 3, tubularSegments9 = 100;



//
//-0-
// create a new mesh with torus geometry -
var torus = new THREE.Mesh(
   new THREE.TorusGeometry(radius0, tube, radialSegments, tubularSegments),
   torusMaterial);
   	torus.rotation.set(Math.PI/2, 0, 0);
 	torus.position.set(0, -2, -12);
	scene.add(torus);

//  torus cannon body
var torusShape = new CANNON.Trimesh.createTorus(radius0, tube, radialSegments, tubularSegments);    // Step 1
var torusBody = new CANNON.Body({mass1: mass1}); // Step 2
torusBody.addShape(torusShape);
torusBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody.position.set(0, -2, -12);
world.add(torusBody);                          // Step 3

//torus bottom for collision feedback
var gDetectCir = new THREE.CircleGeometry( 4, 32 );
var mDetectCir = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir = new THREE.Mesh( gDetectCir, mDetectCir );
detectCir.rotation.x = Math.PI / 2;
detectCir.position.set(0, -1.2, -12);
scene.add( detectCir );

//-1-
// create a new mesh with torus geometry -
var torus01 = new THREE.Mesh(
   new THREE.TorusGeometry(radius1, tube1, radialSegments1, tubularSegments1),
   torusMaterial1);
   	torus01.rotation.set(Math.PI/2, 0, 0);
 	torus01.position.set(9, -2, -8);
	scene.add(torus01);

//torus cannon body
var torusShape1 = new CANNON.Trimesh.createTorus(radius1, tube1, radialSegments1, tubularSegments1); // Step 1
var torusBody1 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody1.addShape(torusShape1);
torusBody1.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody1.position.set(9.5, -2, 9);
world.add(torusBody1);                          // Step 3

//torus bottom for collision feedback
var gDetectCir1 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir1 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir1 = new THREE.Mesh( gDetectCir1, mDetectCir1 );
detectCir1.rotation.x = Math.PI / 2;
detectCir1.position.set(9.5, -1.2, 9);
scene.add( detectCir1 );

//-2-
// create a new mesh with torus geometry -
var torus02 = new THREE.Mesh(
   new THREE.TorusGeometry(radius2, tube2, radialSegments2, tubularSegments2),
   torusMaterial2);
   	torus02.rotation.set(Math.PI/2, 0, 0);
 	torus02.position.set(-9.5, -2, -6);
	scene.add(torus02);

//torus cannon body
var torusShape2 = new CANNON.Trimesh.createTorus(radius2, tube2, radialSegments2, tubularSegments2); // Step 1
var torusBody2 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody2.addShape(torusShape2);
torusBody2.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody2.position.set(-9.5, -2, -9);
world.add(torusBody2);                          // Step 3

//torus bottom for collision feedback
var gDetectCir2 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir2 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir2 = new THREE.Mesh( gDetectCir2, mDetectCir2 );
detectCir2.rotation.x = Math.PI / 2;
detectCir2.position.set(-9.5, -1.2, -9);
scene.add( detectCir2 );

//-3-
// create a new mesh with torus geometry -
var torus03 = new THREE.Mesh(
   new THREE.TorusGeometry(radius3, tube3, radialSegments3, tubularSegments3),
   torusMaterial3);
   	torus03.rotation.set(Math.PI/2, 0, 0);
 	torus03.position.set(-9.5, -2, -19);
	scene.add(torus03);

//torus cannon body
var torusShape3 = new CANNON.Trimesh.createTorus(radius3, tube3, radialSegments3, tubularSegments3); // Step 1
var torusBody3 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody3.addShape(torusShape3);
torusBody3.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody3.position.set(-9.5, -2, -19);
world.add(torusBody3);                          // Step 3

//torus bottom for collision feedback
var gDetectCir3 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir3 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir3 = new THREE.Mesh( gDetectCir3, mDetectCir3 );
detectCir3.rotation.x = Math.PI / 2;
detectCir3.position.set(-9.5, -2, -19);
scene.add( detectCir3 );

//-4-
// create a new mesh with torus geometry -
var torus04 = new THREE.Mesh(
   new THREE.TorusGeometry(radius4, tube4, radialSegments4, tubularSegments4),
   torusMaterial4);
   	torus04.rotation.set(Math.PI/2, 0, 0);
 	torus04.position.set(7.5, -2, -15);
	scene.add(torus04);

//torus cannon body
var torusShape4 = new CANNON.Trimesh.createTorus(radius4, tube4, radialSegments4, tubularSegments4); // Step 1
var torusBody4 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody4.addShape(torusShape4);
torusBody4.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody4.position.set(7.5, -2, -15);
world.add(torusBody4);                          // Step 3

//torus bottom for collision feedback
var gDetectCir4 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir4 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir4 = new THREE.Mesh( gDetectCir4, mDetectCir4 );
detectCir4.rotation.x = Math.PI / 2;
detectCir4.position.set(7.5, -2, -15);
scene.add( detectCir4 );

//-5-
// create a new mesh with torus geometry -
var torus05 = new THREE.Mesh(
   new THREE.TorusGeometry(radius5, tube5, radialSegments5, tubularSegments5),
   torusMaterial5);
   	torus05.rotation.set(Math.PI/2, 0, 0);
 	torus05.position.set(4.5, -2, -23);
	scene.add(torus05);

//torus cannon body
var torusShape5 = new CANNON.Trimesh.createTorus(radius5, tube5, radialSegments5, tubularSegments5); // Step 1
var torusBody5 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody5.addShape(torusShape5);
torusBody5.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody5.position.set(4.5, -2, -23);
world.add(torusBody5);                          // Step 3

//torus bottom for collision feedback
var gDetectCir5 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir5 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir5 = new THREE.Mesh( gDetectCir5, mDetectCir5 );
detectCir5.rotation.x = Math.PI / 2;
detectCir5.position.set(4.5, -2, -23);
scene.add( detectCir5 );

//-6-
// create a new mesh with torus geometry -
var torus06 = new THREE.Mesh(
   new THREE.TorusGeometry(radius6, tube6, radialSegments6, tubularSegments6),
   torusMaterial6);
   	torus06.rotation.set(Math.PI/2, 0, 0);
 	torus06.position.set(-2.2, -2, -20);
	scene.add(torus06);

//torus cannon body
var torusShape6 = new CANNON.Trimesh.createTorus(radius6, tube6, radialSegments6, tubularSegments6); // Step 1
var torusBody6 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody6.addShape(torusShape6);
torusBody6.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody6.position.set(-2.2, -2, -20);
world.add(torusBody6);                          // Step 3

//torus bottom for collision feedback
var gDetectCir6 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir6 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir6 = new THREE.Mesh( gDetectCir6, mDetectCir6 );
detectCir6.rotation.x = Math.PI / 2;
detectCir6.position.set(-2.2, -2, -20);
scene.add( detectCir6 );

//-7-
// create a new mesh with torus geometry -
var torus07 = new THREE.Mesh(
   new THREE.TorusGeometry(radius7, tube7, radialSegments7, tubularSegments7),
   torusMaterial7);
   	torus07.rotation.set(Math.PI/2, 0, 0);
 	torus07.position.set(-8, -2, -12);
	scene.add(torus07);

//torus cannon body
var torusShape7 = new CANNON.Trimesh.createTorus(radius7, tube7, radialSegments7, tubularSegments7); // Step 1
var torusBody7 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody7.addShape(torusShape7);
torusBody7.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody7.position.set(-8, -2, -12);
world.add(torusBody7);                          // Step 3

//torus bottom for collision feedback
var gDetectCir7 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir7 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir7 = new THREE.Mesh( gDetectCir7, mDetectCir7 );
detectCir7.rotation.x = Math.PI / 2;
detectCir7.position.set(-8, -2, -12);
scene.add( detectCir7 );

//-8-
// create a new mesh with torus geometry -
var torus08 = new THREE.Mesh(
   new THREE.TorusGeometry(radius8, tube8, radialSegments8, tubularSegments8),
   torusMaterial8);
   	torus08.rotation.set(Math.PI/2, 0, 0);
 	torus08.position.set(-12.5, -2, -12);
	scene.add(torus08);

//torus cannon body
var torusShape8 = new CANNON.Trimesh.createTorus(radius8, tube8, radialSegments8, tubularSegments8); // Step 1
var torusBody8 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody8.addShape(torusShape8);
torusBody8.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody8.position.set(-2.2, -2, -20);
world.add(torusBody8);                          // Step 3

//torus bottom for collision feedback
var gDetectCir8 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir8 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir8 = new THREE.Mesh( gDetectCir8, mDetectCir8 );
detectCir8.rotation.x = Math.PI / 2;
detectCir8.position.set(-2.2, -2, -20);
scene.add( detectCir8 );

//-9-
// create a new mesh with torus geometry -
var torus09 = new THREE.Mesh(
   new THREE.TorusGeometry(radius9, tube9, radialSegments9, tubularSegments9),
   torusMaterial9);
   	torus09.rotation.set(Math.PI/2, 0, 0);
 	torus09.position.set(13.5, -2, -15);
	scene.add(torus09);

//torus cannon body
var torusShape9 = new CANNON.Trimesh.createTorus(radius9, tube9, radialSegments9, tubularSegments9); // Step 1
var torusBody9 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody9.addShape(torusShape9);
torusBody9.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody9.position.set(15, -2, -20);
world.add(torusBody9);                          // Step 3

//torus bottom for collision feedback
var gDetectCir9 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir9 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir9 = new THREE.Mesh( gDetectCir9, mDetectCir9 );
detectCir9.rotation.x = Math.PI / 2;
detectCir9.position.set(-2.2, -2, -20);
scene.add( detectCir9 );







/////////////////////////////////////

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

// Add a ball for the right foot
var gRF= new THREE.SphereGeometry(0.1, 18, 18);
var mRF = new THREE.MeshPhongMaterial( { color: 0x00CCCC } );
var meshRF = new THREE.Mesh(gRF, mRF);
scene.add(meshRF);

// Add a ball for the left foot
var gLF= new THREE.SphereGeometry(0.1, 18, 18);
var mLF = new THREE.MeshPhongMaterial( { color: 0x00CCCC } );
var meshLF = new THREE.Mesh(gLF, mLF);
scene.add(meshLF);


////////////////////////////////////////////

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
  
    sphere1.position.x = sphereBody.position.x;
  	sphere1.position.y = sphereBody.position.y;
  	sphere1.position.z = sphereBody.position.z;


 	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget = Math.sqrt(  
	(sphere1.position.x - detectCir.position.x) * (sphere1.position.x - detectCir.position.x) +
	(sphere1.position.y - detectCir.position.y) * (sphere1.position.y - detectCir.position.y) +
	(sphere1.position.z - detectCir.position.z) * (sphere1.position.z - detectCir.position.z)
    );

    var fSumOfRadius = 0.1 + 1;
    var bCollideBallsNtorus = fDistanceBetweenBallnTarget < fSumOfRadius;



    if (bCollideBallsNtorus)
    {
        torus.material.color.setHex(0x04ACF5);
    }













  /*
	// Collision between sphere and foot  
	var fDistanceBetweenBallNfoot = Math.sqrt(  
	(meshRF.position.x - sphere1.position.x) * (meshRF.position.x - sphere1.position.x) +
	(meshRF.position.y - sphere1.position.y) * (meshRF.position.y - sphere1.position.y) +
	(meshRF.position.z - sphere1.position.z) * (meshRF.position.z - sphere1.position.z)
    );

    var fSumOfRadius1 = 0.5 + 0.2;
    var bCollideBallsNfoot = fDistanceBetweenBallNfoot < fSumOfRadius1;



    if (bCollideBallsNfoot)
    {
        sphere1.material.color.setHex(0xFF0000);

    }
    else
    {
        sphere1.material.color.setHex(0x00AACC);

    }
    */
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
kinectron.startTrackedBodies(getBodies); // Start tracked bodies and set callback



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

// Add a ball for the right foot
//var gRF= new THREE.SphereGeometry(0.1, 18, 18);
//var mRF = new THREE.MeshPhongMaterial( { color: 0x00CCCC } ); 
//var meshRF = new THREE.Mesh(gRF, mRF);
//scene.add(meshRF);

//add a cannon ball for the left foot

var sphereShape1 = new CANNON.Sphere(0.1);    // Step 1
var sphereBody1 = new CANNON.Body({mass: 200}); // Step 2
sphereBody1.addShape(sphereShape1);
//sphereBody.position.set(0, 2.9, 2.5);
world.add(sphereBody1);                          // Step 3


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

	meshLF.position.x = skeleton.joints[kinectron.FOOTLEFT].cameraX;
	meshLF.position.y = skeleton.joints[kinectron.FOOTLEFT].cameraY;
	meshLF.position.z = skeleton.joints[kinectron.FOOTLEFT].cameraZ;
	sphereBody1.position.x = skeleton.joints[kinectron.FOOTLEFT].cameraX;
	sphereBody1.position.y = skeleton.joints[kinectron.FOOTLEFT].cameraY;
	sphereBody1.position.z = skeleton.joints[kinectron.FOOTLEFT].cameraZ;
	meshRF.position.x = skeleton.joints[kinectron.FOOTRIGHT].cameraX;
	meshRF.position.y = skeleton.joints[kinectron.FOOTRIGHT].cameraY;
	meshRF.position.z = skeleton.joints[kinectron.FOOTRIGHT].cameraZ;
	sphereBody1.position.x = skeleton.joints[kinectron.FOOTRIGHT].cameraX;
	sphereBody1.position.y = skeleton.joints[kinectron.FOOTRIGHT].cameraY;
	sphereBody1.position.z = skeleton.joints[kinectron.FOOTRIGHT].cameraZ;

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
