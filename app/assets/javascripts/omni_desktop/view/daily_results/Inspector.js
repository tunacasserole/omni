Ext.define('Omni.view.daily_results.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-daily_results-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'daily_result_id',
        value:    me.record.get('daily_result_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-daily_results-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Daily Result',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
