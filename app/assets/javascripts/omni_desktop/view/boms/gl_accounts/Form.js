Ext.define('Omni.view.gl_accounts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-gl_accounts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'gl_account_id',
      value:      this.record.get('gl_account_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      gl_account_idLabel:                     Omni.i18n.model.GlAccount.gl_account_id,    
      displayLabel:                           Omni.i18n.model.GlAccount.display,    
      gl_main_accountLabel:                   Omni.i18n.model.GlAccount.gl_main_account,    
      gl_sub_accountLabel:                    Omni.i18n.model.GlAccount.gl_sub_account,    
      is_location_fillLabel:                  Omni.i18n.model.GlAccount.is_location_fill,    
      gl_account_typeLabel:                   Omni.i18n.model.GlAccount.gl_account_type,    
      is_destroyedLabel:                      Omni.i18n.model.GlAccount.is_destroyed    
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

            { xtype: 'textfield', name: 'gl_account_id',                  fieldLabel: this.gl_account_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'gl_main_account',                fieldLabel: this.gl_main_accountLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'gl_sub_account',                 fieldLabel: this.gl_sub_accountLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'is_location_fill',               fieldLabel: this.is_location_fillLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'gl_account_type',                fieldLabel: this.gl_account_typeLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit GlAccounts',
      newTitle: 'New Gl Account',
      newSubtitle: 'Complete the following to create a new Gl Account'
    });
    // TITLES (End)

    this.callParent();
    
  }

});