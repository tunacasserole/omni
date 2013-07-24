Ext.define('Omni.view.sku_promo_prices.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_promo_prices-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.SkuPromoPrice.sku_id,
      price_book_idLabel:                         Omni.i18n.model.SkuPromoPrice.price_book_id,
      effective_dateLabel:                        Omni.i18n.model.SkuPromoPrice.effective_date,
      end_dateLabel:                              Omni.i18n.model.SkuPromoPrice.end_date,
      regular_unitsLabel:                         Omni.i18n.model.SkuPromoPrice.regular_units,
      promo_unitsLabel:                           Omni.i18n.model.SkuPromoPrice.promo_units,
      promo_percentLabel:                         Omni.i18n.model.SkuPromoPrice.promo_percent,
      promo_amountLabel:                          Omni.i18n.model.SkuPromoPrice.promo_amount,
      promo_priceLabel:                           Omni.i18n.model.SkuPromoPrice.promo_price,
      maximum_promo_unitsLabel:                   Omni.i18n.model.SkuPromoPrice.maximum_promo_units,
      sales_categoryLabel:                        Omni.i18n.model.SkuPromoPrice.sales_category,
      promotion_idLabel:                          Omni.i18n.model.SkuPromoPrice.promotion_id
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
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'regular_units',                  fieldLabel: this.regular_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_units',                    fieldLabel: this.promo_unitsLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_percent',                  fieldLabel: this.promo_percentLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_amount',                   fieldLabel: this.promo_amountLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promo_price',                    fieldLabel: this.promo_priceLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'maximum_promo_units',            fieldLabel: this.maximum_promo_unitsLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'sales_category',                 fieldLabel: this.sales_categoryLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'promotion_id',                   fieldLabel: this.promotion_idLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
