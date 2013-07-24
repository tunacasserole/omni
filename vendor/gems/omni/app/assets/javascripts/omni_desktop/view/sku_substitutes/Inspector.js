Ext.define('Omni.view.sku_substitutes.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sku_substitutes-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_substitute_id',
        value:    me.record.get('sku_substitute_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sku_substitutes-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Sku Substitute',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
