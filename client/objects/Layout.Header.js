Header = {};

if (Meteor.isClient) {
  Session.setDefault('HeaderConfig', {
    hasEntryControls: true,
    classes: {
      header: "",
      title: "",
      links: ""
    },
    text: {
      title: "Sample Title",
      logout: "Logout"
    }
  });
}


if (Meteor.isClient) {
  Header = {
    configure: function (configObject) {
      Session.set('HeaderConfig', configObject);
    },
    getWestRule: function (){
      if (Session.get('navIsFullscreen')) {
        return "left: 0px;";
      } else {
        //return "";
        return "left: " + Session.get('westRule') + "px;";
        // if (Session.get('useCardLayout')) {
        //  return "";
        // } else {
        //   return "left: " + Session.get('westRule');
        // }
      }
      // if (Session.get('navIsFullscreen')) {
      //   return "left: 0px;";
      // } else {
      //   return "left: " + Session.get('westRule');
      // }
    }
  };

}
