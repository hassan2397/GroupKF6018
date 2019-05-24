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

//Stadium torus
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


//	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD		
//	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD

var listener = new THREE.AudioListener();
camera.add( listener );
// create a global audio source
var sound = new THREE.Audio( listener );
// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'CrowdEffect.ogg', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );

});
sound.play();

var geostairs1 = new THREE.BoxGeometry( 7, 10, 80 );
var matstairs1 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs1 = new THREE.Mesh( geostairs1, matstairs1 );
scene.add( stairs1 );
stairs1.position.x = -80;
stairs1.position.z=0;


var geostairs2 = new THREE.BoxGeometry( 7, 20, 80 );
var matstairs2 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs2 = new THREE.Mesh( geostairs2, matstairs2 );
scene.add( stairs2 );
stairs2.position.x = -7;

var geostairs3 = new THREE.BoxGeometry( 7, 30, 80 );
var matstairs3 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs3 = new THREE.Mesh( geostairs3, matstairs3 );
scene.add( stairs3 );
stairs3.position.x = -7;

var geostairs4 = new THREE.BoxGeometry( 7, 40, 80 );
var matstairs4 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs4 = new THREE.Mesh( geostairs4, matstairs4 );
scene.add( stairs4 );
stairs4.position.x=-7;


stairs2.parent=stairs1;
stairs3.parent=stairs2;
stairs4.parent=stairs3;


var geostairs5 = new THREE.BoxGeometry( 7, 10, 80 );
var matstairs5 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs5 = new THREE.Mesh( geostairs5, matstairs5 );
scene.add( stairs5 );
stairs5.position.x = 85;
stairs5.position.z=0;


var geostairs6 = new THREE.BoxGeometry( 7, 20, 80 );
var matstairs6 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs6 = new THREE.Mesh( geostairs6, matstairs6 );
scene.add( stairs6 );
stairs6.position.x = 7;

var geostairs7 = new THREE.BoxGeometry(7, 30, 80 );
var matstairs7 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs7 = new THREE.Mesh( geostairs7, matstairs7 );
scene.add( stairs7 );
stairs7.position.x = 7;

var geostairs8 = new THREE.BoxGeometry( 7, 40, 80 );
var matstairs8 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs8 = new THREE.Mesh( geostairs8, matstairs8 );
scene.add( stairs8 );
stairs8.position.x=7;

stairs6.parent=stairs5;
stairs7.parent=stairs6;
stairs8.parent=stairs7;


// An array of particles
var iNumber = 17;

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

 	headArray[i].position.x = 83;
    headArray[i].position.y = 10.5;
    headArray[i].position.z =(4*i)-30;
    //headArray[i].position.z =-5;


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

headArray[i].rotation.y =4.8;
shoulder1Array[i].rotation.z=Math.PI/2;
shoulder2Array[i].rotation.z=Math.PI/2;


}


var headArray2 = [];
var hat1Array2 = [];
var hat2Array2 = [];
var glass1Array2 = [];
var glass2Array2 = [];
var eye1Array2 = [];
var eye2Array2 = [];
var eyelineArray2 = [];
var bodyArray2 = [];
var bodylineArray2 = [];
var bodydownArray2 = [];
var leg1Array2 = [];
var leg2Array2 = [];
var shoesArray2 = [];
var hand1Array2 = [];
var hand2Array2 = [];
var palm1Array2 = [];
var palm2Array2 = [];
var beardArray2 = [];
var mouthArray2 = [];
var mouth2Array2 = [];
var shoulder1Array2=[];
var shoulder2Array2=[];
var joint1Array2=[];
var joint2Array2=[];

