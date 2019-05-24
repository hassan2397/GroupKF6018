// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.z = 120;
camera.position.y = 100;
camera.lookAt(0,0,0);

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

//skybox
  
 var imagePrefix = "hills/";
 var directions  = ["px", "nx", "py", "ny", "pz", "nz"];
 var imageSuffix = ".png";
   
 var materialArray = [];
 for (var i = 0; i < 6; i++)
  materialArray.push( new THREE.MeshBasicMaterial({
   map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
   side: THREE.BackSide
  }));
  
 var skyGeometry = new THREE.CubeGeometry( 500, 500, 500 );
 var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
 var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
 skyBox.position.y += 55;
 scene.add( skyBox );
//

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

// backWall
var gBackWall = new THREE.PlaneGeometry(60, 30);
var mBackWall = new THREE.MeshStandardMaterial( {color: 0xBB3300, side: THREE.DoubleSide, transparent: true, opacity: 0.5, metalness: 1.0, roughness: 0.8} );
var backWall = new THREE.Mesh(gBackWall, mBackWall);
backWall.position.z = -40.0;
backWall.position.y = 15;
backWall.position.x = 50;
scene.add(backWall);

/*
// sideWall Left
var gSideWallL = new THREE.PlaneGeometry(80, 30);
var mSideWallL = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var sideWallL = new THREE.Mesh(gSideWallL, mSideWallL);
sideWallL.position.z = 0;
sideWallL.position.y = 10;
sideWallL.position.x = -25;
sideWallL.rotation.y = (3.14/2);
scene.add(sideWallL);

// sideWall Right
var gSideWallR = new THREE.PlaneGeometry(80, 30);
var mSideWallR = new THREE.MeshPhongMaterial( {color: 0xBB3300, side: THREE.DoubleSide} );
var sideWallR = new THREE.Mesh(gSideWallR, mSideWallR);
sideWallR.position.z = 0;
sideWallR.position.y = 10;
sideWallR.position.x = 25;
sideWallR.rotation.y = (3.14/2);
scene.add(sideWallR);
*/









/////////////////////////////////////////Targets//////////////////////////////////////////////////////////

var cylindergeometry = new THREE.CylinderGeometry( 1, 1, 10, 32 );
var loader1 = new THREE.TextureLoader();
var cylinermaterial = new THREE.MeshBasicMaterial({map:loader1.load('images/log.jpg')});
var cylinder = new THREE.Mesh( cylindergeometry, cylinermaterial );
scene.add( cylinder );
cylinder.position.y = 5;
cylinder.position.x = 10;

var conegeometry = new THREE.ConeGeometry( 5, 10, 32 );
var loader33 = new THREE.TextureLoader();
var conematerial = new THREE.MeshPhongMaterial({map:loader33.load('images/green.jpg')});
var cone = new THREE.Mesh( conegeometry, conematerial );
scene.add( cone );
cone.position.y = 10;
cone.position.x = 10;


var cylindergeometry1 = new THREE.CylinderGeometry( 1, 1, 10, 32 );
var loader1 = new THREE.TextureLoader();
var cylinermaterial1 = new THREE.MeshBasicMaterial({map:loader1.load('images/log.jpg')});
var cylinder11 = new THREE.Mesh( cylindergeometry, cylinermaterial );
scene.add( cylinder11 );
cylinder11.position.y = 5;
cylinder11.position.x = -10;

var conegeometry = new THREE.ConeGeometry( 5, 10, 32 );
var loader33 = new THREE.TextureLoader();
var conematerial11 = new THREE.MeshPhongMaterial({map:loader33.load('images/green.jpg')});
var cone11 = new THREE.Mesh( conegeometry, conematerial11 );
scene.add( cone11 );
cone11.position.y = 10;
cone11.position.x = -10;










// Target
var gTargetTorso = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso = new THREE.MeshPhongMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso = new THREE.Mesh(gTargetTorso, mTargetTorso);
targetTorso.position.z = backWall.position.z+1;
targetTorso.position.y = 5;
scene.add(targetTorso);
targetTorso.scale.set(2,2,2);

// Target Head
var gTargetHead = new THREE.SphereGeometry(0.6,20);
var mTargetHead = new THREE.MeshBasicMaterial( {color: 0x666666});
var targetHead = new THREE.Mesh(gTargetHead, mTargetHead);
targetHead.position.y = 1.0;
targetHead.position.z = 0.05;
scene.add(targetHead);
targetHead.scale.set(1,1,0.0000001);

// Target 2
var gTargetTorso2 = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso2 = new THREE.MeshBasicMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso2 = new THREE.Mesh(gTargetTorso2, mTargetTorso2);
targetTorso2.position.z = backWall.position.z+1;
targetTorso2.position.y = 10;
scene.add(targetTorso2);
targetTorso2.scale.set(2,2,2);

// Target Head 2
var gTargetHead2 = new THREE.SphereGeometry(0.6,20);
var mTargetHead2 = new THREE.MeshBasicMaterial( {color: 0x666666});
var targetHead2 = new THREE.Mesh(gTargetHead2, mTargetHead2);
targetHead2.position.y = 1.0;
targetHead2.position.z = 0.05;
scene.add(targetHead2);
targetHead2.scale.set(1,1,0.0000001);

// Target 3
var gTargetTorso3 = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso3 = new THREE.MeshBasicMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso3 = new THREE.Mesh(gTargetTorso3, mTargetTorso3);
targetTorso3.position.z = backWall.position.z+1;
targetTorso3.position.y = 15;
scene.add(targetTorso3);
targetTorso3.scale.set(2,2,2);

// Target Head 3
var gTargetHead3 = new THREE.SphereGeometry(0.6,20);
var mTargetHead3 = new THREE.MeshBasicMaterial( {color: 0x666666});
var targetHead3 = new THREE.Mesh(gTargetHead3, mTargetHead3);
targetHead3.position.y = 1.0;
targetHead3.position.z = 0.05;
scene.add(targetHead3);
targetHead3.scale.set(1,1,0.0000001);

