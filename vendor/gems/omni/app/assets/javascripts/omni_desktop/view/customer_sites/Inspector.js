Ext.define('Omni.view.customer_sites.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-customer_sites-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'customer_site_id',
        value:    me.record.get('customer_site_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-customer_sites-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Customer Site',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
