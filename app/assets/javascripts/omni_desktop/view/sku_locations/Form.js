Ext.define('Omni.view.sku_locations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_locations-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.SkuLocation.sku_id,
      location_idLabel:                           Omni.i18n.model.SkuLocation.location_id,
      is_authorizedLabel:                         Omni.i18n.model.SkuLocation.is_authorized,
      is_taxableLabel:                            Omni.i18n.model.SkuLocation.is_taxable,
      is_special_orderLabel:                      Omni.i18n.model.SkuLocation.is_special_order,
      is_discontinuedLabel:                       Omni.i18n.model.SkuLocation.is_discontinued,
      replenishment_methodLabel:                  Omni.i18n.model.SkuLocation.replenishment_method,
      replenishment_sourceLabel:                  Omni.i18n.model.SkuLocation.replenishment_source,
      supplier_idLabel:                           Omni.i18n.model.SkuLocation.supplier_id,
      safety_stock_unitsLabel:                    Omni.i18n.model.SkuLocation.safety_stock_units,
      safety_stock_daysLabel:                     Omni.i18n.model.SkuLocation.safety_stock_days,
      is_override_demand_exceptionLabel:          Omni.i18n.model.SkuLocation.is_override_demand_exception,
      smoothing_factorLabel:                      Omni.i18n.model.SkuLocation.smoothing_factor,
      forecast_profile_idLabel:                   Omni.i18n.model.SkuLocation.forecast_profile_id,
      is_soq_overrideLabel:                       Omni.i18n.model.SkuLocation.is_soq_override,
      minimum_unitsLabel:                         Omni.i18n.model.SkuLocation.minimum_units,
      maximum_unitsLabel:                         Omni.i18n.model.SkuLocation.maximum_units,
      seasonal_index_idLabel:                     Omni.i18n.model.SkuLocation.seasonal_index_id,
      forecastLabel:                              Omni.i18n.model.SkuLocation.forecast,
      economic_orderLabel:                        Omni.i18n.model.SkuLocation.economic_order,
      demand_filter_countLabel:                   Omni.i18n.model.SkuLocation.demand_filter_count,
      tracking_signal_countLabel:                 Omni.i18n.model.SkuLocation.tracking_signal_count,
      tracking_signalLabel:                       Omni.i18n.model.SkuLocation.tracking_signal,
      tracking_signal_signed_deviationLabel:      Omni.i18n.model.SkuLocation.tracking_signal_signed_deviation,
      tracking_signal_absolute_deviationLabel:    Omni.i18n.model.SkuLocation.tracking_signal_absolute_deviation,
      next_review_dateLabel:                      Omni.i18n.model.SkuLocation.next_review_date,
      velocity_codeLabel:                         Omni.i18n.model.SkuLocation.velocity_code,
      standard_deviationLabel:                    Omni.i18n.model.SkuLocation.standard_deviation,
      order_pointLabel:                           Omni.i18n.model.SkuLocation.order_point
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
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: true,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'is_authorized',                  fieldLabel: this.is_authorizedLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_taxable',                     fieldLabel: this.is_taxableLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_special_order',               fieldLabel: this.is_special_orderLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_discontinued',                fieldLabel: this.is_discontinuedLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
       // ,{
       //    xtype: 'fieldset',
       //    title: 'Replenishment',
       //    collapsible: true,
       //    defaultType: 'textfield',
       //    defaults: {anchor: '70%'},
       //    layout: 'anchor',
       //    items:[
       //      { name: 'replenishment_method',           fieldLabel: this.replenishment_methodLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_METHOD' },
       //      { name: 'replenishment_source',           fieldLabel: this.replenishment_sourceLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_SOURCE' },
       //      { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
       //      { name: 'safety_stock_units',             fieldLabel: this.safety_stock_unitsLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'safety_stock_days',              fieldLabel: this.safety_stock_daysLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'is_override_demand_exception',   fieldLabel: this.is_override_demand_exceptionLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
       //      { name: 'smoothing_factor',               fieldLabel: this.smoothing_factorLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'forecast_profile_id',            fieldLabel: this.forecast_profile_idLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ForecastProfile',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'forecast_profile_id', itemTpl:'{display}' },
       //      { name: 'is_soq_override',                fieldLabel: this.is_soq_overrideLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
       //      { name: 'minimum_units',                  fieldLabel: this.minimum_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'maximum_units',                  fieldLabel: this.maximum_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'seasonal_index_id',              fieldLabel: this.seasonal_index_idLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SeasonalIndex',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'seasonal_index_id', itemTpl:'{display}' },
       //      { name: 'forecast',                       fieldLabel: this.forecastLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'economic_order',                 fieldLabel: this.economic_orderLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'demand_filter_count',            fieldLabel: this.demand_filter_countLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'tracking_signal_count',          fieldLabel: this.tracking_signal_countLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'tracking_signal',                fieldLabel: this.tracking_signalLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'tracking_signal_signed_deviation',fieldLabel: this.tracking_signal_signed_deviationLabel,allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'tracking_signal_absolute_deviation',fieldLabel: this.tracking_signal_absolute_deviationLabel,allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'next_review_date',               fieldLabel: this.next_review_dateLabel,           allowBlank: true,   disabled: false,    xtype: 'datefield'        },
       //      { name: 'velocity_code',                  fieldLabel: this.velocity_codeLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'standard_deviation',             fieldLabel: this.standard_deviationLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
       //      { name: 'order_point',                    fieldLabel: this.order_pointLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
       //    ]
       //  }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit SKU Locations',
      newTitle: 'New SKU Location',
      newSubtitle: 'Complete the following to create a new SKU Location'
    });
    // TITLES (End)

    this.callParent();
  }

});
