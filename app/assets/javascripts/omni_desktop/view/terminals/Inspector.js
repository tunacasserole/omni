Ext.define('Omni.view.terminals.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-terminals-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'terminal_id',
        value:    me.record.get('terminal_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-terminals-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Terminal',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