// Target 4
var gTargetTorso4 = new THREE.PlaneGeometry(1.25, 2);
var mTargetTorso4 = new THREE.MeshPhongMaterial( {color: 0xAAAAAA, side: THREE.DoubleSide,} );
var targetTorso4 = new THREE.Mesh(gTargetTorso4, mTargetTorso4);
targetTorso4.position.z = backWall.position.z+1;
targetTorso4.position.y = 20;
scene.add(targetTorso4);
targetTorso4.scale.set(2,2,2);

// Target Head 4
var gTargetHead4 = new THREE.SphereGeometry(0.6,20);
var mTargetHead4 = new THREE.MeshBasicMaterial( {color: 0x666666});
var targetHead4 = new THREE.Mesh(gTargetHead4, mTargetHead4);
targetHead4.position.y = 1.0;
targetHead4.position.z = 0.05;
scene.add(targetHead4);
targetHead4.scale.set(1,1,0.0000001);

//parent child relationship between target head and torso
targetHead.parent = targetTorso; 
targetHead2.parent = targetTorso2;
targetHead3.parent = targetTorso3;
targetHead4.parent = targetTorso4;

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////HOLES GAME//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// /PHYSICAL ANIMATION/////////////////////////////////////////////

var mat = new CANNON.Material();

 // Cannon
var world = new CANNON.World();
world.gravity.set(0, -2.82, 0);   // set gravity in negative y direction

world.solver.iterations = 20; // Increase solver iterations (default is 10)
world.solver.tolerance = .01;   // Force solver to use all iterations

// a simple one is available in the library
world.broadphase = new CANNON.NaiveBroadphase();

// Create contact material behaviour
var mat_mat = new CANNON.ContactMaterial(mat, mat, { friction: 0.1, restitution: 0.7 });
world.addContactMaterial(mat_mat);

// mass weight var for sphere and torus
var mass = 0.5;
var mass1 = 10;

//////////////FLOOR///////////////
var plane = new CANNON.Plane();
var groundBody = new CANNON.Body({ mass: 0});
groundBody.addShape(plane);
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
groundBody.position.y = -1.5;
world.add(groundBody);

// add a ground plane to the scene
var geometry = new THREE.PlaneGeometry(200,200,1,1);   // xy plane
var gMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, gMaterial );
plane.position.set(0, -1.5, 0);
plane.rotation.set(Math.PI/2, 0, 0);
scene.add( plane );

//////////////BACKWALL GAME2///////////////
var backWallG2C = new CANNON.Plane();
var groundBodyG2C = new CANNON.Body({ mass: 0});
groundBodyG2C.addShape(backWallG2C);
groundBodyG2C.position.x = -50;
groundBodyG2C.position.y = 8;
groundBodyG2C.position.z = -28;
world.add(groundBodyG2C);

// add a ground backWallG2 to the scene
var gbackWallG2 = new THREE.PlaneGeometry(30,20,1,1);   // xy backWallG2
var mbackWallG2 = new THREE.MeshBasicMaterial( {color: 0xBB3300, side: THREE.DoubleSide, transparent: true, opacity: 0.5, metalness: 1.0, roughness: 0.8} );
var backWallG2C = new THREE.Mesh( gbackWallG2, mbackWallG2 );
backWallG2C.position.set(-50, 8, -28);
scene.add( backWallG2C );

//////////////SIDEWALL GAME2///////////////
// var sideWallG2C = new CANNON.Plane();
// var groundBodysideG2C = new CANNON.Body({ mass: 0});
// groundBodysideG2C.addShape(sideWallG2C);
// //groundBodysideG2C.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0),-Math.PI/2);
// /////
// groundBodysideG2C.position.x = -65;
// groundBodysideG2C.position.y = 8;
// groundBodysideG2C.position.z = -15.5;
// world.add(groundBodysideG2C);

// add a ground sideWallG2 to the scene
var gsideWallG2 = new THREE.PlaneGeometry(25,20,1,1);   // xy sideWallG2
var msideWallG2 = new THREE.MeshBasicMaterial( {color: 0xBB3300, side: THREE.DoubleSide, transparent: true, opacity: 0.5, metalness: 1.0, roughness: 0.8} );
var sideWallG2C = new THREE.Mesh( gsideWallG2, msideWallG2 );
sideWallG2C.position.set(-65, 8, -15.5);
sideWallG2C.rotation.set(0, Math.PI/2, 0);
scene.add( sideWallG2C );

var timeStep = 1.0 / 60.0;   // seconds

// create the sphere and torus material
var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00AACC });

var torusMaterial = new THREE.MeshLambertMaterial({ color: 0x1D71C1 });
var torusMaterial1 = new THREE.MeshLambertMaterial({ color: 0xC7150C });
var torusMaterial2 = new THREE.MeshLambertMaterial({ color: 0x6611A7 });
var torusMaterial3 = new THREE.MeshLambertMaterial({ color: 0xB61736 });
var torusMaterial4 = new THREE.MeshLambertMaterial({ color: 0x24AB15 });
var torusMaterial5 = new THREE.MeshLambertMaterial({ color: 0xC79116 });
var torusMaterial6 = new THREE.MeshLambertMaterial({ color: 0x18BAAA });
var torusMaterial7 = new THREE.MeshLambertMaterial({ color: 0x874BC5 });
var torusMaterial8 = new THREE.MeshLambertMaterial({ color: 0xC64384 });
var torusMaterial9 = new THREE.MeshLambertMaterial({ color: 0x45C367 });

// set up the sphere and torus vars
var radius = 0.70, segments = 16, rings = 16;

// create a new mesh with sphere geometry -
var sphere1 = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, rings),sphereMaterial);
   	sphere1.position.set(0, 10, 0);
	scene.add(sphere1);

//sphere cannon body
var sphereShape = new CANNON.Sphere(radius);    // Step 1
var sphereBody = new CANNON.Body({mass: mass}); // Step 2
sphereBody.addShape(sphereShape);
sphereBody.position.set(-50, 25, -20.9);
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
 	torus.position.set(-50, -1.6, -12);
	scene.add(torus);

//  torus cannon body
var torusShape = new CANNON.Trimesh.createTorus(radius0, tube, radialSegments, tubularSegments);    // Step 1
var torusBody = new CANNON.Body({mass1: mass1}); // Step 2
torusBody.addShape(torusShape);
torusBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody.position.set(-50, -1.6, -12);
world.add(torusBody);                          // Step 3

