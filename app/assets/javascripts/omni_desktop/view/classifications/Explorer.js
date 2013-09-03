Ext.define('Omni.view.classifications.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-classifications-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Classification'),

      contextMenuConfig:{
        xtype:'omni-classifications-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-classifications-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-classifications-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel:                          Omni.i18n.model.Classification.display,
      classification_nbrLabel:               Omni.i18n.model.Classification.classification_nbr,
      department_displayLabel:               Omni.i18n.model.Classification.department_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 1,   sortable: true  },
        { header: this.classification_nbrLabel,                          dataIndex: 'classification_nbr',                 flex: 1,   sortable: true  },
        { header: this.department_displayLabel,                          dataIndex: 'department_display',                 flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Classification',
      subtitle:  'Second level of the Product Hierarchy'
    });
    // TITLES (End)



    this.callParent();
  }

});
