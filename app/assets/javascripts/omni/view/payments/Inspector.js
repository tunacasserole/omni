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
       // }, {
       //  title: 'Vouchers',
       //  xtype: 'omni-vouchers-Explorer',
       //  module: 'contracts',
       //  defaultSearch: {
       //    with: {
       //      customer_id: {
       //        equal_to: me.record.get('payment_id')
       //      }
       //    }
       //  },
       //  showBadge: true
      }, {
        title: 'Notes',
        xtype: 'buildit-notes-Explorer',
        defaultSearch: {
          with: {
            notable_type: {
              equal_to: 'Omni::Payment'
            },
            notable_id: {
              equal_to: me.record.get('payment_id')
            }
          }
        },
        showBadge: true
      }]
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
