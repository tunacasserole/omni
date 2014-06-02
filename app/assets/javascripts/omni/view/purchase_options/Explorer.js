Ext.define('Omni.view.purchase_options.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-purchase_options-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-purchase_options-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-purchase_options-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  purchase_option_idLabel                 : Omni.i18n.model.PurchaseOption.purchase_option_id,
  displayLabel                            : Omni.i18n.model.PurchaseOption.display,
  approver_1_idLabel                         : Omni.i18n.model.PurchaseOption.approver_1_id,
  approver_2_idLabel                         : Omni.i18n.model.PurchaseOption.approver_2_id,
  approver_3_idLabel                         : Omni.i18n.model.PurchaseOption.approver_3_id,
  approver_1_limitLabel                   : Omni.i18n.model.PurchaseOption.approver_1_limit,
  approver_2_limitLabel                   : Omni.i18n.model.PurchaseOption.approver_2_limit,
  approver_3_limitLabel                   : Omni.i18n.model.PurchaseOption.approver_3_limit,
  is_destroyedLabel                       : Omni.i18n.model.PurchaseOption.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Purchase Options',
  subtitle : 'Create and maintain Purchase Options',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.PurchaseOption')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    {
      header       : me.displayLabel,
      dataIndex    : 'display',
      flex         : 1
    },
    {
      header       : me.approver_1_idLabel,
      dataIndex    : 'approver_1_display',
      flex         : 1
    },
    {
      header       : me.approver_1_limitLabel,
      dataIndex    : 'approver_1_limit',
      flex         : 1
    },
    {
      header       : me.approver_2_idLabel,
      dataIndex    : 'approver_2_display',
      flex         : 1
    },
    {
      header       : me.approver_2_limitLabel,
      dataIndex    : 'approver_2_limit',
      flex         : 1
    },
    {
      header       : me.approver_3_idLabel,
      dataIndex    : 'approver_3_display',
      flex         : 1
    },
    {
      header       : me.approver_3_limitLabel,
      dataIndex    : 'approver_3_limit',
      flex         : 1
    }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
