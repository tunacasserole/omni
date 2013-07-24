Ext.define('Omni.view.adjustments.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-adjustments-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'adjustment_id',
        value:    me.record.get('adjustment_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-adjustments-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ====================================================================== 
    // TITLES (End)



    this.callParent();
  }

});
