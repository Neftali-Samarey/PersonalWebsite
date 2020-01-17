import Component from '@ember/component';

export default Component.extend({

  /*https://www.learnhowtoprogram.com/ember-js/ember-js/components-delete*/

 didRender() {
  animate();
 }

});

function animate() {
  console.log("Loaded");
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
