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


	/**
	 * Stubbed in - for later I expect to use this to animate this
	 * @param x X coord
	 * @param y Y coord
	 */
	move(x, y) {
		this.x += x;
		this.y += y;
	}

	/**
	 * Stubbed in - I expect I'll be using this later to set the position
	 * @param x X coord
	 * @param y Y coord
	 */
	setPosition(x, y) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Stubbed in draw command
	 */
	draw() {
		// Generic Drawing
	}
}

/**
 * Mountain sprite
 */
class Mountain extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	/**
	 * Draws the mountain
	 */
	draw() {
		const {x,y}  = this;
		const mountainGrays = [[150, 150, 150], [120, 120, 120], [100, 100, 100]];

		// First Peak
		fill(mountainGrays[1]);
		triangle(200+x, 283+y, 425+x, 0+y, 650+x, 283+y);

		// Second Peak
		fill(mountainGrays[0]);
		triangle(0+x, 283+y, 240+x, 70+y, 580+x, 283+y);

		// Third Peak
		fill(mountainGrays[2]);
		triangle(400+x, 283+y, 575+x, 70+y, 750+x, 283+y);

		// Snow caps
		fill(255);
		triangle(345+x, 100+y, 425+x, 0+y, 505+x, 100+y);
		triangle(205+x, 100+y, 240+x, 70+y, 290+x, 100+y);
		triangle(548+x, 100+y, 575+x, 70+y, 600+x, 100+y);
	}
}

/**
 * Happy Little Cloud
 */
class Cloud extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	/**
	 * Draws the cloud
	 */
	draw() {
		// This is going to be beyond the 15 lines.
		// But I am really going for a children's book
		// aesthetic here. So I'm going to go for it.

		const {x,y}   = this;
		const cloudBorder = [88,129,159];
		const cloudBlush = [255,220,211];

		strokeWeight(3);
		stroke(cloudBorder);

		// Left and right ellipses
		fill(255);
		ellipse(30 + x, 70 + y, 60, 60); // Left Circle
		ellipse(130 + x, 70 + y, 60, 60); // Right Circle
		ellipse(37 + x, 40 + y, 50, 50);  // Left small upper circle
		ellipse(95 + x, 40 + y, 75, 75);  // Right large upper circle

		// Getting rid of inner lines.
		noStroke();
		rect(23 + x, 43 + y, 100, 55);
		rect(29 + x, 42 + y, 106, 55);
		rect(14 + x, 42 + y, 50, 25);
		rect(24 + x, 32 + y, 50, 25);
		rect(12 + x, 48 + y, 10, 10);

		// Bottom Border
		stroke(cloudBorder);
		strokeWeight(3);
		line(30 + x, 100 + y, 130 + x, 100 + y);

		// Let's get a smiley face on there
		stroke(cloudBorder);
		strokeWeight(2);

		fill(cloudBorder);
		ellipse (60 + x,50 + y, 10, 10); // Left eye
		ellipse (100 + x, 50 + y, 10, 10); // Right eye

		fill(cloudBlush);
		noStroke();
		ellipse (50 + x, 70 + y, 12, 12); // Left dimple
		ellipse (110 + x, 70 + y, 12, 12); // Right dimple

		stroke(cloudBorder);
		noFill();
		arc(80 + x, 55 + y, 20, 20, 0, PI); // Smile

		// Shadow
		noStroke();
		fill(0,0,0,30);
		ellipse(80 + x, 444 + y, 90, 10);
	}
}

/**
 * Tree Sprite
 */
