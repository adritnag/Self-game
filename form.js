class form{
    constructor(){
       
       this.button = createButton("Back");


    }
    hide(){
        this.button.hide;
        /*sun_det.destroy();
        earth_det.destroy();
        mercury_det.destroy();*/
        
    }

   display(){
        this.button.position(displayWidth-100, displayHeight - 900 );
        this.button.mousePressed(function(){
            gamestate = 0;
        
            hide(test);
            hide(test2);
            
            
            
        } );

        
        
    }


}