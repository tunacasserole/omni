Ext.define('Omni.view.contracts.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-contracts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Contract'),

  contextMenuConfig: {
    xtype: 'omni-contracts-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-contracts-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-contracts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  LastActivityDateLabel:                  Omni.i18n.model.Contract.LastActivityDate,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Contracts',
  subtitle:  'Create and maintain Contracts',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.contract_idLabel,                   dataIndex: 'contract_id',                 flex: 1 },    
        // { header: this.AccountIdLabel,                     dataIndex: 'AccountId',                   flex: 1 },    
        // { header: this.OwnerExpirationNoticeLabel,         dataIndex: 'OwnerExpirationNotice',       flex: 1 },    
        { header: this.StartDateLabel,                     dataIndex: 'StartDate',                   flex: 1 },    
        { header: this.BillingStreetLabel,                 dataIndex: 'BillingStreet',               flex: 1 },    
        { header: this.BillingCityLabel,                   dataIndex: 'BillingCity',                 flex: 1 },    
        { header: this.BillingStateLabel,                  dataIndex: 'BillingState',                flex: 1 },    
        { header: this.BillingPostalCodeLabel,             dataIndex: 'BillingPostalCode',           flex: 1 },    
        // { header: this.BillingCountryLabel,                dataIndex: 'BillingCountry',              flex: 1 },    
        // { header: this.BillingLatitudeLabel,               dataIndex: 'BillingLatitude',             flex: 1 },    
        // { header: this.BillingLongitudeLabel,              dataIndex: 'BillingLongitude',            flex: 1 },    
        // { header: this.ShippingStreetLabel,                dataIndex: 'ShippingStreet',              flex: 1 },    
        // { header: this.ShippingCityLabel,                  dataIndex: 'ShippingCity',                flex: 1 },    
        // { header: this.ShippingStateLabel,                 dataIndex: 'ShippingState',               flex: 1 },    
        // { header: this.ShippingPostalCodeLabel,            dataIndex: 'ShippingPostalCode',          flex: 1 },    
        // { header: this.ShippingCountryLabel,               dataIndex: 'ShippingCountry',             flex: 1 },    
        // { header: this.ShippingLatitudeLabel,              dataIndex: 'ShippingLatitude',            flex: 1 },    
        // { header: this.ShippingLongitudeLabel,             dataIndex: 'ShippingLongitude',           flex: 1 },    
        // { header: this.ContractTermLabel,                  dataIndex: 'ContractTerm',                flex: 1 },    
        // { header: this.OwnerIdLabel,                       dataIndex: 'OwnerId',                     flex: 1 },    
        { header: this.StatusLabel,                        dataIndex: 'Status',                      flex: 1 },    
        // { header: this.CompanySignedIdLabel,               dataIndex: 'CompanySignedId',             flex: 1 },    
        // { header: this.CompanySignedDateLabel,             dataIndex: 'CompanySignedDate',           flex: 1 },    
        // { header: this.CustomerSignedIdLabel,              dataIndex: 'CustomerSignedId',            flex: 1 },    
        // { header: this.CustomerSignedTitleLabel,           dataIndex: 'CustomerSignedTitle',         flex: 1 },    
        // { header: this.CustomerSignedDateLabel,            dataIndex: 'CustomerSignedDate',          flex: 1 },    
        // { header: this.SpecialTermsLabel,                  dataIndex: 'SpecialTerms',                flex: 1 },    
        // { header: this.ActivatedByIdLabel,                 dataIndex: 'ActivatedById',               flex: 1 },    
        // { header: this.ActivatedDateLabel,                 dataIndex: 'ActivatedDate',               flex: 1 },    
        // { header: this.StatusCodeLabel,                    dataIndex: 'StatusCode',                  flex: 1 },    
        // { header: this.DescriptionLabel,                   dataIndex: 'Description',                 flex: 1 },    
        // { header: this.NameLabel,                          dataIndex: 'Name',                        flex: 1 },    
        // { header: this.IsDeletedLabel,                     dataIndex: 'IsDeleted',                   flex: 1 },    
        { header: this.ContractNumberLabel,                dataIndex: 'ContractNumber',              flex: 1 },    
        // { header: this.LastApprovedDateLabel,              dataIndex: 'LastApprovedDate',            flex: 1 },    
        // { header: this.CreatedDateLabel,                   dataIndex: 'CreatedDate',                 flex: 1 },    
        // { header: this.CreatedByIdLabel,                   dataIndex: 'CreatedById',                 flex: 1 },    
        // { header: this.LastModifiedDateLabel,              dataIndex: 'LastModifiedDate',            flex: 1 },    
        // { header: this.LastModifiedByIdLabel,              dataIndex: 'LastModifiedById',            flex: 1 },    
        // { header: this.SystemModstampLabel,                dataIndex: 'SystemModstamp',              flex: 1 },    
        // { header: this.LastActivityDateLabel,              dataIndex: 'LastActivityDate',            flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});