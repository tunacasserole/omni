Ext.define('Omni.view.programs.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-programs-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'program_id',
        value:    me.record.get('program_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-programs-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
