Ext.define('Omni.view.customer_accounts.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-customer_accounts-Form',


  // LABELS (Start) =======================================================================
  customer_account_idLabel                : Omni.i18n.model.CustomerAccount.customer_account_id,
  displayLabel                            : Omni.i18n.model.CustomerAccount.display,
  customer_idLabel                        : Omni.i18n.model.CustomerAccount.customer_id,
  account_idLabel                         : Omni.i18n.model.CustomerAccount.account_id,
  commentLabel                            : Omni.i18n.model.CustomerAccount.comment,
  is_contactLabel                         : Omni.i18n.model.CustomerAccount.is_contact,
  is_teacherLabel                         : Omni.i18n.model.CustomerAccount.is_teacher,
  is_administratorLabel                   : Omni.i18n.model.CustomerAccount.is_administrator,
  is_destroyedLabel                       : Omni.i18n.model.CustomerAccount.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'customer_account_id',
      value       : this.record.get('customer_account_id')
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
    {
      xtype        : 'textfield',
      name         : 'display',
      fieldLabel   : me.displayLabel,
      maxLength    : 300,
      minLength    : 0,
      allowBlank   : false
    },
    {
      xtype        : 'buildit-Locator',
      store        : Ext.create('Omni.store.Customer',{pageSize: 10}),
      displayField : 'display_as',
      itemTpl      : '{display_as}',
      name         : 'customer_id',
      fieldLabel   : me.customer_idLabel,
      initialValue : me.record.get('display_as'),
      allowBlank   : false
    },
    {
      xtype        : 'buildit-Locator',
      store        : Ext.create('Omni.store.Account',{pageSize: 10}),
      displayField : 'display_as',
      itemTpl      : '{display_as}',
      name         : 'account_id',
      fieldLabel   : me.account_idLabel,
      initialValue : me.record.get('display_as'),
      allowBlank   : false
    },
    {
      xtype        : 'textfield',
      name         : 'comment',
      fieldLabel   : me.commentLabel,
      maxLength    : 4000,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'checkbox',
      name         : 'is_contact',
      fieldLabel   : me.is_contactLabel
    },
    {
      xtype        : 'checkbox',
      name         : 'is_teacher',
      fieldLabel   : me.is_teacherLabel
    },
    {
      xtype        : 'checkbox',
      name         : 'is_administrator',
      fieldLabel   : me.is_administratorLabel
    },
    {
      xtype        : 'checkbox',
      name         : 'is_destroyed',
      fieldLabel   : me.is_destroyedLabel
    }
          ]
        }/*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/          
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Customer Account',
      subtitle    : 'Edit Customer Account'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.customer_accounts.Form'