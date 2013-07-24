Ext.define('Omni.view.areas.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-areas-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.Area.location_id,
      area_nbrLabel:                              Omni.i18n.model.Area.area_nbr,
      descriptionLabel:                           Omni.i18n.model.Area.description,
      short_nameLabel:                            Omni.i18n.model.Area.short_name,
      is_receivingLabel:                          Omni.i18n.model.Area.is_receiving,
      is_pickingLabel:                            Omni.i18n.model.Area.is_picking,
      is_reserveLabel:                            Omni.i18n.model.Area.is_reserve,
      is_putawayLabel:                            Omni.i18n.model.Area.is_putaway,
      is_supplier_returnLabel:                    Omni.i18n.model.Area.is_supplier_return,
      is_processingLabel:                         Omni.i18n.model.Area.is_processing,
      is_shippingLabel:                           Omni.i18n.model.Area.is_shipping,
      is_put_locationLabel:                       Omni.i18n.model.Area.is_put_location,
      is_special_handlingLabel:                   Omni.i18n.model.Area.is_special_handling,
      is_quality_controlLabel:                    Omni.i18n.model.Area.is_quality_control,
      is_quick_caseLabel:                         Omni.i18n.model.Area.is_quick_case,
      is_many_sku_per_binLabel:                   Omni.i18n.model.Area.is_many_sku_per_bin,
      default_cube_capacityLabel:                 Omni.i18n.model.Area.default_cube_capacity,
      is_request_cube_calculationLabel:           Omni.i18n.model.Area.is_request_cube_calculation,
      last_utilization_calc_dateLabel:            Omni.i18n.model.Area.last_utilization_calc_date
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
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'area_nbr',                       fieldLabel: this.area_nbrLabel,                   allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: false,  disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Area Attributes',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_receiving',                   fieldLabel: this.is_receivingLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_picking',                     fieldLabel: this.is_pickingLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_reserve',                     fieldLabel: this.is_reserveLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_putaway',                     fieldLabel: this.is_putawayLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_supplier_return',             fieldLabel: this.is_supplier_returnLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_processing',                  fieldLabel: this.is_processingLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_shipping',                    fieldLabel: this.is_shippingLabel,                allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_put_location',                fieldLabel: this.is_put_locationLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_special_handling',            fieldLabel: this.is_special_handlingLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_quality_control',             fieldLabel: this.is_quality_controlLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_quick_case',                  fieldLabel: this.is_quick_caseLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Bin Level Defaults',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_many_sku_per_bin',            fieldLabel: this.is_many_sku_per_binLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'default_cube_capacity',          fieldLabel: this.default_cube_capacityLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Area Process Control',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_request_cube_calculation',    fieldLabel: this.is_request_cube_calculationLabel,allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'last_utilization_calc_date',     fieldLabel: this.last_utilization_calc_dateLabel, allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
