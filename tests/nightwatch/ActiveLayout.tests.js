
// - it should resize templates when window resized
// - it should resize templates when device orientation changes


// Gagarin Verification Tests
// - it should display in fullscreen mode
// - it should display in sidebar mode
// - it should display in page mode
// - it should display in fence mode
// - it should specify a northFence for templates
// - it should specify a southFence for templates
// - it should specify an eastFemce for templates
// - it should specify a westFence for templates
// - it should hide/show sidebar

// - swipe right should open menu on phone and portrait tablet
// - swipe left should close menu on phone and portrait tablet

// Nightwatch Validation Tests
// - it should display menu and fullscreen offset on phone instead of in a mode
// - it should only display page mode on tablet when in landscape mode
// - it should display menu and fullscreen offset on tablet when in portrait mode

// - it should hide/show navbars
// - it should hide/show footer
// - it should hide/show header

module.exports = {
  tags: ['layout'],
  before: function(client){
    // this depends on the accounts-housemd package
    client
      .url("http://localhost:3000")
      .pause(500)
  },
  // "background color should be the theme color": function(client){
  //   client
  //     .cssProperty('body', 'background-image', '-webkit-linear-gradient(top, #555555, #aaaaaa 100%);')
  //
  //     // background-image: -moz-linear-gradient(top, #555555, #aaaaaa 100%); background-image: -o-linear-gradient(top, #555555, #aaaaaa 100%); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-repeat: no-repeat; background-attachment: fixed; -moz-user-select: none; -khtml-user-select: none;')
  //     // .verify.elementPresent("#navbarHeader")
  // },
  // "it should hide/show navbar": function(client){
  //   client
  //     .resizeWindow(1024,768)
  //     .verify.elementPresent("#navbarHeader")
  //     .verify.elementPresent("#navbarFooter")
  //     .keys(client.Keys.CONTROL)
  //     .keys(client.Keys.COMMAND)
  //     .keys(client.Keys.N)
  //     .pause(300)
  //     .keys(client.Keys.NULL)
  //     .verify.elementNotPresent("#navbarHeader")
  //     .verify.elementNotPresent("#navbarFooter")
  //     .keys(client.Keys.CONTROL)
  //     .keys(client.Keys.COMMAND)
  //     .keys(client.Keys.N)
  //     .pause(300)
  //     .keys(client.Keys.NULL)
  //     .verify.elementPresent("#navbarHeader")
  //     .verify.elementPresent("#navbarFooter")
  // },
  "sidebar should be visible in landscape and desktop modes" : function (client) {
    client
      .resizeWindow(1024, 768)
      .verify.elementPresent(".sidebarMenu")
      .verify.elementPresent("#usernameLink")
      .verify.elementPresent("#mainPanel")
  },
  "sidebar should be hidden in phone mode" : function (client) {
    client
      .resizeWindow(480, 800)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
  },
  "sidebar should be hidden in portrait mode" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
  },
  "sidebar should be visible in landscape mode" : function (client) {
    client
      .resizeWindow(1024, 768)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        .verify.cssProperty("#panelSurface", "left", "270px")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
  },
  "anonymous user - sidebar toggle opens and closes in phone mode" : function (client) {
    client
      .resizeWindow(480, 800)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
        .click("#navbarHeader").pause(500)
        .verify.cssProperty("#panelSurface", "left", "0px")
        .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 270, 0)")
        .click("#navbarHeader").pause(500)
  },
  "anonymous user - sidebar toggle opens and closes in portrait mode" : function (client) {
    client
      .resizeWindow(768, 1024)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        // .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
        .verify.cssProperty("#panelSurface", "left", "0px")
        .click("#navbarHeader").pause(500)
        .verify.cssProperty("#panelSurface", "left", "0px")
        .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 270, 0)")
        .click("#navbarHeader").pause(500)
  },
  "anonymous user - page is max width of 768 on larger screens" : function (client) {
    client
      .resizeWindow(1280, 1024)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")
        .verify.cssProperty("#mainPanel", "width", "768px")
  },
  "anonymous user - second page appears on HDTV screens" : function (client) {
    client
      .resizeWindow(1920, 1080)
        .verify.visible("#navbarHeader")
        .verify.elementPresent("#panelSurface")

        .verify.elementPresent("#mainPanel")
        .verify.cssProperty("#mainPanel", "width", "768px")

        .verify.elementPresent("#secondPanel")
        .verify.cssProperty("#secondPanel", "width", "768px")
  },

  // "anonymous user - sidebar toggle switches between pagescreen and fullscreen in landscape mode" : function (client) {
  //   client
  //     .resizeWindow(1024, 768)
  //       .verify.visible("#navbarHeader")
  //       .verify.elementPresent("#panelSurface")
  //       .verify.cssProperty("#panelSurface", "left", "0px")
  //       .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 270, 0)")
  //       .click("#navbarHeader").pause(500)
  //       .verify.cssProperty("#panelSurface", "transform", "matrix(1, 0, 0, 1, 0, 0)")
  // },
  after: function(client){
    client.end();
  }
}
