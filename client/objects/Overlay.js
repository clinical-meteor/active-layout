Overlay = {
  visible: new ReactiveVar(false),
  /**
   * @summary Show the site overlay.
   * @locus Client
   * @memberOf Overlaw
   * @name show
   * @version 1.2.3
   * @example
   * ```html
   * Overlay.show();
   * ```
   */
  show: function(){
    return this.visible.set(true);
  },
  /**
   * @summary Hide the site overlay.
   * @locus Client
   * @memberOf Overlaw
   * @name hide
   * @version 1.2.3
   * @example
   * ```html
   * Overlay.hide();
   * ```
   */
  hide: function(){
    return this.visible.set(false);
  },
  /**
   * @summary Determine if the site overlay is currently visible.
   * @locus Client
   * @memberOf Overlaw
   * @name hide
   * @version 1.2.3
   * @example
   * ```html
   *isVisible: function () {
   *  if (Overlay.isVisible()) {
   *    Session.set('displayModalDialog', true);
   *  } else {
   *    Session.set('displayModalDialog', false);
   *  }
   *};
   * ```
   */
  isVisible: function(){
    return this.visible.get();
  }
};