//torus bottom for collision feedback
var gDetectCir = new THREE.CircleGeometry( 5, 32 );
var mDetectCir = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir = new THREE.Mesh( gDetectCir, mDetectCir );
detectCir.rotation.x = Math.PI / 2;
detectCir.position.set(-50, -1.6, -12);
scene.add( detectCir );

//-1-
// create a new mesh with torus geometry -
var torus01 = new THREE.Mesh(
   new THREE.TorusGeometry(radius1, tube1, radialSegments1, tubularSegments1),
   torusMaterial1);
   	torus01.rotation.set(Math.PI/2, 0, 0);
 	torus01.position.set(-41, -1.6, -8);
	scene.add(torus01);

//torus cannon body
var torusShape1 = new CANNON.Trimesh.createTorus(radius1, tube1, radialSegments1, tubularSegments1); // Step 1
var torusBody1 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody1.addShape(torusShape1);
torusBody1.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody1.position.set(-41, -1.6, -8);
world.add(torusBody1);                          // Step 3

//torus bottom for collision feedback
var gDetectCir1 = new THREE.CircleGeometry( 3, 32 );
var mDetectCir1 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir1 = new THREE.Mesh( gDetectCir1, mDetectCir1 );
detectCir1.rotation.x = Math.PI / 2;
detectCir1.position.set(-41, -1.6, -8);
scene.add( detectCir1 );

//-2-
// create a new mesh with torus geometry -
var torus02 = new THREE.Mesh(
   new THREE.TorusGeometry(radius2, tube2, radialSegments2, tubularSegments2),
   torusMaterial2);
   	torus02.rotation.set(Math.PI/2, 0, 0);
 	torus02.position.set(-59.5, -1.6, -6);
	scene.add(torus02);

//torus cannon body
var torusShape2 = new CANNON.Trimesh.createTorus(radius2, tube2, radialSegments2, tubularSegments2); // Step 1
var torusBody2 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody2.addShape(torusShape2);
torusBody2.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody2.position.set(-59.5, -1.6, -6);
world.add(torusBody2);                          // Step 3

//torus bottom for collision feedback
var gDetectCir2 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir2 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir2 = new THREE.Mesh( gDetectCir2, mDetectCir2 );
detectCir2.rotation.x = Math.PI / 2;
detectCir2.position.set(-59.5, -1.6, -6);
scene.add( detectCir2 );

//-3-
// create a new mesh with torus geometry -
var torus03 = new THREE.Mesh(
   new THREE.TorusGeometry(radius3, tube3, radialSegments3, tubularSegments3),
   torusMaterial3);
   	torus03.rotation.set(Math.PI/2, 0, 0);
 	torus03.position.set(-59.5, -1.6, -19);
	scene.add(torus03);

//torus cannon body
var torusShape3 = new CANNON.Trimesh.createTorus(radius3, tube3, radialSegments3, tubularSegments3); // Step 1
var torusBody3 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody3.addShape(torusShape3);
torusBody3.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody3.position.set(-59.5, -1.6, -19);
world.add(torusBody3);                          // Step 3

//torus bottom for collision feedback
var gDetectCir3 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir3 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir3 = new THREE.Mesh( gDetectCir3, mDetectCir3 );
detectCir3.rotation.x = Math.PI / 2;
detectCir3.position.set(-59.5, -1.6, -19);
scene.add( detectCir3 );

//-4-
// create a new mesh with torus geometry -
var torus04 = new THREE.Mesh(
   new THREE.TorusGeometry(radius4, tube4, radialSegments4, tubularSegments4),
   torusMaterial4);
   	torus04.rotation.set(Math.PI/2, 0, 0);
 	torus04.position.set(-42.5, -1.6, -15);
	scene.add(torus04);

//torus cannon body
var torusShape4 = new CANNON.Trimesh.createTorus(radius4, tube4, radialSegments4, tubularSegments4); // Step 1
var torusBody4 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody4.addShape(torusShape4);
torusBody4.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody4.position.set(-42.5, -1.6, -15);
world.add(torusBody4);                          // Step 3

//torus bottom for collision feedback
var gDetectCir4 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir4 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir4 = new THREE.Mesh( gDetectCir4, mDetectCir4 );
detectCir4.rotation.x = Math.PI / 2;
detectCir4.position.set(-42.5, -1.6, -15);
scene.add( detectCir4 );

//-5-
// create a new mesh with torus geometry -
var torus05 = new THREE.Mesh(
   new THREE.TorusGeometry(radius5, tube5, radialSegments5, tubularSegments5),
   torusMaterial5);
   	torus05.rotation.set(Math.PI/2, 0, 0);
 	torus05.position.set(-46.5, -1.6, -23);
	scene.add(torus05);

//torus cannon body
var torusShape5 = new CANNON.Trimesh.createTorus(radius5, tube5, radialSegments5, tubularSegments5); // Step 1
var torusBody5 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody5.addShape(torusShape5);
torusBody5.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody5.position.set(-46.5, -1.6, -23);
world.add(torusBody5);                          // Step 3

//torus bottom for collision feedback
var gDetectCir5 = new THREE.CircleGeometry( 5, 32 );
var mDetectCir5 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir5 = new THREE.Mesh( gDetectCir5, mDetectCir5 );
detectCir5.rotation.x = Math.PI / 2;
detectCir5.position.set(-46.5, -1.6, -23);
scene.add( detectCir5 );

//-6-
// create a new mesh with torus geometry -
var torus06 = new THREE.Mesh(
   new THREE.TorusGeometry(radius6, tube6, radialSegments6, tubularSegments6),
   torusMaterial6);
   	torus06.rotation.set(Math.PI/2, 0, 0);
 	torus06.position.set(-52.8, -1.6, -19);
	scene.add(torus06);

//torus cannon body
var torusShape6 = new CANNON.Trimesh.createTorus(radius6, tube6, radialSegments6, tubularSegments6); // Step 1
var torusBody6 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody6.addShape(torusShape6);
torusBody6.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody6.position.set(-52.8, -1.6, -20);
world.add(torusBody6);                          // Step 3

