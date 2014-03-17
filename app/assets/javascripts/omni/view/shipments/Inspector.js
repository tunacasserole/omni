Ext.define('Omni.view.shipments.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-shipments-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'shipment_id',
        value:    me.record.get('shipment_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-shipments-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Details',
          xtype: 'omni-shipment_details-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Shipment',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
