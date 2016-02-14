Meteor.startup(function () {
  Session.set("resize", null);
  Session.setDefault('appHeight', $(window).height());
  Session.setDefault('appWidth', $(window).width());
  Session.setDefault("glassOpacity", .95);
  Session.setDefault('activeRecord', null);
  Session.set('appWidth', $(window).width());

  window.addEventListener('resize', function () {
    Session.set("resize", new Date());
    Session.set("appHeight", $(window).height());
    Session.set("appWidth", $(window).width());
  });

  //====================================================
  // refactor to clinical:user-model
  Session.setDefault("avatarImgSrc", 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfa1/v/t1.0-9/10959424_1048857758463899_5840518008623403253_n.jpg?oh=9e5f381178590a5a67ff82f5e5dc37aa&oe=56D11A43');

  //====================================================

});




Meteor.startup(function () {
  Template.appLayout.layoutPanelsBasedOnBreakpoints();
});



//==================================================================================================



Template.appLayout.onRendered(function () {
  Template.appLayout.layoutPanelsBasedOnBreakpoints();
  $('body').addClass('grayBackground');
});


Template.appLayout.events({
  // DEPRECATED
  'click #accountDock .cardHandle': function () {
    Session.toggle('accountCardVisible');
  },
  // DEPRECATED
  'click #rightDock .cardHandle': function () {
    Session.toggle('rightCardVisible');
  }
});



Template.appLayout.helpers({

  // We use #each on an array of one item so that the "list" template is
  // removed and a new copy is added when changing lists, which is
  // important for animation purposes. #each looks at the _id property of it's
  // items to know when to insert a new item and when to update an old one.
  thisArray: function() {
    //console.log('[thisArray]', [this]);
    return [this];
  },
  secondPanelEnabled: function (){
    return Session.get('secondPanelEnabled');
  },
  getWestPanelWidth: function(){
    return "width: " + Session.get('westRule') + "px; ";
  },
  getHelpText: function () {
    var layoutConfig = Session.get('LayoutConfig');
    if (layoutConfig && layoutConfig.help && layoutConfig.help.text) {
      return layoutConfig.help.text;
    } else {
      return "Help";
    }
  },
  showAccountCard: function () {
    return Session.get('showAccountCard');
  },
  showRightCard: function () {
    return Session.get('showRightCard');
  },
  rightCardStyle: function () {
    return "background: linear-gradient(45deg, transparent 16px, rgba(255,255,255," + Session
      .get("glassOpacity") + ") 0) bottom right;";
  },
  accountCardVisibility: function (){
    if (Session.get('accountCardVisible')) {
      return "right: 0px;";
    } else {
      return "right: -310px;";
    }
  },
  rightCardVisibility: function () {
    if (Session.get('rightCardVisible')) {
      return "right: 0px;";
    } else {
      return "right: -310px;";
    }
  },
  getContextTitle: function (){
    return Session.get('pageTitle');
  },
  resized: function () {
    Template.appLayout.layoutPanelsBasedOnBreakpoints();
  },
  getLeftPanelStyle: function () {
    return Style.parse(Template.appLayout.generateStylesheet());
  },
  getRightPanelStyle: function () {
    if (Session.get('pageIsWide')) {
      return "visibility: hidden; left: 1118px;";
      // return "visibility: hidden; left: " + (Session.get('appWidth') + 1024) + "px;";
    } else {
      return Style.parse(Template.appLayout.generateStylesheet(true));
    }
  },
});



Template.appLayout.generateStylesheet = function (rightPanel) {
  var stylesheet = {};

    // RIGHT PANEL
  if (rightPanel) {
    if (Session.get('appWidth') > 1886) {
      stylesheet.visibility = "visible;";
      stylesheet.left = '1118px;';
    } else {
      stylesheet.visibility = "hidden;";
      stylesheet.left = '1118px;';
    }
  }

  if (Session.get('pageIsWide')) {
    stylesheet.width = (Session.get('appWidth') - 400) + "px;";
    stylesheet["max-width"] = (Session.get('appWidth') - 400) + "px;";
  } else {
    stylesheet.width = "100%;";
    stylesheet["max-width"] = "768px;";
  }


  var marginBottom = 0;

  if (Session.get('mainPanelIsCard')) {
    marginBottom = marginBottom + 50;
  } else {
    marginBottom = marginBottom;
  }

  if (Session.get('showNavbars')) {
    marginBottom = marginBottom + 50;
  } else {
    marginBottom = marginBottom;
  }

  stylesheet["margin-bottom"] = marginBottom + "px;";

  return stylesheet;
};


Template.appLayout.layoutPanelsBasedOnBreakpoints = function () {
  //console.log('Template.appLayout.layoutPanelsBasedOnBreakpoints');

  Session.set('transparencyDivHeight', $('#innerPanel').height() + 80);

  // two-page with sidebar
  // 2076 = 2 (768px panels) + 100px spacer + 2 margins at least 220px wide
  if (Session.get('appWidth') > 2096) {
    //Session.set("sidebarVisible", true);
    WestPanel.show();

    // one-page with sidebar
    // 1208 =  single 768px panel + 2 margins at least 220px wide + 20px sidebar spacer
  } else if (Session.get('appWidth') > 1040) {
    //Session.set('mainPanelLeft', (Session.get('appWidth') - 768) * 0.5);
    // Session.set('useHorizontalFences', false);
    Session.set('navIsFullscreen', false);
    Session.set('wideCard', false);
    WestPanel.show();
    // one-page
    // 768 =  single 768px panel
  } else if (Session.get('appWidth') > 768) {
    //Session.set("sidebarVisible", false);
    Session.set('navIsFullscreen', true);
    Session.set('wideCard', true);
    WestPanel.show();
    // mobile
  } else {
    //Session.set("sidebarVisible", false);
    Session.set('navIsFullscreen', true);
    Session.set('wideCard', true);
    WestPanel.hide();
    // Session.set('useHorizontalFences', true);
  }
};



// DEPRECATED
Template.appLayout.layout = function (timeout) {
  Template.appLayout.layoutPanelsBasedOnBreakpoints();
};
// DEPRECATED
Template.appLayout.delayedLayout = function (timeout) {
  Meteor.setTimeout(function () {
    Template.appLayout.layoutPanelsBasedOnBreakpoints();
  }, timeout);
};
