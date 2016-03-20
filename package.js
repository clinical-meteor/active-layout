Package.describe({
  name: 'clinical:active-layout',
  version: '0.7.46',
  summary: 'Universal layout with keybindings and animations.',
  git: 'http://github.com/clinical-meteor/clinical-active-layout',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('templating');
  api.use('session');
  api.use('reactive-var');

  api.use('grove:less@0.1.1');
  api.use('clinical:router@2.0.17');

  api.use('clinical:extended-api@2.2.2');
  api.use('clinical:user-model@1.3.1');
  api.use('clinical:keybindings@1.3.0');
  api.use('clinical:theming@0.4.10');
  api.use('clinical:glass-ui@1.3.11');
  api.use('clinical:error-pages@0.1.1');

  api.imply('clinical:router');
  api.imply('clinical:extended-api');
  api.imply('clinical:keybindings');
  api.imply('clinical:user-model');

  api.addFiles('client/template.helpers.js', 'client');
  api.addFiles('client/cardDocks.less', 'client');

  api.addFiles('client/objects/ActiveLayout.js', "client");
  api.addFiles('client/objects/WestPanel.js', "client");
  api.addFiles('client/objects/Overlay.js', "client");
  api.addFiles('client/objects/MainPanel.js', "client");

  api.addFiles('client/layouts/appLayout/appLayout.html', 'client');

  api.addFiles('client/layouts/appLayout/navbarFooter.js', 'client');
  api.addFiles('client/layouts/appLayout/navbarFooter.less', 'client');
  api.addFiles('client/layouts/appLayout/navbarHeader.js', 'client');
  api.addFiles('client/layouts/appLayout/navbarHeader.less', 'client');

  api.addFiles('client/layouts/appLayout/appLayout.js', 'client');
  api.addFiles('client/layouts/appLayout/appLayout.less', 'client');

  api.addFiles('client/components/errorPanel/errorPanel.html', 'client');
  api.addFiles('client/components/errorPanel/errorPanel.js', 'client');
  api.addFiles('client/components/errorPanel/errorPanel.less', 'client');

  api.addFiles('client/components/overlay/overlay.html', "client");
  api.addFiles('client/components/overlay/overlay.js', "client");
  api.addFiles('client/components/overlay/overlay.less', "client");

  api.addFiles('client/components/globalSearchBar/globalSearchBar.html', "client");
  api.addFiles('client/components/globalSearchBar/globalSearchBar.js', "client");
  api.addFiles('client/components/globalSearchBar/globalSearchBar.less', "client");

  api.addFiles('client/components/defaultNavbarHeader/defaultNavbarHeader.html', "client");
  api.addFiles('client/components/defaultNavbarHeader/defaultNavbarHeader.js', "client");
  api.addFiles('client/components/defaultNavbarHeader/defaultNavbarHeader.less', "client");


  api.addFiles('client/components/defaultNavbarFooter/defaultNavbarFooter.html', "client");
  api.addFiles('client/components/defaultNavbarFooter/defaultNavbarFooter.js', "client");
  api.addFiles('client/components/defaultNavbarFooter/defaultNavbarFooter.less', "client");

  api.export('globalSearchBar');

  api.export('ActiveLayout');
  api.export('WestPanel');
  api.export('Overlay');
  api.export('MainPanel');
});


Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:active-layout');
});