//torus bottom for collision feedback
var gDetectCir6 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir6 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir6 = new THREE.Mesh( gDetectCir6, mDetectCir6 );
detectCir6.rotation.x = Math.PI / 2;
detectCir6.position.set(-52.8, -1.6, -20);
scene.add( detectCir6 );

//-7-
// create a new mesh with torus geometry -
var torus07 = new THREE.Mesh(
   new THREE.TorusGeometry(radius7, tube7, radialSegments7, tubularSegments7),
   torusMaterial7);
   	torus07.rotation.set(Math.PI/2, 0, 0);
 	torus07.position.set(-58, -1.6, -12);
	scene.add(torus07);

//torus cannon body
var torusShape7 = new CANNON.Trimesh.createTorus(radius7, tube7, radialSegments7, tubularSegments7); // Step 1
var torusBody7 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody7.addShape(torusShape7);
torusBody7.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody7.position.set(-58, -1.6, -12);
world.add(torusBody7);                          // Step 3

//torus bottom for collision feedback
var gDetectCir7 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir7 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir7 = new THREE.Mesh( gDetectCir7, mDetectCir7 );
detectCir7.rotation.x = Math.PI / 2;
detectCir7.position.set(-58, -1.6, -12);
scene.add( detectCir7 );

//-8-
// create a new mesh with torus geometry -
var torus08 = new THREE.Mesh(
   new THREE.TorusGeometry(radius8, tube8, radialSegments8, tubularSegments8),
   torusMaterial8);
   	torus08.rotation.set(Math.PI/2, 0, 0);
 	torus08.position.set(-62.5, -1.6, -12);
	scene.add(torus08);

//torus cannon body
var torusShape8 = new CANNON.Trimesh.createTorus(radius8, tube8, radialSegments8, tubularSegments8); // Step 1
var torusBody8 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody8.addShape(torusShape8);
torusBody8.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody8.position.set(-62.5, -1.6, -12);
world.add(torusBody8);                          // Step 3

//torus bottom for collision feedback
var gDetectCir8 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir8 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir8 = new THREE.Mesh( gDetectCir8, mDetectCir8 );
detectCir8.rotation.x = Math.PI / 2;
detectCir8.position.set(-62.5, -1.6, -12);
scene.add( detectCir8 );

//-9-
// create a new mesh with torus geometry -
var torus09 = new THREE.Mesh(
   new THREE.TorusGeometry(radius9, tube9, radialSegments9, tubularSegments9),
   torusMaterial9);
   	torus09.rotation.set(Math.PI/2, 0, 0);
 	torus09.position.set(-36.5, -1.6, -15);
	scene.add(torus09);

//torus cannon body
var torusShape9 = new CANNON.Trimesh.createTorus(radius9, tube9, radialSegments9, tubularSegments9); // Step 1
var torusBody9 = new CANNON.Body({mass1: mass1}); // Step 2
torusBody9.addShape(torusShape9);
torusBody9.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
torusBody9.position.set(-36.5, -1.6, -15);
world.add(torusBody9);                          // Step 3

//torus bottom for collision feedback
var gDetectCir9 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir9 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir9 = new THREE.Mesh( gDetectCir9, mDetectCir9 );
detectCir9.rotation.x = Math.PI / 2;
detectCir9.position.set(-36.5, -1.6, -15 );
scene.add( detectCir9 );


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////WEAPONS/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bullets/weapon setup
//https://stackoverflow.com/questions/50965025/three-js-shooting-bullet
var weaponRH = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 1), new THREE.MeshBasicMaterial({color:  "blue"}));
weaponRH.position.set(0,0,0);
scene.add(weaponRH);
weaponRH.scale.set(2.5,1.0,0.25);

var weaponLH = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 1), new THREE.MeshBasicMaterial({color: "red"}));
weaponLH.position.set(0,0,0);
scene.add(weaponLH);
weaponLH.scale.set(2.5,1.0,0.25);

var bulletsRH = [];
var bulletsLH = [];

//speed of the bullets
var speed = 100.0;
//clock 
var clock = new THREE.Clock();
//fire boolean flag
var fire = false;

//variable to store the time of collision between each target and a bullet
var lastTimeCollidedTarget1 = 0;
var lastTimeCollidedTarget2 = 0;
var lastTimeCollidedTarget3 = 0;
var lastTimeCollidedTarget4 = 0;

//radius of the ball distance
var bulletRadiusDistance = 35;
//variables to store collision result
var bCollideTarget;
var bCollideTarget2;
var bCollideTarget3;
var bCollideTarget4;

//holds the score when hooting the targets
var shootingScore = 0;

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener ); 

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();

	//play a sound if the gun fires
	audioLoader.load( 'sounds/Gun+Shot2.ogg', function( buffer ) {
		sound.setBuffer( buffer );
		sound.setVolume(0.1);
	});
	

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
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////WEAPON ANIMATIONS////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//move targets using sigmoid functions at different speeds
	targetTorso.position.x = Math.sin(iFrame/120) * 25 + 50;
	targetTorso2.position.x = Math.cos(iFrame/60) * 25 + 50;
	targetTorso3.position.x = Math.sin(iFrame/80) * 25 + 50;
	targetTorso4.position.x = Math.cos(iFrame/40) * 25 + 50;
	
	targetTorso.position.y = Math.cos(iFrame/100) * 10 + 15;
	targetTorso2.position.y = Math.sin(iFrame/100) * 10 + 15;
	targetTorso3.position.y = Math.cos(iFrame/100) * 10 + 15;
	targetTorso4.position.y = Math.sin(iFrame/100) * 10+ 15;

	if(targetTorso.material.color.getHexString() == "ff0000")
		targetTorso.rotation.y = 0;
	else
		targetTorso.rotation.y +=0.1;
	if(targetTorso2.material.color.getHexString() == "ff0000")
		targetTorso2.rotation.y = 0;
	else
		targetTorso2.rotation.y +=0.1;
	if(targetTorso3.material.color.getHexString() == "ff0000")
		targetTorso3.rotation.y = 0;
	else
		targetTorso3.rotation.y +=0.1;
	if(targetTorso4.material.color.getHexString() == "ff0000")
		targetTorso4.rotation.y = 0;
	else
		targetTorso4.rotation.y +=0.1;

