Ext.define('Omni.view.accounts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-accounts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'id',
      value:      this.record.get('id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      IdLabel:                                Omni.i18n.model.Account.Id,    
      IsDeletedLabel:                         Omni.i18n.model.Account.IsDeleted,    
      MasterRecordIdLabel:                    Omni.i18n.model.Account.MasterRecordId,    
      NameLabel:                              Omni.i18n.model.Account.Name,    
      TypeLabel:                              Omni.i18n.model.Account.Type,    
      ParentIdLabel:                          Omni.i18n.model.Account.ParentId,    
      BillingStreetLabel:                     Omni.i18n.model.Account.BillingStreet,    
      BillingCityLabel:                       Omni.i18n.model.Account.BillingCity,    
      BillingStateLabel:                      Omni.i18n.model.Account.BillingState,    
      BillingPostalCodeLabel:                 Omni.i18n.model.Account.BillingPostalCode,    
      BillingCountryLabel:                    Omni.i18n.model.Account.BillingCountry,    
      BillingLatitudeLabel:                   Omni.i18n.model.Account.BillingLatitude,    
      BillingLongitudeLabel:                  Omni.i18n.model.Account.BillingLongitude,    
      ShippingStreetLabel:                    Omni.i18n.model.Account.ShippingStreet,    
      ShippingCityLabel:                      Omni.i18n.model.Account.ShippingCity,    
      ShippingStateLabel:                     Omni.i18n.model.Account.ShippingState,    
      ShippingPostalCodeLabel:                Omni.i18n.model.Account.ShippingPostalCode,    
      ShippingCountryLabel:                   Omni.i18n.model.Account.ShippingCountry,    
      ShippingLatitudeLabel:                  Omni.i18n.model.Account.ShippingLatitude,    
      ShippingLongitudeLabel:                 Omni.i18n.model.Account.ShippingLongitude,    
      PhoneLabel:                             Omni.i18n.model.Account.Phone,    
      FaxLabel:                               Omni.i18n.model.Account.Fax,    
      AccountNumberLabel:                     Omni.i18n.model.Account.AccountNumber,    
      WebsiteLabel:                           Omni.i18n.model.Account.Website,    
      SicLabel:                               Omni.i18n.model.Account.Sic,    
      IndustryLabel:                          Omni.i18n.model.Account.Industry,    
      AnnualRevenueLabel:                     Omni.i18n.model.Account.AnnualRevenue,    
      NumberOfEmployeesLabel:                 Omni.i18n.model.Account.NumberOfEmployees,    
      OwnershipLabel:                         Omni.i18n.model.Account.Ownership,    
      TickerSymbolLabel:                      Omni.i18n.model.Account.TickerSymbol,    
      DescriptionLabel:                       Omni.i18n.model.Account.Description,    
      RatingLabel:                            Omni.i18n.model.Account.Rating,    
      SiteLabel:                              Omni.i18n.model.Account.Site,    
      OwnerIdLabel:                           Omni.i18n.model.Account.OwnerId,    
      CreatedDateLabel:                       Omni.i18n.model.Account.CreatedDate,    
      CreatedByIdLabel:                       Omni.i18n.model.Account.CreatedById,    
      LastModifiedDateLabel:                  Omni.i18n.model.Account.LastModifiedDate,    
      LastModifiedByIdLabel:                  Omni.i18n.model.Account.LastModifiedById,    
      SystemModstampLabel:                    Omni.i18n.model.Account.SystemModstamp,    
      LastActivityDateLabel:                  Omni.i18n.model.Account.LastActivityDate,    
      JigsawLabel:                            Omni.i18n.model.Account.Jigsaw,    
      JigsawCompanyIdLabel:                   Omni.i18n.model.Account.JigsawCompanyId,    
      AccountSourceLabel:                     Omni.i18n.model.Account.AccountSource,    
      SicDescLabel:                           Omni.i18n.model.Account.SicDesc,    
      School_Type__cLabel:                    Omni.i18n.model.Account.School_Type__c,    
      Annual_Tuition__cLabel:                 Omni.i18n.model.Account.Annual_Tuition__c,    
      Existing_Provider_Contract_Expiration__cLabel:Omni.i18n.model.Account.Existing_Provider_Contract_Expiration__c,    
      Fabric__cLabel:                         Omni.i18n.model.Account.Fabric__c,    
      Grades__cLabel:                         Omni.i18n.model.Account.Grades__c,    
      Level_of_Income__cLabel:                Omni.i18n.model.Account.Level_of_Income__c,    
      Number_of_Students__cLabel:             Omni.i18n.model.Account.Number_of_Students__c,    
      Uniform_Policy__cLabel:                 Omni.i18n.model.Account.Uniform_Policy__c,    
      Revenue_Band__cLabel:                   Omni.i18n.model.Account.Revenue_Band__c,    
      School_Potential__cLabel:               Omni.i18n.model.Account.School_Potential__c,    
      Account_Status__cLabel:                 Omni.i18n.model.Account.Account_Status__c,    
      Existing_Customer_Subtype__cLabel:      Omni.i18n.model.Account.Existing_Customer_Subtype__c,    
      Prospective_Customer_Subtype__cLabel:   Omni.i18n.model.Account.Prospective_Customer_Subtype__c,    
      Prospective_Revenue_Band__cLabel:       Omni.i18n.model.Account.Prospective_Revenue_Band__c,    
      Existing_Uniform_Provider__cLabel:      Omni.i18n.model.Account.Existing_Uniform_Provider__c,    
      Outlet_Number__cLabel:                  Omni.i18n.model.Account.Outlet_Number__c,    
      Footwear_Program__cLabel:               Omni.i18n.model.Account.Footwear_Program__c    
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

            { xtype: 'textfield', name: 'Id',                             fieldLabel: this.IdLabel                          , allowBlank: false },    
            { xtype: 'textfield', name: 'IsDeleted',                      fieldLabel: this.IsDeletedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'MasterRecordId',                 fieldLabel: this.MasterRecordIdLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'Name',                           fieldLabel: this.NameLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'Type',                           fieldLabel: this.TypeLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'ParentId',                       fieldLabel: this.ParentIdLabel                    , allowBlank: false },    
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
            { xtype: 'textfield', name: 'Phone',                          fieldLabel: this.PhoneLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Fax',                            fieldLabel: this.FaxLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'AccountNumber',                  fieldLabel: this.AccountNumberLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'Website',                        fieldLabel: this.WebsiteLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'Sic',                            fieldLabel: this.SicLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'Industry',                       fieldLabel: this.IndustryLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'AnnualRevenue',                  fieldLabel: this.AnnualRevenueLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'NumberOfEmployees',              fieldLabel: this.NumberOfEmployeesLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'Ownership',                      fieldLabel: this.OwnershipLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'TickerSymbol',                   fieldLabel: this.TickerSymbolLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'Description',                    fieldLabel: this.DescriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Rating',                         fieldLabel: this.RatingLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'Site',                           fieldLabel: this.SiteLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'OwnerId',                        fieldLabel: this.OwnerIdLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedDate',                    fieldLabel: this.CreatedDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedById',                    fieldLabel: this.CreatedByIdLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedDate',               fieldLabel: this.LastModifiedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedById',               fieldLabel: this.LastModifiedByIdLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SystemModstamp',                 fieldLabel: this.SystemModstampLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'LastActivityDate',               fieldLabel: this.LastActivityDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'Jigsaw',                         fieldLabel: this.JigsawLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'JigsawCompanyId',                fieldLabel: this.JigsawCompanyIdLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'AccountSource',                  fieldLabel: this.AccountSourceLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'SicDesc',                        fieldLabel: this.SicDescLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'School_Type__c',                 fieldLabel: this.School_Type__cLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'Annual_Tuition__c',              fieldLabel: this.Annual_Tuition__cLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'Existing_Provider_Contract_Expiration__c',fieldLabel: this.Existing_Provider_Contract_Expiration__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Fabric__c',                      fieldLabel: this.Fabric__cLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Grades__c',                      fieldLabel: this.Grades__cLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Level_of_Income__c',             fieldLabel: this.Level_of_Income__cLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'Number_of_Students__c',          fieldLabel: this.Number_of_Students__cLabel       , allowBlank: false },    
            { xtype: 'textfield', name: 'Uniform_Policy__c',              fieldLabel: this.Uniform_Policy__cLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'Revenue_Band__c',                fieldLabel: this.Revenue_Band__cLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'School_Potential__c',            fieldLabel: this.School_Potential__cLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'Account_Status__c',              fieldLabel: this.Account_Status__cLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'Existing_Customer_Subtype__c',   fieldLabel: this.Existing_Customer_Subtype__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Prospective_Customer_Subtype__c',fieldLabel: this.Prospective_Customer_Subtype__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Prospective_Revenue_Band__c',    fieldLabel: this.Prospective_Revenue_Band__cLabel , allowBlank: false },    
            { xtype: 'textfield', name: 'Existing_Uniform_Provider__c',   fieldLabel: this.Existing_Uniform_Provider__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Outlet_Number__c',               fieldLabel: this.Outlet_Number__cLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'Footwear_Program__c',            fieldLabel: this.Footwear_Program__cLabel         , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Accounts',
      newTitle: 'New Account',
      newSubtitle: 'Complete the following to create a new Account'
    });
    // TITLES (End)

    this.callParent();
    
  }

});