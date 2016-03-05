

// since the navbarFooter can't support {{> yield }} blocks
// we need to move the footer into the appLayout
// so we're attaching those events and footers to the appLayout Template
// but storing them here for organizational sake

Template.appLayout.helpers({
  showHelp: function (){
    var layoutConfig = Session.get('LayoutConfig');
    if (layoutConfig && layoutConfig.help && (typeof layoutConfig.help.display === "boolean")) {

      return layoutConfig.help.display;
    } else {
      return true;
    }
  },
  getFooterHeight: function (){
    if (Session.get('showNavbars')) {
      return "height: 50px; border-top: 1px solid lightgray;";
    } else {
      return "height: 0px; border-top: none;";
    }
  }
});

// most of these items need to be refactored away into actionBarHelperBlocks

Template.appLayout.events({
  'click #saveFormButton': function (){
    $('#saveRecordButton').click();
    //$('input[type="submit"]').click();
  },
  'click #helpBtn': function (){
    console.log('helpBtn');
    var layoutConfig = Session.get('LayoutConfig');
    if (layoutConfig && layoutConfig.help && layoutConfig.help.link) {
      Router.go(layoutConfig.help.link)
    } else {
      Session.toggle('showReactiveOverlay');
      Session.toggle('showKeybindings');
    }
  },
  'click #overlayBtn': function (){
    Session.toggle('showReactiveOverlay');
  },
  "click #homeBtn": function (event, template) {
    Router.go('/');
  },
  "click #listBtn": function (event, template) {
    Router.go('/list/records');
  },
  "click #imageGridBtn": function (event, template) {
    Router.go('/grid/records');
  },
  "click #tableBtn": function (event, template) {
    Router.go('/table/records');
  },
  "click #initializeBtn": function (event, template) {
    console.log('initializing database');
    Meteor.call("initializeDefaultCollaborations");
  },
  "click #dropBtn": function (event, template) {
    console.log('dropping database');
    Meteor.call('dropDatabase');
  }
});
