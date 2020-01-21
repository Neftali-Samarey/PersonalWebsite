/*
  Defines the behaviour and properties of the component. Behaviors are typically defined using actions.
  
*/
import Component from '@ember/component';

export default Component.extend({

  items : [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
  ],
 
 actions: {
   next() {
     alert("Next clicked");
   },
   back() {
    alert("Back clicked");
   }
 }
});
