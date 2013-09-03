Ext.define('Omni.view.program_products.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-program_products-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'program_product_id',
        value:    me.record.get('program_product_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-program_products-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program Product',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