// Create the particles
for (var i=0; i<iNumber; i++)
{
	

    headArray2.push(new THREE.Mesh(geoArray[i], matArray) );	
    hat1Array2.push(new THREE.Mesh(geoArray2[i],matArray2));
    hat2Array2.push(new THREE.Mesh(geoArray3[i],matArray3));
    glass1Array2.push(new THREE.Mesh(geoArray4[i],matArray4));
    glass2Array2.push(new THREE.Mesh(geoArray5[i],matArray4)); 
    eye1Array2.push(new THREE.Mesh(geoArray6[i],matArray6)); 
    eye2Array2.push(new THREE.Mesh(geoArray7[i],matArray7)); 
    eyelineArray2.push(new THREE.Mesh(geoArray8[i],matArray8)); 
    bodyArray2.push(new THREE.Mesh(geoArray9[i],matArray9)); 
    bodylineArray2.push(new THREE.Mesh(geoArray10[i],matArray10)); 
    bodydownArray2.push(new THREE.Mesh(geoArray11[i],matArray11)); 
    leg1Array2.push(new THREE.Mesh(geoArray12[i],matArray12));
    leg2Array2.push(new THREE.Mesh(geoArray12[i],matArray13));
    shoesArray2.push(new THREE.Mesh(geoArray14[i],matArray14));
    hand1Array2.push(new THREE.Mesh(geoArray15[i],matArray15));
    hand2Array2.push(new THREE.Mesh(geoArray16[i],matArray16));	
    palm1Array2.push(new THREE.Mesh(geoArray17[i],matArray17));
    palm2Array2.push(new THREE.Mesh(geoArray18[i],matArray18));
    beardArray2.push(new THREE.Mesh(geoArray19[i],matArray19));
    mouthArray2.push(new THREE.Mesh(geoArray20[i],matArray20));
    mouth2Array2.push(new THREE.Mesh(geoArray21[i],matArray21));
	shoulder1Array2.push(new THREE.Mesh(geoArray22[i],matArray22));
	shoulder2Array2.push(new THREE.Mesh(geoArray23[i],matArray23));
	joint1Array2.push(new THREE.Mesh(geoArray24[i],matArray24));
	joint2Array2.push(new THREE.Mesh(geoArray25[i],matArray25));

    headArray2[i].position.y = 15;
    headArray2[i].position.x = 93;
    headArray2[i].position.z =(4*i)-30;

	hat1Array2[i].position.y = 0.9;
    hat2Array2[i].position.y = 1;
    glass1Array2[i].position.x=-0.5
    glass1Array2[i].position.y=0.2;
    glass1Array2[i].position.z=0.9;
	glass2Array2[i].position.x=0.5
    glass2Array2[i].position.y=0.2;
    glass2Array2[i].position.z=0.9;
  	eye1Array2[i].position.z=0.1;
  	eye2Array2[i].position.z=0.1;
  	eyelineArray2[i].position.y=0.15;
  	eyelineArray2[i].position.z=0.9;
  	bodyArray2[i].position.y=-1.9;
  	bodyArray2[i].position.z=-0.2;
  	bodylineArray2[i].position.z=1;
  	bodydownArray2[i].position.y=-1.3;
  	leg1Array2[i].position.x=-0.35;
  	leg1Array2[i].position.y=-1;
  	leg2Array2[i].position.x=0.35;
  	leg2Array2[i].position.y=-1;
  	shoesArray2[i].position.x=0.3;
  	shoesArray2[i].position.y=-1;
  	shoesArray2[i].position.z=0.5;
  	hand1Array2[i].position.x=-0.25;
  	hand1Array2[i].position.y=-0.8;
	hand2Array2[i].position.x=0.25;
  	hand2Array2[i].position.y=-0.8;
  	palm1Array2[i].position.y=-1.4;
  	palm2Array2[i].position.y=-1.4;
  	beardArray2[i].position.y=-0.6;
	beardArray2[i].position.z=0.9;
	mouthArray2[i].position.y=-0.6;
	mouthArray2[i].position.z=1;
	mouth2Array2[i].position.z=0.1;
	shoulder1Array2[i].position.y=0.8;
	shoulder1Array2[i].position.x=-1.4;
	shoulder2Array2[i].position.y=0.8;
	shoulder2Array2[i].position.x=1.4;
	joint1Array2[i].position.x=-1.4;
	joint1Array2[i].position.y=0.8;
	joint2Array2[i].position.x=1.4;
	joint2Array2[i].position.y=0.8;

    scene.add(headArray2[i]);
    scene.add(hat1Array2[i]);
    scene.add(hat2Array2[i]);
    scene.add(glass1Array2[i]);
    scene.add(glass2Array2[i]);
    scene.add(eye1Array2[i]);
    scene.add(eye2Array2[i]);
    scene.add(eyelineArray2[i]);
    scene.add(bodyArray2[i]);
    scene.add(bodylineArray2[i]);
    scene.add(bodydownArray2[i]);
    scene.add(leg1Array2[i]);
    scene.add(leg2Array2[i]);
	scene.add(shoesArray2[i]);
	scene.add(hand1Array2[i]);
	scene.add(hand2Array2[i]);
	scene.add(palm1Array2[i]);
	scene.add(palm2Array2[i]);
	scene.add(beardArray2[i]);
	scene.add(mouthArray2[i]);
	scene.add(mouth2Array2[i]);
	scene.add(shoulder1Array2[i]);
	scene.add(shoulder2Array2[i]);
	scene.add(joint1Array2[i]);
	scene.add(joint2Array2[i]);
	
    hat1Array2[i].parent=headArray2[i];
    hat2Array2[i].parent=headArray2[i];
	glass1Array2[i].parent=headArray2[i];
	glass2Array2[i].parent=headArray2[i];
	eye1Array2[i].parent=glass1Array2[i];
	eye2Array2[i].parent=glass2Array2[i];
	eyelineArray2[i].parent=headArray2[i];
	bodyArray2[i].parent=headArray2[i];
	bodylineArray2[i].parent=bodyArray2[i];
	bodydownArray2[i].parent=bodyArray2[i];
	leg1Array2[i].parent=bodydownArray2[i];
	leg2Array2[i].parent=bodydownArray2[i];
	shoesArray2[i].parent=leg1Array2[i];
	hand1Array2[i].parent=joint1Array2[i];
	hand2Array2[i].parent=joint2Array2[i];
	palm1Array2[i].parent=hand1Array2[i];
	palm2Array2[i].parent=hand2Array2[i];
	beardArray2[i].parent=headArray2[i];
	mouthArray2[i].parent=headArray2[i];
	mouth2Array2[i].parent=mouthArray2[i];
	shoulder1Array2[i].parent=bodyArray2[i];
	shoulder2Array2[i].parent=bodyArray2[i];
	joint1Array2[i].parent=bodyArray2[i];
	joint2Array2[i].parent=bodyArray2[i];

headArray2[i].rotation.y =4.8;
shoulder1Array2[i].rotation.z=Math.PI/2;
shoulder2Array2[i].rotation.z=Math.PI/2;


}


