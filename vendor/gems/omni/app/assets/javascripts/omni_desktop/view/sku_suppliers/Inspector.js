Ext.define('Omni.view.sku_suppliers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sku_suppliers-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_supplier_id',
        value:    me.record.get('sku_supplier_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sku_suppliers-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ====================================================================== 
    // TITLES (End)



    this.callParent();
  }

});
