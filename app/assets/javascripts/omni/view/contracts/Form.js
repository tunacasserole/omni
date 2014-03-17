Ext.define('Omni.view.contracts.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-contracts-Form',


  // LABELS (Start) =======================================================================
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


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'contract_id',
      value       : this.record.get('contract_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : false
            // },
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Account',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'account_id',
            //   fieldLabel   : me.account_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : true
            // },
            {
              xtype        : 'textfield',
              name         : 'contract_nbr',
              fieldLabel   : me.contract_nbrLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : me.stateLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textarea',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 4000,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'contract_term',
              fieldLabel   : me.contract_termLabel,
              maxLength    : 32,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Buildit.store.User',{pageSize: 10}),
              displayField : 'display_as',
              itemTpl      : '{display_as}',
              name         : 'rep_user_id',
              initialValue : 'user_id',
              fieldLabel   : me.rep_user_idLabel,
              //initialValue : me.record.get('display_as'),
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Buildit.store.User',{pageSize: 10}),
              displayField : 'full_name',
              itemTpl      : '{full_name}',
              name         : 'parker_signed_by_user_id',
              initialValue : 'user_id',
              fieldLabel   : me.parker_signed_by_user_idLabel,
              //initialValue : me.record.get('full_name'),
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Buildit.store.User',{pageSize: 10}),
              displayField : 'display_as',
              itemTpl      : '{display_as}',
              name         : 'customer_signed_by_user_id',
              initialValue : 'user_id',
              fieldLabel   : me.customer_signed_by_user_idLabel,
              //initialValue : me.record.get('display_as'),
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'customer_signed_by_title',
              fieldLabel   : me.customer_signed_by_titleLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Buildit.store.User',{pageSize: 10}),
              displayField : 'display_as',
              itemTpl      : '{display_as}',
              name         : 'activated_by_user_id',
              initialValue : 'user_id',
              fieldLabel   : me.activated_by_user_idLabel,
              //initialValue : me.record.get('display_as'),
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'expiration_notice_window',
              fieldLabel   : me.expiration_notice_windowLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'special_terms',
              fieldLabel   : me.special_termsLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'teacher_discount_percent',
              fieldLabel   : me.teacher_discount_percentLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'administrator_discount_percent',
              fieldLabel   : me.administrator_discount_percentLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'checkbox',
              name         : 'is_exclusive',
              fieldLabel   : me.is_exclusiveLabel
            },
            {
              xtype        : 'checkbox',
              name         : 'is_discount_in_store',
              fieldLabel   : me.is_discount_in_storeLabel
            },
            {
              xtype        : 'checkbox',
              name         : 'is_discount_on_web',
              fieldLabel   : me.is_discount_on_webLabel
            }
          ]
        },
        {
          xtype        : 'fieldset',
          title        : 'Contract Dates',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'datefield',
              name         : 'effective_date',
              fieldLabel   : me.effective_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'end_date',
              fieldLabel   : me.end_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'parker_signed_by_date',
              fieldLabel   : me.parker_signed_by_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'customer_signed_by_date',
              fieldLabel   : me.customer_signed_by_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'activated_date',
              fieldLabel   : me.activated_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'last_approved_date',
              fieldLabel   : me.last_approved_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'contract_sent_date',
              fieldLabel   : me.contract_sent_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'contract_received_date',
              fieldLabel   : me.contract_received_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'order_form_sent_date_date',
              fieldLabel   : me.order_form_sent_date_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'contract_won_date',
              fieldLabel   : me.contract_won_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'contract_lost_date',
              fieldLabel   : me.contract_lost_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Contract',
      subtitle    : 'Edit Contract'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.contracts.Form'
