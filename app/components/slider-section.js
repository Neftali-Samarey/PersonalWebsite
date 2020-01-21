/*
  Defines the behaviour and properties of the component. Behaviors are typically defined using actions.
  
*/
import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({

  items : [
    "blue", "green", "yellow"
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
