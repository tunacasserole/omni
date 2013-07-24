Ext.define('Omni.view.site_donations.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-site_donations-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'site_donation_id',
        value:    me.record.get('site_donation_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-site_donations-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site Donation',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