//if weapon is fired, create bullets for the gun
	if(fire && iFrame%5==0)
{
	let bulletRH = new THREE.Mesh(new THREE.SphereGeometry(0.25, 4, 4), new THREE.MeshBasicMaterial({color: "blue"}));
	bulletRH.position.copy(weaponRH.position); // start position - tip of weapon;
	bulletRH.quaternion.copy(weaponRH.quaternion); // apply the camera's quaternion
	scene.add(bulletRH);
	bulletsRH.push(bulletRH);
	
	let bulletLH = new THREE.Mesh(new THREE.SphereGeometry(0.25, 4, 4), new THREE.MeshBasicMaterial({color: "red"}));
	bulletLH.position.copy(weaponLH.position); // start position - tip of weapon;
	bulletLH.quaternion.copy(weaponLH.quaternion); // apply the camera's quaternion
	scene.add(bulletLH);
	bulletsLH.push(bulletLH);
	
	sound.muted = false;
	sound.playbackRate = 6;
	sound.play();
}
else
{
	sound.muted = true;
}

//Collisions between bullets and targets.
	for(let i = 0; i < bulletsRH.length; i++)
	{
		//the distance between the weapon bullets and the targets
		var fDistanceBetweenTarget = Math.sqrt(  
		Math.pow((bulletsRH[i].position.x - targetTorso.position.x), 2) +
		Math.pow((bulletsRH[i].position.y - targetTorso.position.y),2) +
		Math.pow((bulletsRH[i].position.z - targetTorso.position.z),2)
		);
		
		//the distance between the weapon bullets and the targets
		var fDistanceBetweenTarget2 = Math.sqrt(  
		Math.pow((bulletsLH[i].position.x - targetTorso.position.x), 2) +
		Math.pow((bulletsLH[i].position.y - targetTorso.position.y),2) +
		Math.pow((bulletsLH[i].position.z - targetTorso.position.z),2)
		);
		
		var fDistanceBetweenTarget3 = Math.sqrt(  
		Math.pow((bulletsRH[i].position.x - targetTorso2.position.x), 2) +
		Math.pow((bulletsRH[i].position.y - targetTorso2.position.y),2) +
		Math.pow((bulletsRH[i].position.z - targetTorso2.position.z),2)
		);
		
		var fDistanceBetweenTarget4 = Math.sqrt(  
		Math.pow((bulletsLH[i].position.x - targetTorso2.position.x), 2) +
		Math.pow((bulletsLH[i].position.y - targetTorso2.position.y),2) +
		Math.pow((bulletsLH[i].position.z - targetTorso2.position.z),2)
		);
		
		var fDistanceBetweenTarget5 = Math.sqrt(  
		Math.pow((bulletsRH[i].position.x - targetTorso3.position.x), 2) +
		Math.pow((bulletsRH[i].position.y - targetTorso3.position.y),2) +
		Math.pow((bulletsRH[i].position.z - targetTorso3.position.z),2)
		);
		
		var fDistanceBetweenTarget6 = Math.sqrt(  
		Math.pow((bulletsLH[i].position.x - targetTorso3.position.x), 2) +
		Math.pow((bulletsLH[i].position.y - targetTorso3.position.y),2) +
		Math.pow((bulletsLH[i].position.z - targetTorso3.position.z),2)
		);
		
		var fDistanceBetweenTarget7 = Math.sqrt(  
		Math.pow((bulletsRH[i].position.x - targetTorso4.position.x), 2) +
		Math.pow((bulletsRH[i].position.y - targetTorso4.position.y),2) +
		Math.pow((bulletsRH[i].position.z - targetTorso4.position.z),2)
		);
		
		var fDistanceBetweenTarget8 = Math.sqrt(  
		Math.pow((bulletsLH[i].position.x - targetTorso4.position.x), 2) +
		Math.pow((bulletsLH[i].position.y - targetTorso4.position.y),2) +
		Math.pow((bulletsLH[i].position.z - targetTorso4.position.z),2)
		);
		
		//radius of the collision boolean for the targets
		var fSumOfRadiusTarget = 4;
		bCollideTarget = fDistanceBetweenTarget < fSumOfRadiusTarget;
		bCollideTarget = fDistanceBetweenTarget2 < fSumOfRadiusTarget;
		bCollideTarget2 = fDistanceBetweenTarget3 < fSumOfRadiusTarget;
		bCollideTarget2 = fDistanceBetweenTarget4 < fSumOfRadiusTarget;
		bCollideTarget3 = fDistanceBetweenTarget5 < fSumOfRadiusTarget;
		bCollideTarget3 = fDistanceBetweenTarget6 < fSumOfRadiusTarget;
		bCollideTarget4 = fDistanceBetweenTarget7 < fSumOfRadiusTarget;
		bCollideTarget4 = fDistanceBetweenTarget8 < fSumOfRadiusTarget;
		
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
		else if(targetTorso.material.color.getHexString() == "ff0000" && iFrame - lastTimeCollided1 > 100)
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
		else if(targetTorso2.material.color.getHexString() == "ff0000" && iFrame - lastTimeCollided2 > 100)
		{
			 targetTorso2.material.color.setHex(0xAAAAAA);
		}
		if (bCollideTarget3)
		{
			//store time collision occurred with frame number
			lastTimeCollided3 = iFrame;
			//set colour of target to red
			targetTorso3.material.color.setHex(0xFF0000);
			//increment score
			shootingScore +=1;
		}
		else if(targetTorso3.material.color.getHexString() == "ff0000" && iFrame - lastTimeCollided3 > 100)
		{
			 targetTorso3.material.color.setHex(0xAAAAAA);
		}
		if (bCollideTarget4)
		{
			//store time collision occurred with frame number
			lastTimeCollided4 = iFrame;
			//set colour of target to red
			targetTorso4.material.color.setHex(0xFF0000);
			//increment score
			shootingScore +=1;
		}
		else if(targetTorso4.material.color.getHexString() == "ff0000" && iFrame - lastTimeCollided4 > 100)
		{
			 targetTorso4.material.color.setHex(0xAAAAAA);
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

	//render the bullets and move them along local z axis
	delta = clock.getDelta();
	for(let i =0; i< bulletsRH.length; i++)
	{
		// move along the local z axis
		bulletsRH[i].translateX(-speed * delta)*-1; 
		// move along the local z axis
		bulletsLH[i].translateX(-speed * delta)*-1.0;	
	}
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////TORUS RING GAME ANIMATIONS////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//hot ballon rotation
cube.rotation.y += 0.006;

  world.step(timeStep);
   // ... update visualization ...
  
    sphere1.position.x = sphereBody.position.x;
  	sphere1.position.y = sphereBody.position.y;
  	sphere1.position.z = sphereBody.position.z;

  // -0-
 	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget = Math.sqrt(  
	(sphere1.position.x - detectCir.position.x) * (sphere1.position.x - detectCir.position.x) +
	(sphere1.position.y - detectCir.position.y) * (sphere1.position.y - detectCir.position.y) +
	(sphere1.position.z - detectCir.position.z) * (sphere1.position.z - detectCir.position.z)
    );

    var fSumOfRadius = 0.5 + 1;
    var bCollideBallsNtorus = fDistanceBetweenBallnTarget < fSumOfRadius;

    if (bCollideBallsNtorus)
    {
        torus.material.color.setHex(0x88C1F7);
    }

  //-1-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget1 = Math.sqrt(  
	(sphere1.position.x - detectCir1.position.x) * (sphere1.position.x - detectCir1.position.x) +
	(sphere1.position.y - detectCir1.position.y) * (sphere1.position.y - detectCir1.position.y) +
	(sphere1.position.z - detectCir1.position.z) * (sphere1.position.z - detectCir1.position.z)
    );

    var fSumOfRadius1 = 0.5 + 1;
    var bCollideBallsNtorus1 = fDistanceBetweenBallnTarget1 < fSumOfRadius1;

    if (bCollideBallsNtorus1)
    {
        torus01.material.color.setHex(0xF80C00);
    }

 //-2-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget2 = Math.sqrt(  
	(sphere1.position.x - detectCir2.position.x) * (sphere1.position.x - detectCir2.position.x) +
	(sphere1.position.y - detectCir2.position.y) * (sphere1.position.y - detectCir2.position.y) +
	(sphere1.position.z - detectCir2.position.z) * (sphere1.position.z - detectCir2.position.z)
    );

    var fSumOfRadius2 = 0.5 + 1;
    var bCollideBallsNtorus2 = fDistanceBetweenBallnTarget2 < fSumOfRadius2;

    if (bCollideBallsNtorus2)
    {
        torus02.material.color.setHex(0xCB8AFC);
    }

 //-3-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget3 = Math.sqrt(  
	(sphere1.position.x - detectCir3.position.x) * (sphere1.position.x - detectCir3.position.x) +
	(sphere1.position.y - detectCir3.position.y) * (sphere1.position.y - detectCir3.position.y) +
	(sphere1.position.z - detectCir3.position.z) * (sphere1.position.z - detectCir3.position.z)
    );

    var fSumOfRadius3 = 0.5 + 1;
    var bCollideBallsNtorus3 = fDistanceBetweenBallnTarget3 < fSumOfRadius3;

    if (bCollideBallsNtorus3)
    {
        torus03.material.color.setHex(0xFB0333);
    }

 //-4-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget4 = Math.sqrt(  
	(sphere1.position.x - detectCir4.position.x) * (sphere1.position.x - detectCir4.position.x) +
	(sphere1.position.y - detectCir4.position.y) * (sphere1.position.y - detectCir4.position.y) +
	(sphere1.position.z - detectCir4.position.z) * (sphere1.position.z - detectCir4.position.z)
    );

    var fSumOfRadius4 = 0.5 + 1;
    var bCollideBallsNtorus4 = fDistanceBetweenBallnTarget4 < fSumOfRadius4;

    if (bCollideBallsNtorus4)
    {
        torus04.material.color.setHex(0x93FE87);
    }

 //-5-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget5 = Math.sqrt(  
	(sphere1.position.x - detectCir5.position.x) * (sphere1.position.x - detectCir5.position.x) +
	(sphere1.position.y - detectCir5.position.y) * (sphere1.position.y - detectCir5.position.y) +
	(sphere1.position.z - detectCir5.position.z) * (sphere1.position.z - detectCir5.position.z)
    );

    var fSumOfRadius5 = 0.5 + 1;
    var bCollideBallsNtorus5 = fDistanceBetweenBallnTarget5 < fSumOfRadius5;

    if (bCollideBallsNtorus5)
    {
        torus05.material.color.setHex(0xFFB202); 
    }

  //-6-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget6 = Math.sqrt(  
	(sphere1.position.x - detectCir6.position.x) * (sphere1.position.x - detectCir6.position.x) +
	(sphere1.position.y - detectCir6.position.y) * (sphere1.position.y - detectCir6.position.y) +
	(sphere1.position.z - detectCir6.position.z) * (sphere1.position.z - detectCir6.position.z)
    );

    var fSumOfRadius6 = 0.5 + 1;
    var bCollideBallsNtorus6 = fDistanceBetweenBallnTarget6 < fSumOfRadius6;

    if (bCollideBallsNtorus6)
    {
        torus06.material.color.setHex(0xFFD575);
    }

  //-7-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget7 = Math.sqrt(  
	(sphere1.position.x - detectCir7.position.x) * (sphere1.position.x - detectCir7.position.x) +
	(sphere1.position.y - detectCir7.position.y) * (sphere1.position.y - detectCir7.position.y) +
	(sphere1.position.z - detectCir7.position.z) * (sphere1.position.z - detectCir7.position.z)
    );

    var fSumOfRadius7 = 0.5 + 1;
    var bCollideBallsNtorus7 = fDistanceBetweenBallnTarget7 < fSumOfRadius7;



    if (bCollideBallsNtorus7)
    {
        torus07.material.color.setHex(0xB875FF);
    }

 //-8-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget8 = Math.sqrt(  
	(sphere1.position.x - detectCir8.position.x) * (sphere1.position.x - detectCir8.position.x) +
	(sphere1.position.y - detectCir8.position.y) * (sphere1.position.y - detectCir8.position.y) +
	(sphere1.position.z - detectCir8.position.z) * (sphere1.position.z - detectCir8.position.z)
    );

    var fSumOfRadius8 = 0.5 + 1;
    var bCollideBallsNtorus8 = fDistanceBetweenBallnTarget8 < fSumOfRadius8;



    if (bCollideBallsNtorus8)
    {
        torus08.material.color.setHex(0xFEA9D4);
    }

 //-9-
	// Collision between sphere and torus target 
	var fDistanceBetweenBallnTarget9 = Math.sqrt(  
	(sphere1.position.x - detectCir9.position.x) * (sphere1.position.x - detectCir9.position.x) +
	(sphere1.position.y - detectCir9.position.y) * (sphere1.position.y - detectCir9.position.y) +
	(sphere1.position.z - detectCir9.position.z) * (sphere1.position.z - detectCir9.position.z)
    );

    var fSumOfRadius9 = 0.5 + 1;
    var bCollideBallsNtorus9 = fDistanceBetweenBallnTarget9 < fSumOfRadius9;

    if (bCollideBallsNtorus9)
    {
        torus09.material.color.setHex(0x89FFA9);
    }

	
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

