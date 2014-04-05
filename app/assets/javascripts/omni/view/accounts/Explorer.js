Ext.define('Omni.view.accounts.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-accounts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind : true,
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-accounts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-accounts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  account_idLabel                         : Omni.i18n.model.Account.account_id,
  displayLabel                            : Omni.i18n.model.Account.display,
  account_nameLabel                       : Omni.i18n.model.Account.account_name,
  descriptionLabel                        : Omni.i18n.model.Account.description,
  short_nameLabel                         : Omni.i18n.model.Account.short_name,
  stateLabel                              : Omni.i18n.model.Account.state,
  account_nbrLabel                        : Omni.i18n.model.Account.account_nbr,
  account_typeLabel                       : Omni.i18n.model.Account.account_type,
  parent_account_idLabel                  : Omni.i18n.model.Account.parent_account_id,
  rep_user_idLabel                        : Omni.i18n.model.Account.rep_user_id,
  webaccountLabel                         : Omni.i18n.model.Account.webaccount,
  location_idLabel                        : Omni.i18n.model.Account.location_id,
  account_standingLabel                   : Omni.i18n.model.Account.account_standing,
  account_exclusivityLabel                : Omni.i18n.model.Account.account_exclusivity,
  billing_line_1Label                     : Omni.i18n.model.Account.billing_line_1,
  billing_line_2Label                     : Omni.i18n.model.Account.billing_line_2,
  billing_cityLabel                       : Omni.i18n.model.Account.billing_city,
  billing_stateLabel                      : Omni.i18n.model.Account.billing_state,
  billing_zipLabel                        : Omni.i18n.model.Account.billing_zip,
  billing_countryLabel                    : Omni.i18n.model.Account.billing_country,
  billing_phoneLabel                      : Omni.i18n.model.Account.billing_phone,
  billing_faxLabel                        : Omni.i18n.model.Account.billing_fax,
  shipping_line_1Label                    : Omni.i18n.model.Account.shipping_line_1,
  shipping_line_2Label                    : Omni.i18n.model.Account.shipping_line_2,
  shipping_cityLabel                      : Omni.i18n.model.Account.shipping_city,
  shipping_stateLabel                     : Omni.i18n.model.Account.shipping_state,
  shipping_zipLabel                       : Omni.i18n.model.Account.shipping_zip,
  shipping_countryLabel                   : Omni.i18n.model.Account.shipping_country,
  shipping_phoneLabel                     : Omni.i18n.model.Account.shipping_phone,
  shipping_faxLabel                       : Omni.i18n.model.Account.shipping_fax,
  school_typeLabel                        : Omni.i18n.model.Account.school_type,
  school_genderLabel                     : Omni.i18n.model.Account.school_gender,
  from_grade_idLabel                      : Omni.i18n.model.Account.from_grade_id,
  thru_grade_idLabel                      : Omni.i18n.model.Account.thru_grade_id,
  year_establishedLabel                   : Omni.i18n.model.Account.year_established,
  number_of_studentsLabel                 : Omni.i18n.model.Account.number_of_students,
  annual_tuitionLabel                     : Omni.i18n.model.Account.annual_tuition,
  design_codeLabel                        : Omni.i18n.model.Account.design_code,
  level_of_incomeLabel                    : Omni.i18n.model.Account.level_of_income,
  uniform_policyLabel                     : Omni.i18n.model.Account.uniform_policy,
  revenue_bandLabel                       : Omni.i18n.model.Account.revenue_band,
  school_potentialLabel                   : Omni.i18n.model.Account.school_potential,
  prospect_contract_expiration_dateLabel  : Omni.i18n.model.Account.prospect_contract_expiration_date,
  prospect_typeLabel                      : Omni.i18n.model.Account.prospect_type,
  existing_uniform_providerLabel          : Omni.i18n.model.Account.existing_uniform_provider,
  is_footwear_programLabel                : Omni.i18n.model.Account.is_footwear_program,
  contract_typeLabel                      : Omni.i18n.model.Account.contract_type,
  rebateLabel                             : Omni.i18n.model.Account.rebate,
  is_red_label_accountLabel               : Omni.i18n.model.Account.is_red_label_account,
  is_on_campus_storeLabel                 : Omni.i18n.model.Account.is_on_campus_store,
  is_on_webLabel                          : Omni.i18n.model.Account.is_on_web,
  is_destroyedLabel                       : Omni.i18n.model.Account.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Accounts',
  subtitle : 'Create and maintain Accounts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Account')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.school_nbrLabel,
          dataIndex    : 'school_nbr',
          flex         : 1
        },
        {
          header       : me.account_nameLabel,
          dataIndex    : 'account_name',
          flex         : 3
        },
        // {
        //   header       : me.account_typeLabel,
        //   dataIndex    : 'account_type',
        //   flex         : 1,
        //   renderer     : Buildit.util.Format.lookupRenderer('ACCOUNT_TYPE'),
        //   lkp          : 'code'
        // },
        {
          header       : me.billing_cityLabel,
          dataIndex    : 'billing_city',
          flex         : 2
        },
        {
          header       : me.billing_stateLabel,
          dataIndex    : 'billing_state',
          flex         : 1,
          renderer     : Buildit.util.Format.lookupRenderer('STATE_CODE'),
          lkp          : 'code'
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
