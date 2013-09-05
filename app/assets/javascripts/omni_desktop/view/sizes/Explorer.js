Ext.define('Omni.view.sizes.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sizes-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Size'),

      contextMenuConfig:{
        xtype:'omni-sizes-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-sizes-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sizes-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      size_nbrLabel: Omni.i18n.model.Size.size_nbr,
      size_typeLabel: Omni.i18n.model.Size.size_type,
      short_nameLabel: Omni.i18n.model.Size.short_name,
      concatenated_nameLabel: Omni.i18n.model.Size.concatenated_name,
      dimension_1Label: Omni.i18n.model.Size.dimension_1,
      dimension_2Label: Omni.i18n.model.Size.dimension_2
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.size_nbrLabel, dataIndex: 'size_nbr',  flex: 1,  sortable: true  },
        // { header: this.size_typeLabel, dataIndex: 'size_type',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('SIZE_TYPE') },
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: true  },
        { header: this.concatenated_nameLabel, dataIndex: 'concatenated_name',  flex: 1,  sortable: true  },
        { header: this.dimension_1Label, dataIndex: 'dimension_1',  flex: 1,  sortable: true  },
        { header: this.dimension_2Label, dataIndex: 'dimension_2',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Size',
      subtitle:  'All Product Sizes that are valid in the system'
    });
    // TITLES (End)



    this.callParent();
  }

});