var headArray3 = [];
var hat1Array3 = [];
var hat2Array3 = [];
var glass1Array3 = [];
var glass2Array3 = [];
var eye1Array3 = [];
var eye2Array3 = [];
var eyelineArray3 = [];
var bodyArray3 = [];
var bodylineArray3 = [];
var bodydownArray3 = [];
var leg1Array3 = [];
var leg2Array3 = [];
var shoesArray3 = [];
var hand1Array3 = [];
var hand2Array3 = [];
var palm1Array3 = [];
var palm2Array3 = [];
var beardArray3 = [];
var mouthArray3 = [];
var mouth2Array3 = [];
var shoulder1Array3=[];
var shoulder2Array3=[];
var joint1Array3=[];
var joint2Array3=[];

// Create the particles
for (var i=0; i<iNumber; i++)
{
	

    headArray3.push(new THREE.Mesh(geoArray[i], matArray) );	
    hat1Array3.push(new THREE.Mesh(geoArray2[i],matArray2));
    hat2Array3.push(new THREE.Mesh(geoArray3[i],matArray3));
    glass1Array3.push(new THREE.Mesh(geoArray4[i],matArray4));
    glass2Array3.push(new THREE.Mesh(geoArray5[i],matArray4)); 
    eye1Array3.push(new THREE.Mesh(geoArray6[i],matArray6)); 
    eye2Array3.push(new THREE.Mesh(geoArray7[i],matArray7)); 
    eyelineArray3.push(new THREE.Mesh(geoArray8[i],matArray8)); 
    bodyArray3.push(new THREE.Mesh(geoArray9[i],matArray9)); 
    bodylineArray3.push(new THREE.Mesh(geoArray10[i],matArray10)); 
    bodydownArray3.push(new THREE.Mesh(geoArray11[i],matArray11)); 
    leg1Array3.push(new THREE.Mesh(geoArray12[i],matArray12));
    leg2Array3.push(new THREE.Mesh(geoArray12[i],matArray13));
    shoesArray3.push(new THREE.Mesh(geoArray14[i],matArray14));
    hand1Array3.push(new THREE.Mesh(geoArray15[i],matArray15));
    hand2Array3.push(new THREE.Mesh(geoArray16[i],matArray16));	
    palm1Array3.push(new THREE.Mesh(geoArray17[i],matArray17));
    palm2Array3.push(new THREE.Mesh(geoArray18[i],matArray18));
    beardArray3.push(new THREE.Mesh(geoArray19[i],matArray19));
    mouthArray3.push(new THREE.Mesh(geoArray20[i],matArray20));
    mouth2Array3.push(new THREE.Mesh(geoArray21[i],matArray21));
	shoulder1Array3.push(new THREE.Mesh(geoArray22[i],matArray22));
	shoulder2Array3.push(new THREE.Mesh(geoArray23[i],matArray23));
	joint1Array3.push(new THREE.Mesh(geoArray24[i],matArray24));
	joint2Array3.push(new THREE.Mesh(geoArray25[i],matArray25));

    headArray3[i].position.y = 11;
    headArray3[i].position.x = -78;
    headArray3[i].position.z =(4*i)-30;

	hat1Array3[i].position.y = 0.9;
    hat2Array3[i].position.y = 1;
    glass1Array3[i].position.x=-0.5
    glass1Array3[i].position.y=0.2;
    glass1Array3[i].position.z=0.9;
	glass2Array3[i].position.x=0.5
    glass2Array3[i].position.y=0.2;
    glass2Array3[i].position.z=0.9;
  	eye1Array3[i].position.z=0.1;
  	eye2Array3[i].position.z=0.1;
  	eyelineArray3[i].position.y=0.15;
  	eyelineArray3[i].position.z=0.9;
  	bodyArray3[i].position.y=-1.9;
  	bodyArray3[i].position.z=-0.2;
  	bodylineArray3[i].position.z=1;
  	bodydownArray3[i].position.y=-1.3;
  	leg1Array3[i].position.x=-0.35;
  	leg1Array3[i].position.y=-1;
  	leg2Array3[i].position.x=0.35;
  	leg2Array3[i].position.y=-1;
  	shoesArray3[i].position.x=0.3;
  	shoesArray3[i].position.y=-1;
  	shoesArray3[i].position.z=0.5;
  	hand1Array3[i].position.x=-0.25;
  	hand1Array3[i].position.y=-0.8;
	hand2Array3[i].position.x=0.25;
  	hand2Array3[i].position.y=-0.8;
  	palm1Array3[i].position.y=-1.4;
  	palm2Array3[i].position.y=-1.4;
  	beardArray3[i].position.y=-0.6;
	beardArray3[i].position.z=0.9;
	mouthArray3[i].position.y=-0.6;
	mouthArray3[i].position.z=1;
	mouth2Array3[i].position.z=0.1;
	shoulder1Array3[i].position.y=0.8;
	shoulder1Array3[i].position.x=-1.4;
	shoulder2Array3[i].position.y=0.8;
	shoulder2Array3[i].position.x=1.4;
	joint1Array3[i].position.x=-1.4;
	joint1Array3[i].position.y=0.8;
	joint2Array3[i].position.x=1.4;
	joint2Array3[i].position.y=0.8;

    scene.add(headArray3[i]);
    scene.add(hat1Array3[i]);
    scene.add(hat2Array3[i]);
    scene.add(glass1Array3[i]);
    scene.add(glass2Array3[i]);
    scene.add(eye1Array3[i]);
    scene.add(eye2Array3[i]);
    scene.add(eyelineArray3[i]);
    scene.add(bodyArray3[i]);
    scene.add(bodylineArray3[i]);
    scene.add(bodydownArray3[i]);
    scene.add(leg1Array3[i]);
    scene.add(leg2Array3[i]);
	scene.add(shoesArray3[i]);
	scene.add(hand1Array3[i]);
	scene.add(hand2Array3[i]);
	scene.add(palm1Array3[i]);
	scene.add(palm2Array3[i]);
	scene.add(beardArray3[i]);
	scene.add(mouthArray3[i]);
	scene.add(mouth2Array3[i]);
	scene.add(shoulder1Array3[i]);
	scene.add(shoulder2Array3[i]);
	scene.add(joint1Array3[i]);
	scene.add(joint2Array3[i]);
	
    hat1Array3[i].parent=headArray3[i];
    hat2Array3[i].parent=headArray3[i];
	glass1Array3[i].parent=headArray3[i];
	glass2Array3[i].parent=headArray3[i];
	eye1Array3[i].parent=glass1Array3[i];
	eye2Array3[i].parent=glass2Array3[i];
	eyelineArray3[i].parent=headArray3[i];
	bodyArray3[i].parent=headArray3[i];
	bodylineArray3[i].parent=bodyArray3[i];
	bodydownArray3[i].parent=bodyArray3[i];
	leg1Array3[i].parent=bodydownArray3[i];
	leg2Array3[i].parent=bodydownArray3[i];
	shoesArray3[i].parent=leg1Array3[i];
	hand1Array3[i].parent=joint1Array3[i];
	hand2Array3[i].parent=joint2Array3[i];
	palm1Array3[i].parent=hand1Array3[i];
	palm2Array3[i].parent=hand2Array3[i];
	beardArray3[i].parent=headArray3[i];
	mouthArray3[i].parent=headArray3[i];
	mouth2Array3[i].parent=mouthArray3[i];
	shoulder1Array3[i].parent=bodyArray3[i];
	shoulder2Array3[i].parent=bodyArray3[i];
	joint1Array3[i].parent=bodyArray3[i];
	joint2Array3[i].parent=bodyArray3[i];

headArray3[i].rotation.y =Math.PI/2;
shoulder1Array3[i].rotation.z=Math.PI/2;
shoulder2Array3[i].rotation.z=Math.PI/2;


}
var headArray4 = [];
var hat1Array4 = [];
var hat2Array4 = [];
var glass1Array4 = [];
var glass2Array4 = [];
var eye1Array4 = [];
var eye2Array4 = [];
var eyelineArray4 = [];
var bodyArray4 = [];
var bodylineArray4 = [];
var bodydownArray4 = [];
var leg1Array4 = [];
var leg2Array4 = [];
var shoesArray4 = [];
var hand1Array4 = [];
var hand2Array4 = [];
var palm1Array4 = [];
var palm2Array4 = [];
var beardArray4 = [];
var mouthArray4 = [];
var mouth2Array4 = [];
var shoulder1Array4=[];
var shoulder2Array4=[];
var joint1Array4=[];
var joint2Array4=[];

