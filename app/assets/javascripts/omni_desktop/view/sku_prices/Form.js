Ext.define('Omni.view.sku_prices.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_prices-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.SkuPrice.sku_id,
      price_book_idLabel:                         Omni.i18n.model.SkuPrice.price_book_id,
      effective_dateLabel:                        Omni.i18n.model.SkuPrice.effective_date,
      retail_priceLabel:                          Omni.i18n.model.SkuPrice.retail_price,
      price_unitsLabel:                           Omni.i18n.model.SkuPrice.price_units,
      sales_categoryLabel:                        Omni.i18n.model.SkuPrice.sales_category,
      price_change_idLabel:                       Omni.i18n.model.SkuPrice.price_change_id
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
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'price_book_id',                  fieldLabel: this.price_book_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceBook',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_book_id', itemTpl:'{display}' },
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'retail_price',                   fieldLabel: this.retail_priceLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'price_units',                    fieldLabel: this.price_unitsLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sales_category',                 fieldLabel: this.sales_categoryLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'SALES_CATEGORY' },
            { name: 'price_change_id',                fieldLabel: this.price_change_idLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PriceChange',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'price_change_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
