Buildit.defineController('Omni.controller.ShipmentDetail', {
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

}); // Buildit.defineController('Omni.controller.ShipmentDetail'