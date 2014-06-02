Ext.define('Omni.view.receipt_details.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-receipt_details-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.ReceiptDetail'),

  contextMenuConfig : {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-receipt_details-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-receipt_details-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  receipt_detail_idLabel:                 Omni.i18n.model.ReceiptDetail.receipt_detail_id,
  displayLabel:                           Omni.i18n.model.ReceiptDetail.display,
  sku_idLabel:                            Omni.i18n.model.ReceiptDetail.sku_id,
  receipt_line_nbrLabel:                  Omni.i18n.model.ReceiptDetail.receipt_line_nbr,
  purchase_detail_idLabel:                Omni.i18n.model.ReceiptDetail.purchase_detail_id,
  received_unitsLabel:                    Omni.i18n.model.ReceiptDetail.received_units,
  stateLabel:                             Omni.i18n.model.ReceiptDetail.state,
  is_destroyedLabel:                      Omni.i18n.model.ReceiptDetail.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Receipt Details',
  subtitle:  'Create and maintain Receipt Details',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.receipt_detail_idLabel,
        //   dataIndex    : 'receipt_detail_id',
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
          header       : this.receipt_line_nbrLabel,
          dataIndex    : 'receipt_line_nbr',
          flex         : 1
        },
        // {
        //   header       : this.purchase_detail_idLabel,
        //   dataIndex    : 'purchase_detail_id',
        //   flex         : 1
        // },
        {
          header       : this.received_unitsLabel,
          dataIndex    : 'received_units',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
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
