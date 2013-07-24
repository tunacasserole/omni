Ext.define('Omni.view.contacts.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-contacts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Contact'),

  contextMenuConfig: {
    xtype: 'omni-contacts-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-contacts-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-contacts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  contact_idLabel:                        Omni.i18n.model.Contact.contact_id,
  IsDeletedLabel:                         Omni.i18n.model.Contact.IsDeleted,
  MasterRecordIdLabel:                    Omni.i18n.model.Contact.MasterRecordId,
  AccountIdLabel:                         Omni.i18n.model.Contact.AccountId,
  SalutationLabel:                        Omni.i18n.model.Contact.Salutation,
  FirstNameLabel:                         Omni.i18n.model.Contact.FirstName,
  LastNameLabel:                          Omni.i18n.model.Contact.LastName,
  OtherStreetLabel:                       Omni.i18n.model.Contact.OtherStreet,
  OtherCityLabel:                         Omni.i18n.model.Contact.OtherCity,
  OtherStateLabel:                        Omni.i18n.model.Contact.OtherState,
  OtherPostalCodeLabel:                   Omni.i18n.model.Contact.OtherPostalCode,
  OtherCountryLabel:                      Omni.i18n.model.Contact.OtherCountry,
  OtherLatitudeLabel:                     Omni.i18n.model.Contact.OtherLatitude,
  OtherLongitudeLabel:                    Omni.i18n.model.Contact.OtherLongitude,
  MailingStreetLabel:                     Omni.i18n.model.Contact.MailingStreet,
  MailingCityLabel:                       Omni.i18n.model.Contact.MailingCity,
  MailingStateLabel:                      Omni.i18n.model.Contact.MailingState,
  MailingPostalCodeLabel:                 Omni.i18n.model.Contact.MailingPostalCode,
  MailingCountryLabel:                    Omni.i18n.model.Contact.MailingCountry,
  MailingLatitudeLabel:                   Omni.i18n.model.Contact.MailingLatitude,
  MailingLongitudeLabel:                  Omni.i18n.model.Contact.MailingLongitude,
  PhoneLabel:                             Omni.i18n.model.Contact.Phone,
  FaxLabel:                               Omni.i18n.model.Contact.Fax,
  MobilePhoneLabel:                       Omni.i18n.model.Contact.MobilePhone,
  HomePhoneLabel:                         Omni.i18n.model.Contact.HomePhone,
  OtherPhoneLabel:                        Omni.i18n.model.Contact.OtherPhone,
  AssistantPhoneLabel:                    Omni.i18n.model.Contact.AssistantPhone,
  ReportsToIdLabel:                       Omni.i18n.model.Contact.ReportsToId,
  EmailLabel:                             Omni.i18n.model.Contact.Email,
  TitleLabel:                             Omni.i18n.model.Contact.Title,
  DepartmentLabel:                        Omni.i18n.model.Contact.Department,
  AssistantNameLabel:                     Omni.i18n.model.Contact.AssistantName,
  LeadSourceLabel:                        Omni.i18n.model.Contact.LeadSource,
  BirthdateLabel:                         Omni.i18n.model.Contact.Birthdate,
  DescriptionLabel:                       Omni.i18n.model.Contact.Description,
  OwnerIdLabel:                           Omni.i18n.model.Contact.OwnerId,
  HasOptedOutOfEmailLabel:                Omni.i18n.model.Contact.HasOptedOutOfEmail,
  HasOptedOutOfFaxLabel:                  Omni.i18n.model.Contact.HasOptedOutOfFax,
  DoNotCallLabel:                         Omni.i18n.model.Contact.DoNotCall,
  CreatedDateLabel:                       Omni.i18n.model.Contact.CreatedDate,
  CreatedByIdLabel:                       Omni.i18n.model.Contact.CreatedById,
  LastModifiedDateLabel:                  Omni.i18n.model.Contact.LastModifiedDate,
  LastModifiedByIdLabel:                  Omni.i18n.model.Contact.LastModifiedById,
  SystemModstampLabel:                    Omni.i18n.model.Contact.SystemModstamp,
  LastActivityDateLabel:                  Omni.i18n.model.Contact.LastActivityDate,
  LastCURequestDateLabel:                 Omni.i18n.model.Contact.LastCURequestDate,
  LastCUUpdateDateLabel:                  Omni.i18n.model.Contact.LastCUUpdateDate,
  EmailBouncedReasonLabel:                Omni.i18n.model.Contact.EmailBouncedReason,
  EmailBouncedDateLabel:                  Omni.i18n.model.Contact.EmailBouncedDate,
  JigsawLabel:                            Omni.i18n.model.Contact.Jigsaw,
  JigsawContactIdLabel:                   Omni.i18n.model.Contact.JigsawContactId,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Contacts',
  subtitle:  'Create and maintain Contacts',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.contact_idLabel,                    dataIndex: 'contact_id',                  flex: 1 },    
        // { header: this.IsDeletedLabel,                     dataIndex: 'IsDeleted',                   flex: 1 },    
        // { header: this.MasterRecordIdLabel,                dataIndex: 'MasterRecordId',              flex: 1 },    
        { header: this.AccountIdLabel,                     dataIndex: 'AccountId',                   flex: 1 },    
        // { header: this.SalutationLabel,                    dataIndex: 'Salutation',                  flex: 1 },    
        { header: this.FirstNameLabel,                     dataIndex: 'FirstName',                   flex: 1 },    
        { header: this.LastNameLabel,                      dataIndex: 'LastName',                    flex: 1 },    
        // { header: this.OtherStreetLabel,                   dataIndex: 'OtherStreet',                 flex: 1 },    
        // { header: this.OtherCityLabel,                     dataIndex: 'OtherCity',                   flex: 1 },    
        // { header: this.OtherStateLabel,                    dataIndex: 'OtherState',                  flex: 1 },    
        // { header: this.OtherPostalCodeLabel,               dataIndex: 'OtherPostalCode',             flex: 1 },    
        // { header: this.OtherCountryLabel,                  dataIndex: 'OtherCountry',                flex: 1 },    
        // { header: this.OtherLatitudeLabel,                 dataIndex: 'OtherLatitude',               flex: 1 },    
        // { header: this.OtherLongitudeLabel,                dataIndex: 'OtherLongitude',              flex: 1 },    
        // { header: this.MailingStreetLabel,                 dataIndex: 'MailingStreet',               flex: 1 },    
        // { header: this.MailingCityLabel,                   dataIndex: 'MailingCity',                 flex: 1 },    
        // { header: this.MailingStateLabel,                  dataIndex: 'MailingState',                flex: 1 },    
        // { header: this.MailingPostalCodeLabel,             dataIndex: 'MailingPostalCode',           flex: 1 },    
        // { header: this.MailingCountryLabel,                dataIndex: 'MailingCountry',              flex: 1 },    
        // { header: this.MailingLatitudeLabel,               dataIndex: 'MailingLatitude',             flex: 1 },    
        // { header: this.MailingLongitudeLabel,              dataIndex: 'MailingLongitude',            flex: 1 },    
        { header: this.PhoneLabel,                         dataIndex: 'Phone',                       flex: 1 },    
        // { header: this.FaxLabel,                           dataIndex: 'Fax',                         flex: 1 },    
        // { header: this.MobilePhoneLabel,                   dataIndex: 'MobilePhone',                 flex: 1 },    
        // { header: this.HomePhoneLabel,                     dataIndex: 'HomePhone',                   flex: 1 },    
        // { header: this.OtherPhoneLabel,                    dataIndex: 'OtherPhone',                  flex: 1 },    
        // { header: this.AssistantPhoneLabel,                dataIndex: 'AssistantPhone',              flex: 1 },    
        // { header: this.ReportsToIdLabel,                   dataIndex: 'ReportsToId',                 flex: 1 },    
        { header: this.EmailLabel,                         dataIndex: 'Email',                       flex: 1 },    
        { header: this.TitleLabel,                         dataIndex: 'Title',                       flex: 1 },    
        // { header: this.DepartmentLabel,                    dataIndex: 'Department',                  flex: 1 },    
        // { header: this.AssistantNameLabel,                 dataIndex: 'AssistantName',               flex: 1 },    
        // { header: this.LeadSourceLabel,                    dataIndex: 'LeadSource',                  flex: 1 },    
        // { header: this.BirthdateLabel,                     dataIndex: 'Birthdate',                   flex: 1 },    
        // { header: this.DescriptionLabel,                   dataIndex: 'Description',                 flex: 1 },    
        // { header: this.OwnerIdLabel,                       dataIndex: 'OwnerId',                     flex: 1 },    
        // { header: this.HasOptedOutOfEmailLabel,            dataIndex: 'HasOptedOutOfEmail',          flex: 1 },    
        // { header: this.HasOptedOutOfFaxLabel,              dataIndex: 'HasOptedOutOfFax',            flex: 1 },    
        // { header: this.DoNotCallLabel,                     dataIndex: 'DoNotCall',                   flex: 1 },    
        // { header: this.CreatedDateLabel,                   dataIndex: 'CreatedDate',                 flex: 1 },    
        // { header: this.CreatedByIdLabel,                   dataIndex: 'CreatedById',                 flex: 1 },    
        // { header: this.LastModifiedDateLabel,              dataIndex: 'LastModifiedDate',            flex: 1 },    
        // { header: this.LastModifiedByIdLabel,              dataIndex: 'LastModifiedById',            flex: 1 },    
        // { header: this.SystemModstampLabel,                dataIndex: 'SystemModstamp',              flex: 1 },    
        // { header: this.LastActivityDateLabel,              dataIndex: 'LastActivityDate',            flex: 1 },    
        // { header: this.LastCURequestDateLabel,             dataIndex: 'LastCURequestDate',           flex: 1 },    
        // { header: this.LastCUUpdateDateLabel,              dataIndex: 'LastCUUpdateDate',            flex: 1 },    
        // { header: this.EmailBouncedReasonLabel,            dataIndex: 'EmailBouncedReason',          flex: 1 },    
        // { header: this.EmailBouncedDateLabel,              dataIndex: 'EmailBouncedDate',            flex: 1 },    
        // { header: this.JigsawLabel,                        dataIndex: 'Jigsaw',                      flex: 1 },    
        // { header: this.JigsawContactIdLabel,               dataIndex: 'JigsawContactId',             flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});