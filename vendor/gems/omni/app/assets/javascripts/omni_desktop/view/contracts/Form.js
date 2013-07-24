Ext.define('Omni.view.contracts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-contracts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'contract_id',
      value:      this.record.get('contract_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      contract_idLabel:                       Omni.i18n.model.Contract.contract_id,    
      AccountIdLabel:                         Omni.i18n.model.Contract.AccountId,    
      OwnerExpirationNoticeLabel:             Omni.i18n.model.Contract.OwnerExpirationNotice,    
      StartDateLabel:                         Omni.i18n.model.Contract.StartDate,    
      BillingStreetLabel:                     Omni.i18n.model.Contract.BillingStreet,    
      BillingCityLabel:                       Omni.i18n.model.Contract.BillingCity,    
      BillingStateLabel:                      Omni.i18n.model.Contract.BillingState,    
      BillingPostalCodeLabel:                 Omni.i18n.model.Contract.BillingPostalCode,    
      BillingCountryLabel:                    Omni.i18n.model.Contract.BillingCountry,    
      BillingLatitudeLabel:                   Omni.i18n.model.Contract.BillingLatitude,    
      BillingLongitudeLabel:                  Omni.i18n.model.Contract.BillingLongitude,    
      ShippingStreetLabel:                    Omni.i18n.model.Contract.ShippingStreet,    
      ShippingCityLabel:                      Omni.i18n.model.Contract.ShippingCity,    
      ShippingStateLabel:                     Omni.i18n.model.Contract.ShippingState,    
      ShippingPostalCodeLabel:                Omni.i18n.model.Contract.ShippingPostalCode,    
      ShippingCountryLabel:                   Omni.i18n.model.Contract.ShippingCountry,    
      ShippingLatitudeLabel:                  Omni.i18n.model.Contract.ShippingLatitude,    
      ShippingLongitudeLabel:                 Omni.i18n.model.Contract.ShippingLongitude,    
      ContractTermLabel:                      Omni.i18n.model.Contract.ContractTerm,    
      OwnerIdLabel:                           Omni.i18n.model.Contract.OwnerId,    
      StatusLabel:                            Omni.i18n.model.Contract.Status,    
      CompanySignedIdLabel:                   Omni.i18n.model.Contract.CompanySignedId,    
      CompanySignedDateLabel:                 Omni.i18n.model.Contract.CompanySignedDate,    
      CustomerSignedIdLabel:                  Omni.i18n.model.Contract.CustomerSignedId,    
      CustomerSignedTitleLabel:               Omni.i18n.model.Contract.CustomerSignedTitle,    
      CustomerSignedDateLabel:                Omni.i18n.model.Contract.CustomerSignedDate,    
      SpecialTermsLabel:                      Omni.i18n.model.Contract.SpecialTerms,    
      ActivatedByIdLabel:                     Omni.i18n.model.Contract.ActivatedById,    
      ActivatedDateLabel:                     Omni.i18n.model.Contract.ActivatedDate,    
      StatusCodeLabel:                        Omni.i18n.model.Contract.StatusCode,    
      DescriptionLabel:                       Omni.i18n.model.Contract.Description,    
      NameLabel:                              Omni.i18n.model.Contract.Name,    
      IsDeletedLabel:                         Omni.i18n.model.Contract.IsDeleted,    
      ContractNumberLabel:                    Omni.i18n.model.Contract.ContractNumber,    
      LastApprovedDateLabel:                  Omni.i18n.model.Contract.LastApprovedDate,    
      CreatedDateLabel:                       Omni.i18n.model.Contract.CreatedDate,    
      CreatedByIdLabel:                       Omni.i18n.model.Contract.CreatedById,    
      LastModifiedDateLabel:                  Omni.i18n.model.Contract.LastModifiedDate,    
      LastModifiedByIdLabel:                  Omni.i18n.model.Contract.LastModifiedById,    
      SystemModstampLabel:                    Omni.i18n.model.Contract.SystemModstamp,    
      LastActivityDateLabel:                  Omni.i18n.model.Contract.LastActivityDate    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'contract_id',                    fieldLabel: this.contract_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'AccountId',                      fieldLabel: this.AccountIdLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'OwnerExpirationNotice',          fieldLabel: this.OwnerExpirationNoticeLabel       , allowBlank: false },    
            { xtype: 'textfield', name: 'StartDate',                      fieldLabel: this.StartDateLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingStreet',                  fieldLabel: this.BillingStreetLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingCity',                    fieldLabel: this.BillingCityLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingState',                   fieldLabel: this.BillingStateLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingPostalCode',              fieldLabel: this.BillingPostalCodeLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingCountry',                 fieldLabel: this.BillingCountryLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingLatitude',                fieldLabel: this.BillingLatitudeLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'BillingLongitude',               fieldLabel: this.BillingLongitudeLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingStreet',                 fieldLabel: this.ShippingStreetLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingCity',                   fieldLabel: this.ShippingCityLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingState',                  fieldLabel: this.ShippingStateLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingPostalCode',             fieldLabel: this.ShippingPostalCodeLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingCountry',                fieldLabel: this.ShippingCountryLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingLatitude',               fieldLabel: this.ShippingLatitudeLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'ShippingLongitude',              fieldLabel: this.ShippingLongitudeLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'ContractTerm',                   fieldLabel: this.ContractTermLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'OwnerId',                        fieldLabel: this.OwnerIdLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'Status',                         fieldLabel: this.StatusLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'CompanySignedId',                fieldLabel: this.CompanySignedIdLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'CompanySignedDate',              fieldLabel: this.CompanySignedDateLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'CustomerSignedId',               fieldLabel: this.CustomerSignedIdLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'CustomerSignedTitle',            fieldLabel: this.CustomerSignedTitleLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'CustomerSignedDate',             fieldLabel: this.CustomerSignedDateLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'SpecialTerms',                   fieldLabel: this.SpecialTermsLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'ActivatedById',                  fieldLabel: this.ActivatedByIdLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'ActivatedDate',                  fieldLabel: this.ActivatedDateLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'StatusCode',                     fieldLabel: this.StatusCodeLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'Description',                    fieldLabel: this.DescriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Name',                           fieldLabel: this.NameLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'IsDeleted',                      fieldLabel: this.IsDeletedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'ContractNumber',                 fieldLabel: this.ContractNumberLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'LastApprovedDate',               fieldLabel: this.LastApprovedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedDate',                    fieldLabel: this.CreatedDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedById',                    fieldLabel: this.CreatedByIdLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedDate',               fieldLabel: this.LastModifiedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedById',               fieldLabel: this.LastModifiedByIdLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SystemModstamp',                 fieldLabel: this.SystemModstampLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'LastActivityDate',               fieldLabel: this.LastActivityDateLabel            , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Contracts',
      newTitle: 'New Contract',
      newSubtitle: 'Complete the following to create a new Contract'
    });
    // TITLES (End)

    this.callParent();
    
  }

});