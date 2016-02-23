window.onclick = function(){

  var loginIcon = document.getElementById('login-icon');
  loginIcon.style.padding = getComputedStyle(loginIcon).padding;


  loginIcon.onclick = function(e){
  //listener for loginIcon to move up the button
    Velocity(e.target, { translateY: "-200px"},{ duration: "normal" });
    //anchor the element to position
    e.target.style.top = e.target.offsetTop;
    e.target.style.left = e.target.offsetLeft;
    e.target.style.position = 'absolute';

    document.getElementById('login-container').style.border = '1px solid #eee';
    document.getElementById('login-form').style.opacity = 1;

    window.setTimeout(function(){
      document.getElementById('login-form').style.display = 'flex';
    }, 1000);

  }



}
