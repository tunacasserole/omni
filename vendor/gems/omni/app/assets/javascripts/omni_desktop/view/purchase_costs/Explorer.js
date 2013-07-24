Ext.define('Omni.view.purchase_costs.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-purchase_costs-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.PurchaseCost'),

  contextMenuConfig: {
    xtype: 'omni-purchase_costs-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-purchase_costs-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-purchase_costs-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  purchase_cost_idLabel:                  Omni.i18n.model.PurchaseCost.purchase_cost_id,
  displayLabel:                           Omni.i18n.model.PurchaseCost.display,
  purchase_detail_idLabel:                Omni.i18n.model.PurchaseCost.purchase_detail_id,
  cost_detail_idLabel:                    Omni.i18n.model.PurchaseCost.cost_detail_id,
  cost_typeLabel:                         Omni.i18n.model.PurchaseCost.cost_type,
  cost_amountLabel:                       Omni.i18n.model.PurchaseCost.cost_amount,
  cost_percentLabel:                      Omni.i18n.model.PurchaseCost.cost_percent,
  estimated_costLabel:                    Omni.i18n.model.PurchaseCost.estimated_cost,
  actual_costLabel:                       Omni.i18n.model.PurchaseCost.actual_cost,
  is_destroyedLabel:                      Omni.i18n.model.PurchaseCost.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'PurchaseCosts',
  subtitle:  'Create and maintain PurchaseCosts',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.purchase_cost_idLabel,              dataIndex: 'purchase_cost_id',            flex: 1 },    
        { header: this.displayLabel,                       dataIndex: 'display',                     flex: 1 },    
        // { header: this.purchase_detail_idLabel,            dataIndex: 'purchase_detail_id',          flex: 1 },    
        // { header: this.cost_detail_idLabel,                dataIndex: 'cost_detail_id',              flex: 1 },    
        { header: this.cost_typeLabel,                     dataIndex: 'cost_type',                   flex: 1 },    
        { header: this.cost_amountLabel,                   dataIndex: 'cost_amount',                 flex: 1 },    
        { header: this.cost_percentLabel,                  dataIndex: 'cost_percent',                flex: 1 },    
        { header: this.estimated_costLabel,                dataIndex: 'estimated_cost',              flex: 1 },    
        { header: this.actual_costLabel,                   dataIndex: 'actual_cost',                 flex: 1 },    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});