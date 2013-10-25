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
  purchase_displayLabel:                  Omni.i18n.model.PurchaseDetail.purchase_display,
  purchase_idLabel:                       Omni.i18n.model.PurchaseDetail.purchase_id,
  displayLabel:                           Omni.i18n.model.PurchaseDetail.display,
  stateLabel:                             Omni.i18n.model.PurchaseDetail.state,
  purchase_line_nbrLabel:                 Omni.i18n.model.PurchaseDetail.purchase_line_nbr,
  sku_idLabel:                            Omni.i18n.model.PurchaseDetail.sku_id,
  descriptionLabel:                       Omni.i18n.model.PurchaseDetail.description,
  supplier_item_identifierLabel:          Omni.i18n.model.PurchaseDetail.supplier_item_identifier,
  sku_supplier_idLabel:                   Omni.i18n.model.PurchaseDetail.sku_supplier_id,
  color_nameLabel:                        Omni.i18n.model.PurchaseDetail.color_name,
  size_nameLabel:                         Omni.i18n.model.PurchaseDetail.size_name,
  sku_aliasLabel:                         Omni.i18n.model.PurchaseDetail.sku_alias,
  allocation_profile_idLabel:             Omni.i18n.model.PurchaseDetail.allocation_profile_id,
  units_orderedLabel:                     Omni.i18n.model.PurchaseDetail.units_ordered,
  order_pack_sizeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_size,
  order_pack_typeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_type,
  order_cost_unitsLabel:                  Omni.i18n.model.PurchaseDetail.order_cost_units,
  order_multiple_typeLabel:               Omni.i18n.model.PurchaseDetail.order_multiple_type,
  order_multipleLabel:                    Omni.i18n.model.PurchaseDetail.order_multiple,
  selling_units_approvedLabel:            Omni.i18n.model.PurchaseDetail.selling_units_approved,
  selling_units_receivedLabel:            Omni.i18n.model.PurchaseDetail.selling_units_received,
  selling_units_cancelledLabel:           Omni.i18n.model.PurchaseDetail.selling_units_cancelled,
  supplier_costLabel:                     Omni.i18n.model.PurchaseDetail.supplier_cost,
  invoice_costLabel:                      Omni.i18n.model.PurchaseDetail.invoice_cost,
  inventory_costLabel:                    Omni.i18n.model.PurchaseDetail.inventory_cost,
  extra_costLabel:                        Omni.i18n.model.PurchaseDetail.extra_cost,
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
        { header: this.purchase_line_nbrLabel,
          dataIndex: 'purchase_line_nbr',
          flex: 1 
        },    
        { header: this.sku_idLabel,
          dataIndex: 'sku_display',
          flex: 1 
        },    
        { header: this.stateLabel,
          dataIndex: 'state',
          flex: 1 
        },    
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
        { header: this.units_orderedLabel,
          dataIndex: 'units_ordered',
          align: 'right',
          flex: 1 
        },    
        { header: this.order_pack_sizeLabel,
          dataIndex: 'order_pack_size',
          align: 'right',
          flex: 1 
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});