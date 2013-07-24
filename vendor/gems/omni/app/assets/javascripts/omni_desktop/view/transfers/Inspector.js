Ext.define('Omni.view.transfers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-transfers-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'transfer_id',
        value:    me.record.get('transfer_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-transfers-Form'
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
      title:     'Transfer',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
