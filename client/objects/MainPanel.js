
MainPanel = {
  isFullscreen: false,
  isOffset: false,
  state: undefined,
  set: function(layout){
    if (layout === "fullscreen") {
      this.isFullscreen = true;
    } else {
      this.isFullscreen = false;
    }
    this.state = layout;
  },
  fullscreen: function(){
    console.log('fullscreen');
    this.isFullscreen = true;
    this.state = "fullscreen";
    Session.set("wideCard", true);
    Session.set("useEastFence", false);
    Session.set("appSurfaceOffset", false);
    Session.set('fullscreenNavbars', true);
    WestPanel.hide();
    //Session.set('useHorizontalFences', false);
  },
  pagescreen: function(){
    console.log('pagescreen');
    this.isFullscreen = false;
    this.state = "pagescreen";
    Session.set("wideCard", false);
    Session.set("useEastFence", true);
    Session.set("appSurfaceOffset", true);
    Session.set('fullscreenNavbars', false);
    WestPanel.show();

    //Session.set('useHorizontalFences', true);
  },
  sidebarscreen: function(){
    console.log('sidebarscreen');
    this.isFullscreen = false;
    this.state = "sidebarscreen-";
    Session.set("wideCard", true);
    Session.set("useEastFence", false);
    Session.set("appSurfaceOffset", true);
    Session.set('fullscreenNavbars', false);
    WestPanel.show();
    //Session.set('useHorizontalFences', true);
  },
  toggleFullscreen: function(){
    if (this.isFullscreen) {
      if (Session.get('appWidth') > 1040) {
        this.pagescreen();
      } else {
        this.sidebarscreen();
      }
    } else {
      this.fullscreen();
    }
  },
  slide: function(){
    Session.set('useHorizontalFences', true);
    WestPanel.show();
  },
  unslide: function(){
    Session.set('useHorizontalFences', false);
    WestPanel.hide();
  },
  toggleSlide: function(){
    Session.toggle('useHorizontalFences');
    if (Session.get('useHorizontalFences')) {
      WestPanel.show();
    } else {
      WestPanel.hide();
    }
  }
}
