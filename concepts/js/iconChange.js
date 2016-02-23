window.onload = function(){

  //get references to DOM elements
  var square = document.getElementById('square');
  var rounded = document.getElementById('rounded');
  var circle = document.getElementById('circle');

  square.onclick = changeColor;
  rounded.onclick = changeColor;
  circle.onclick = changeColor;

}

function changeColor(e){

  var profile = document.getElementById('profile-image');

  var buttons = document.querySelectorAll(".icon-change")
    for (i = 0; i < buttons.length; ++i) {
      if (buttons[i] == e.target){
        buttons[i].classList.add('active');
        profile.style.borderRadius = getComputedStyle(e.target,null).borderRadius;
      }
      else
        buttons[i].classList.remove('active');
    }
}
