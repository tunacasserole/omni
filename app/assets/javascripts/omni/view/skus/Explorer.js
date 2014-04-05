Ext.define('Omni.view.skus.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-skus-Explorer',

  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,
      allowNew: false,

      store: Ext.create('Omni.store.Sku'),

      contextMenuConfig: {
        xtype: 'omni-skus-ExplorerContextMenu',
      },

      newForms: [{
        xtype: 'omni-skus-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-skus-Inspector'
      },

     // filters: [
     //    {
     //      showAll  : 'Departments',
     //      items    : [
     //        ['department_accessories',     "ACCESSORIES"],
     //        ['department_activewear',      "ACTIVEWEAR"],
     //        ['department_components',      "COMPONENTS"],
     //        ['department_footwear',        "FOOTWEAR"],
     //        ['department_girls_specialty', "GIRLS SPECIALTY"],
     //        ['department_knit_tops',       "KNIT TOPS"],
     //        ['department_outerwear',        "OUTERWEAR"],
     //        ['department_pants_and_shorts', "PANTS AND SHORTS"],
     //        ['department_woven_tops',       "WOVEN TOPS"]
     //      ]
     //    }
     //  ],
    });
    // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  Ext.applyIf(this, {
    displayLabel: Omni.i18n.model.Sku.display,
    sku_nbrLabel: Omni.i18n.model.Sku.sku_nbr,
    stateLabel: Omni.i18n.model.Sku.state,
    account_idLabel: Omni.i18n.model.Sku.account_id,
    style_idLabel: Omni.i18n.model.Sku.style_id,
    conversion_typeLabel: Omni.i18n.model.Sku.conversion_type,
    color_idLabel: Omni.i18n.model.Sku.color_id,
    size_idLabel: Omni.i18n.model.Sku.size_id,
  });
  // LABELS (End)



    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.displayLabel,
        dataIndex: 'display',
        flex: 3,
        sortable: true
      }, {
        header: this.style_idLabel,
        dataIndex: 'style_display',
        flex: 2,
        sortable: true
      }, {
        header: this.account_idLabel,
        dataIndex: 'account_display',
        flex: 1,
        sortable: true
      }, {
        header: this.color_idLabel,
        dataIndex: 'color_display',
        flex: 1,
        sortable: true
      }, {
        header: this.size_idLabel,
        dataIndex: 'size_display',
        flex: 1,
        sortable: true
      // }, {
      //   header: this.sku_nbrLabel,
      //   dataIndex: 'sku_nbr',
      //   flex: 1,
      //   sortable: true
      }, {
        header: this.stateLabel,
        dataIndex: 'state',
        flex: 1,
        sortable: true
      }, ]
    });
    // COLUMNS (End)

  // TITLES (Start) ======================================================================
  Ext.apply(this, {
    title: 'Sku',
    subtitle: 'A Product that is stocked and/or sold',
  });
  // TITLES (End)


    this.callParent();
  }

});
