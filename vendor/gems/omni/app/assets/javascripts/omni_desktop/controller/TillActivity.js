Buildit.defineController('Omni.controller.TillActivity', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
    // TODO - Add your handler logic here
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );
  }
});

