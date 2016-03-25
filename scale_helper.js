if (Meteor.isClient) {
  // globals for note and mode
  var data = {};
  var tracker = new Tracker.Dependency();

  Template.demo.helpers({
    note: function () {
      tracker.depend();
      return data.note;
    },
    mode: function () {
      tracker.depend();
      return data.mode;
    }
  });

  Template.body.events({
    "submit .scale-creator": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      data.note = event.target.note.value;
      data.mode = event.target.mode.value;

      tracker.changed();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


