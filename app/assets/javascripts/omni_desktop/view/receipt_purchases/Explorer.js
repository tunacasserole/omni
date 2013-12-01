Ext.define('Omni.view.receipt_purchases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-receipt_purchases-Explorer',
  allowFind  :  false,
  // allowNew  :


  // EXPLORER INIT (Start) ===============================================================
  store    : Ext.create('Omni.store.ReceiptPurchase'),

  contextMenuConfig : {
    xtype    : 'omni-receipt_purchases-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-receipt_purchases-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-receipt_purchases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  receipt_purchase_idLabel                : Omni.i18n.model.ReceiptPurchase.receipt_purchase_id,
  displayLabel                            : Omni.i18n.model.ReceiptPurchase.display,
  receipt_idLabel                         : Omni.i18n.model.ReceiptPurchase.receipt_id,
  purchase_idLabel                        : Omni.i18n.model.ReceiptPurchase.purchase_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Receipt Purchases',
  subtitle : 'Create and maintain Receipt Purchases',
  // TITLES (End)

  initComponent : function () {

    var me = this;


    // var yolo = this.record;

    // console.log(yolo)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.receipt_purchase_idLabel,
        //   dataIndex    : 'receipt_purchase_id',
        //   flex         : 1
        // },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        }
        // {
        //   header       : this.receipt_idLabel,
        //   dataIndex    : 'receipt_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.purchase_idLabel,
        //   dataIndex    : 'purchase_id',
        //   flex         : 1
        // },
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
