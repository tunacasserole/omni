Ext.define('Omni.view.program_colors.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-program_colors-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ProgramColor'),

      contextMenuConfig:{
        xtype:'omni-program_colors-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-program_colors-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-program_colors-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      program_style_displayLabel: Omni.i18n.model.ProgramColor.program_style_display,
      style_color_displayLabel: Omni.i18n.model.ProgramColor.style_color_display,
      is_activeLabel: Omni.i18n.model.ProgramColor.is_active
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.program_style_displayLabel, dataIndex: 'program_style_display',  flex: 1,  sortable: true  },
        { header: this.style_color_displayLabel, dataIndex: 'style_color_display',  flex: 1,  sortable: true  },
        { header: this.is_activeLabel, dataIndex: 'is_active',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program Color',
      subtitle:  'The subset of a style colors that are in a particular program'
    });
    // TITLES (End)



    this.callParent();
  }

});
