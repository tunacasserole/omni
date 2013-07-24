Ext.define('Omni.view.location_users.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-location_users-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.LocationUser'),

      contextMenuConfig:{
        xtype:'omni-location_users-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-location_users-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-location_users-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Location User',
      subtitle:  'Authorize users for specific locations for store operations'
    });
    // TITLES (End)



    this.callParent();
  }

});
