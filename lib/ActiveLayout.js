
ActiveLayout = {
  /**
   * @summary Get the application page width.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getPageWidth
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageWidth();
   * ```
   */
  getPageWidth: function (){
    var width = Session.get('appWidth') - (Session.get('westRule') + Session.get('eastRule'));
    if (Session.get('navIsFullscreen')) {
      return "width: 100%;";
    } else {
      return "width: " + width + "px;";
    }
  },
  /**
   * @summary Get the distance of the west (left) rule guide; measured in pixels from the left of the screen.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getWestRule
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageWidth();
   * ```
   */

  getWestRule: function (){
    if (Session.get('navIsFullscreen')) {
      if (Session.get('useCardLayout')) {
        return "";
      } else {
        return "left: 0px;";
      }
    } else {
        return "left: " + Session.get('westRule') + "px;";
    }

    // if (Session.get('navIsFullscreen')) {
    //   return "left: 0px;";
    // } else {
    //   return "";
    // }
  },

    /**
   * @summary Get the application title.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getAppTitle
   * @returns {String}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageWidth();
   * ```
   */
  getAppTitle: function (){
    return Session.get('appTitle');
  },
  /**
   * @summary Get the application page width.
   * @locus Client
   * @memberOf ActiveLayout
   * @name height
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.height();
   * ```
   */
  getPageHeight: function (){
    var pageHeight = Session.get('appHeight') - (ActiveLayout.getNorthRule() * 2);
    return "height: " + pageHeight + "px;";
  },

  getNorthRule: function (){
    var topDistance = 0;

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

    return "top: " + topDistance + "px;";
  }
};