// Add a ball for the left hand
var gLH= new THREE.SphereGeometry(0.2, 18, 18);
var mLH = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.75, emissive: "grey"} ); 
var meshLH= new THREE.Mesh(gLH, mLH);
scene.add(meshLH);

// Add a ball for the right hand
var gRH= new THREE.SphereGeometry(0.2, 18, 18);
var mRH = new THREE.MeshStandardMaterial( { color: 0x000000, metalness: 0.75, emissive: "grey"} ); 
var meshRH= new THREE.Mesh(gRH, mRH);
scene.add(meshRH);

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

//add a cannon ball for the left foot
var sphereShape1 = new CANNON.Sphere(0.1);    // Step 1
var sphereBody1 = new CANNON.Body({mass: 200}); // Step 2
sphereBody1.addShape(sphereShape1);
//sphereBody.position.set(0, 2.9, 2.5);
world.add(sphereBody1);                          // Step 3

//add a cannon ball for the right foot
var sphereShape2 = new CANNON.Sphere(0.1);    // Step 1
var sphereBody2 = new CANNON.Body({mass: 200}); // Step 2
sphereBody2.addShape(sphereShape2);
//sphereBody.position.set(0, 2.9, 2.5);
world.add(sphereBody2);  

// Draw a line with 4 points
var mLine = new THREE.LineBasicMaterial({color: 0xff9999, linewidth: 2.0});
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

