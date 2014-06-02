Ext.define('Omni.view.cost_details.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-cost_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.CostDetail'),

  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu',
  },

  newForms: [{
    xtype: 'omni-cost_details-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-cost_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  cost_detail_idLabel: Omni.i18n.model.CostDetail.cost_detail_id,
  displayLabel: Omni.i18n.model.CostDetail.display,
  cost_idLabel: Omni.i18n.model.CostDetail.cost_id,
  cost_detail_nameLabel: Omni.i18n.model.CostDetail.cost_detail_name,
  cost_sourceLabel: Omni.i18n.model.CostDetail.cost_source,
  cost_typeLabel: Omni.i18n.model.CostDetail.cost_type,
  cost_amountLabel: Omni.i18n.model.CostDetail.cost_amount,
  cost_percentLabel: Omni.i18n.model.CostDetail.cost_percent,
  cost_calculationLabel: Omni.i18n.model.CostDetail.cost_calculation,
  is_update_inventory_costLabel: Omni.i18n.model.CostDetail.is_update_inventory_cost,
  is_update_invoice_costLabel: Omni.i18n.model.CostDetail.is_update_invoice_cost,
  is_destroyedLabel: Omni.i18n.model.CostDetail.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'CostDetails',
  subtitle: 'Create and maintain CostDetails',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.cost_detail_idLabel,                dataIndex: 'cost_detail_id',              flex: 1 },
        {
          header: this.displayLabel,
          dataIndex: 'display',
          flex: 1
        },
        // { header: this.cost_idLabel,                       dataIndex: 'cost_id',                     flex: 1 },
        {
          header: this.cost_detail_nameLabel,
          dataIndex: 'cost_detail_name',
          flex: 1
        }, {
          header: this.cost_sourceLabel,
          dataIndex: 'cost_source',
          flex: 1
        }, {
          header: this.cost_typeLabel,
          dataIndex: 'cost_type',
          flex: 1
        }, {
          header: this.cost_amountLabel,
          dataIndex: 'cost_amount',
          flex: 1
        }, {
          header: this.cost_percentLabel,
          dataIndex: 'cost_percent',
          flex: 1
        }, {
          header: this.cost_calculationLabel,
          dataIndex: 'cost_calculation',
          flex: 1
        }, {
          header: this.is_update_inventory_costLabel,
          dataIndex: 'is_update_inventory_cost',
          flex: 1
        }, {
          header: this.is_update_invoice_costLabel,
          dataIndex: 'is_update_invoice_cost',
          flex: 1
        },
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
