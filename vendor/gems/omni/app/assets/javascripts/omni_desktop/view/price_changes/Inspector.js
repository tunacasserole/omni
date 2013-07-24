Ext.define('Omni.view.price_changes.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-price_changes-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'price_change_id',
        value:    me.record.get('price_change_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-price_changes-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'PriceChange',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
