
describe('clinical:active-layout', function () {
  var server = meteor();
  var client = browser(server);
  var collaborationId = null;

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('Header should only exist on the client', function () {
    return client.execute(function () {
      expect(Header).to.exist;
    }).then(function(){
      return server.execute(function () {
        expect(Header).to.not.exist;
      });
    });
  });

  it('Should NOT exist on the server', function () {
    return server.execute(function () {
      expect(Header).to.not.exist;
    });
  });
});
