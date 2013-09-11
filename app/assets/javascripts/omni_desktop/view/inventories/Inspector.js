Ext.define('Omni.view.inventories.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-inventories-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'inventory_id',
        value:    me.record.get('inventory_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-inventories-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Inventory',
      subtitle:  this.record.get('sku_display')
    });
    // TITLES (End)



    this.callParent();
  }

});
