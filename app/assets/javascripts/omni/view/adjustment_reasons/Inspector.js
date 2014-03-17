Ext.define('Omni.view.adjustment_reasons.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-adjustment_reasons-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'adjustment_reason_id',
        value:    me.record.get('adjustment_reason_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-adjustment_reasons-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'AdjustmentReason',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
