Ext.define('Omni.view.accounts.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-accounts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Account'),

  contextMenuConfig : {
    xtype    : 'omni-accounts-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-accounts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-accounts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  Footwear_Program__cLabel:               Omni.i18n.model.Account.Footwear_Program__c,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Accounts',
  subtitle:  'Create and maintain Accounts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.IdLabel,
        //   dataIndex    : 'Id',
        //   flex         : 1
        // },
        // {
        //   header       : this.IsDeletedLabel,
        //   dataIndex    : 'IsDeleted',
        //   flex         : 1
        // },
        // {
        //   header       : this.MasterRecordIdLabel,
        //   dataIndex    : 'MasterRecordId',
        //   flex         : 1
        // },
        {
          header       : this.NameLabel,
          dataIndex    : 'Name',
          flex         : 1
        },
        {
          header       : this.TypeLabel,
          dataIndex    : 'Type',
          flex         : 1
        },
        {
          header       : this.ParentIdLabel,
          dataIndex    : 'ParentId',
          flex         : 1
        },
        {
          header       : this.BillingStreetLabel,
          dataIndex    : 'BillingStreet',
          flex         : 1
        },
        {
          header       : this.BillingCityLabel,
          dataIndex    : 'BillingCity',
          flex         : 1
        },
        {
          header       : this.BillingStateLabel,
          dataIndex    : 'BillingState',
          flex         : 1
        },
        {
          header       : this.BillingPostalCodeLabel,
          dataIndex    : 'BillingPostalCode',
          flex         : 1
        },
        {
          header       : this.BillingCountryLabel,
          dataIndex    : 'BillingCountry',
          flex         : 1
        },
        {
          header       : this.BillingLatitudeLabel,
          dataIndex    : 'BillingLatitude',
          flex         : 1
        },
        {
          header       : this.BillingLongitudeLabel,
          dataIndex    : 'BillingLongitude',
          flex         : 1
        },
        {
          header       : this.ShippingStreetLabel,
          dataIndex    : 'ShippingStreet',
          flex         : 1
        },
        {
          header       : this.ShippingCityLabel,
          dataIndex    : 'ShippingCity',
          flex         : 1
        },
        {
          header       : this.ShippingStateLabel,
          dataIndex    : 'ShippingState',
          flex         : 1
        },
        {
          header       : this.ShippingPostalCodeLabel,
          dataIndex    : 'ShippingPostalCode',
          flex         : 1
        },
        {
          header       : this.ShippingCountryLabel,
          dataIndex    : 'ShippingCountry',
          flex         : 1
        },
        {
          header       : this.ShippingLatitudeLabel,
          dataIndex    : 'ShippingLatitude',
          flex         : 1
        },
        {
          header       : this.ShippingLongitudeLabel,
          dataIndex    : 'ShippingLongitude',
          flex         : 1
        },
        {
          header       : this.PhoneLabel,
          dataIndex    : 'Phone',
          flex         : 1
        },
        {
          header       : this.FaxLabel,
          dataIndex    : 'Fax',
          flex         : 1
        },
        {
          header       : this.AccountNumberLabel,
          dataIndex    : 'AccountNumber',
          flex         : 1
        },
        {
          header       : this.WebsiteLabel,
          dataIndex    : 'Website',
          flex         : 1
        },
        {
          header       : this.SicLabel,
          dataIndex    : 'Sic',
          flex         : 1
        },
        {
          header       : this.IndustryLabel,
          dataIndex    : 'Industry',
          flex         : 1
        },
        {
          header       : this.AnnualRevenueLabel,
          dataIndex    : 'AnnualRevenue',
          flex         : 1
        },
        {
          header       : this.NumberOfEmployeesLabel,
          dataIndex    : 'NumberOfEmployees',
          flex         : 1
        },
        {
          header       : this.OwnershipLabel,
          dataIndex    : 'Ownership',
          flex         : 1
        },
        {
          header       : this.TickerSymbolLabel,
          dataIndex    : 'TickerSymbol',
          flex         : 1
        },
        {
          header       : this.DescriptionLabel,
          dataIndex    : 'Description',
          flex         : 1
        },
        {
          header       : this.RatingLabel,
          dataIndex    : 'Rating',
          flex         : 1
        },
        {
          header       : this.SiteLabel,
          dataIndex    : 'Site',
          flex         : 1
        },
        {
          header       : this.OwnerIdLabel,
          dataIndex    : 'OwnerId',
          flex         : 1
        },
        {
          header       : this.CreatedDateLabel,
          dataIndex    : 'CreatedDate',
          flex         : 1
        },
        {
          header       : this.CreatedByIdLabel,
          dataIndex    : 'CreatedById',
          flex         : 1
        },
        {
          header       : this.LastModifiedDateLabel,
          dataIndex    : 'LastModifiedDate',
          flex         : 1
        },
        {
          header       : this.LastModifiedByIdLabel,
          dataIndex    : 'LastModifiedById',
          flex         : 1
        },
        {
          header       : this.SystemModstampLabel,
          dataIndex    : 'SystemModstamp',
          flex         : 1
        },
        {
          header       : this.LastActivityDateLabel,
          dataIndex    : 'LastActivityDate',
          flex         : 1
        },
        {
          header       : this.JigsawLabel,
          dataIndex    : 'Jigsaw',
          flex         : 1
        },
        {
          header       : this.JigsawCompanyIdLabel,
          dataIndex    : 'JigsawCompanyId',
          flex         : 1
        },
        {
          header       : this.AccountSourceLabel,
          dataIndex    : 'AccountSource',
          flex         : 1
        },
        {
          header       : this.SicDescLabel,
          dataIndex    : 'SicDesc',
          flex         : 1
        },
        {
          header       : this.School_Type__cLabel,
          dataIndex    : 'School_Type__c',
          flex         : 1
        },
        {
          header       : this.Annual_Tuition__cLabel,
          dataIndex    : 'Annual_Tuition__c',
          flex         : 1
        },
        {
          header       : this.Existing_Provider_Contract_Expiration__cLabel,
          dataIndex    : 'Existing_Provider_Contract_Expiration__c',
          flex         : 1
        },
        {
          header       : this.Fabric__cLabel,
          dataIndex    : 'Fabric__c',
          flex         : 1
        },
        {
          header       : this.Grades__cLabel,
          dataIndex    : 'Grades__c',
          flex         : 1
        },
        {
          header       : this.Level_of_Income__cLabel,
          dataIndex    : 'Level_of_Income__c',
          flex         : 1
        },
        {
          header       : this.Number_of_Students__cLabel,
          dataIndex    : 'Number_of_Students__c',
          flex         : 1
        },
        {
          header       : this.Uniform_Policy__cLabel,
          dataIndex    : 'Uniform_Policy__c',
          flex         : 1
        },
        {
          header       : this.Revenue_Band__cLabel,
          dataIndex    : 'Revenue_Band__c',
          flex         : 1
        },
        {
          header       : this.School_Potential__cLabel,
          dataIndex    : 'School_Potential__c',
          flex         : 1
        },
        {
          header       : this.Account_Status__cLabel,
          dataIndex    : 'Account_Status__c',
          flex         : 1
        },
        {
          header       : this.Existing_Customer_Subtype__cLabel,
          dataIndex    : 'Existing_Customer_Subtype__c',
          flex         : 1
        },
        {
          header       : this.Prospective_Customer_Subtype__cLabel,
          dataIndex    : 'Prospective_Customer_Subtype__c',
          flex         : 1
        },
        {
          header       : this.Prospective_Revenue_Band__cLabel,
          dataIndex    : 'Prospective_Revenue_Band__c',
          flex         : 1
        },
        {
          header       : this.Existing_Uniform_Provider__cLabel,
          dataIndex    : 'Existing_Uniform_Provider__c',
          flex         : 1
        },
        {
          header       : this.Outlet_Number__cLabel,
          dataIndex    : 'Outlet_Number__c',
          flex         : 1
        },
        {
          header       : this.Footwear_Program__cLabel,
          dataIndex    : 'Footwear_Program__c',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});