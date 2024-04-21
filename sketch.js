/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably
over done it.
*/

/** Global Constants */
const blueSky = [207,240,243];


/**
 * Base class for my various sprites
 */

class Sprite {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}


	move(x, y) {
		this.x += x;
		this.y += y;
	}

	setPosition(x, y) {
		this.x = x;
		this.y = y;
	}

	draw() {
		// Generic Drawing
	}
}

//// Little happy mountains

class Mountain extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		// Draw the mountain
		const mountainGrays=[[150,150,150],[120,120,120],[100,100,100]];
		fill(mountainGrays[1]);
		triangle(450,433, 675,150, 900,433);
		fill(mountainGrays[0]);
		triangle(250,433, 490,220, 830,433);
		fill(mountainGrays[2]);
		triangle(650,433, 825,220, 1000,433);
		// Snow caps
		fill(255);
		triangle(595,250, 675,150, 755,250);
		triangle(455,250, 490,220, 540,250);
		triangle(798,250, 825,220, 850,250);
	}
}

/////// Cloud
class Cloud extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		const cloudBorder = [88,129,159];
		const cloudBlush = [255,220,211];

		strokeWeight(3);
		stroke(cloudBorder);

		// Left and right ellipses
		fill(255);
		ellipse(200,100,60,60); // Left Circle
		ellipse(300,100,60,60); // Right Circle
		ellipse(207,70,50,50);  // Left small upper circle
		ellipse(265,70,75,75);  // Right large upper circle
		noStroke();

		// Getting rid of inner lines
		rect(193,73,100,55);
		rect(199,72,106,55);
		rect(184,72,50,25);
		rect(194,62,50,25);
		rect(182,78,10,10);


		// Bottom Border
		stroke(cloudBorder);
		strokeWeight(3);
		line(200,130,300,130);

		// Let's get a smiley face on there
		stroke(cloudBorder);
		strokeWeight(2);

		fill(cloudBorder);
		ellipse (230, 80, 10, 10); // Left eye
		ellipse (270, 80, 10, 10); // Right eye

		fill(cloudBlush);
		noStroke();
		ellipse (220, 100, 12, 12); // Left dimple
		ellipse (280, 100, 12, 12); // Right dimple

		stroke(cloudBorder);
		noFill();
		arc(250, 85, 20, 20, 0, PI); // Smile

		// Shadow
		noStroke();
		fill(0,0,0,50);
		ellipse(250, 500,90,10);
	}
}

class Tree extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		//3. a tree

		// Background Foliage
		const darkFoliage = [27,149,85];
		const foliageOutline = [14,79,45];
		const lightFoliage = [34,190,108];
		fill (darkFoliage);
		stroke(foliageOutline);
		strokeWeight(2);
		ellipse(770, 320, 100, 100);
		ellipse(860, 300, 100, 100);
		ellipse(800, 250, 100, 100);

		// Shadow
		noStroke();
		fill(0,0,0,50);
		ellipse(820, 450,180,10);


		noStroke();
		const lightBark = [215,130,54];
		const darkBark = [107,49,28];

		noFill();
		stroke(lightBark)
		strokeWeight(15);
		arc(800, 340, 50, 50, (PI/4)+.57, PI);
		stroke(darkBark)
		arc(820, 340, 50, 50, PI+3.3, PI/4+.57);

		noStroke();
		fill(lightBark);
		rect(800, 350, 10, 100);
		fill(darkBark);
		rect(810, 350, 15, 100);

		stroke(foliageOutline);
		strokeWeight(2);
		fill(lightFoliage);
		ellipse(830, 260, 90, 90);
		ellipse(820, 330, 60, 60);
		ellipse(780, 300, 80, 80);

	}
}

class Canyon extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		const stoneGray = [150,150,150];
		noStroke();
		fill(blueSky);
		quad (100,420,180,420,220,580,60,580);
		fill(stoneGray);
		triangle(96,431,60,580,96,580);
		triangle(184,431,236,580,184,580);
	}

}

class Collectable extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		// Draw coin
		const coinColor = [255,215,0];
		const coinOutline = [0,0,0];
		const coinHighlight = [255,255,255];
		stroke(coinOutline);
		fill(coinHighlight);
		strokeWeight(2);
		ellipse(400,400,150,150);
		noStroke();
		fill(coinColor)
		ellipse(400,400,135,135);
		stroke(coinOutline);
		strokeWeight(2);
		fill(coinHighlight);
		ellipse(400,400,120,120);
		noStroke();
		fill(coinColor);
		ellipse(400,400,115,115);

		fill(coinOutline);
		ellipse (380, 390, 10, 10); // Left eye
		ellipse (420, 390, 10, 10); // Right eye

		fill(coinHighlight);
		noStroke();
		ellipse (370, 410, 12, 12); // Left dimple
		ellipse (430, 410, 12, 12); // Right dimple

		stroke(coinOutline);
		fill(coinOutline);
		arc(400, 410, 20, 20, 0, PI, OPEN); // Smile

		// Shadow
		noStroke();
		fill(0,0,0,25);
		ellipse(400,500,140,10);
		ellipse(400,500,140,10);
	}

}

/////////////// P5 Boiler plate

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{

	// Sky
	background(blueSky); //fill the sky blue
	smooth();
	noStroke();

	// Ground
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//2. a mountain in the distance
	const mountain = new Mountain(0,0);
	mountain.draw();
	fill(255);
	stroke(0);
	text("mountain", 550, 356);


	//1. a cloud in the sky
	const cloud = new Cloud(0,0);
	cloud.draw();
	fill(255);
	stroke(0);
	text("cloud", 150, 156);

	//3. a tree
	// const tree = new Tree(0,0);
	// tree.draw();
	// fill(255);
	// stroke(0);
	// text("tree", 750, 356);
	//
	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	// noStroke();
	// const canyon = new Canyon(0,0,0,0);
	// canyon.draw();
	// fill(255);
	// stroke(0);
	// text("canyon", 100, 480);




	//5. a collectable token - eg. a jewel, fruit, coins
	// add your code here

	// const collectable = new Collectable(0,0,0,0);
	// collectable.draw();
	// stroke(0);
	// fill(255);
	// text("collectable item", 400, 480);

}