// Create the particles
for (var i=0; i<iNumber; i++)
{
	

    headArray4.push(new THREE.Mesh(geoArray[i], matArray) );	
    hat1Array4.push(new THREE.Mesh(geoArray2[i],matArray2));
    hat2Array4.push(new THREE.Mesh(geoArray3[i],matArray3));
    glass1Array4.push(new THREE.Mesh(geoArray4[i],matArray4));
    glass2Array4.push(new THREE.Mesh(geoArray5[i],matArray4)); 
    eye1Array4.push(new THREE.Mesh(geoArray6[i],matArray6)); 
    eye2Array4.push(new THREE.Mesh(geoArray7[i],matArray7)); 
    eyelineArray4.push(new THREE.Mesh(geoArray8[i],matArray8)); 
    bodyArray4.push(new THREE.Mesh(geoArray9[i],matArray9)); 
    bodylineArray4.push(new THREE.Mesh(geoArray10[i],matArray10)); 
    bodydownArray4.push(new THREE.Mesh(geoArray11[i],matArray11)); 
    leg1Array4.push(new THREE.Mesh(geoArray12[i],matArray12));
    leg2Array4.push(new THREE.Mesh(geoArray12[i],matArray13));
    shoesArray4.push(new THREE.Mesh(geoArray14[i],matArray14));
    hand1Array4.push(new THREE.Mesh(geoArray15[i],matArray15));
    hand2Array4.push(new THREE.Mesh(geoArray16[i],matArray16));	
    palm1Array4.push(new THREE.Mesh(geoArray17[i],matArray17));
    palm2Array4.push(new THREE.Mesh(geoArray18[i],matArray18));
    beardArray4.push(new THREE.Mesh(geoArray19[i],matArray19));
    mouthArray4.push(new THREE.Mesh(geoArray20[i],matArray20));
    mouth2Array4.push(new THREE.Mesh(geoArray21[i],matArray21));
	shoulder1Array4.push(new THREE.Mesh(geoArray22[i],matArray22));
	shoulder2Array4.push(new THREE.Mesh(geoArray23[i],matArray23));
	joint1Array4.push(new THREE.Mesh(geoArray24[i],matArray24));
	joint2Array4.push(new THREE.Mesh(geoArray25[i],matArray25));

    headArray4[i].position.y = 15.5;
    headArray4[i].position.x = -87;
    headArray4[i].position.z =(4*i)-30;

	hat1Array4[i].position.y = 0.9;
    hat2Array4[i].position.y = 1;
    glass1Array4[i].position.x=-0.5
    glass1Array4[i].position.y=0.2;
    glass1Array4[i].position.z=0.9;
	glass2Array4[i].position.x=0.5
    glass2Array4[i].position.y=0.2;
    glass2Array4[i].position.z=0.9;
  	eye1Array4[i].position.z=0.1;
  	eye2Array4[i].position.z=0.1;
  	eyelineArray4[i].position.y=0.15;
  	eyelineArray4[i].position.z=0.9;
  	bodyArray4[i].position.y=-1.9;
  	bodyArray4[i].position.z=-0.2;
  	bodylineArray4[i].position.z=1;
  	bodydownArray4[i].position.y=-1.3;
  	leg1Array4[i].position.x=-0.35;
  	leg1Array4[i].position.y=-1;
  	leg2Array4[i].position.x=0.35;
  	leg2Array4[i].position.y=-1;
  	shoesArray4[i].position.x=0.3;
  	shoesArray4[i].position.y=-1;
  	shoesArray4[i].position.z=0.5;
  	hand1Array4[i].position.x=-0.25;
  	hand1Array4[i].position.y=-0.8;
	hand2Array4[i].position.x=0.25;
  	hand2Array4[i].position.y=-0.8;
  	palm1Array4[i].position.y=-1.4;
  	palm2Array4[i].position.y=-1.4;
  	beardArray4[i].position.y=-0.6;
	beardArray4[i].position.z=0.9;
	mouthArray4[i].position.y=-0.6;
	mouthArray4[i].position.z=1;
	mouth2Array4[i].position.z=0.1;
	shoulder1Array4[i].position.y=0.8;
	shoulder1Array4[i].position.x=-1.4;
	shoulder2Array4[i].position.y=0.8;
	shoulder2Array4[i].position.x=1.4;
	joint1Array4[i].position.x=-1.4;
	joint1Array4[i].position.y=0.8;
	joint2Array4[i].position.x=1.4;
	joint2Array4[i].position.y=0.8;

    scene.add(headArray4[i]);
    scene.add(hat1Array4[i]);
    scene.add(hat2Array4[i]);
    scene.add(glass1Array4[i]);
    scene.add(glass2Array4[i]);
    scene.add(eye1Array4[i]);
    scene.add(eye2Array4[i]);
    scene.add(eyelineArray4[i]);
    scene.add(bodyArray4[i]);
    scene.add(bodylineArray4[i]);
    scene.add(bodydownArray4[i]);
    scene.add(leg1Array4[i]);
    scene.add(leg2Array4[i]);
	scene.add(shoesArray4[i]);
	scene.add(hand1Array4[i]);
	scene.add(hand2Array4[i]);
	scene.add(palm1Array4[i]);
	scene.add(palm2Array4[i]);
	scene.add(beardArray4[i]);
	scene.add(mouthArray4[i]);
	scene.add(mouth2Array4[i]);
	scene.add(shoulder1Array4[i]);
	scene.add(shoulder2Array4[i]);
	scene.add(joint1Array4[i]);
	scene.add(joint2Array4[i]);
	
    hat1Array4[i].parent=headArray4[i];
    hat2Array4[i].parent=headArray4[i];
	glass1Array4[i].parent=headArray4[i];
	glass2Array4[i].parent=headArray4[i];
	eye1Array4[i].parent=glass1Array4[i];
	eye2Array4[i].parent=glass2Array4[i];
	eyelineArray4[i].parent=headArray4[i];
	bodyArray4[i].parent=headArray4[i];
	bodylineArray4[i].parent=bodyArray4[i];
	bodydownArray4[i].parent=bodyArray4[i];
	leg1Array4[i].parent=bodydownArray4[i];
	leg2Array4[i].parent=bodydownArray4[i];
	shoesArray4[i].parent=leg1Array4[i];
	hand1Array4[i].parent=joint1Array4[i];
	hand2Array4[i].parent=joint2Array4[i];
	palm1Array4[i].parent=hand1Array4[i];
	palm2Array4[i].parent=hand2Array4[i];
	beardArray4[i].parent=headArray4[i];
	mouthArray4[i].parent=headArray4[i];
	mouth2Array4[i].parent=mouthArray4[i];
	shoulder1Array4[i].parent=bodyArray4[i];
	shoulder2Array4[i].parent=bodyArray4[i];
	joint1Array4[i].parent=bodyArray4[i];
	joint2Array4[i].parent=bodyArray4[i];

headArray4[i].rotation.y =Math.PI/2;
shoulder1Array4[i].rotation.z=Math.PI/2;
shoulder2Array4[i].rotation.z=Math.PI/2;


}








