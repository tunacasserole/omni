Ext.define('Omni.view.system_options.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-system_options-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'system_option_id',
        value:    me.record.get('system_option_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-system_options-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'SystemOption',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
