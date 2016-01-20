WestPanel = {
  toggle: function () {
    if (Session.get('westPanelVisible')) {
      Session.set('westPanelVisible', false);
    } else {
      Session.set('westPanelVisible', true);
    }
  },
  show: function () {
    Session.set('westPanelVisible', true);
  },
  hide: function () {
    Session.set('westPanelVisible', false);
  }
};
