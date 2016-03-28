Notes = new Meteor.Collection('notes');

if (Meteor.isClient) {
  
  // globals defaults 
  var data = {note:"a", mode:"ionian", tuning:"estandard"};
  var tuning = {
    dstandard:['D','A','F','C','G','D'],
    dropc:['D','A','F','C','G','C'],
    ebstandard:['Eb','Bb','Gb','Db','Ab','Eb'],
    dropd:['E','B','G','D','A','D'],
    estandard:['E','B','G','D','A','E']
  };

  // TODO: investigate what this does
  var tracker = new Tracker.Dependency();

  // Template variables inside of template demo
  Template.demo.helpers({
    note: function () {
      tracker.depend();
      return data.note;
    },
    mode: function () {
      tracker.depend();
      return data.mode;
    },
    tuning: function () {
      tracker.depend();
      return data.tuning;
    }
  });

  // Template variables inside of template fretbase
  Template.fretbase.helpers({
    name: function() {
      tracker.depend();
      return tuning[data.tuning][parseInt(this.string)];
    }
  });

  // Listens to all events on body
  Template.body.events({

    // From the form scale-creator
    "submit .scale-creator": function (event) {

      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      data.note = event.target.note.value;
      data.mode = event.target.mode.value;
      data.tuning = event.target.tuning.value;

      tracker.changed();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


