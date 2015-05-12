var isFullscreen = false;

function fullscreen(){      
    var d = {};
    var speed = 900;
    if(!isFullscreen){ // MAXIMIZATION
        d.width = "100%";
        d.height = "100%"; 
        isFullscreen = true;
        $("h1").slideUp(speed);
    }
    else{ // MINIMIZATION            
        d.width = "300px";
        d.height = "100px";            
        isFullscreen = false;
        $("h1").slideDown(speed);
    }
    $("#controls").animate(d,speed);            
}
            