
/**
 * @summary Get the canvas zoom level.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getZoom}}
 * @returns {String}
 * @version 1.2.3
 * @example
 * ```html
 * <div id="mainPanel" style="{{getZoom}}"></div>
 * ```
 */
Template.registerHelper("getZoom", function (argument){
  return "zoom: " + Session.get('zoom') + "%;";
});

/**
 * @summary Get the application title.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getAppTitle}}
 * @returns {String}
 * @version 1.2.3
 * @example
 * ```html
 * <h1>{{getAppTitle}}</h1>
 * ```
 */

Template.registerHelper("getAppTitle", function (argument){
  return ActiveLayout.getAppTitle();
});


/**
 * @summary Get the calculated width of the navbar.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getNavWidth}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <nav style="{{getNavWidth}}"></nav>
 * ```
 */
Template.registerHelper("getNavWidth", function (argument) {
  return ActiveLayout.getNavWidth();
});

/**
 * @summary Get the calculated width of the page.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getPageWidth}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <div class="page" style="{{getPageWidth}}">
 *   <!-- page content -->
 * </div>
 * ```
 */
Template.registerHelper("getPageWidth", function (argument) {
  return ActiveLayout.getPageWidth();
});

Template.registerHelper("getSecondPanelWidth", function (argument) {
  return ActiveLayout.getSecondPanelWidth();
});





/**
 * @summary Get the calculated width of the modal dialog.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getModalWidth}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <div class="modal" style="{{isModalVisible}}">
 *   <div class="modal-dialog" style="{{getModalWidth}}">
 *     <!-- modal content -->
 *   </div>
 * </div>
 * ```
 */
Template.registerHelper("getModalWidth", function (argument) {
  return ActiveLayout.getModalWidth();
});


/**
 * @summary Get the calculated height of the page.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getPageHeight}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <div class="page" style="{{getPageHeight}}">
 *   <!-- page content -->
 * </div>
 * ```
 */
Template.registerHelper("getPageHeight", function (argument) {
  return ActiveLayout.getPageHeight();
});
Template.registerHelper("getSecondPanelHeight", function (argument){
  return ActiveLayout.getSecondPanelHeight();
});
/**
 * @summary Get the calculated height of the page.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getPageHeight}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <div class="page" style="{{getPageHeight}}">
 *   <!-- page content -->
 * </div>
 * ```
 */
Template.registerHelper("pageColor", function (argument) {
  return ActiveLayout.getPageColor();
});
Template.registerHelper("getPageColor", function (argument) {
  return ActiveLayout.getPageColor();
});


/**
 * @summary Get the distance of the west (left) rule guide; measured in pixels from the left of the screen.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getWestRule}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <nav style="{{getNavWidth}}"></nav>
 * ```
 */
Template.registerHelper("getWestRule", function (argument) {
  return ActiveLayout.getWestRule();
});



/**
 * @summary Display the connection status of the Meteor app.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getConnection}}
 * @link The quick brown fox.
 * @returns {String}
 * @version 1.2.3
 * @example
 * ```html
 * <div>{{getStatusLabelText}}</div>
 * ```
 */


Template.registerHelper('getStatusLabelText', function () {
  if (this.active || (this.profile && this.profile.active)) {
    return "active";
  } else {
    return "Inactive";
  }
});

/**
 * @summary Returns a color, based on the connection status of the Meteor app.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getStatusLabelColor}}
 * @returns {String}
 * @todo: Upgrade from {String} to {Hex}
 * @version 1.2.3
 * @since 1.2.3
 * @see 'foo'
 * @example
 * ```html
 * <div>{{getStatusLabelText}}</div>
 * ```
 */
Template.registerHelper('getStatusLabelColor', function () {
  if (this.active || (this.profile && this.profile.active)) {
    return "label-success";
  } else {
    return "label-default";
  }
});


/**
 * @summary Checks the Roles package to see if user is an Admin.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{isAdmin}}
 * @returns {Boolean}
 * @version 1.2.3
 * @example
 * ```html
 * {{#if isAdmin}}<div><!-- privat content --></div>{{/if}}
 * ```
 */

