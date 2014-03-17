Ext.define('Omni.view.shipping_rates.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-shipping_rates-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      supplier_idLabel:                           Omni.i18n.model.ShippingRate.supplier_id,
      shipping_rate_nameLabel:                    Omni.i18n.model.ShippingRate.shipping_rate_name,
      shipping_chargeLabel:                       Omni.i18n.model.ShippingRate.shipping_charge,
      minimum_saleLabel:                          Omni.i18n.model.ShippingRate.minimum_sale,
      maximum_saleLabel:                          Omni.i18n.model.ShippingRate.maximum_sale
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
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'shipping_rate_name',             fieldLabel: this.shipping_rate_nameLabel,         allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'shipping_charge',                fieldLabel: this.shipping_chargeLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'minimum_sale',                   fieldLabel: this.minimum_saleLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'maximum_sale',                   fieldLabel: this.maximum_saleLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
