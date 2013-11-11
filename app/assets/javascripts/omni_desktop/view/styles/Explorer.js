Ext.define('Omni.view.styles.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-styles-Explorer',

  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Style'),

      contextMenuConfig:{
        xtype:'omni-styles-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-styles-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-styles-Inspector'
      },


      filters: [
        {
          showAll   : 'All States',
          items     : [
              ['state_draft',            "Draft"],
              ['state_pending_approval', "Pending Approval"],
              ['state_active',           "Active"],
              ['state_discontinued',      "Discontinued"],
              ['state_obsolete',          "Obsolete"],
              ['state_inactive',          "Inactive"]
            ]
        }
      ],
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel:                          Omni.i18n.model.Style.display,
      style_nbrLabel:                        Omni.i18n.model.Style.style_nbr,
      is_enabledLabel:                       Omni.i18n.model.Style.is_enabled,
      subclass_displayLabel:                 Omni.i18n.model.Style.subclass_display,
      stateLabel:                            Omni.i18n.model.Style.state,
      product_displayLabel:                  Omni.i18n.model.Style.product_display,
      initial_retail_priceLabel:             Omni.i18n.model.Style.initial_retail_price,
      supplier_displayLabel:                 Omni.i18n.model.Style.supplier_display,
      site_displayLabel:                     Omni.i18n.model.Style.site_display,
      conversion_typeLabel:                  Omni.i18n.model.Style.conversion_type
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 2,   sortable: true  },
                // { header: this.is_enabledLabel,                                  dataIndex: 'is_enabled',                         flex: 1,   sortable: true  },
        { header: this.subclass_displayLabel,                            dataIndex: 'subclass_display',                   flex: 1,   sortable: true  },
        // { header: this.product_displayLabel,                             dataIndex: 'product_display',                    flex: 1,   sortable: true  },
        { header: this.initial_retail_priceLabel,                        dataIndex: 'initial_retail_price',               flex: 1,   sortable: true  },
        // { header: this.supplier_displayLabel,                            dataIndex: 'supplier_display',                   flex: 1,   sortable: true  },
        // { header: this.site_displayLabel,                                dataIndex: 'site_display',                       flex: 1,   sortable: true  },
        { header: this.conversion_typeLabel,                             dataIndex: 'conversion_type',                    flex: 1,   sortable: true  },
        { header: this.style_nbrLabel,                                   dataIndex: 'style_nbr',                          flex: 1,   sortable: true  },
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: true  }
]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Work with Styles',
      subtitle:  'A template for creating and maintaining Styles'
    });
    // TITLES (End)



    this.callParent();
  }

});
