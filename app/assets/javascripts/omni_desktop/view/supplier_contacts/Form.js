Ext.define('Omni.view.supplier_contacts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-supplier_contacts-Form',



  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'supplier_contact_id',
      value:      this.record.get('supplier_contact_id')
    };
    // FILTER (End)

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      supplier_idLabel:                           Omni.i18n.model.SupplierContact.supplier_id,
      first_nameLabel:                            Omni.i18n.model.SupplierContact.first_name,
      last_nameLabel:                             Omni.i18n.model.SupplierContact.last_name,
      name_prefixLabel:                           Omni.i18n.model.SupplierContact.name_prefix,
      name_suffixLabel:                           Omni.i18n.model.SupplierContact.name_suffix,
      departmentLabel:                            Omni.i18n.model.SupplierContact.department,
      job_titleLabel:                             Omni.i18n.model.SupplierContact.job_title,
      is_order_contactLabel:                      Omni.i18n.model.SupplierContact.is_order_contact,
      is_return_contactLabel:                     Omni.i18n.model.SupplierContact.is_return_contact,
      is_payment_contactLabel:                    Omni.i18n.model.SupplierContact.is_payment_contact,
      is_executive_contactLabel:                  Omni.i18n.model.SupplierContact.is_executive_contact,
      phoneLabel:                                 Omni.i18n.model.SupplierContact.phone,
      faxLabel:                                   Omni.i18n.model.SupplierContact.fax,
      email_addressLabel:                         Omni.i18n.model.SupplierContact.email_address
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
            // { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'first_name',                     fieldLabel: this.first_nameLabel,                 allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'last_name',                      fieldLabel: this.last_nameLabel,                  allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'name_prefix',                    fieldLabel: this.name_prefixLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'NAME_PREFIX' },
            { name: 'name_suffix',                    fieldLabel: this.name_suffixLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'NAME_SUFFIX' },
            { name: 'department',                     fieldLabel: this.departmentLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'job_title',                      fieldLabel: this.job_titleLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_order_contact',               fieldLabel: this.is_order_contactLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_return_contact',              fieldLabel: this.is_return_contactLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_payment_contact',             fieldLabel: this.is_payment_contactLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_executive_contact',           fieldLabel: this.is_executive_contactLabel,       allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Phone and Email',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'phone',                          fieldLabel: this.phoneLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'fax',                            fieldLabel: this.faxLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'email_address',                  fieldLabel: this.email_addressLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Supplier',
      newTitle: 'New Supplier',
      newSubtitle: 'Complete the following to create a new Supplier.'
    });
    // TITLES (End)

    this.callParent();
  }

});
