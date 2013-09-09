Ext.define('Omni.view.purchase_details.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-purchase_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.PurchaseDetail'),

  contextMenuConfig: {
    xtype: 'omni-purchase_details-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-purchase_details-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-purchase_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  purchase_detail_idLabel:                Omni.i18n.model.PurchaseDetail.purchase_detail_id,
  purchase_idLabel:                       Omni.i18n.model.PurchaseDetail.purchase_id,
  displayLabel:                           Omni.i18n.model.PurchaseDetail.display,
  stateLabel:                             Omni.i18n.model.PurchaseDetail.state,
  purchase_line_nbrLabel:                 Omni.i18n.model.PurchaseDetail.purchase_line_nbr,
  sku_idLabel:                            Omni.i18n.model.PurchaseDetail.sku_id,
  cost_idLabel:                           Omni.i18n.model.PurchaseDetail.cost_id,
  descriptionLabel:                       Omni.i18n.model.PurchaseDetail.description,
  supplier_costLabel:                     Omni.i18n.model.PurchaseDetail.supplier_cost,
  invoice_costLabel:                      Omni.i18n.model.PurchaseDetail.invoice_cost,
  inventory_costLabel:                    Omni.i18n.model.PurchaseDetail.inventory_cost,
  extra_costLabel:                        Omni.i18n.model.PurchaseDetail.extra_cost,
  supplier_item_identifierLabel:          Omni.i18n.model.PurchaseDetail.supplier_item_identifier,
  color_nameLabel:                        Omni.i18n.model.PurchaseDetail.color_name,
  size_nameLabel:                         Omni.i18n.model.PurchaseDetail.size_name,
  sku_aliasLabel:                         Omni.i18n.model.PurchaseDetail.sku_alias,
  units_orderedLabel:                     Omni.i18n.model.PurchaseDetail.units_ordered,
  order_pack_sizeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_size,
  order_pack_typeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_type,
  order_cost_unitsLabel:                  Omni.i18n.model.PurchaseDetail.order_cost_units,
  order_multiple_typeLabel:               Omni.i18n.model.PurchaseDetail.order_multiple_type,
  order_multipleLabel:                    Omni.i18n.model.PurchaseDetail.order_multiple,
  units_approvedLabel:                    Omni.i18n.model.PurchaseDetail.units_approved,
  units_cancelledLabel:                   Omni.i18n.model.PurchaseDetail.units_cancelled,
  is_destroyedLabel:                      Omni.i18n.model.PurchaseDetail.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'PurchaseDetails',
  subtitle:  'Create and maintain PurchaseDetails',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.purchase_detail_idLabel,            dataIndex: 'purchase_detail_id',          flex: 1 },    
        // { header: this.purchase_idLabel,                   dataIndex: 'purchase_id',                 flex: 1 },    
        // { header: this.displayLabel,                       dataIndex: 'display',                     flex: 1 },    
        { header: this.purchase_line_nbrLabel,             dataIndex: 'purchase_line_nbr',           flex: 1 },    
        { header: this.sku_idLabel,                        dataIndex: 'sku_display',                      flex: 1 },    
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },    
        // { header: this.cost_idLabel,                       dataIndex: 'cost_id',                     flex: 1 },    
        // { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },    
        { header: this.supplier_costLabel,
          dataIndex: 'supplier_cost',
          align: 'right',
          renderer: Ext.util.Format.usMoney,
          flex: 1
        },    
        { header: this.order_cost_unitsLabel,
          dataIndex: 'order_cost_units',
          align: 'right',
          flex: 1 
        },    
        // { header: this.invoice_costLabel,                  dataIndex: 'invoice_cost',                flex: 1 },    
        // { header: this.inventory_costLabel,                dataIndex: 'inventory_cost',              flex: 1 },    
        // { header: this.extra_costLabel,                    dataIndex: 'extra_cost',                  flex: 1 },    
        // { header: this.supplier_item_identifierLabel,      dataIndex: 'supplier_item_identifier',    flex: 1 },    
        // { header: this.color_nameLabel,                    dataIndex: 'color_name',                  flex: 1 },    
        // { header: this.size_nameLabel,                     dataIndex: 'size_name',                   flex: 1 },    
        // { header: this.sku_aliasLabel,                     dataIndex: 'sku_alias',                   flex: 1 },    
        { header: this.units_orderedLabel,
          dataIndex: 'units_ordered',
          align: 'right',
          flex: 1 
        },    
        { header: this.order_pack_sizeLabel,
          dataIndex: 'order_pack_size',
          align: 'right',
          flex: 1 
        },    
        // { header: this.order_pack_typeLabel,               dataIndex: 'order_pack_type',             flex: 1 },    
        // { header: this.order_multiple_typeLabel,           dataIndex: 'order_multiple_type',         flex: 1 },    
        // { header: this.order_multipleLabel,                dataIndex: 'order_multiple',              flex: 1 },    
        // { header: this.units_approvedLabel,                dataIndex: 'units_approved',              flex: 1 },    
        // { header: this.units_cancelledLabel,               dataIndex: 'units_cancelled',             flex: 1 },    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});