/*
  Defines the behaviour and properties of the component. Behaviors are typically defined using actions.
  
*/
import Component from '@ember/component';

export default Component.extend({
 
 actions: {
   next() {
     alert("Next clicked");
   },
   back() {
    alert("Back clicked");
   }
 }
});
