
if (Meteor.isClient) {
  Session.setDefault('LayoutConfig', {
    hasEntryControls: true,
    help: {
      hide: false,
      link: false,
      text: false
    },
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

  Layout = {
    configure: function (configObject) {
      Session.set('LayoutConfig', configObject);
    },
    getWestRule: function (){
      if (Session.get('navIsFullscreen')) {
        return "left: 0px;";
      } else {
        return "left: " + Session.get('westRule') + "px;";
      }
    }
  };

}
