Ext.define('Omni.view.product_types.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-product_types-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'product_type_id',
        value:    me.record.get('product_type_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-product_types-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Product Type',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
