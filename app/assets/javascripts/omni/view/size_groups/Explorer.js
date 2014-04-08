Ext.define('Omni.view.size_groups.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-size_groups-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SizeGroup'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-size_groups-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-size_groups-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.SizeGroup.display,
      size_group_nbrLabel: Omni.i18n.model.SizeGroup.size_group_nbr,
      descriptionLabel: Omni.i18n.model.SizeGroup.description,
      short_nameLabel: Omni.i18n.model.SizeGroup.short_name,
      concatenated_nameLabel: Omni.i18n.model.SizeGroup.concatenated_name,
      is_enabledLabel: Omni.i18n.model.SizeGroup.is_enabled
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
          header: this.displayLabel,
          dataIndex: 'display',
          flex: 1,
          sortable: false
        },
        // { header: this.descriptionLabel, dataIndex: 'description',  flex: 1,  sortable: false  },
        {
          header: this.concatenated_nameLabel,
          dataIndex: 'concatenated_name',
          flex: 1,
          sortable: false
        }, {
          header: this.short_nameLabel,
          dataIndex: 'short_name',
          flex: 1,
          sortable: false
        }, {
          header: this.size_group_nbrLabel,
          dataIndex: 'size_group_nbr',
          flex: 1,
          sortable: false
        }, {
          header: this.is_enabledLabel,
          dataIndex: 'is_enabled',
          flex: 1,
          sortable: false
        },
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Size Group',
      subtitle: 'A group or family of sizes, such as Youth or Junior'
    });
    // TITLES (End)



    this.callParent();
  }

});
