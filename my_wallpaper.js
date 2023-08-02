//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(229, 204, 255); //light pink colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  var y = 100;
  var x = 13;

  // RGB values.
let c = color(0, 51, 104); // navy blue colour
fill(c);
noStroke();
  ellipse(100, 100, 85, 80); //outside top
  ellipse(100, 140, 100, 90);//outside bottom

  triangle(35, 160, 60, 108, 60, 140); //left arm
  triangle(140, 108, 120, 125, 163, 160);//right arm

fill(224,224,224);
describe('A dark charcoal gray square with a black outline.');

  ellipse(100, 100, 60, 60); //inside top
  ellipse(100, 140, 70, 60); //inside bottom


 
  fill (0,0,0); // white circle
  ellipse(82, y, x, 13); // left eye
  ellipse(118, y, x, 13); // right eye

  fill(225,153,153)
  ellipse(80, 112, 10, 5); // left blush
  ellipse(120, 112, 10, 5); // right blush

  var y = 110;

  fill (255,178,102)
  triangle(105, y, 100, 117, 95, y); //mouth



  

 
}


