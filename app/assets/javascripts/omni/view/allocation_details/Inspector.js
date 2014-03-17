Ext.define('Omni.view.allocation_details.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-allocation_details-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'allocation_detail_id',
        value     : this.record.get('allocation_detail_id')
      },

      associativeSearch : {
        with: {
          allocation_detail_id : {
            equal_to : this.record.get('allocation_detail_id')
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
          xtype     : 'omni-allocation_details-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Allocation Detail',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
