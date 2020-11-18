var Solar_sys_Img;
var sun;
var mars;
var jupiter;
var mercury, earth, venus, neptune, uranus, saturn;
var gamestate = 0;

var sun_img;
var mercury_img;
var venus_img;
var earth_img;
var mars_img;
var jupiter_img;
var saturn_img;
var neptune_img;
var uranus_img;
var backbutton; 
var sun_det;
var mars_det;
var mercury_det;
var venus_det;
var saturn_det;
var jupiter_det;
var uranus_det;
var neptune_det;
var mercury_img2;
var sun_img2;
var venus_img2;
var earth_img2;
var jupiter_img2;
var mars_img2;
var saturn_img2;
var uranus_img2;
var neptune_img2;
var earth_det;
var test2;

var mercury_det2;
var sun_det2;
var earth_det2;
var venus_det2;
var mars_det2;
var jupiter_det2;
var saturn_det2;
var uranus_det2;
var neptune_det2;

var test;

function preload(){
    Solar_sys_Img = loadImage("Solar_System.jpg");
    sun_img = loadImage("Sun.gif");
    mercury_img = loadImage("Mercury/Mercury.gif");
    venus_img = loadImage("Venus/Venus.gif");
    earth_img = loadImage("earth/earth.gif");
    mars_img = loadImage("Mars/Mars.gif");
    jupiter_img = loadImage("Jupiter/jupiter.gif");
    saturn_img = loadImage("Saturn/saturn.gif");
    uranus_img  =loadImage("Uranus/Uranus.gif");
    neptune_img = loadImage("Neptune/Neptune.gif");

    mercury_img2 = loadImage("Mercury/Mercury2.png");
    sun_img2 = loadImage("Sun.png")
    earth_img2 = loadImage("earth/Earth.png");
    venus_img2 = loadImage("Venus/Venus.png");
    mars_img2 = loadImage("Mars/Mars.png");
    jupiter_img2= loadImage("Jupiter/Jupiter.png");
    saturn_img2 = loadImage("Saturn/Saturn.png");
    uranus_img2 = loadImage("Uranus/Uranus.png");
    neptune_img2  =loadImage("Neptune/Neptune.png");
    
}

function setup(){
createCanvas(displayWidth-10,displayHeight-10);

if (gamestate== 0){
sun = createSprite(displayWidth-1550,displayHeight - 550,400,600);
mars  =createSprite(displayWidth-995 , displayHeight - 630, 50,50);
jupiter = createSprite(displayWidth-800 , displayHeight - 620, 125,125)
earth = createSprite(displayWidth-1075 , displayHeight - 580, 60,60)
venus = createSprite(displayWidth-1190 , displayHeight - 540, 50,50)
mercury = createSprite(displayWidth-1300 , displayHeight - 515, 50,50)
saturn = createSprite(displayWidth-595 , displayHeight - 685, 125,125)
uranus  =createSprite(displayWidth-440 , displayHeight - 725,100,100)
neptune = createSprite(displayWidth-320 , displayHeight - 800, 100,100);

backbutton = new form();
    

}


}

