Ext.define('Omni.view.projection_reasons.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-projection_reasons-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ProjectionReason'),

      contextMenuConfig:{
        xtype:'omni-projection_reasons-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-projection_reasons-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-projection_reasons-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.ProjectionReason.display,
      descriptionLabel: Omni.i18n.model.ProjectionReason.description,
      short_nameLabel: Omni.i18n.model.ProjectionReason.short_name
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: false  },
        { header: this.descriptionLabel, dataIndex: 'description',  flex: 1,  sortable: false  },
        { header: this.short_nameLabel, dataIndex: 'short_name',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Projection Reason',
      subtitle:  'The reason for making a change to a projection'
    });
    // TITLES (End)



    this.callParent();
  }

});
