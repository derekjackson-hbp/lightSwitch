window.onload = function() {

var turn=document.getElementById("light");
var state=turn.getAttribute("class");



  document.getElementById("butt").onclick = function(){
    turn=document.getElementById("light");
    state=turn.getAttribute("class");
    
      if (state ==="on"){
        turn.setAttribute("class","off");
      }
      else if (state === "off"){
          turn.setAttribute("class","on");
      }
  }
}