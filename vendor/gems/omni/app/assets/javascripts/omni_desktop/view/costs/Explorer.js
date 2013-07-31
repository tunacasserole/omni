Ext.define('Omni.view.costs.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-costs-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Cost'),

  contextMenuConfig : {
    xtype    : 'omni-costs-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-costs-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-costs-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  cost_idLabel:                           Omni.i18n.model.Cost.cost_id,
  displayLabel:                           Omni.i18n.model.Cost.display,
  first_costLabel:                        Omni.i18n.model.Cost.first_cost,
  last_costLabel:                         Omni.i18n.model.Cost.last_cost,
  average_costLabel:                      Omni.i18n.model.Cost.average_cost,
  on_hand_unitsLabel:                     Omni.i18n.model.Cost.on_hand_units,
  cost_poolLabel:                         Omni.i18n.model.Cost.cost_pool,
  retail_poolLabel:                       Omni.i18n.model.Cost.retail_pool,
  is_updated_average_costLabel:           Omni.i18n.model.Cost.is_updated_average_cost,
  is_destroyedLabel:                      Omni.i18n.model.Cost.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Costs',
  subtitle:  'Create and maintain Costs',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.cost_idLabel,
        //   dataIndex    : 'cost_id',
        //   flex         : 1
        // },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
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