function draw(){
    if (gamestate == 0){
    background(Solar_sys_Img);
    hide(sun);
    hide(mercury);
    hide(venus);
    hide(earth);
    hide(mars);
    hide(jupiter);
    hide(saturn);
    hide(uranus);
    hide(neptune);
    }
 if (gamestate == 0 && mousePressedOver(sun)){
    gamestate+=1;
    if (gamestate == 1){
     background("black");
     sun_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 )
     sun_det.addImage("Sun_image",sun_img);
     sun_det.scale = 2;
     test = sun_det;
     sun_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
     sun_det2.addImage("Mercury", mercury_img2);
     sun_det2.scale = 0.80;
     test2 = sun_det2;
     
    }
    }

  
  
  if (gamestate == 0 && mousePressedOver(mercury)){
        gamestate+=1
        
        if (gamestate == 1){
           background("black");
           mercury_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
           mercury_det.addImage("Mercury_image",mercury_img);
           mercury_det.scale = 2;
           test = mercury_det;
           mercury_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
           mercury_det2.addImage("Mercury", mercury_img2);
           mercury_det2.scale = 0.80;
           test2 = mercury_det2
        }
    }
    


     
    
    

 

 if (gamestate == 0 && mousePressedOver(venus)){
    gamestate+=1
    
    if (gamestate == 1){
        background("black");
        venus_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
        venus_det.addImage("Venus_image",venus_img);
        venus_det.scale = 1;
        test =  venus_det;
        venus_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
        venus_det2.addImage("venus", venus_img2);
        venus_det2.scale = 0.80;
        test2 = venus_det2

    }

}
if (gamestate == 0 && mousePressedOver(earth)){
    gamestate+=1
    
    if (gamestate == 1){
        background("black");
        earth_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
        earth_det.addImage("Earth_image",earth_img);
        earth_det.scale = 2;
        test = earth_det;
        earth_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
        earht_det2.addImage("earth",earth_img2);
        earht_det2.scale = 0.80;
        test2 = earht_det2

    }

}

if (gamestate == 0 && mousePressedOver(mars)){
    gamestate+=1
    background("black")
    if(gamestate == 1){
    mars_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    mars_det.addImage("Mars_image",mars_img);
    mars_det.scale = 3;
    test = mars_det;
    mars_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
    mars_det2.addImage("Mars", mars_img2);
    mars_det2.scale = 0.80;
    test2 = mars_det2
    }

}
if (gamestate == 0 && mousePressedOver(jupiter)){
    gamestate+=1
    background("black");
    if (gamestate ==1){
    jupiter_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    jupiter_det.addImage("jupiter_image",jupiter_img);
    jupiter_det.scale = 2;
    test = jupiter_det;
    jupiter_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
    jupiter_det2.addImage("Jupiter", jupiter_img2);
    jupiter_det2.scale = 0.80;
    test2 = jupiter_det2;
    }

}

if (gamestate == 0 && mousePressedOver(saturn)){
    gamestate+=1
    background("black");
    if (gamestate == 1){
    saturn_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    saturn_det.addImage("Saturn_image",saturn_img);
    saturn_det.scale = 1.5;
    test = saturn_det;
    saturn_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
    saturn_det2.addImage("Saturn", saturn_img2);
    saturn_det2.scale = 0.80;
    test2 = saturn_det2;
    }



}

if (gamestate == 0 && mousePressedOver(uranus)){
    gamestate+=1
    background("black");
    if (gamestate == 1){
    uranus_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    uranus_det.addImage("Uranus_image",uranus_img);
    uranus_det.scale = 1.5;
    test = uranus_det;
    uranus_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
    uranus_det2.addImage("Uranus", uranus_img2);
    uranus_det2.scale = 0.80;
    test2 = uranus_det2;
    }



}
  

if (gamestate == 0 && mousePressedOver(neptune)){
    gamestate+=1
    background("black");
    if (gamestate == 1){
    neptune_det = createSprite(displayWidth - 1190, displayHeight -550 , displayWidth/2, 700 );
    neptune_det.addImage("Neptune_image",neptune_img);
    neptune_det.scale = 1.5;
    test = neptune_det;
    neptune_det2 = createSprite(displayWidth - 450, displayHeight - 550 , displayWidth/2, 700)
    neptune_det2.addImage("Neptune",neptune_img2);
    neptune_det2.scale = 0.80;
    test2 = neptune_det2;
    }



}
if (gamestate == 1){
    backbutton.display();
    

    
}

if (gamestate == 0 ){
    backbutton.hide();
}

      

    

    
    console.log(gamestate);
    drawSprites();
}

function hide(sprite){
    sprite.visible = false;



}


