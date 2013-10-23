Ext.define('Omni.view.style_locations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-style_locations-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      style_idLabel:                              Omni.i18n.model.StyleLocation.style_id,
      stateLabel:                                 Omni.i18n.model.StyleColor.state,
      location_idLabel:                           Omni.i18n.model.StyleLocation.location_id,
      is_authorizedLabel:                         Omni.i18n.model.StyleLocation.is_authorized,
      is_taxableLabel:                            Omni.i18n.model.StyleLocation.is_taxable,
      is_special_orderLabel:                      Omni.i18n.model.StyleLocation.is_special_order,
      is_discontinuedLabel:                       Omni.i18n.model.StyleLocation.is_discontinued,
      replenishment_methodLabel:                  Omni.i18n.model.StyleLocation.replenishment_method,
      replenishment_sourceLabel:                  Omni.i18n.model.StyleLocation.replenishment_source,
      supplier_idLabel:                           Omni.i18n.model.StyleLocation.supplier_id,
      safety_stock_unitsLabel:                    Omni.i18n.model.StyleLocation.safety_stock_units,
      safety_stock_daysLabel:                     Omni.i18n.model.StyleLocation.safety_stock_days,
      is_override_demand_exceptionLabel:          Omni.i18n.model.StyleLocation.is_override_demand_exception,
      smoothing_factorLabel:                      Omni.i18n.model.StyleLocation.smoothing_factor,
      forecast_profile_idLabel:                   Omni.i18n.model.StyleLocation.forecast_profile_id,
      is_soq_overrideLabel:                       Omni.i18n.model.StyleLocation.is_soq_override,
      minimum_unitsLabel:                         Omni.i18n.model.StyleLocation.minimum_units,
      maximum_unitsLabel:                         Omni.i18n.model.StyleLocation.maximum_units,
      seasonal_index_idLabel:                     Omni.i18n.model.StyleLocation.seasonal_index_id
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
            { name: 'style_id',                       fieldLabel: this.style_idLabel,                   allowBlank: true,   disabled: true,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Style',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: true,     xtype: 'textfield'        },
            { name: 'is_authorized',                  fieldLabel: this.is_authorizedLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_taxable',                     fieldLabel: this.is_taxableLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_special_order',               fieldLabel: this.is_special_orderLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_discontinued',                fieldLabel: this.is_discontinuedLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
        // ,
        // {
        //   xtype: 'fieldset',
        //   title: 'Replenishment Information',
        //   collapsible: true,
        //   defaultType: 'textfield',
        //   defaults: {anchor: '70%'},
        //   layout: 'anchor',
        //   items:[
        //     { name: 'replenishment_method',           fieldLabel: this.replenishment_methodLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_METHOD' },
        //     { name: 'replenishment_source',           fieldLabel: this.replenishment_sourceLabel,       allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'REPLENISHMENT_SOURCE' },
        //     { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
        //     { name: 'safety_stock_units',             fieldLabel: this.safety_stock_unitsLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
        //     { name: 'safety_stock_days',              fieldLabel: this.safety_stock_daysLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
        //     { name: 'is_override_demand_exception',   fieldLabel: this.is_override_demand_exceptionLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
        //     { name: 'smoothing_factor',               fieldLabel: this.smoothing_factorLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
        //     { name: 'forecast_profile_id',            fieldLabel: this.forecast_profile_idLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ForecastProfile',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'forecast_profile_id', itemTpl:'{display}' },
        //     { name: 'is_soq_override',                fieldLabel: this.is_soq_overrideLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
        //     { name: 'minimum_units',                  fieldLabel: this.minimum_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
        //     { name: 'maximum_units',                  fieldLabel: this.maximum_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
        //     { name: 'seasonal_index_id',              fieldLabel: this.seasonal_index_idLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SeasonalIndex',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'seasonal_index_id', itemTpl:'{display}' }
        //   ]
        // }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
