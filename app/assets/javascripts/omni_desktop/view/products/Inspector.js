Ext.define('Omni.view.products.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-products-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'product_id',
        value:    me.record.get('product_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-products-Form'
        }
        // {
        //   title: 'Notes',
        //   xtype: 'buildit-notes-Explorer'
        // },
        // {
        //   title: 'Styles',
        //   xtype: 'omni-styles-Explorer'
        // }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ====================================================================== 
    // TITLES (End)



    this.callParent();
  }

});
