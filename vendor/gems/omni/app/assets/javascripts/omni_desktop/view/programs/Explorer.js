Ext.define('Omni.view.programs.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-programs-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Program'),

      contextMenuConfig:{
        xtype:'omni-programs-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-programs-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-programs-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      program_nbrLabel: Omni.i18n.model.Program.program_nbr,
      site_displayLabel: Omni.i18n.model.Program.site_display,
      effective_dateLabel: Omni.i18n.model.Program.effective_date,
      end_dateLabel: Omni.i18n.model.Program.end_date,
      is_exclusiveLabel: Omni.i18n.model.Program.is_exclusive,
      teacher_discount_percentLabel: Omni.i18n.model.Program.teacher_discount_percent,
      administrator_discount_percentLabel: Omni.i18n.model.Program.administrator_discount_percent,
      is_activeLabel: Omni.i18n.model.Program.is_active
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.program_nbrLabel, dataIndex: 'program_nbr',  flex: 1,  sortable: true  },
        { header: this.site_displayLabel, dataIndex: 'site_display',  flex: 1,  sortable: true  },
        { header: this.effective_dateLabel, dataIndex: 'effective_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.end_dateLabel, dataIndex: 'end_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.is_exclusiveLabel, dataIndex: 'is_exclusive',  flex: 1,  sortable: true  },
        { header: this.teacher_discount_percentLabel, dataIndex: 'teacher_discount_percent',  flex: 1,  sortable: true  },
        { header: this.administrator_discount_percentLabel, dataIndex: 'administrator_discount_percent',  flex: 1,  sortable: true  },
        { header: this.is_activeLabel, dataIndex: 'is_active',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program',
      subtitle:  'All uniform programs'
    });
    // TITLES (End)



    this.callParent();
  }

});
