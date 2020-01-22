/*
  Defines the behaviour and properties of the component. Behaviors are typically defined using actions.
  
*/
import Component from '@ember/component';
import { A } from '@ember/array';

let projectCount = 0;

export default Component.extend({

  items : [
    "#74b9ff", "#00b894", "#fdcb6e"
  ],

  computeCount: () => {
    this.projectCount = this.items.size();
    alert("Item count is " + this.projectCount);
  },
 
 actions: {
   next() {
     alert("Next clicked");
   },
   back() {
    alert("Back clicked");
   }
 }
});
