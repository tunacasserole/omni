Ext.define('Omni.view.contacts.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-contacts-Form',


  // LABELS (Start) =======================================================================
  contact_idLabel                         : Omni.i18n.model.Contact.contact_id,
  account_idLabel                         : Omni.i18n.model.Contact.account_id,
  displayLabel                            : Omni.i18n.model.Contact.display,
  name_prefixLabel                        : Omni.i18n.model.Contact.name_prefix,
  name_suffixLabel                        : Omni.i18n.model.Contact.name_suffix,
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


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'contact_id',
      value       : this.record.get('contact_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Account',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'account_id',
            //   fieldLabel   : me.account_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : false
            // },
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : false
            // },
            {
              xtype        : 'buildit-Lookup',
              name         : 'name_prefix',
              fieldLabel   : me.name_prefixLabel,
              category     : 'NAME_PREFIX',
              lkp          : 'code',
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'first_name',
              fieldLabel   : me.first_nameLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'last_name',
              fieldLabel   : me.last_nameLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'buildit-Lookup',
              name         : 'name_suffix',
              fieldLabel   : me.name_suffixLabel,
              category     : 'NAME_SUFFIX',
              lkp          : 'code',
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'job_title',
              fieldLabel   : me.job_titleLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            }
          ]
        },
        {
          xtype        : 'fieldset',
          title        : 'Contact Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
                      {
              xtype        : 'textfield',
              name         : 'line_1',
              fieldLabel   : me.line_1Label,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'line_2',
              fieldLabel   : me.line_2Label,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'city',
              fieldLabel   : me.cityLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Lookup',
              name         : 'state_code',
              fieldLabel   : me.state_codeLabel,
              category     : 'STATE_CODE',
              lkp          : 'code',
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'zip',
              fieldLabel   : me.zipLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'country',
              fieldLabel   : me.countryLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'phone',
              fieldLabel   : me.phoneLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'other_phone',
              fieldLabel   : me.other_phoneLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'fax',
              fieldLabel   : me.faxLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'email_address',
              fieldLabel   : me.email_addressLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'checkbox',
              name         : 'is_do_not_email',
              fieldLabel   : me.is_do_not_emailLabel
            },
            {
              xtype        : 'checkbox',
              name         : 'is_do_not_mail',
              fieldLabel   : me.is_do_not_mailLabel
            },
            {
              xtype        : 'checkbox',
              name         : 'is_do_not_call',
              fieldLabel   : me.is_do_not_callLabel
            },
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================

    Ext.applyIf(this, {
      title       : 'Contact',
      subtitle    : 'Edit Contact'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.contacts.Form'
