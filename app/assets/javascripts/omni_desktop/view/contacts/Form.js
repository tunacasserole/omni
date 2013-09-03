Ext.define('Omni.view.contacts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-contacts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'contact_id',
      value:      this.record.get('contact_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
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
      JigsawContactIdLabel:                   Omni.i18n.model.Contact.JigsawContactId    
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

            { xtype: 'textfield', name: 'contact_id',                     fieldLabel: this.contact_idLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'IsDeleted',                      fieldLabel: this.IsDeletedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'MasterRecordId',                 fieldLabel: this.MasterRecordIdLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'AccountId',                      fieldLabel: this.AccountIdLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Salutation',                     fieldLabel: this.SalutationLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'FirstName',                      fieldLabel: this.FirstNameLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'LastName',                       fieldLabel: this.LastNameLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherStreet',                    fieldLabel: this.OtherStreetLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherCity',                      fieldLabel: this.OtherCityLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherState',                     fieldLabel: this.OtherStateLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherPostalCode',                fieldLabel: this.OtherPostalCodeLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherCountry',                   fieldLabel: this.OtherCountryLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherLatitude',                  fieldLabel: this.OtherLatitudeLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherLongitude',                 fieldLabel: this.OtherLongitudeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingStreet',                  fieldLabel: this.MailingStreetLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingCity',                    fieldLabel: this.MailingCityLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingState',                   fieldLabel: this.MailingStateLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingPostalCode',              fieldLabel: this.MailingPostalCodeLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingCountry',                 fieldLabel: this.MailingCountryLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingLatitude',                fieldLabel: this.MailingLatitudeLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'MailingLongitude',               fieldLabel: this.MailingLongitudeLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'Phone',                          fieldLabel: this.PhoneLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Fax',                            fieldLabel: this.FaxLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'MobilePhone',                    fieldLabel: this.MobilePhoneLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'HomePhone',                      fieldLabel: this.HomePhoneLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'OtherPhone',                     fieldLabel: this.OtherPhoneLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'AssistantPhone',                 fieldLabel: this.AssistantPhoneLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'ReportsToId',                    fieldLabel: this.ReportsToIdLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Email',                          fieldLabel: this.EmailLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Title',                          fieldLabel: this.TitleLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Department',                     fieldLabel: this.DepartmentLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'AssistantName',                  fieldLabel: this.AssistantNameLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'LeadSource',                     fieldLabel: this.LeadSourceLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'Birthdate',                      fieldLabel: this.BirthdateLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Description',                    fieldLabel: this.DescriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'OwnerId',                        fieldLabel: this.OwnerIdLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'HasOptedOutOfEmail',             fieldLabel: this.HasOptedOutOfEmailLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'HasOptedOutOfFax',               fieldLabel: this.HasOptedOutOfFaxLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'DoNotCall',                      fieldLabel: this.DoNotCallLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedDate',                    fieldLabel: this.CreatedDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedById',                    fieldLabel: this.CreatedByIdLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedDate',               fieldLabel: this.LastModifiedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedById',               fieldLabel: this.LastModifiedByIdLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SystemModstamp',                 fieldLabel: this.SystemModstampLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'LastActivityDate',               fieldLabel: this.LastActivityDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'LastCURequestDate',              fieldLabel: this.LastCURequestDateLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'LastCUUpdateDate',               fieldLabel: this.LastCUUpdateDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'EmailBouncedReason',             fieldLabel: this.EmailBouncedReasonLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'EmailBouncedDate',               fieldLabel: this.EmailBouncedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'Jigsaw',                         fieldLabel: this.JigsawLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'JigsawContactId',                fieldLabel: this.JigsawContactIdLabel             , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Contacts',
      newTitle: 'New Contact',
      newSubtitle: 'Complete the following to create a new Contact'
    });
    // TITLES (End)

    this.callParent();
    
  }

});