//Store last quaternions of right hand and left hand
var v4LastPosRH = new Array(5);
var v4LastPosLH = new Array(5);
for (var i=0; i<5; i++)
{
	v4LastPosLH[i] = new THREE.Vector3(0, 0, 0);
	v4LastPosRH[i] = new THREE.Vector3(0, 0, 0);
}
//store the filtered position of the joint
var meshFilteredRHPos = new THREE.Vector3(0,0,0);
var meshFilteredLHPos = new THREE.Vector3(0,0,0);

// The getBodies callback function: called once every time kinect obtain a frame
function getBodies(skeleton) 
{ 
	//tracking geometry onto joints
	meshLH.position.x = skeleton.joints[kinectron.HANDLEFT].cameraX;
	meshLH.position.y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	meshLH.position.z = skeleton.joints[kinectron.HANDLEFT].cameraZ;
	
	meshRH.position.x = skeleton.joints[kinectron.WRISTRIGHT].cameraX;
	meshRH.position.y = skeleton.joints[kinectron.WRISTRIGHT].cameraY;	
	meshRH.position.z = skeleton.joints[kinectron.WRISTRIGHT].cameraZ;
	
	meshHead.position.x = skeleton.joints[kinectron.HEAD].cameraX;
	meshHead.position.y = skeleton.joints[kinectron.HEAD].cameraY;
	meshHead.position.z = skeleton.joints[kinectron.HEAD].cameraZ;
	
	meshSpine.position.x = skeleton.joints[kinectron.SPINEMID].cameraX;
	meshSpine.position.y = skeleton.joints[kinectron.SPINEMID].cameraY;
	meshSpine.position.z = skeleton.joints[kinectron.SPINEMID].cameraZ;
	
	meshLF.position.x = skeleton.joints[kinectron.FOOTLEFT].cameraX;
	meshLF.position.y = skeleton.joints[kinectron.FOOTLEFT].cameraY;
	meshLF.position.z = skeleton.joints[kinectron.FOOTLEFT].cameraZ;
	
	sphereBody1.position.x = skeleton.joints[kinectron.FOOTLEFT].cameraX;
	sphereBody1.position.y = skeleton.joints[kinectron.FOOTLEFT].cameraY;
	sphereBody1.position.z = skeleton.joints[kinectron.FOOTLEFT].cameraZ;

	meshRF.position.x = skeleton.joints[kinectron.FOOTRIGHT].cameraX;
	meshRF.position.y = skeleton.joints[kinectron.FOOTRIGHT].cameraY;
	meshRF.position.z = skeleton.joints[kinectron.FOOTRIGHT].cameraZ;
	
	sphereBody2.position.x = skeleton.joints[kinectron.FOOTRIGHT].cameraX;
	sphereBody2.position.y = skeleton.joints[kinectron.FOOTRIGHT].cameraY;
	sphereBody2.position.z = skeleton.joints[kinectron.FOOTRIGHT].cameraZ;
	
	// Updating lines to the joins
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
	
	weaponRH.quaternion.set(
	skeleton.joints[kinectron.HANDRIGHT].orientationX,
	skeleton.joints[kinectron.HANDRIGHT].orientationY, 
	skeleton.joints[kinectron.HANDRIGHT].orientationZ,
	skeleton.joints[kinectron.HANDRIGHT].orientationW);
	
	weaponLH.quaternion.copy(weaponRH.quaternion);
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////FILTERING////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////

		
	//Calculate the linearly filtered position using previous Kinect data
	meshFilteredRHPos.x = (skeleton.joints[kinectron.HANDRIGHT].cameraX*6.0 + v4LastPosRH[0].x*5.0
							+ v4LastPosRH[1].x*4.0 + v4LastPosRH[2].x*3.0 + v4LastPosRH[3].x*2.0
							+ v4LastPosRH[4].x*1.0)/(21.0);
	meshFilteredRHPos.y = (skeleton.joints[kinectron.HANDRIGHT].cameraY*6.0 + v4LastPosRH[0].y*5.0
							+ v4LastPosRH[1].y*4.0 + v4LastPosRH[2].y*3.0 + v4LastPosRH[3].y*2.0
							+ v4LastPosRH[4].y*1.0)/(21.0);
	meshFilteredRHPos.z = (skeleton.joints[kinectron.HANDRIGHT].cameraZ*6.0 + v4LastPosRH[0].z*5.0
							+ v4LastPosRH[1].z*4.0 + v4LastPosRH[2].z*3.0 + v4LastPosRH[3].z*2.0
							+ v4LastPosRH[4].z*1.0)/(21.0);
					
	meshFilteredLHPos.x = (skeleton.joints[kinectron.HANDLEFT].cameraX*6.0 + v4LastPosLH[0].x*5.0
							+ v4LastPosLH[1].x*4.0 + v4LastPosLH[2].x*3.0 + v4LastPosLH[3].x*2.0
							+ v4LastPosLH[4].x*1.0)/(21.0);

	meshFilteredLHPos.y = (skeleton.joints[kinectron.HANDLEFT].cameraY*6.0 + v4LastPosLH[0].y*5.0
							+ v4LastPosLH[1].y*4.0 + v4LastPosLH[2].y*3.0 + v4LastPosLH[3].y*2.0
							+ v4LastPosLH[4].y*1.0)/(21.0);

	meshFilteredLHPos.Z = (skeleton.joints[kinectron.HANDLEFT].cameraZ*6.0 + v4LastPosLH[0].z*5.0
							+ v4LastPosLH[1].z*4.0 + v4LastPosLH[2].z*3.0 + v4LastPosLH[3].z*2.0
							+ v4LastPosLH[4].z*1.0)/(21.0);	
							
	//Assign the last positions to the previous
	for (var i=4; i>0; i--)
	{
		v4LastPosRH[i].x = v4LastPosRH[i-1].x;
		v4LastPosRH[i].y = v4LastPosRH[i-1].y;
		v4LastPosRH[i].z = v4LastPosRH[i-1].z;
		
		v4LastPosLH[i].x = v4LastPosLH[i-1].x;
		v4LastPosLH[i].y = v4LastPosLH[i-1].y;
		v4LastPosLH[i].z = v4LastPosLH[i-1].z;
		
	}
	v4LastPosRH[0].x = skeleton.joints[kinectron.HANDRIGHT].cameraX;
	v4LastPosRH[0].y = skeleton.joints[kinectron.HANDRIGHT].cameraY;
	v4LastPosRH[0].z = skeleton.joints[kinectron.HANDRIGHT].cameraZ;
	
	v4LastPosLH[0].x = skeleton.joints[kinectron.HANDLEFT].cameraX;
	v4LastPosLH[0].y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	v4LastPosLH[0].z = skeleton.joints[kinectron.HANDLEFT].cameraZ;
	
	//assign the filtered quaternions to the weapons
	weaponRH.position.copy(meshFilteredRHPos);
	weaponLH.position.copy(meshFilteredLHPos);

	
	//FPS camera 
	//camera.position.set(skeleton.joints[kinectron.HEAD].cameraX,1,skeleton.joints[kinectron.HEAD].cameraZ+ 5);
	//camera.lookAt(skeleton.joints[kinectron.HEAD].cameraX, skeleton.joints[kinectron.HEAD].cameraY +0.75, skeleton.joints[kinectron.HEAD].cameraZ);
	
	//camera.quaternion.set(skeleton.joints[kinectron.NECK].orientationX,
	//skeleton.joints[kinectron.NECK].orientationY,
	//skeleton.joints[kinectron.NECK].orientationZ,
	//skeleton.joints[kinectron.NECK].orientationW);
	//camera.rotation.y += Math.PI;
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////GESTURE RECOGNITION///////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Distance between left foot and right foot
    var fDistanceFeet = Math.sqrt(
	Math.pow((skeleton.joints[kinectron.FOOTLEFT].cameraX - skeleton.joints[kinectron.FOOTRIGHT].cameraX),2) +
	Math.pow((skeleton.joints[kinectron.FOOTLEFT].cameraY - skeleton.joints[kinectron.FOOTRIGHT].cameraY),2) +
	Math.pow((skeleton.joints[kinectron.FOOTLEFT].cameraZ - skeleton.joints[kinectron.FOOTRIGHT].cameraZ),2));
	
	//Distance between hips and arms
	var fDistanceLeftArmWithHipLeft = Math.sqrt(
	Math.pow((skeleton.joints[kinectron.HANDLEFT].cameraX - skeleton.joints[kinectron.HIPLEFT].cameraX),2) + 
	Math.pow((skeleton.joints[kinectron.HANDLEFT].cameraY - skeleton.joints[kinectron.HIPLEFT].cameraY),2));
	var fDistanceRightArmWithHipRight = Math.sqrt(
	Math.pow((skeleton.joints[kinectron.HANDRIGHT].cameraX - skeleton.joints[kinectron.HIPRIGHT].cameraX),2) + 
	Math.pow((skeleton.joints[kinectron.HANDRIGHT].cameraY - skeleton.joints[kinectron.HIPRIGHT].cameraY),2));
	
	//sum of radius between the right foot and left foot;
	var fSumOfRadiusRFLF = 0.1;
	
	var armsAway = false;
	if(fDistanceLeftArmWithHipLeft > 0.6 && fDistanceRightArmWithHipRight > 0.6)
		armsAway = true;
	else
		armsAway = false;
	
	//check feet are closed together, only fire if the arms and the hip are away from each other
    if(fDistanceFeet < fSumOfRadiusRFLF && armsAway)
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


