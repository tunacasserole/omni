Ext.define('Omni.view.receipts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-receipts-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'receipt_id',
        value:      this.record.get('receipt_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-receipts-Form'}
        ,{title: 'Details', xtype: 'omni-receipt_details-Explorer', module: 'contracts',
           defaultSearch: { with:
             {
               receipt_id:   {equal_to: me.record.get('receipt_id')}
             }
          },
          showBadge: true
        }
        ,{title: 'Purchases', xtype: 'omni-receipt_purchases-Explorer', module: 'contracts',
           defaultSearch: { with:
             {
               receipt_id:   {equal_to: me.record.get('receipt_id')}
             }
          },
          showBadge: true
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Receipt',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
