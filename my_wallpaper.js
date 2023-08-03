//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
var y = 100;
var x = 17;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 350; //350
  pWallpaper.grid_settings.cell_height = 250; //350
  pWallpaper.grid_settings.row_offset  = 80;
}

function wallpaper_background() {
  background(229, 204, 255); //light pink colour


}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  noStroke()
  fill (255,178,102)
  ellipse(70, 180, 10, 20); // left foot 1
  ellipse(75,182,10,20) // left foot 2
  ellipse(130,180,10,20) // right foot 1
  ellipse(125,180,10,20) //right foot 2

  // RGB values.
let c = color(0, 51, 104); // navy blue colour
fill(c);
noStroke();
  ellipse(100, 100, 85, 80); //outside top
  ellipse(100, 140, 100, 90);//outside bottom

  triangle(35, 160, 60, 108, 60, 140); //left arm
  triangle(140, 108, 120, 125, 163, 160);//right arm

fill(224,224,224);
  ellipse(100, 100, 60, 60); //inside top
  ellipse(100, 140, 70, 60); //inside bottom
 
  fill (0,0,0); // black circle
  ellipse(82, y, x, 18); // left eye
  ellipse(118, y, x, 18); // right eye

  fill(255,255,255) //white circle
  ellipse(85, 102, 8, 10); //left eye
  ellipse(116, 102, 8, 10); //right eye

  ellipse(80, 97, 4, 6); // left eye sparkle
  ellipse(121, 97, 4, 6); // right eye sparkle

  fill(225,153,153)
  ellipse(80, 112, 10, 5); // left blush
  ellipse(120, 112, 10, 5); // right blush

  fill (255,178,102)
  triangle(105, 110, 100, 117, 95, 110); //beak ellipse(70, 180, 10, 25);
  
  stroke(255, 255, 255);
strokeWeight(3);
  fill(127,202,239)
  ellipse(-20, 160, 70, 50); // waterhole

fill(253,176,209);
  // Grayscale integer value.
strokeWeight(2);
stroke(201,143,168);
  beginShape();
  vertex(260, 100);
  quadraticVertex(240, 170, 311,180);
  bezierVertex(380,100, 300, 170, 270, 80);
endShape(CLOSE) // fish

fill (0,0,0); // black circle
  ellipse(-35, 116, 5, 6); // fish eye

  strokeWeight(5);
stroke(51);
  line(20, 40, 45, 150); // fishing rod

  strokeWeight(2);
stroke(51);
  line(4, 100, 20, 40); //fishing line

  noFill();//
  ellipse(4,120,30,40) //fishing net ring

  strokeWeight(1);
stroke(51);
  noFill();//
  ellipse(12, 120, 30, 35); //fishingnet ring one
  ellipse(20,120,20,27)
  

  strokeWeight(1);
  stroke(51);
    line(30, 120, 4, 100); // fishing net line 1
    line(30,120,-8,110); // fishiing net line2
    line(30,120,-10,125); // fishing net line 3
    line(30,120,0,140); //fishing net line 4
 
}


