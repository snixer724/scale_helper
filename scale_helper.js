if (Meteor.isClient) {
  // globals for note and mode
  var data = {};
  var newChattersDep = new Tracker.Dependency();

  Template.demo.helpers({
    note: function () {
      newChattersDep.depend();
      console.log("daisdjasdasd" + data.note);
      return data.note;
    }
    // mode: function () {
    //   return data.mode;
    // }
  });

  Template.body.events({
    "submit .scale-creator": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      data.note = event.target.note.value;
      //data.mode = event.target.mode.value;

      console.log(data.note);
      console.log(JSON.stringify(data));
      newChattersDep.changed();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


