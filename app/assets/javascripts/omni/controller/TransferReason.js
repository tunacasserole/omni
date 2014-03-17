Buildit.defineController('Omni.controller.TransferReason', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
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