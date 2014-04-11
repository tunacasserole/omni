Ext.define('Omni.view.vouchers.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-vouchers-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'voucher_id',
        value     : this.record.get('voucher_id')
      },

      associativeSearch : {
        with: {
          voucher_id : {
            equal_to : this.record.get('voucher_id')
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
          xtype     : 'omni-vouchers-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Voucher',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});