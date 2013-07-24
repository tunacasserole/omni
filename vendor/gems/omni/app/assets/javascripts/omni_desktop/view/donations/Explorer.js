Ext.define('Omni.view.donations.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-donations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Donation'),

  contextMenuConfig: {
    xtype: 'omni-donations-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-donations-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-donations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  Note__cLabel:                           Omni.i18n.model.Donation.Note__c,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Donations',
  subtitle:  'Create and maintain Donations',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.donation_idLabel,                   dataIndex: 'donation_id',                 flex: 1 },    
        // { header: this.OwnerIdLabel,                       dataIndex: 'OwnerId',                     flex: 1 },    
        // { header: this.IsDeletedLabel,                     dataIndex: 'IsDeleted',                   flex: 1 },    
        { header: this.NameLabel,                          dataIndex: 'Name',                        flex: 1 },    
        // { header: this.CreatedDateLabel,                   dataIndex: 'CreatedDate',                 flex: 1 },    
        // { header: this.CreatedByIdLabel,                   dataIndex: 'CreatedById',                 flex: 1 },    
        // { header: this.LastModifiedDateLabel,              dataIndex: 'LastModifiedDate',            flex: 1 },    
        // { header: this.LastModifiedByIdLabel,              dataIndex: 'LastModifiedById',            flex: 1 },    
        // { header: this.SystemModstampLabel,                dataIndex: 'SystemModstamp',              flex: 1 },    
        // { header: this.LastActivityDateLabel,              dataIndex: 'LastActivityDate',            flex: 1 },    
        // { header: this.Account__cLabel,                    dataIndex: 'Account__c',                  flex: 1 },    
        { header: this.Date__cLabel,                       dataIndex: 'Date__c',                     flex: 1 },    
        { header: this.Benefit__cLabel,                    dataIndex: 'Benefit__c',                  flex: 1 },    
        { header: this.No_of_Cards__cLabel,                dataIndex: 'No_of_Cards__c',              flex: 1 },    
        { header: this.Amount__cLabel,                     dataIndex: 'Amount__c',                   flex: 1 },    
        { header: this.Recipient__cLabel,                  dataIndex: 'Recipient__c',                flex: 1 },    
        { header: this.Note__cLabel,                       dataIndex: 'Note__c',                     flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});