Ext.define('Omni.view.sku_promo_prices.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sku_promo_prices-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_promo_price_id',
        value:    me.record.get('sku_promo_price_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sku_promo_prices-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Sku Promo Price',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
