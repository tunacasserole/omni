Ext.define('Omni.view.till_activities.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-till_activities-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'till_activity_id',
        value:    me.record.get('till_activity_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-till_activities-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'TillActivity',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
