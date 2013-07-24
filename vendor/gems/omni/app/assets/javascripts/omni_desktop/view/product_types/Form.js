Ext.define('Omni.view.product_types.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-product_types-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.ProductType.display,
      descriptionLabel:                           Omni.i18n.model.ProductType.description,
      short_nameLabel:                            Omni.i18n.model.ProductType.short_name,
      is_fabricLabel:                             Omni.i18n.model.ProductType.is_fabric,
      is_trimLabel:                               Omni.i18n.model.ProductType.is_trim,
      is_convertedLabel:                          Omni.i18n.model.ProductType.is_converted,
      is_laborLabel:                              Omni.i18n.model.ProductType.is_labor,
      is_shippingLabel:                           Omni.i18n.model.ProductType.is_shipping
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
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_fabric',                      fieldLabel: this.is_fabricLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_trim',                        fieldLabel: this.is_trimLabel,                    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_converted',                   fieldLabel: this.is_convertedLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_labor',                       fieldLabel: this.is_laborLabel,                   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_shipping',                    fieldLabel: this.is_shippingLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
