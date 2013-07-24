Ext.define('Omni.view.program_styles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-program_styles-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      program_product_idLabel:                    Omni.i18n.model.ProgramStyle.program_product_id,
      style_idLabel:                              Omni.i18n.model.ProgramStyle.style_id,
      retail_priceLabel:                          Omni.i18n.model.ProgramStyle.retail_price,
      price_unitsLabel:                           Omni.i18n.model.ProgramStyle.price_units
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
            { name: 'program_product_id',             fieldLabel: this.program_product_idLabel,         allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ProgramProduct',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'program_product_id', itemTpl:'{display}' },
            { name: 'style_id',                       fieldLabel: this.style_idLabel,                   allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Style',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_id', itemTpl:'{display}' },
            { name: 'retail_price',                   fieldLabel: this.retail_priceLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'price_units',                    fieldLabel: this.price_unitsLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
