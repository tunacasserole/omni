Ext.define('Omni.view.subclasses.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-subclasses-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Subclass'),

      contextMenuConfig:{
        xtype:'omni-subclasses-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-subclasses-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-subclasses-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Subclass.display,
      subclass_nbrLabel: Omni.i18n.model.Subclass.subclass_nbr,
      classification_displayLabel: Omni.i18n.model.Subclass.classification_display,
      department_displayLabel: Omni.i18n.model.Subclass.department_display,
      markup_percent_high_limitLabel: Omni.i18n.model.Subclass.markup_percent_high_limit,
      markup_percent_low_limitLabel: Omni.i18n.model.Subclass.markup_percent_low_limit
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: true  },
        { header: this.classification_displayLabel, dataIndex: 'classification_display',  flex: 1,  sortable: true  },
        { header: this.department_displayLabel, dataIndex: 'department_display',  flex: 1,  sortable: true  },
        { header: this.markup_percent_high_limitLabel, dataIndex: 'markup_percent_high_limit',  flex: 1,  sortable: true  },
        { header: this.markup_percent_low_limitLabel, dataIndex: 'markup_percent_low_limit',  flex: 1,  sortable: true  },
        { header: this.subclass_nbrLabel, dataIndex: 'subclass_nbr',  flex: 1,  sortable: true  },

      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Subclass',
      subtitle:  'Lowest level of the Product Hierarchy'
    });
    // TITLES (End)



    this.callParent();
  }

});
