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

var geostairs1 = new THREE.BoxGeometry( 11, 12, 100 );
var matstairs1 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs1 = new THREE.Mesh( geostairs1, matstairs1 );
scene.add( stairs1 );
stairs1.position.x = -15;
stairs1.position.z=35;


var geostairs2 = new THREE.BoxGeometry( 11, 24, 100 );
var matstairs2 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs2 = new THREE.Mesh( geostairs2, matstairs2 );
scene.add( stairs2 );
stairs2.position.x = -11;

var geostairs3 = new THREE.BoxGeometry( 11, 36, 100 );
var matstairs3 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs3 = new THREE.Mesh( geostairs3, matstairs3 );
scene.add( stairs3 );
stairs3.position.x = -11;

var geostairs4 = new THREE.BoxGeometry( 11, 48, 100 );
var matstairs4 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs4 = new THREE.Mesh( geostairs4, matstairs4 );
scene.add( stairs4 );
stairs4.position.x=-11;


stairs2.parent=stairs1;
stairs3.parent=stairs2;
stairs4.parent=stairs3;


var geostairs5 = new THREE.BoxGeometry( 11, 12, 100 );
var matstairs5 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs5 = new THREE.Mesh( geostairs5, matstairs5 );
scene.add( stairs5 );
stairs5.position.x = 30;
stairs5.position.z=35;


var geostairs6 = new THREE.BoxGeometry( 11, 24, 100 );
var matstairs6 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs6 = new THREE.Mesh( geostairs6, matstairs6 );
scene.add( stairs6 );
stairs6.position.x = 11;

var geostairs7 = new THREE.BoxGeometry( 11, 36, 100 );
var matstairs7 = new THREE.MeshBasicMaterial( {color: 0x7E5353} );
var stairs7 = new THREE.Mesh( geostairs7, matstairs7 );
scene.add( stairs7 );
stairs7.position.x = 11;

var geostairs8 = new THREE.BoxGeometry( 11, 48, 100 );
var matstairs8 = new THREE.MeshBasicMaterial( {color: 0x000000} );
var stairs8 = new THREE.Mesh( geostairs8, matstairs8 );
scene.add( stairs8 );
stairs8.position.x=11;

stairs6.parent=stairs5;
stairs7.parent=stairs6;
stairs8.parent=stairs7;

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

    headArray[i].position.y = 12;
    headArray[i].position.x = 30;
    headArray[i].position.z =4*i;

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

    headArray2[i].position.y = 17;
    headArray2[i].position.x = 40;
    headArray2[i].position.z =4*i;

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




// Add mouse/camera controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Kinectron codes starting from here///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Initialize kinectron
// Initialize kinectron
kinectron = new Kinectron("192.168.60.56"); // Define and create an instance of kinectron
kinectron.makeConnection(); // Create connection between remote and application
kinectron.startTrackedBodies(getBodies); // Start tracked bodies and set callback




// Add a ball for the left hand
var gLH= new THREE.SphereGeometry(0.5, 18, 18);
var mLH = new THREE.MeshPhongMaterial( { color: 0xCCCCCC } ); 
var meshLH = new THREE.Mesh(gLH, mLH);
scene.add(meshLH);

// Add a ball for the right hand
var gRH= new THREE.SphereGeometry(0.5, 18, 18);
var mRH = new THREE.MeshPhongMaterial( { color: 0x00CCCC } ); 
var meshRH = new THREE.Mesh(gRH, mRH);
scene.add(meshRH);

var gArmStatus= new THREE.SphereGeometry(0.5, 18, 18);
var mArmStatus = new THREE.MeshPhongMaterial( { color: 0xCCCCCC } ); 
var meshArmStatus = new THREE.Mesh(gArmStatus, mArmStatus);
scene.add(meshArmStatus);

// The animate function: called every frame
var iFrame = 0;
function animate()
{
	requestAnimationFrame(animate);
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
    iFrame ++;
   	renderer.render(scene, camera);
}
animate();

var armspread=false;

// The getBodies callback function: called once every time kinect obtain a frame
function getBodies(skeleton) 
{ 
	meshLH.position.x = skeleton.joints[kinectron.HANDLEFT].cameraX;
	meshLH.position.y = skeleton.joints[kinectron.HANDLEFT].cameraY;
	meshLH.position.z = skeleton.joints[kinectron.HANDLEFT].cameraZ;
	meshRH.position.x = skeleton.joints[kinectron.HANDRIGHT].cameraX;
	meshRH.position.y = skeleton.joints[kinectron.HANDRIGHT].cameraY;
	meshRH.position.z = skeleton.joints[kinectron.HANDRIGHT].cameraZ;


var fHandDistance = Math.sqrt(
	(meshLH.position.x-meshRH.position.x)*(meshLH.position.x-meshRH.position.x) + 
	(meshLH.position.y-meshRH.position.y)*(meshLH.position.y-meshRH.position.y) + 
	(meshLH.position.z-meshRH.position.z)*(meshLH.position.z-meshRH.position.z)
	);
	if (fHandDistance>1.4) // Arm spreading
	{
	     armspread=true;
	     sound.play();
	}
	     else
	     armspread=false;
	console.log("Hand Distance: " + fHandDistance);
// 
}