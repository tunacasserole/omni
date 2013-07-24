Ext.define('Omni.view.bin_skus.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-bin_skus-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'bin_sku_id',
        value:    me.record.get('bin_sku_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-bin_skus-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Bin Sku',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
