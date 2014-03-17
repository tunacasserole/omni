Ext.define('Omni.view.gl_accounts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-gl_accounts-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.GlAccount.display,
      gl_main_accountLabel:                       Omni.i18n.model.GlAccount.gl_main_account,
      gl_sub_accountLabel:                        Omni.i18n.model.GlAccount.gl_sub_account,
      is_location_fillLabel:                      Omni.i18n.model.GlAccount.is_location_fill,
      gl_account_typeLabel:                       Omni.i18n.model.GlAccount.gl_account_type
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'gl_main_account',                fieldLabel: this.gl_main_accountLabel,            allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'gl_sub_account',                 fieldLabel: this.gl_sub_accountLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_location_fill',               fieldLabel: this.is_location_fillLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'gl_account_type',                 fieldLabel: this.gl_account_typeLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'GL_ACCOUNT_TYPE' },
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
