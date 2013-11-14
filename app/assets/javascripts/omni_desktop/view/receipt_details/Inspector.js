Ext.define('Omni.view.receipt_details.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-receipt_details-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'receipt_detail_id',
        value:      this.record.get('receipt_detail_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-receipt_details-Form'}
        ,{title: 'Allocations', xtype: 'omni-receipt_allocations-Explorer', module: 'contracts',
           defaultSearch: { with:
             {
               receipt_detail_id:   {equal_to: me.record.get('receipt_detail_id')}
             }
          },
          showBadge: true
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Receipt Detail',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
