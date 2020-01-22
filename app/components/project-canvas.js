import Component from '@ember/component';

export default Component.extend({
  // Handle transitions
 actions: {
  didTransition() {
    alert("Called");
  }
 }
 
});
