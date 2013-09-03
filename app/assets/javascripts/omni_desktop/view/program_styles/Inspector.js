Ext.define('Omni.view.program_styles.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-program_styles-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'program_style_id',
        value:    me.record.get('program_style_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-program_styles-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program Style',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
