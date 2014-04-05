Ext.define('Omni.view.accounts.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-accounts-Form',

  // LABELS (Start) =======================================================================
  account_idLabel: Omni.i18n.model.Account.account_id,
  displayLabel: Omni.i18n.model.Account.display,
  account_nameLabel: Omni.i18n.model.Account.account_name,
  descriptionLabel: Omni.i18n.model.Account.description,
  short_nameLabel: Omni.i18n.model.Account.short_name,
  stateLabel: Omni.i18n.model.Account.state,
  account_nbrLabel: Omni.i18n.model.Account.account_nbr,
  school_nbrLabel: Omni.i18n.model.Account.school_nbr,
  account_typeLabel: Omni.i18n.model.Account.account_type,
  parent_account_idLabel: Omni.i18n.model.Account.parent_account_id,
  rep_user_idLabel: Omni.i18n.model.Account.rep_user_id,
  webaccountLabel: Omni.i18n.model.Account.webaccount,
  location_idLabel: Omni.i18n.model.Account.location_id,
  account_standingLabel: Omni.i18n.model.Account.account_standing,
  account_exclusivityLabel: Omni.i18n.model.Account.account_exclusivity,
  billing_line_1Label: Omni.i18n.model.Account.billing_line_1,
  billing_line_2Label: Omni.i18n.model.Account.billing_line_2,
  billing_cityLabel: Omni.i18n.model.Account.billing_city,
  billing_stateLabel: Omni.i18n.model.Account.billing_state,
  billing_zipLabel: Omni.i18n.model.Account.billing_zip,
  billing_countryLabel: Omni.i18n.model.Account.billing_country,
  billing_phoneLabel: Omni.i18n.model.Account.billing_phone,
  billing_faxLabel: Omni.i18n.model.Account.billing_fax,
  shipping_line_1Label: Omni.i18n.model.Account.shipping_line_1,
  shipping_line_2Label: Omni.i18n.model.Account.shipping_line_2,
  shipping_cityLabel: Omni.i18n.model.Account.shipping_city,
  shipping_stateLabel: Omni.i18n.model.Account.shipping_state,
  shipping_zipLabel: Omni.i18n.model.Account.shipping_zip,
  shipping_countryLabel: Omni.i18n.model.Account.shipping_country,
  shipping_phoneLabel: Omni.i18n.model.Account.shipping_phone,
  shipping_faxLabel: Omni.i18n.model.Account.shipping_fax,
  school_typeLabel: Omni.i18n.model.Account.school_type,
  school_genderLabel: Omni.i18n.model.Account.school_gender,
  from_grade_idLabel: Omni.i18n.model.Account.from_grade_id,
  thru_grade_idLabel: Omni.i18n.model.Account.thru_grade_id,
  year_establishedLabel: Omni.i18n.model.Account.year_established,
  number_of_studentsLabel: Omni.i18n.model.Account.number_of_students,
  annual_tuitionLabel: Omni.i18n.model.Account.annual_tuition,
  design_codeLabel: Omni.i18n.model.Account.design_code,
  level_of_incomeLabel: Omni.i18n.model.Account.level_of_income,
  uniform_policyLabel: Omni.i18n.model.Account.uniform_policy,
  revenue_bandLabel: Omni.i18n.model.Account.revenue_band,
  school_potentialLabel: Omni.i18n.model.Account.school_potential,
  prospect_contract_expiration_dateLabel: Omni.i18n.model.Account.prospect_contract_expiration_date,
  prospect_typeLabel: Omni.i18n.model.Account.prospect_type,
  existing_uniform_providerLabel: Omni.i18n.model.Account.existing_uniform_provider,
  is_footwear_programLabel: Omni.i18n.model.Account.is_footwear_program,
  contract_typeLabel: Omni.i18n.model.Account.contract_type,
  rebateLabel: Omni.i18n.model.Account.rebate,
  is_red_label_accountLabel: Omni.i18n.model.Account.is_red_label_account,
  is_on_campus_storeLabel: Omni.i18n.model.Account.is_on_campus_store,
  is_on_webLabel: Omni.i18n.model.Account.is_on_web,
  is_destroyedLabel: Omni.i18n.model.Account.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'account_id',
      value: this.record.get('account_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'textfield',
            name: 'state',
            fieldLabel: me.stateLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'account_nbr',
            fieldLabel: me.account_nbrLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            disabled: true,
            xtype: 'textfield',
          }, {
            xtype: 'textfield',
            name: 'school_nbr',
            fieldLabel: me.school_nbrLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            disabled: true,
            xtype: 'textfield',
          }, {
            name: 'display',
            fieldLabel: me.displayLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'account_name',
            fieldLabel: me.account_nameLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: false
          }, {
            xtype: 'textarea',
            name: 'description',
            fieldLabel: me.descriptionLabel,
            maxLength: 4000,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'short_name',
            fieldLabel: me.short_nameLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'account_type',
            fieldLabel: me.account_typeLabel,
            category: 'ACCOUNT_TYPE',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Account', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'parent_account_id',
            fieldLabel: me.parent_account_idLabel,
            // initialValue: me.record.get('display'),
            valueField: 'account_id',
            gotoTarget: 'omni-accounts-Inspector',
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 10
            }),
            displayField: 'full_name',
            itemTpl: '{full_name}',
            name: 'rep_user_id',
            valueField: 'user_id',
            fieldLabel: me.rep_user_idLabel,
            //initialValue: me.record.get('full_name'),
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'webaccount',
            fieldLabel: me.webaccountLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Location', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'location_id',
            fieldLabel: me.location_idLabel,
            //initialValue: me.record.get('location_display'),
            gotoTarget: 'omni-locations-Inspector',
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'account_standing',
            fieldLabel: me.account_standingLabel,
            category: 'ACCOUNT_STANDING',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'account_exclusivity',
            fieldLabel: me.account_exclusivityLabel,
            category: 'ACCOUNT_EXCLUSIVITY',
            lkp: 'code',
            allowBlank: true
          }]
        }, {
          xtype: 'fieldset',
          title: 'Billing Contact Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'textfield',
            name: 'billing_line_1',
            fieldLabel: me.billing_line_1Label,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'billing_line_2',
            fieldLabel: me.billing_line_2Label,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'billing_city',
            fieldLabel: me.billing_cityLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'billing_state',
            fieldLabel: me.billing_stateLabel,
            category: 'STATE_CODE',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'billing_zip',
            fieldLabel: me.billing_zipLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'billing_country',
            fieldLabel: me.billing_countryLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'billing_phone',
            fieldLabel: me.billing_phoneLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'billing_fax',
            fieldLabel: me.billing_faxLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }]
        }, {
          xtype: 'fieldset',
          title: 'Shipping Contact Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'textfield',
            name: 'shipping_line_1',
            fieldLabel: me.shipping_line_1Label,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'shipping_line_2',
            fieldLabel: me.shipping_line_2Label,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'shipping_city',
            fieldLabel: me.shipping_cityLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'shipping_state',
            fieldLabel: me.shipping_stateLabel,
            category: 'STATE_CODE',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'shipping_zip',
            fieldLabel: me.shipping_zipLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'shipping_country',
            fieldLabel: me.shipping_countryLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'shipping_phone',
            fieldLabel: me.shipping_phoneLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'shipping_fax',
            fieldLabel: me.shipping_faxLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }]
        }, {
          xtype: 'fieldset',
          title: 'Demographics',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'buildit-Lookup',
            name: 'school_type',
            fieldLabel: me.school_typeLabel,
            category: 'SCHOOL_TYPE',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'school_gender',
            fieldLabel: me.school_genderLabel,
            category: 'ACCOUNT_GENDER',
            lkp: 'code',
            allowBlank: true
          }, {
              xtype             : 'label',
              text              : 'warning: changing from grade or thru grade will rebuild account grades.',
              cls               : 'instruction'
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Grade', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'from_grade_id',
            valueField: 'grade_id',
            fieldLabel: me.from_grade_idLabel,
            // initialValue: me.record.get('display'),
            gotoTarget: 'omni-grades-Inspector',
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Grade', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'thru_grade_id',
            valueField: 'grade_id',
            fieldLabel: me.thru_grade_idLabel,
            // initialValue: me.record.get('display'),
            gotoTarget: 'omni-grades-Inspector',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'year_established',
            fieldLabel: me.year_establishedLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'number_of_students',
            fieldLabel: me.number_of_studentsLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'annual_tuition',
            fieldLabel: me.annual_tuitionLabel,
            category: 'ANNUAL_TUITION',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'design_code',
            fieldLabel: me.design_codeLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'level_of_income',
            fieldLabel: me.level_of_incomeLabel,
            category: 'LEVEL_OF_INCOME',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'uniform_policy',
            fieldLabel: me.uniform_policyLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }]
        }, {
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'buildit-Lookup',
            name: 'revenue_band',
            fieldLabel: me.revenue_bandLabel,
            category: 'REVENUE_BAND',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'school_potential',
            fieldLabel: me.school_potentialLabel,
            category: 'SCHOOL_POTENTIAL',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'prospect_contract_expiration_date',
            fieldLabel: me.prospect_contract_expiration_dateLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'prospect_type',
            fieldLabel: me.prospect_typeLabel,
            category: 'PROSPECT_TYPE',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'existing_uniform_provider',
            fieldLabel: me.existing_uniform_providerLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_footwear_program',
            fieldLabel: me.is_footwear_programLabel
          }, {
            xtype: 'buildit-Lookup',
            name: 'contract_type',
            fieldLabel: me.contract_typeLabel,
            category: 'CONTRACT_TYPE',
            lkp: 'code',
            allowBlank: true
          }, {
            xtype: 'textfield',
            name: 'rebate',
            fieldLabel: me.rebateLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_red_label_account',
            fieldLabel: me.is_red_label_accountLabel
          }, {
            xtype: 'checkbox',
            name: 'is_on_campus_store',
            fieldLabel: me.is_on_campus_storeLabel
          }, {
            xtype: 'checkbox',
            name: 'is_on_web',
            fieldLabel: me.is_on_webLabel
          }]
        }

      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Account',
      subtitle: 'Edit Account'
    });
    // TITLES (End)

   // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        cls: 'approve',
        // iconCls: 'fa-thumbs-o-up',
        tooltip: 'Activate',
        listeners: {
          beforerender: this.prepareActivateAction,
          click: this.onActivateAction,
          scope: me
        }
      }, {
        xtype: 'button',
        // iconCls: '  fa-thumbs-o-up',
        cls: 'reject',
        tooltip: 'Close',
        listeners: {
          beforerender: this.prepareCloseAction,
          click: this.onCloseAction,
          scope: me
        }
      }]
    });

    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================

    // LISTENERS (End)


    this.callParent();

  },

  // HANDLERS (Start) ======================================================================

  onActivateAction: function(action, eOpts) {
    this.processEventTransition('activate', 'Account was successfully activated.', 'An error occurred activating this account.');
  }, // onBuildAction

  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close', 'Account was successfully closed.', 'An error occurred closing this account.');
  }, // onBuildAction

  prepareActivateAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareCloseAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'active' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Account.fireEvent({
        id: this.record.get('account_id'),
        name: eventName
      },
      function(result, e) {
        me.getForm().clearInvalid();
        if (result && result.success == true) {
          Buildit.infoMsg(successMsg);
          me.record.set(result);
          me.loadRecord(me.record);
          me.fireEvent('recordchanged', me, me.banner);
          me.doLayout();
        } else {
          var response = Ext.JSON.decode(e.xhr.responseText).result;

          if (response.errors)
            me.getForm().markInvalid(response.errors);

          var error_message = failureMsg;
          if (response.message)
            error_message = response.message;

          if (response.errors)
            error_message = error_message + '. Please fix the highlighted fields and try again.'

          Buildit.errorMsg(error_message);
        }
      }
    );

  },

  // HANDLERS (End)

});
