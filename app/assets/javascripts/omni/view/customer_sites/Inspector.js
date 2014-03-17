Ext.define('Omni.view.customer_accounts.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-customer_accounts-Inspector',



  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'customer_account_id',
        value:    me.record.get('customer_account_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-customer_accounts-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Customer Account',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
