Ext.define('Omni.view.program_colors.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-program_colors-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'program_color_id',
        value:    me.record.get('program_color_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-program_colors-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program Color',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
