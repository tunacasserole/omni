Ext.define('Omni.view.payments.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-payments-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'payment_id',
        value:    me.record.get('payment_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-payments-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Payment',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
