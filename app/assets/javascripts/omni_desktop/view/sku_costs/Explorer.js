Ext.define('Omni.view.sku_costs.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-sku_costs-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.SkuCost'),

  contextMenuConfig : {
    xtype    : 'omni-sku_costs-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-sku_costs-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-sku_costs-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  sku_cost_idLabel:                       Omni.i18n.model.SkuCost.sku_cost_id,
  displayLabel:                           Omni.i18n.model.SkuCost.display,
  sku_idLabel:                            Omni.i18n.model.SkuCost.sku_id,
  first_costLabel:                        Omni.i18n.model.SkuCost.first_cost,
  last_costLabel:                         Omni.i18n.model.SkuCost.last_cost,
  average_costLabel:                      Omni.i18n.model.SkuCost.average_cost,
  on_hand_unitsLabel:                     Omni.i18n.model.SkuCost.on_hand_units,
  cost_poolLabel:                         Omni.i18n.model.SkuCost.cost_pool,
  retail_poolLabel:                       Omni.i18n.model.SkuCost.retail_pool,
  is_updated_average_costLabel:           Omni.i18n.model.SkuCost.is_updated_average_cost,
  is_destroyedLabel:                      Omni.i18n.model.SkuCost.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Sku Costs',
  subtitle:  'Create and maintain Sku Costs',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
          // {
          //   header       : this.sku_cost_idLabel,
          //   dataIndex    : 'sku_cost_id',
          //   flex         : 1
          // },
        // {
        //   header       : this.displayLabel,
        //   dataIndex    : 'display',
        //   flex         : 1
        // },
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 1
        },
        {
          header       : this.first_costLabel,
          dataIndex    : 'first_cost',
          flex         : 1
        },
        {
          header       : this.last_costLabel,
          dataIndex    : 'last_cost',
          flex         : 1
        },
        {
          header       : this.average_costLabel,
          dataIndex    : 'average_cost',
          flex         : 1
        },
        {
          header       : this.on_hand_unitsLabel,
          dataIndex    : 'on_hand_units',
          flex         : 1
        },
        {
          header       : this.cost_poolLabel,
          dataIndex    : 'cost_pool',
          flex         : 1
        },
        {
          header       : this.retail_poolLabel,
          dataIndex    : 'retail_pool',
          flex         : 1
        },
        {
          header       : this.is_updated_average_costLabel,
          dataIndex    : 'is_updated_average_cost',
          flex         : 1
        }
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});