Ext.define('Omni.view.receipt_purchases.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-receipt_purchases-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'receipt_purchase_id',
        value     : this.record.get('receipt_purchase_id')
      },

      associativeSearch : {
        with: {
          receipt_purchase_id : {
            equal_to : this.record.get('receipt_purchase_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'omni-receipt_purchases-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Receipt Purchase',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
