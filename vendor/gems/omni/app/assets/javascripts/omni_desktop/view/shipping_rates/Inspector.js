Ext.define('Omni.view.shipping_rates.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-shipping_rates-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'shipping_rate_id',
        value:    me.record.get('shipping_rate_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-shipping_rates-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Shipping Rate',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
