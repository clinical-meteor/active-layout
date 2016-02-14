Session.setDefault('LayoutConfig', {
  hasEntryControls: true,
  help: {
    display: true,
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
  },
  fence: {
    east: 270,
    west: 270,
    maxPageWidth: 768
  },
  defaults: {
    appSurfaceOffset: false,
    fullscreenNavbars: false,
    fullscreen: false,
    hasPagePadding: false,
    hasPageVerticalPadding: false,
    mainPanelIsCard: false,
    pageWhite: true,
    secondPanelEnabled: false,
    showNavbars: true,
    showSidebar: true,
    showSearchbar: false,
    symmatricalPadding: false,
    useHierarchicalLayout: false,
    useHorizontalFences: false,
    useVerticalFences: false,
    useCardLayout: false,
    useEastFence: true,
    wideCard: true
  }
});





ActiveLayout = {
  /**
   * @summary Configure the ActiveLayout infrastructure.
   * @locus Client
   * @memberOf ActiveLayout
   * @name configure
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.configure({
     help: {
       link: "/menu",
       text: "Menu"
     },
     classes: {
       header: "",
       title: "",
       links: ""
     },
     text: {
       title: "Spiffy App",
       logout: "Logout"
     },
     fence: {
       north: 50,
       south: 0,
       east: 270,
       west: 270
     },
     defaults: {
       showNavbars: true,
       showSidebar: true,
       showSearchbar: false,
       useHierarchicalLayout: false,
       mainPanelIsCard: false,
       wideCard: true,
       useCardLayout: false,
       hasPagePadding: false,
       symmatricalPadding: false,
       hasPageVerticalPadding: false,
       useHorizontalFences: false,
       useVerticalFences: true,
       navIsFullscreen: true,
       fullscreenNavbars: false,
       fullscreen: false,
       secondPanelEnabled: false,
       appSurfaceOffset: true,
       useEastFence: true,
       pageWhite: true
     }
   });
   * ```
   */
  configure: function (properties) {
    if (properties) {
      Session.set('LayoutConfig', properties);

      if (properties.fence) {
        if (properties.fence.north) {
          Session.set('northRule', properties.fence.north)
        }
        if (properties.fence.south) {
          Session.set('southRule', properties.fence.south)
        }
        if (properties.fence.east) {
          Session.set('eastRule', properties.fence.east)
        }
        if (properties.fence.west) {
          Session.set('westRule', properties.fence.west)
        }
        if (properties.fence.maxPageWidth) {
          Session.set('maxPageWidth', properties.fence.maxPageWidth)
        }
      }

      if (properties.defaults) {
        //console.log('properties.defaults', properties.defaults);

        if (typeof properties.defaults.showNavbars === "boolean") {
          Session.set('showNavbars', properties.defaults.showNavbars);
        }
        if (typeof properties.defaults.showSidebar === "boolean") {
          Session.set('showSidebar', properties.defaults.showSidebar);
        }
        if (typeof properties.defaults.showSearchbar === "boolean") {
          Session.set('showSearchbar', properties.defaults.showSearchbar);
        }
        if (typeof properties.defaults.useHierarchicalLayout === "boolean") {
          Session.set('useHierarchicalLayout', properties.defaults.useHierarchicalLayout);
        }
        if (typeof properties.defaults.mainPanelIsCard === "boolean") {
          Session.set('mainPanelIsCard', properties.defaults.mainPanelIsCard);
        }
        if (typeof properties.defaults.wideCard === "boolean") {
          Session.set('wideCard', properties.defaults.wideCard);
        }
        if (typeof properties.defaults.useCardLayout === "boolean") {
          Session.set('useCardLayout', properties.defaults.useCardLayout);
        }
        if (typeof properties.defaults.hasPageVerticalPadding === "boolean") {
          Session.set('hasPageVerticalPadding', properties.defaults.hasPageVerticalPadding);
        }
        if (typeof properties.defaults.useHorizontalFences === "boolean") {
          Session.set('useHorizontalFences', properties.defaults.useHorizontalFences);
        }
        if (typeof properties.defaults.useVerticalFences === "boolean") {
          Session.set('useVerticalFences', properties.defaults.useVerticalFences);
        }
        if (typeof properties.defaults.fullscreen === "boolean") {
          Session.set('fullscreen', properties.defaults.fullscreen);
        }
        if (typeof properties.defaults.fullscreenNavbars === "boolean") {
          Session.set('fullscreenNavbars', properties.defaults.fullscreenNavbars);
        }
        if (typeof properties.defaults.navIsFullscreen === "boolean") {
          Session.set('navIsFullscreen', properties.defaults.navIsFullscreen);
        }
        if (typeof properties.defaults.secondPanelEnabled === "boolean") {
          Session.set('secondPanelEnabled', properties.defaults.secondPanelEnabled);
        }
        if (typeof properties.defaults.appSurfaceOffset === "boolean") {
          Session.set('appSurfaceOffset', properties.defaults.appSurfaceOffset);
        }
        if (typeof properties.defaults.useEastFence === "boolean") {
          Session.set('useEastFence', properties.defaults.useEastFence);
        }
        if (typeof properties.defaults.pageWhite === "boolean") {
          Session.set('pageWhite', properties.defaults.pageWhite);
        }
      }

    }
  },

  /**
   * @summary Get the application navbar width.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getNavWidth
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getNavWidth();
   * ```
   */
  getNavWidth: function (){
    if (Session.get('fullscreenNavbars')) {
      return "width: 100%; position:fixed;";
    } else {
      if (Session.get('maxPageWidth')) {
        return "width: " + Session.get('maxPageWidth') + "px;";
      } else {
        // synonymous with useHorizontalFences
        var width = Session.get('appWidth') - (Session.get('westRule') + Session.get('eastRule'));
        return "width: " + width + "px;";
      }
    }
  },

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
    if (Session.get('wideCard')) {
      return "width: 100%;";
    } else {
      if (Session.get('maxPageWidth')) {
        return "width: " + Session.get('maxPageWidth') + "px;";
      } else {
        var width = Session.get('appWidth') - (Session.get('westRule') + Session.get('eastRule'));
        return "width: " + width + "px;";
      }
    }
  },
  /**
   * @summary Get the modal dialog width.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getModalWidth
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageWidth();
   * ```
   */
  getModalWidth: function (){
    var width = Session.get('appWidth') - (Session.get('westRule') + Session.get('eastRule'));
    if (Session.get('wideCard')) {
      if (Session.get('useEastFence')) {
        return "width: 100%; padding-right: " + (10 + parseInt(Session.get('appWidth')) * 0.1) + "px;";
      } else {
        return "width: 100%;";
      }
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

    var pageHeight = Session.get('appHeight');

    if (Session.get('showNavbars')) {
      pageHeight = pageHeight - 50;
    }

    if (Session.get('showSearchbar')) {
      pageHeight = pageHeight - 50;
    }

    if (Session.get('hasPageVerticalPadding')) {
      pageHeight = pageHeight - 100;
    }

    return "height: " + pageHeight + "px;";
  },



  /**
   * @summary Get the page or tile color.
   * @locus Client
   * @memberOf ActiveLayout
   * @name getPageColor
   * @returns {StyleString}
   * @version 1.2.3
   * @example
   * ```html
   * ActiveLayout.getPageColor();
   * ```
   */
  getPageColor: function (){


    var themeConfig = Session.get('ThemeConfig');
    if (themeConfig && themeConfig.page && themeConfig.page.background) {
      return "background-color: " + themeConfig.page.background + ";";
    } else {
      return "background-color: inherit;";
      //return "background-color: " + themeConfig.palette.colorE + ";";
    }

    // pageWhite acts as an override
    var layoutConfig = Session.get('LayoutConfig');
    if (layoutConfig && layoutConfig.defaults && (typeof layoutConfig.defaults.pageWhite === "boolean")) {
      if (layoutConfig.defaults.pageWhite) {
        return "background-color: white;";
      }
    }
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
