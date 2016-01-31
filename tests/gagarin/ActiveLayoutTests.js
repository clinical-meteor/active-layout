
describe('clinical:active-layout', function () {
  var server = meteor();
  var client = browser(server);
  var collaborationId = null;


  it('ActiveLayout should only exist on the client', function () {
    return client.execute(function () {
      expect(ActiveLayout).to.exist;
    }).then(function (){
      return server.execute(function () {
        expect(ActiveLayout).to.not.exist;
      });
    });
  });

  it('ActiveLayout should NOT exist on the server', function () {
    return server.execute(function () {
      expect(ActiveLayout).to.not.exist;
    });
  });

  it('ActiveLayout.getPageWidth()', function () {
    return client.setWindowSize(1024, 768).execute(function () {

      // Session.set('appWidth', 768);
      // Session.set('westRule', 100);
      // Session.set('eastRule', 100);

      // Session.set('navIsFullscreen', false);
      // expect(ActiveLayout.getPageWidth()).to.be.equal("width: 568px;");
      // if (typeof Session.get('navIsFullscreen') === "undefined") {
      //   expect(ActiveLayout.getPageWidth()).to.be.equal("width: 100%;");
      // } else {
      //   if (Session.get('navIsFullscreen')) {
      //     expect(ActiveLayout.getPageWidth()).to.be.equal("width: 100%;");
      //   } else {
      //     expect(ActiveLayout.getPageWidth()).to.be.equal("width: 568px;");
      //   }
      // }
      expect(ActiveLayout.getPageWidth()).to.be.equal("width: 754px;");


    });
  });
  it('ActiveLayout.getAppTitle()', function () {
    return client.execute(function () {
      Session.set('appTitle', "Health Record");
      expect(ActiveLayout.getAppTitle()).to.be.equal("Health Record");
    });
  });

});
