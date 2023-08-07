//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
var eyeY = 100; //100
var eyeX = 17; //17
var eyeSize = 10; //10
var bodyY = 60; // 60
var footY = 20; //20
var beakY = 110; //110
var fishingY = 40; //40
var blushY = 112; // 112
var blushShape = 5;// 5
//let detailColour = color(0,51,104); // body colour
 
var blushColour=1

function setup_wallpaper(pWallpaper) {
   pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings{
  pWallpaper.grid_settings.cell_width  = 350; //350
  pWallpaper.grid_settings.cell_height = 250; //350
  pWallpaper.grid_settings.row_offset  = 80;
} 
function wallpaper_background() {
  background (229,204,255);  //(229,204,255)

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let detailColour = color(0,51,104); // body colour //(0,51,104)
//

  noStroke(); 
  fill (255,178,102) //255,178,102
  ellipse(70, 180, 10, footY); // left foot 1
  ellipse(75,182,10,footY) // left foot 2
  ellipse(130,180,10,footY) // right foot 1
  ellipse(125,180,10,footY) //right foot 2

fill(detailColour);
noStroke();
  ellipse(100, 100, 85, 80); //outside top
  ellipse(100, 140, 100, 90);//outside bottom

  triangle(35, 160, 60, 108, 60, 140); //left arm
  triangle(140, 108, 120, 125, 163, 160);//right arm 

  fill(244,244,244); // (244,244,244)
  ellipse(100, 100, 60, bodyY); //inside top
  ellipse(100, 140, 70, bodyY); //inside bottom

  fill (0,0,0); // black circle
  ellipse(82, eyeY, eyeX, 18); // left eye
  ellipse(118, eyeY, eyeX, 18); // right eye

  fill(255,255,255) //white circle
  ellipse(85, 102, 8, eyeSize); //left eye
  ellipse(116, 102, 8, eyeSize); //right eye

  ellipse(80, 97, 4,eyeSize - 4); // left eye sparkle
  ellipse(121, 97, 4,eyeSize -4); // right eye sparkle
  
  If (blushColour==1);{
    fill(255,0,0) //(225,153,153)
  }
  fill(225,153,153)
  ellipse(80, blushY, 10, blushShape); // left blush
  ellipse(120, blushY, 10, blushShape); // right blush
  
  fill (255,178,102) //255,178,102
  triangle(105, beakY, 100, 117, 95, beakY); //beak 
  
  stroke(255,255,255); 
strokeWeight(3);
  fill(137, 207, 240) //137, 207, 240
  ellipse(-20, 160, 70, 50); // waterhole 

fill(255,178,102); // (253,176,209)
  // Grayscale integer value.
strokeWeight(2);
stroke(201,143,168); //201,143,168
  beginShape();
  vertex(260, 100);
  quadraticVertex(240, 170, 311,180);
  bezierVertex(380,100, 300, 170, 270, 80);
endShape(CLOSE) // fish

fill (0,0,0); // black circle
  ellipse(-35, 116, 5, 6); // fish eye

  strokeWeight(5);
stroke(51);
  line(20, fishingY, 45, 150); // fishing rod

  strokeWeight(2); //2
stroke(51);
  line(4, 100, 20, fishingY); //fishing line

  noFill();//
  ellipse(4,120,30,40) //fishing net ring

  strokeWeight(1); //2
stroke(51);
  noFill();//
  ellipse(12, 120, 30, 35); //fishingnet ring one
  ellipse(20,120,20,27);

  strokeWeight(1); //1
  stroke(51);
    line(30, 120, 4, 100); // fishing net line 1
    line(30,120,-8,110); // fishiing net line2
    line(30,120,-10,125); // fishing net line 3
    line(30,120,0,140); //fishing net line 4
 
}


