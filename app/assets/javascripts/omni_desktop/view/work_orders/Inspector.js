Ext.define('Omni.view.work_orders.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-work_orders-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'work_order_id',
        value:    me.record.get('work_order_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-work_orders-Form'
        },
        {
          title: 'Order Detail',
          xtype: 'omni-order_details-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'WorkOrder',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