Template.registerHelper('isAdmin', function () {
  // this is a small security hole that a user can exploit
  // by setting their role to something else
  // TODO:  set user role permissions on data publications so it doesnt matter if they spoof it or not

  if (Meteor.user()) {
    if (Meteor.user().profile) {
      // these comparisons should be soft comparisons with == rather than ===
      // because we're comparing strings to array values, and there is a cast involved
      if ((Meteor.user().profile.roles[0] === "Admin") || (Meteor.user().profile.roles[0] === "SysAdmin")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return null;
  }
});

/**
 * @summary Checks that the user has the specified type of role.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{isRole}}
 * @returns {Boolean}
 * @version 1.2.3
 * @example
 * ```html
 * {{#if isRole 'secretary'}}<div><!-- secretary content --></div>{{/if}}
 * ```
 */

Template.registerHelper('isRole', function (role) {
  if (Meteor.user()) {
    var profileRole = Meteor.user().profile.role;

    if (profileRole) {
      if (profileRole.indexOf(role) > -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});

/**
 * @summary Gets the timestamp of when the record was created, returned as a text string.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getCreatedAt}}
 * @returns {DateString}
 * @version 1.2.3
 * @example
 * ```html
 * <div>{{getCreatedAt}}</div>
 * ```
 */
Template.registerHelper('getCreatedAt', function () {
  return moment(this.createdAt).format("YYYY-MM-DD hh:mm a");
});

/**
 * @summary Syntactic sugar for determining if the user is logged in.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{isLoggedIn}}
 * @returns {Boolean}
 * @version 1.2.3
 * @example
 * ```html
 * {{#if isRole 'secretary'}}<div><!-- secretary content --></div>{{/if}}
 * ```
 */
Template.registerHelper('isLoggedIn', function () {
  if (Meteor.userId()) {
    return true;
  } else {
    return false;
  }
});




Template.registerHelper("btnPrimary", function () {
  return "background-color: " + Session.get('backgroundColorA') + "; color: #ffffff;";
});

//DEPRECATED
Template.registerHelper("getNorthRule", function () {
  //return Layout.getNorthRule();
  var topDistance = 0;

  if (Session.get('showNavbars')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('showSearchbar')) {
    topDistance = topDistance + 50;
  }

  // // we should add spacing if the app is in card mode and in landscape mode of some sort
  // // otherwise, if it's in portrait or phone mode, we want it flush with the header
  if (Session.get('useCardLayout')) {
    if (Session.get('appWidth') > 1024) {
      topDistance = topDistance + 50;
    }
  }
  //
  // if (Session.get('useHierarchicalLayout')) {
  //   topDistance = topDistance + 50;
  // }

  return "top: " + topDistance + "px;";
});


Template.registerHelper("getTopDistance", function () {

  var topDistance;

  if (Session.get('fullscreenOverride')) {
    topDistance = 0;
  } else {
    if (Session.get('showNavbars')) {
      topDistance = topDistance + 50;
    }

    if (Session.get('showSearchbar')) {
      topDistance = topDistance + 50;
    }

    // // we should add spacing if the app is in card mode and in landscape mode of some sort
    // // otherwise, if it's in portrait or phone mode, we want it flush with the header
    // if (Session.get('useCardLayout')) {
    //   if (Session.get('appWidth') > 1024) {
    //     topDistance = topDistance + 50;
    //   }
    // }

    if (Session.get('hasPageVerticalPadding')) {
      topDistance = topDistance + 50;
    }

    // if (Session.get('useHierarchicalLayout')) {
    //   topDistance = topDistance + 50;
    // }
  }

  return "top: " + topDistance + "px;";
});
Template.registerHelper("getLeftDistance", function () {

  var leftDistance = 0;

  if (Session.get('useHorizontalFences')) {
    leftDistance = Session.get('westRule');
    return "left: " + leftDistance + "px;";
  }

  return "";

});


Template.registerHelper("getLeftTransform", function () {
  var leftDistance = 0;
  if (Session.get('useHorizontalFences')) {
    leftDistance = Session.get('westRule');
    return "transform: translate3d(" + leftDistance + "px, 0, 0);";
  } else {
    if (Session.get('appSurfaceOffset')) {
      return "";
    } else {
      return "transform: translate3d(0, 0, 0);";
    }
  }
});

Template.registerHelper("getAppRightDistance", function () {
  if (Session.get('useEastFence')) {
    return "right: 10%;";
    //return "right: " + Session.get('eastRule') + "px";
  }
});
Template.registerHelper("appSurfaceOffset", function () {
  if (Session.get('appSurfaceOffset')) {
    if (Session.get('appWidth') > 768) {

    // -webkit-transform: translate3d(270px, 0, 0);
    // -moz-transform: translate3d(270px, 0, 0);
    // -ms-transform: translate3d(270px, 0, 0);
    // -o-transform: translate3d(270px, 0, 0);
    // transform: translate3d(270px, 0, 0);


      return "left: " + Session.get('westRule') + "px";
      //return "transform: translate3d(" + Session.get('westRule') + ", 0, 0); -webkit-transform: translate3d(" + Session.get('westRule') + ", 0, 0);";
    }
  }
});

Template.registerHelper("getSecondTopDistance", function (){

  var topDistance = 0;

  if (Session.get('showNavbars')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('showSearchbar')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('hasPageVerticalPadding')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('useHierarchicalLayout')) {
    topDistance = topDistance + 50;
  }

  return "top: " + topDistance + "px;";

  // var topDistance = 0;
  //
  // if (Session.get('showNavbars')) {
  //   topDistance = topDistance + 50;
  // }
  //
  // if (Session.get('showSearchbar')) {
  //   topDistance = topDistance + 50;
  // }
  //
  // // we should add spacing if the app is in card mode and in landscape mode of some sort
  // // otherwise, if it's in portrait or phone mode, we want it flush with the header
  // if (Session.get('appWidth') > 768) {
  //   topDistance = topDistance + 50;
  // }
  //
  // if (Session.get('useHierarchicalLayout')) {
  //   topDistance = topDistance + 50;
  // }
  //
  //   return "top: " + topDistance + "px;";
});

Template.registerHelper("symmetricalHeight", function () {
  var topDistance = 0;
  var height = Session.get('appHeight');

  if (Session.get('showNavbars')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('showSearchbar')) {
    topDistance = topDistance + 50;
  }

  // we should add spacing if the app is in card mode and in landscape mode of some sort
  // otherwise, if it's in portrait or phone mode, we want it flush with the header
  if (Session.get('useCardLayout')) {
    if (Session.get('appWidth') > 768) {
      topDistance = topDistance + 50;
    }
  }

  return "height: " + (height - (topDistance * 2)) + "px;";
});



Session.setDefault("getWestPanelLeft", true);
Template.registerHelper("getWestPanelLeft", function (){
  if (Session.get('westPanelVisible')) {
    return "left: 0px;";
  } else {
    return "left: -270px;";
  }
});
