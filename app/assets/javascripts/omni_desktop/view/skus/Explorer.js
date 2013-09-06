Ext.define('Omni.view.skus.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-skus-Explorer',

  // LABELS (Start) ======================================================================
  displayLabel:                             Omni.i18n.model.Sku.display,
  sku_nbrLabel:                             Omni.i18n.model.Sku.sku_nbr,
  stateLabel:                               Omni.i18n.model.Sku.state,
  site_displayLabel:                        Omni.i18n.model.Sku.site_display,
  style_idLabel:                            Omni.i18n.model.Sku.style_id,            
  conversion_typeLabel:                     Omni.i18n.model.Sku.conversion_type,
  color_displayLabel:                       Omni.i18n.model.Sku.color_display,
  size_displayLabel:                        Omni.i18n.model.Sku.size_display,
  mark_stockLabel:                          Omni.i18n.model.Sku.mark_stock,
  mark_sizeLabel:                           Omni.i18n.model.Sku.mark_size,
  buckhead_identifierLabel:                  Omni.i18n.model.Sku.buckhead_identifier,
  grits_identifierLabel:                    Omni.i18n.model.Sku.grits_identifier,    
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
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 2,   sortable: true  },
        { header: this.sku_nbrLabel,                                     dataIndex: 'sku_nbr',                            flex: 1,   sortable: true  },
        { header: this.style_idLabel,                                    dataIndex: 'style_display',                      flex: 1,   sortable: true  },
        { header: this.mark_stockLabel,                                  dataIndex: 'mark_stock',                      flex: 1,   sortable: true  },
        { header: this.mark_stockLabel,                                  dataIndex: 'mark_size',                      flex: 1,   sortable: true  },        
        { header: this.buckhead_identifierLabel,                         dataIndex: 'buckhead_identifier',                      flex: 1,   sortable: true  },        
        { header: this.grits_identifierLabel,                            dataIndex: 'grits_identifier',                      flex: 1,   sortable: true  },        
        { header: this.style_idLabel,                                    dataIndex: 'style_display',                      flex: 2,   sortable: true  },        
        { header: this.site_displayLabel,                                dataIndex: 'site_display',                       flex: 1,   sortable: true  },
        { header: this.color_displayLabel,                               dataIndex: 'color_display',                      flex: 1,   sortable: true  },
        { header: this.size_displayLabel,                                dataIndex: 'size_display',                       flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)





    this.callParent();
  }

});
