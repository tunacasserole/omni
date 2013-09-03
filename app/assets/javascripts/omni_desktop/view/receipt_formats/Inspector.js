Ext.define('Omni.view.receipt_formats.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-receipt_formats-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'receipt_format_id',
        value:    me.record.get('receipt_format_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-receipt_formats-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Receipt Format',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
