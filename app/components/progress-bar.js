import Component from '@ember/component';

export default Component.extend({
  actions: {
    animate(){
      
    }
  }
});

function animate() {
  var elem = document.getElementById("bar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
