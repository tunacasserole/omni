Ext.define('Omni.view.sku_price_requests.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sku_price_requests-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_price_request_id',
        value:    me.record.get('sku_price_request_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sku_price_requests-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'SkuPriceRequest',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});