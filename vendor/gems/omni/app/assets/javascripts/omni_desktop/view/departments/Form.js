Ext.define('Omni.view.departments.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-departments-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Department.display,
      department_nbrLabel:                        Omni.i18n.model.Department.department_nbr,
      descriptionLabel:                           Omni.i18n.model.Department.description,
      short_nameLabel:                            Omni.i18n.model.Department.short_name,
      buyer_user_idLabel:                         Omni.i18n.model.Department.buyer_user_id,
      company_idLabel:                            Omni.i18n.model.Department.company_id
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'department_nbr',                 fieldLabel: this.department_nbrLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'buyer_user_id',                  fieldLabel: this.buyer_user_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'company_id',                     fieldLabel: this.company_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Company',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'company_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Department',
      subtitle:      'First level of the Product Hierarchy',
      newTitle:      'Department',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
