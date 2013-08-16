Ext.define('Omni.view.purchase_details.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-purchase_details-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'purchase_detail_id',
        value:      this.record.get('purchase_detail_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-purchase_details-Form'
        }
        ,{
          title: 'Costs',
          xtype: 'omni-purchase_costs-Explorer',
          defaultSearch: { with: 
             {
               purchase_detail_id:   {equal_to: me.record.get('purchase_detail_id')}
             }
          }
        }
        ,{
          title: 'Allocations',
          xtype: 'omni-purchase_allocations-Explorer',
          defaultSearch: { with: 
             {
               purchase_detail_id:   {equal_to: me.record.get('purchase_detail_id')}
             }
          }
        }

      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Purchase Detail',
      subtitle:  this.record.get('purchase_detail_id')
    });
    // TITLES (End)

    this.callParent();
  }
});