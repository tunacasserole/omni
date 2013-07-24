Ext.define('Omni.view.donations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-donations-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'donation_id',
      value:      this.record.get('donation_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      donation_idLabel:                       Omni.i18n.model.Donation.donation_id,    
      OwnerIdLabel:                           Omni.i18n.model.Donation.OwnerId,    
      IsDeletedLabel:                         Omni.i18n.model.Donation.IsDeleted,    
      NameLabel:                              Omni.i18n.model.Donation.Name,    
      CreatedDateLabel:                       Omni.i18n.model.Donation.CreatedDate,    
      CreatedByIdLabel:                       Omni.i18n.model.Donation.CreatedById,    
      LastModifiedDateLabel:                  Omni.i18n.model.Donation.LastModifiedDate,    
      LastModifiedByIdLabel:                  Omni.i18n.model.Donation.LastModifiedById,    
      SystemModstampLabel:                    Omni.i18n.model.Donation.SystemModstamp,    
      LastActivityDateLabel:                  Omni.i18n.model.Donation.LastActivityDate,    
      Account__cLabel:                        Omni.i18n.model.Donation.Account__c,    
      Date__cLabel:                           Omni.i18n.model.Donation.Date__c,    
      Benefit__cLabel:                        Omni.i18n.model.Donation.Benefit__c,    
      No_of_Cards__cLabel:                    Omni.i18n.model.Donation.No_of_Cards__c,    
      Amount__cLabel:                         Omni.i18n.model.Donation.Amount__c,    
      Recipient__cLabel:                      Omni.i18n.model.Donation.Recipient__c,    
      Note__cLabel:                           Omni.i18n.model.Donation.Note__c    
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

            { xtype: 'textfield', name: 'donation_id',                    fieldLabel: this.donation_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'OwnerId',                        fieldLabel: this.OwnerIdLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'IsDeleted',                      fieldLabel: this.IsDeletedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Name',                           fieldLabel: this.NameLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedDate',                    fieldLabel: this.CreatedDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedById',                    fieldLabel: this.CreatedByIdLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedDate',               fieldLabel: this.LastModifiedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedById',               fieldLabel: this.LastModifiedByIdLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SystemModstamp',                 fieldLabel: this.SystemModstampLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'LastActivityDate',               fieldLabel: this.LastActivityDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'Account__c',                     fieldLabel: this.Account__cLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'Date__c',                        fieldLabel: this.Date__cLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'Benefit__c',                     fieldLabel: this.Benefit__cLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'No_of_Cards__c',                 fieldLabel: this.No_of_Cards__cLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'Amount__c',                      fieldLabel: this.Amount__cLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Recipient__c',                   fieldLabel: this.Recipient__cLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'Note__c',                        fieldLabel: this.Note__cLabel                     , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Donations',
      newTitle: 'New Donation',
      newSubtitle: 'Complete the following to create a new Donation'
    });
    // TITLES (End)

    this.callParent();
    
  }

});