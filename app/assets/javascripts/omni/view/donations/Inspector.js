Ext.define('Omni.view.donations.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-donations-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'donation_id',
        value     : this.record.get('donation_id')
      },

      associativeSearch : {
        with: {
          donation_id : {
            equal_to : this.record.get('donation_id')
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
          xtype     : 'omni-donations-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Donation',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
