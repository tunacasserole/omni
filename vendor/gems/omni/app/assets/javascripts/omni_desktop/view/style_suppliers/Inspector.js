Ext.define('Omni.view.style_suppliers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-style_suppliers-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'style_supplier_id',
        value:    me.record.get('style_supplier_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-style_suppliers-Form'
        },
        {
          title: 'Colors', xtype: 'omni-style_supplier_colors-Explorer',
           defaultSearch: { with: 
             {
               style_supplier_id:   {equal_to: me.record.get('style_supplier_id')}
             }
          }
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'StyleSupplier',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
