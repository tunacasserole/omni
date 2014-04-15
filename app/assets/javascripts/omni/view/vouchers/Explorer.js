Ext.define('Omni.view.vouchers.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-vouchers-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-vouchers-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-vouchers-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  voucher_idLabel                         : Omni.i18n.model.Voucher.voucher_id,
  displayLabel                            : Omni.i18n.model.Voucher.display,
  customer_idLabel                        : Omni.i18n.model.Voucher.customer_id,
  voucher_nbrLabel                        : Omni.i18n.model.Voucher.voucher_nbr,
  voucher_typeLabel                       : Omni.i18n.model.Voucher.voucher_type,
  initial_balanceLabel                    : Omni.i18n.model.Voucher.initial_balance,
  current_balanceLabel                    : Omni.i18n.model.Voucher.current_balance,
  issue_dateLabel                         : Omni.i18n.model.Voucher.issue_date,
  expiration_dateLabel                    : Omni.i18n.model.Voucher.expiration_date,
  stateLabel                              : Omni.i18n.model.Voucher.state,
  is_destroyedLabel                       : Omni.i18n.model.Voucher.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Vouchers',
  subtitle : 'Create and maintain Vouchers',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Voucher')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    // {
    //   header       : me.displayLabel,
    //   dataIndex    : 'display',
    //   flex         : 1
    // },
    {
      header       : me.voucher_nbrLabel,
      dataIndex    : 'voucher_nbr',
      flex         : 1
    },
    {
      header       : me.customer_idLabel,
      dataIndex    : 'customer_display',
      flex         : 3
    },
    {
      header       : me.voucher_typeLabel,
      dataIndex    : 'voucher_type',
      flex         : 1
    },
    {
      header       : me.initial_balanceLabel,
      dataIndex    : 'initial_balance',
      flex         : 1
    },
    {
      header       : me.current_balanceLabel,
      dataIndex    : 'current_balance',
      flex         : 1
    },
    // {
    //   header       : me.issue_dateLabel,
    //   dataIndex    : 'issue_date',
    //   flex         : 1
    // },
    // {
    //   header       : me.expiration_dateLabel,
    //   dataIndex    : 'expiration_date',
    //   flex         : 1
    // },
    {
      header       : me.stateLabel,
      dataIndex    : 'state',
      flex         : 1
    },
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