//	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD		
//	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD	 CROWD


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
var gMaterial = new THREE.MeshBasicMaterial( {color: 0x12BD0A, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, gMaterial );
plane.position.set(0, -1.5, 0);
plane.rotation.set(Math.PI/2, 0, 0);
scene.add( plane );

// add a main backWallG2 to the scene
var gbackWallG21 = new THREE.PlaneGeometry(60,30,1,1);   // xy backWallG2
var mbackWallG21 = new THREE.MeshBasicMaterial( {color: 0xBB3300, side: THREE.DoubleSide, transparent: true, opacity: 0.5, metalness: 1.0, roughness: 0.8} );
var backWallG2C1 = new THREE.Mesh( gbackWallG21, mbackWallG21 );
backWallG2C1.position.set(-40, 15, -40);
scene.add( backWallG2C1 );


//////////////BACKWALL GAME2///////////////
var backWallG2C = new CANNON.Plane();
var groundBodyG2C = new CANNON.Body({ mass: 0});
groundBodyG2C.addShape(backWallG2C);
groundBodyG2C.position.x = -50;
groundBodyG2C.position.y = 8;
groundBodyG2C.position.z = -28;
world.add(groundBodyG2C);

// add a  backWallG2 to the scene
var gbackWallG2 = new THREE.PlaneGeometry(30,20,1,1);   // xy backWallG2
var mbackWallG2 = new THREE.MeshBasicMaterial( {color: 0xBB3300, side: THREE.DoubleSide, transparent: true, opacity: 0.5, metalness: 1.0, roughness: 0.8} );
var backWallG2C = new THREE.Mesh( gbackWallG2, mbackWallG2 );
backWallG2C.position.set(-50, 8, -28);
scene.add( backWallG2C );

//////////////SIDEWALL GAME2///////////////
var sideWallG2C = new CANNON.Plane();
var groundBodysideG2C = new CANNON.Body({ mass: 0});
groundBodysideG2C.addShape(sideWallG2C);
groundBodysideG2C.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0),(Math.PI/2));
/////
groundBodysideG2C.position.x = -65;
groundBodysideG2C.position.y = 8;
groundBodysideG2C.position.z = -15.5;
world.add(groundBodysideG2C);

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
sphereBody.position.set(-50, 25, 0.9);
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
torusBody6.position.set(-52.8, -1.6, -19);
world.add(torusBody6);                          // Step 3