class Tree extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	/**
	 * Draws tree
	 */
	draw() {
		const {x,y} = this;
		const darkFoliage = [27,149,85];
		const foliageOutline = [14,79,45];
		const lightFoliage = [34,190,108];
		const lightBark = [215,130,54];
		const darkBark = [107,49,28];


		// Background Foliage. Needs to be drawn first
		fill (darkFoliage);
		stroke(foliageOutline);
		strokeWeight(2);
		ellipse(50+x, 70+y, 100, 100);
		ellipse(140+x, 80+y, 100, 100);
		ellipse(80+x, 50+y, 100, 100);

		// Shadow  - I want to draw early before the trunk
		noStroke();
		fill(0,0,0,30);
		ellipse(90+x, 200+y,180,10);


		// Let's do some arching branches
		// This is going to push this beyond the 15.
		// Again, going for it, but can scale back.
		noStroke();
		noFill();
		stroke(lightBark)
		strokeWeight(15);
		arc(70+x, 90+y, 50, 50, (PI/4)+.57, PI);
		stroke(darkBark)
		arc(90+x, 90+y, 50, 50, PI+3.3, PI/4+.57);

		// The trunk
		noStroke();
		fill(lightBark);
		rect(70+x, 100+y, 10, 100);
		fill(darkBark);
		rect(80+x, 100+y, 15, 100);

		// Foreground Foliage
		stroke(foliageOutline);
		strokeWeight(2);
		fill(lightFoliage);
		ellipse(120+x, 45+y, 90, 90);
		ellipse(95+x, 85+y, 60, 60);
		ellipse(50+x, 50+y, 80, 80);
	}
}

/**
 * Renders a canyon. I am disapointed in this sprite,
 * I'm going to have to come back and do a better job
 * when I have a vision for it.
 */
class Canyon extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		const stoneGray = [150,150,150];
		const darkerGray = [100,100,100];
		noStroke();
		fill(blueSky);
		const {x,y}  = this;
		quad (
			40+x,y,
			120+x,y,
			160+x,160+y,
			x,160+y);
		fill(stoneGray);
		triangle(
			36+x,16+y,
			x,160+y,
			36+x,160+y);
		fill(darkerGray);
		triangle(
			124+x,16+y,
			160+x,160+y,
			124+x,160+y);
	}

}

/**
 * Collectable Sprite
 * I went with a coin, but one with some personality
 */
class Collectable extends Sprite {
	constructor(x, y) {
		super(x, y);
	}

	draw() {
		const {x,y}  = this;
		const coinColor = [255, 215, 0];
		const coinOutline = [0, 0, 0];
		const coinHighlight = [255, 255, 255];

		// Draw the concentric circles
		stroke(coinOutline);
		fill(coinHighlight);
		strokeWeight(2);
		ellipse(75 + x, 75 + y, 75, 75);
		noStroke();
		fill(coinColor);
		ellipse(75 + x, 75 + y, 67, 67);
		stroke(coinOutline);
		strokeWeight(2);
		fill(coinHighlight);
		ellipse(75 + x, 75 + y, 45, 45);
		noStroke();
		fill(coinColor);
		ellipse(75 + x, 75 + y, 39, 39);

		// And now for the face
		fill(coinOutline);
		ellipse(68 + x, 70 + y, 7.5, 7.5); // Left eye
		ellipse(82 + x, 70 + y, 7.5, 7.5); // Right eye

		fill(coinHighlight);
		noStroke();
		ellipse(65 + x, 80 + y, 6, 6); // Left dimple
		ellipse(85 + x, 80 + y, 6, 6); // Right dimple

		stroke(coinOutline);
		fill(coinOutline);
		arc(75 + x, 80 + y, 8, 8, 0, PI, OPEN); // Smile

		// Shadow
		noStroke();
		fill(0, 0, 0, 25);
		ellipse(75 + x, 150 + y, 70, 10);
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

	// @todo - let's incorporate some grass on the ground. Just a few arcs, splattered across the way.

	//2. a mountain in the distance
	const mountain = new Mountain(350,149);
	mountain.draw();
	fill(255);
	stroke(0);
	text("mountain", 550, 356);


	//3. a tree
	const tree = new Tree(750,256);
	tree.draw();
	fill(255);
	stroke(0);
	text("tree", 750, 356);


	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	noStroke();
	const canyon = new Canyon(30,416);
	canyon.draw();
	fill(255);
	stroke(0);
	text("canyon", 100, 480);

	//1. a cloud in the sky
	const cloud = new Cloud(175,100);
	cloud.draw();
	fill(255);
	stroke(0);
	text("cloud", 150, 156);



	//5. a collectable token - eg. a jewel, fruit, coins
	// add your code here

	const collectable = new Collectable(350,356);
	collectable.draw();
	stroke(0);
	fill(255);
	text("collectable item", 400, 480);

}

