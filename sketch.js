function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);
	angleMode(DEGREES);
	colorMode(HSL,360,100,100);

	/*die Farbe wird nun im Hue, Saturation, Lightness Modus definiert
 https://en.wikipedia.org/wiki/HSL_and_HSV
	 Hue von 0-360
	 Saturation von 0-100
	 Lightness von 0-100

	 Vorteil: man hat einen kontinuierlichen Farbkreis
*/


}

function draw() {
  background(255);
	translate(500, 500);
	rotate(-90);
 	noStroke()

	var sec = second();
	var min = minute();
	var hr  = hour();

	var hue = map(hr, 0, 59, 0, 360);
	var c = color(hue, 100, 70);

	var hue = map(sec, 0, 59, 0, 360);
	var d = color(hue, 260, 50);

	fill(c)
	let end3 = map(hr % 12, 0, 12,0, 360);
	arc(0,0, 600, 600, 0, end3);

	fill(hue,200,90)
	let end2 = map(min, 0, 60, 0, 360);
	arc(0,0, 500, 500, 0, end2);

	fill(d)
	let end1 = map(sec, 0, 60, 0, 360);
	arc(0,0, 300, 300, 0, end1);

	rotate(end1);
	ellipse(width/4.5,0, 30, 30);



}
