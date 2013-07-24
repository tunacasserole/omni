Ext.define('Omni.view.work_orders.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-work_orders-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel:                                 Omni.i18n.model.WorkOrder.state,
      work_order_nbrLabel:                        Omni.i18n.model.WorkOrder.work_order_nbr,
      production_location_idLabel:                Omni.i18n.model.WorkOrder.production_location_id,
      supplier_idLabel:                           Omni.i18n.model.WorkOrder.supplier_id,
      work_order_descriptionLabel:                Omni.i18n.model.WorkOrder.work_order_description,
      work_order_typeLabel:                       Omni.i18n.model.WorkOrder.work_order_type,
      sku_idLabel:                                Omni.i18n.model.WorkOrder.sku_id,
      request_unitsLabel:                         Omni.i18n.model.WorkOrder.request_units,
      complete_unitsLabel:                        Omni.i18n.model.WorkOrder.complete_units,
      release_dateLabel:                          Omni.i18n.model.WorkOrder.release_date,
      start_dateLabel:                            Omni.i18n.model.WorkOrder.start_date,
      complete_dateLabel:                         Omni.i18n.model.WorkOrder.complete_date,
      target_complete_dateLabel:                  Omni.i18n.model.WorkOrder.target_complete_date,
      weightLabel:                                Omni.i18n.model.WorkOrder.weight,
      heightLabel:                                Omni.i18n.model.WorkOrder.height,
      bustLabel:                                  Omni.i18n.model.WorkOrder.bust,
      waistLabel:                                 Omni.i18n.model.WorkOrder.waist,
      high_hipLabel:                              Omni.i18n.model.WorkOrder.high_hip,
      hipLabel:                                   Omni.i18n.model.WorkOrder.hip,
      across_shoulder_frontLabel:                 Omni.i18n.model.WorkOrder.across_shoulder_front,
      across_shoulder_backLabel:                  Omni.i18n.model.WorkOrder.across_shoulder_back,
      shoulder_lengthLabel:                       Omni.i18n.model.WorkOrder.shoulder_length,
      back_lengthLabel:                           Omni.i18n.model.WorkOrder.back_length,
      hps_to_waistLabel:                          Omni.i18n.model.WorkOrder.hps_to_waist,
      neck_circumferenceLabel:                    Omni.i18n.model.WorkOrder.neck_circumference,
      arm_circumferenceLabel:                     Omni.i18n.model.WorkOrder.arm_circumference,
      wrist_circumferenceLabel:                   Omni.i18n.model.WorkOrder.wrist_circumference,
      inseamLabel:                                Omni.i18n.model.WorkOrder.inseam,
      outseamLabel:                               Omni.i18n.model.WorkOrder.outseam,
      thighLabel:                                 Omni.i18n.model.WorkOrder.thigh,
      arm_lengthLabel:                            Omni.i18n.model.WorkOrder.arm_length,
      total_riseLabel:                            Omni.i18n.model.WorkOrder.total_rise,
      head_circumferenceLabel:                    Omni.i18n.model.WorkOrder.head_circumference
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
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'work_order_nbr',                 fieldLabel: this.work_order_nbrLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'production_location_id',         fieldLabel: this.production_location_idLabel,     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'work_order_description',         fieldLabel: this.work_order_descriptionLabel,     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'work_order_type',                fieldLabel: this.work_order_typeLabel,            allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'request_units',                  fieldLabel: this.request_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'complete_units',                 fieldLabel: this.complete_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Work Tracking',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'release_date',                   fieldLabel: this.release_dateLabel,               allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'start_date',                     fieldLabel: this.start_dateLabel,                 allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'complete_date',                  fieldLabel: this.complete_dateLabel,              allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'target_complete_date',           fieldLabel: this.target_complete_dateLabel,       allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Size Information',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'weight',                         fieldLabel: this.weightLabel,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'height',                         fieldLabel: this.heightLabel,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bust',                           fieldLabel: this.bustLabel,                       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'waist',                          fieldLabel: this.waistLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'high_hip',                       fieldLabel: this.high_hipLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'hip',                            fieldLabel: this.hipLabel,                        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'across_shoulder_front',          fieldLabel: this.across_shoulder_frontLabel,      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'across_shoulder_back',           fieldLabel: this.across_shoulder_backLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'shoulder_length',                fieldLabel: this.shoulder_lengthLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'back_length',                    fieldLabel: this.back_lengthLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'hps_to_waist',                   fieldLabel: this.hps_to_waistLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'neck_circumference',             fieldLabel: this.neck_circumferenceLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'arm_circumference',              fieldLabel: this.arm_circumferenceLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'wrist_circumference',            fieldLabel: this.wrist_circumferenceLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inseam',                         fieldLabel: this.inseamLabel,                     allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'outseam',                        fieldLabel: this.outseamLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'thigh',                          fieldLabel: this.thighLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'arm_length',                     fieldLabel: this.arm_lengthLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'total_rise',                     fieldLabel: this.total_riseLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'head_circumference',             fieldLabel: this.head_circumferenceLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
