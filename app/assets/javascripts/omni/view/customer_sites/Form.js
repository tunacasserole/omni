Ext.define('Omni.view.customer_accounts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-customer_accounts-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      customer_idLabel:                           Omni.i18n.model.CustomerAccount.customer_id,
      account_idLabel:                               Omni.i18n.model.CustomerAccount.account_id,
      commentLabel:                               Omni.i18n.model.CustomerAccount.comment,
      is_contactLabel:                       Omni.i18n.model.CustomerAccount.is_contact,
      is_teacherLabel:                            Omni.i18n.model.CustomerAccount.is_teacher,
      is_administratorLabel:                      Omni.i18n.model.CustomerAccount.is_administrator
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'customer_id',                    fieldLabel: this.customer_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Customer',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'customer_id', itemTpl:'{display}' },
            { name: 'account_id',                        fieldLabel: this.account_idLabel,                    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Account',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'account_id', itemTpl:'{display}' },
            { name: 'comment',                        fieldLabel: this.commentLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_contact',                fieldLabel: this.is_contactLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_teacher',                     fieldLabel: this.is_teacherLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_administrator',               fieldLabel: this.is_administratorLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
