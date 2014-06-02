Ext.define('Omni.view.contacts.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-contacts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-contacts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-contacts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  contact_idLabel                         : Omni.i18n.model.Contact.contact_id,
  account_idLabel                         : Omni.i18n.model.Contact.account_id,
  displayLabel                            : Omni.i18n.model.Contact.display,
  name_prefixLabel                        : Omni.i18n.model.Contact.name_prefix,
  first_nameLabel                         : Omni.i18n.model.Contact.first_name,
  last_nameLabel                          : Omni.i18n.model.Contact.last_name,
  job_titleLabel                          : Omni.i18n.model.Contact.job_title,
  line_1Label                             : Omni.i18n.model.Contact.line_1,
  line_2Label                             : Omni.i18n.model.Contact.line_2,
  cityLabel                               : Omni.i18n.model.Contact.city,
  state_codeLabel                         : Omni.i18n.model.Contact.state_code,
  zipLabel                                : Omni.i18n.model.Contact.zip,
  countryLabel                            : Omni.i18n.model.Contact.country,
  phoneLabel                              : Omni.i18n.model.Contact.phone,
  other_phoneLabel                        : Omni.i18n.model.Contact.other_phone,
  faxLabel                                : Omni.i18n.model.Contact.fax,
  email_addressLabel                      : Omni.i18n.model.Contact.email_address,
  is_do_not_emailLabel                    : Omni.i18n.model.Contact.is_do_not_email,
  is_do_not_mailLabel                     : Omni.i18n.model.Contact.is_do_not_mail,
  is_do_not_callLabel                     : Omni.i18n.model.Contact.is_do_not_call,
  is_destroyedLabel                       : Omni.i18n.model.Contact.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Contacts',
  subtitle : 'Create and maintain Contacts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Contact')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.first_nameLabel,
          dataIndex    : 'first_name',
          flex         : 1
        },
        {
          header       : me.last_nameLabel,
          dataIndex    : 'last_name',
          flex         : 1
        },
        {
          header       : me.job_titleLabel,
          dataIndex    : 'job_title',
          flex         : 1
        },
        {
          header       : me.phoneLabel,
          dataIndex    : 'phone',
          flex         : 1
        },
        {
          header       : me.email_addressLabel,
          dataIndex    : 'email_address',
          flex         : 1
        }
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_do_not_emailLabel,
        //   dataIndex    : 'is_do_not_email',
        //   flex         : 1
        // },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_do_not_mailLabel,
        //   dataIndex    : 'is_do_not_mail',
        //   flex         : 1
        // },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_do_not_callLabel,
        //   dataIndex    : 'is_do_not_call',
        //   flex         : 1
        // },
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
