Ext.define('Omni.view.seasonal_indices.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-seasonal_indices-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SeasonalIndex'),

      contextMenuConfig:{
        xtype:'omni-seasonal_indices-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-seasonal_indexes-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-seasonal_indexes-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      seasonal_index_nameLabel: Omni.i18n.model.SeasonalIndex.seasonal_index_name,
      is_destroyedLabel: Omni.i18n.model.SeasonalIndex.is_destroyed
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.seasonal_index_nameLabel, dataIndex: 'seasonal_index_name',  flex: 1,  sortable: false  },
        { header: this.is_destroyedLabel, dataIndex: 'is_destroyed',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Seasonal Index',
      subtitle:  'Seasonal indexes for products'
    });
    // TITLES (End)



    this.callParent();
  }

});
