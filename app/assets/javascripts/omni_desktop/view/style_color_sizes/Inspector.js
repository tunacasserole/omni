Ext.define('Omni.view.style_color_sizes.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-style_color_sizes-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'style_color_size_id',
        value:    me.record.get('style_color_size_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-style_color_sizes-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Style Color Size',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
