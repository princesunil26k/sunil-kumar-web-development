Drawing 2D Shapes in HTML5 Canvas – BCA Notes
Introduction

HTML5 introduced the Canvas element, which allows developers to draw graphics directly on a web page using JavaScript.

Canvas is used for:

Drawing shapes
Creating charts and graphs
Developing games
Image manipulation
Animations
Interactive applications
Syntax
<canvas id="myCanvas" width="500" height="300">
Your browser does not support canvas.
</canvas>
Attributes
Attribute	Description
id	Unique identifier for canvas
width	Width of canvas area
height	Height of canvas area
What is Canvas?

The <canvas> element provides a rectangular area where graphics can be drawn using JavaScript.

Example
<canvas id="myCanvas" width="500" height="300"></canvas>

To draw on the canvas:

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
Explanation
getElementById() selects the canvas.
getContext("2d") creates a 2D drawing environment.
ctx is the drawing object.
Coordinate System

Canvas uses a coordinate system.

(0,0)
 +----------------------> X
 |
 |
 |
 |
 V
 Y
Top-left corner = (0,0)
X increases toward right.
Y increases downward.

Example:

ctx.fillRect(50,50,100,80);
x = 50
y = 50
width = 100
height = 80
Drawing a Line

Lines are created using:

beginPath()
moveTo()
lineTo()
stroke()
Syntax
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200,50);
ctx.stroke();
Example
<canvas id="c1" width="300" height="200"></canvas>

<script>
var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(250,50);
ctx.stroke();
</script>
Output

A straight horizontal line.

Drawing Rectangles

HTML5 provides two methods:

1. Filled Rectangle
ctx.fillRect(x,y,width,height);

Example:

ctx.fillStyle="blue";
ctx.fillRect(50,50,150,100);
Output

Blue filled rectangle.

2. Rectangle Border
ctx.strokeRect(x,y,width,height);

Example

ctx.strokeRect(50,50,150,100);
Output

Rectangle outline.

3. Clear Rectangle

Removes content.

ctx.clearRect(50,50,100,100);
Drawing Circles

Circles are drawn using the arc() method.

Syntax
ctx.arc(x,y,radius,startAngle,endAngle);
Example
ctx.beginPath();
ctx.arc(150,150,50,0,2*Math.PI);
ctx.stroke();
Explanation
Parameter	Meaning
x	Center X
y	Center Y
radius	Radius
0	Starting angle
2π	Complete circle
Drawing Filled Circle
ctx.beginPath();
ctx.arc(150,150,50,0,2*Math.PI);
ctx.fillStyle="red";
ctx.fill();
Drawing Arcs

An arc is a part of a circle.

Example
ctx.beginPath();
ctx.arc(150,150,50,0,Math.PI);
ctx.stroke();
Output

Semi-circle.

Drawing Triangles

Triangle is drawn using three points.

Example
ctx.beginPath();

ctx.moveTo(150,50);
ctx.lineTo(100,150);
ctx.lineTo(200,150);

ctx.closePath();
ctx.stroke();
Output

Triangle.

Drawing Polygons

Polygon is a shape having multiple sides.

Example (Pentagon)
ctx.beginPath();

ctx.moveTo(150,50);
ctx.lineTo(200,100);
ctx.lineTo(180,170);
ctx.lineTo(120,170);
ctx.lineTo(100,100);

ctx.closePath();
ctx.stroke();
Output

Five-sided polygon.

Drawing Ellipse
Syntax
ctx.ellipse(
x,y,
radiusX,
radiusY,
rotation,
startAngle,
endAngle
);
Example
ctx.beginPath();

ctx.ellipse(
200,100,
80,40,
0,
0,
2*Math.PI
);

ctx.stroke();
Output

Ellipse.

Colors in Canvas
Fill Color
ctx.fillStyle="green";
ctx.fillRect(50,50,100,100);
Border Color
ctx.strokeStyle="red";
ctx.strokeRect(50,50,100,100);
Line Width
Example
ctx.lineWidth=5;

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200,50);
ctx.stroke();
Output

Thick line.

Drawing Text

Canvas can display text.

Filled Text
ctx.font="30px Arial";
ctx.fillText("Hello BCA",50,100);
Outline Text
ctx.font="30px Arial";
ctx.strokeText("Hello BCA",50,100);
Drawing Images
Example
var img = new Image();

img.onload = function()
{
    ctx.drawImage(img,50,50);
};

img.src="image.jpg";
Common Canvas Methods
Method	Purpose
beginPath()	Start drawing
closePath()	Close shape
moveTo()	Move cursor
lineTo()	Draw line
stroke()	Draw border
fill()	Fill color
fillRect()	Filled rectangle
strokeRect()	Rectangle outline
clearRect()	Clear area
arc()	Circle/arc
ellipse()	Ellipse
fillText()	Draw text
strokeText()	Outline text
drawImage()	Display image
Advantages of HTML5 Canvas
Easy to create graphics.
Supports animations.
No external plugins required.
Fast rendering.
Used in games and graphical applications.
Works in all modern browsers.
Limitations of Canvas
Graphics are pixel-based.
Individual shapes cannot be directly manipulated after drawing.
Requires JavaScript knowledge.
Large complex drawings may affect performance.
Applications of Canvas
Online games
Drawing applications
Photo editors
Data visualization
Animation systems
Interactive learning tools
Graphs and charts
Frequently Asked BCA Exam Questions
Short Questions
What is HTML5 Canvas?
What is the purpose of getContext("2d")?
Explain the coordinate system of Canvas.
Differentiate between fillRect() and strokeRect().
What is the use of beginPath()?
Explain the arc() method.
What is the purpose of fillStyle?
Write the syntax of drawImage().
Long Questions
Explain HTML5 Canvas with suitable examples.
Describe how to draw lines, rectangles, and circles using Canvas.
Explain the coordinate system used in Canvas.
Discuss various Canvas methods used for drawing shapes.
Explain the advantages and applications of HTML5 Canvas.
Conclusion

The HTML5 Canvas element is a powerful graphics tool that enables developers to create 2D drawings, shapes, text, images, and animations directly inside web pages using JavaScript. It is widely used in modern web development for creating interactive and visually appealing applications. This is an important topic for BCA students because it combines HTML5, JavaScript, graphics programming, and web application development.