Ext.define('Omni.view.colors.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-colors-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'color_id',
        value:      this.record.get('color_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        { 
          title:  'Profile',
          xtype:  'omni-colors-Form',
          module: 'cfars'
        }
       // ,{
       //    title: 'Styles', 
       //    xtype: 'omni-style_colors-Explorer', 
       //    module: 'contracts',
       //    defaultSearch: { with: 
       //       {
       //         color_id:   {equal_to: me.record.get('color_id')}
       //       }
       //    },
       //    showBadge: true
       //  }
       // ,{
       //    title: 'SKUs', 
       //    xtype: 'omni-skus-Explorer', 
       //    module: 'contracts',
       //    defaultSearch: { with: 
       //       {
       //         color_id:   {equal_to: me.record.get('color_id')}
       //       }
       //    },
       //    showBadge: true
       //  }        
     ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Color',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});

