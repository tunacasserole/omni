Ext.define('Omni.view.period_results.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-period_results-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'period_result_id',
        value:    me.record.get('period_result_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-period_results-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Period Result',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
