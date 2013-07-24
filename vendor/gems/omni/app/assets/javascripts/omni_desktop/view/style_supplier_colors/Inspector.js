Ext.define('Omni.view.style_supplier_colors.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-style_supplier_colors-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'style_supplier_color_id',
        value:    me.record.get('style_supplier_color_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-style_supplier_colors-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Style Supplier Color',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
