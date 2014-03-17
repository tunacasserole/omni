Ext.define('Omni.view.contracts.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-contracts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-contracts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-contracts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  contract_idLabel                        : Omni.i18n.model.Contract.contract_id,
  displayLabel                            : Omni.i18n.model.Contract.display,
  account_idLabel                         : Omni.i18n.model.Contract.account_id,
  contract_nbrLabel                       : Omni.i18n.model.Contract.contract_nbr,
  stateLabel                              : Omni.i18n.model.Contract.state,
  descriptionLabel                        : Omni.i18n.model.Contract.description,
  contract_termLabel                      : Omni.i18n.model.Contract.contract_term,
  rep_user_idLabel                        : Omni.i18n.model.Contract.rep_user_id,
  parker_signed_by_user_idLabel           : Omni.i18n.model.Contract.parker_signed_by_user_id,
  customer_signed_by_user_idLabel         : Omni.i18n.model.Contract.customer_signed_by_user_id,
  customer_signed_by_titleLabel           : Omni.i18n.model.Contract.customer_signed_by_title,
  activated_by_user_idLabel               : Omni.i18n.model.Contract.activated_by_user_id,
  expiration_notice_windowLabel           : Omni.i18n.model.Contract.expiration_notice_window,
  special_termsLabel                      : Omni.i18n.model.Contract.special_terms,
  teacher_discount_percentLabel           : Omni.i18n.model.Contract.teacher_discount_percent,
  administrator_discount_percentLabel     : Omni.i18n.model.Contract.administrator_discount_percent,
  is_exclusiveLabel                       : Omni.i18n.model.Contract.is_exclusive,
  is_discount_in_storeLabel               : Omni.i18n.model.Contract.is_discount_in_store,
  is_discount_on_webLabel                 : Omni.i18n.model.Contract.is_discount_on_web,
  effective_dateLabel                     : Omni.i18n.model.Contract.effective_date,
  end_dateLabel                           : Omni.i18n.model.Contract.end_date,
  parker_signed_by_dateLabel              : Omni.i18n.model.Contract.parker_signed_by_date,
  customer_signed_by_dateLabel            : Omni.i18n.model.Contract.customer_signed_by_date,
  activated_dateLabel                     : Omni.i18n.model.Contract.activated_date,
  last_approved_dateLabel                 : Omni.i18n.model.Contract.last_approved_date,
  contract_sent_dateLabel                 : Omni.i18n.model.Contract.contract_sent_date,
  contract_received_dateLabel             : Omni.i18n.model.Contract.contract_received_date,
  order_form_sent_date_dateLabel          : Omni.i18n.model.Contract.order_form_sent_date_date,
  contract_won_dateLabel                  : Omni.i18n.model.Contract.contract_won_date,
  contract_lost_dateLabel                 : Omni.i18n.model.Contract.contract_lost_date,
  is_destroyedLabel                       : Omni.i18n.model.Contract.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Contracts',
  subtitle : 'Create and maintain Contracts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Contract')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        // {
        //   header       : me.account_idLabel,
        //   dataIndex    : 'account_display',
        //   flex         : 1
        // },
        {
          header       : me.contract_nbrLabel,
          dataIndex    : 'contract_nbr',
          flex         : 1
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : me.contract_termLabel,
          dataIndex    : 'contract_term',
          flex         : 1
        },
        {
          header       : me.end_dateLabel,
          dataIndex    : 'end_date',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
