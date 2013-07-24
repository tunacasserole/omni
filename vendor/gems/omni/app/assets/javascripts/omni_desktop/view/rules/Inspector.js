Ext.define('Omni.view.rules.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-rules-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'rule_id',
        value:    me.record.get('rule_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-rules-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Rule',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