//torus bottom for collision feedback
var gDetectCir6 = new THREE.CircleGeometry( 4, 32 );
var mDetectCir6 = new THREE.MeshBasicMaterial( { color: 0x4365F5 } );
var detectCir6 = new THREE.Mesh( gDetectCir6, mDetectCir6 );
detectCir6.rotation.x = Math.PI / 2;
detectCir6.position.set(-52.8, -1.6, -19);
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

	//CROWD APPLAUSE
	if(armspread)
	{
		for(var i = 0; i<shoulder1Array.length; i++)
		{
			joint1Array[i].rotation.x += 0.1;
			joint2Array[i].rotation.x += 0.1;
			joint1Array2[i].rotation.x+=0.1;
			joint2Array2[i].rotation.x+=0.1;
			joint1Array3[i].rotation.x+=0.1;
			joint2Array3[i].rotation.x+=0.1;
			joint1Array4[i].rotation.x+=0.1;
			joint2Array4[i].rotation.x+=0.1;
			console.log(joint1Array[i].rotation.x);
		}
	}
	else
	{
		for(var i = 0; i<shoulder1Array.length; i++)
		{
		joint1Array[i].rotation.x = 0;
		joint2Array[i].rotation.x = 0;
		joint1Array2[i].rotation.x=0;
		joint2Array2[i].rotation.x=0;
		joint1Array3[i].rotation.x=0;
		joint2Array3[i].rotation.x=0;
		joint1Array4[i].rotation.x=0;
		joint2Array4[i].rotation.x=0;
		}
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

	var armspread=false;

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

	
// 	//FPS camera 
// 	camera.position.set(skeleton.joints[kinectron.HEAD].cameraX,1,skeleton.joints[kinectron.HEAD].cameraZ+ 5);
// 	camera.lookAt(skeleton.joints[kinectron.HEAD].cameraX, skeleton.joints[kinectron.HEAD].cameraY +0.75, skeleton.joints[kinectron.HEAD].cameraZ);
	
// 	camera.quaternion.set(skeleton.joints[kinectron.NECK].orientationX,
// 	skeleton.joints[kinectron.NECK].orientationY,
// 	skeleton.joints[kinectron.NECK].orientationZ,
// 	skeleton.joints[kinectron.NECK].orientationW);
// 	camera.rotation.y += Math.PI;
	
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
  	//Distance between arms for crowd  applause
	var fHandDistance = Math.sqrt(
	(meshLH.position.x-meshRH.position.x)*(meshLH.position.x-meshRH.position.x) + 
	(meshLH.position.y-meshRH.position.y)*(meshLH.position.y-meshRH.position.y) + 
	(meshLH.position.z-meshRH.position.z)*(meshLH.position.z-meshRH.position.z)
	);
	if (fHandDistance>1.4) // Arm spreading
	{
	     armspread=true;
	     //sound.play();
	}
	     else
	     armspread=false;
	//console.log("Hand Distance: " + fHandDistance);
	

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


