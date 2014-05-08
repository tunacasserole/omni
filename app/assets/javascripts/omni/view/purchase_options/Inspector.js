Ext.define('Omni.view.purchase_options.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-purchase_options-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'purchase_option_id',
        value     : this.record.get('purchase_option_id')
      },

      associativeSearch : {
        with: {
          purchase_option_id : {
            equal_to : this.record.get('purchase_option_id')
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
          xtype     : 'omni-purchase_options-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Purchase Option',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});