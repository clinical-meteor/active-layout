Session.setDefault("show_background", false);
Session.setDefault('showSearchCorner', false);



Template.appLayout.events({
  'click .sidebarToggle': function(event, template){
    event.stopPropagation();
    console.log('click .sidebarToggle');

    if (Session.get("appWidth") > 1040) {
      MainPanel.toggleFullscreen();
    } else {
      if (Session.get("appWidth") > 768) {
        MainPanel.toggleFullscreen();
      } else {
        MainPanel.toggleSlide();
      }
    }
  },
  'keyup #globalSearchBar' : function (){
    Session.set('collaborationSearchFilter', $('#globalSearchBar').val());
  },
  'change #globalSearchBar' : function (){
    Session.set('collaborationSearchFilter', $('#globalSearchBar').val());
  },
  'click #logoutLink': function () {
    Meteor.logout();
    Router.go('/entrySignIn');
  }
});


Template.registerHelper("getPageTitle", function (argument){
  return Session.get('pageTitle');
});


Template.appLayout.helpers({
  getSearchBarWidth: function(){
    ActiveLayout.getNavWidth();
  },
  hasEntryControls: function (){
    var headerConfig = Session.get('HeaderConfig');
    if (headerConfig && (typeof headerConfig.hasEntryControls === "boolean")) {
      return headerConfig.hasEntryControls;
    } else {
      return true;
    }
  },
  breadcrumbsExist: function (){
    if (Session.get('pageTitle')) {
      return true;
    } else {
      return false;
    }
  },
  getSearchStyle: function (){
    var style = "";
    var top = 0;

    if (Session.get('showNavbars')) {
      top = top + 50;
    };
    if (Session.get('showSearchCorner')) {
      style = style + "visibility: visible; background: linear-gradient(315deg, transparent 24px, rgba(255,255,255," + Session.get('glassOpacity') + ") 0) bottom right;";
    } else {
      style = style + "visibility: visible;";
    }

    if (Session.get('showSearchbar')) {
      style = style + " height: 50px;";
    } else {
      top = top - 50;
      style = style + " height: 0px;";
    }
    style = style + " top: " + top + "px;";

    return style;
  },
  showSearchBar: function (){
    return Session.get('showSearchbar');
  },
  getHeaderHeight: function (){
    if (Session.get('showNavbars')) {
      return "height: 50px; top: 0px; border-bottom: 1px solid lightgray;";
    } else {
      return "height: 0px; top: -50px; border-bottom: none;";
    }
  },
  getTitleText: function () {
    // var headerConfig = Session.get('HeaderConfig');
    // if (headerConfig && headerConfig.text) {
    //   return headerConfig.text.title;
    // } else {
    //   return "---";
    // }
    return Theme.getAppTitle();
  },
  getUserName: function () {
    if (Meteor.userId()) {
      return User.getName();
    } else {
      return "LogIn";
    }
  },
  getUsernameLink: function () {
    if (Meteor.userId()) {
      return "";
    } else {
      return "/entrySignIn";
    }
  },
  status: function () {
    return Meteor.status().status;
    return JSON.stringify(Meteor.status());
  }
});
