Ext.define('Omni.view.receipt_allocations.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-receipt_allocations-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'receipt_allocation_id',
        value     : this.record.get('receipt_allocation_id')
      },

      associativeSearch : {
        with: {
          receipt_allocation_id : {
            equal_to : this.record.get('receipt_allocation_id')
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
          xtype     : 'omni-receipt_allocations-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Receipt Allocation',
      subtitle  : this.record.get('receipt_allocation_id')
    });
    // TITLES (End)

    this.callParent();
  }
});