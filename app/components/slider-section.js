/*
  Defines the behaviour and properties of the component. Behaviors are typically defined using actions.
  
*/
import Component from '@ember/component';
import { A } from '@ember/array';

let projectCount = 0;

/* Blueprint for the class object */
class Project {
  constructor(projectName) {
    this._projectName = projectname;
  }
  // Public methods for the project
}

export default Component.extend({

  items : [
    "#74b9ff", "#00b894", "#fdcb6e"
  ],

  projects: [
    {
      name: "Tipie (iOS)",
      description: "Here I introduce a project called project 1.",
      backgroundThemeColor: "#74b9ff"
    }, 
    {
      name: "Project 2",
      description: "Just another project name",
      backgroundThemeColor: "#00b894"
    },
    {
      name: "Project 3",
      description: "Mmmm, why not use a class?",
      backgroundThemeColor: "#fdcb6e"
    },
    {
      name: "Project 4",
      description: "Getting a bit repetitive?",
      backgroundThemeColor: "#74b9ff"
    }
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
