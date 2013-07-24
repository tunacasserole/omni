Ext.define('Omni.view.skus.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-skus-Explorer',

  // LABELS (Start) ======================================================================
  displayLabel:                             Omni.i18n.model.Sku.display,
  sku_nbrLabel:                             Omni.i18n.model.Sku.sku_nbr,
  stateLabel:                               Omni.i18n.model.Sku.state,
  site_displayLabel:                        Omni.i18n.model.Sku.site_display,
  conversion_typeLabel:                     Omni.i18n.model.Sku.conversion_type,
  color_displayLabel:                       Omni.i18n.model.Sku.color_display,
  size_displayLabel:                        Omni.i18n.model.Sku.size_display,
  // LABELS (End)

   
  // TITLES (Start) ======================================================================
  title:     'Sku',
  subtitle:  'A Product that is stocked and/or sold',
  // TITLES (End)


  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Sku'),

      contextMenuConfig:{
        xtype:'omni-skus-ExplorerContextMenuAll',
      },

      newForms:[{
        xtype:'omni-skus-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-skus-Inspector'
      },
 

    });
    // EXPLORER INIT (End)


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 3,   sortable: true  },
        { header: this.sku_nbrLabel,                                     dataIndex: 'sku_nbr',                            flex: 1,   sortable: true  },
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: true  },
        { header: this.site_displayLabel,                                dataIndex: 'site_display',                       flex: 1,   sortable: true  },
        { header: this.conversion_typeLabel,                             dataIndex: 'conversion_type',                    flex: 1,   sortable: true  },
        { header: this.color_displayLabel,                               dataIndex: 'color_display',                      flex: 1,   sortable: true  },
        { header: this.size_displayLabel,                                dataIndex: 'size_display',                       flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)





    this.callParent();
  }

});
