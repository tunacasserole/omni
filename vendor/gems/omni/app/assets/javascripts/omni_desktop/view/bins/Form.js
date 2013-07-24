Ext.define('Omni.view.bins.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-bins-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.Bin.location_id,
      area_idLabel:                               Omni.i18n.model.Bin.area_id,
      area_short_nameLabel:                       Omni.i18n.model.Bin.area_short_name,
      aisleLabel:                                 Omni.i18n.model.Bin.aisle,
      sectionLabel:                               Omni.i18n.model.Bin.section,
      levelLabel:                                 Omni.i18n.model.Bin.level,
      positionLabel:                              Omni.i18n.model.Bin.position,
      bin_nbrLabel:                               Omni.i18n.model.Bin.bin_nbr,
      bin_codeLabel:                              Omni.i18n.model.Bin.bin_code,
      descriptionLabel:                           Omni.i18n.model.Bin.description,
      bin_typeLabel:                              Omni.i18n.model.Bin.bin_type,
      last_activity_dateLabel:                    Omni.i18n.model.Bin.last_activity_date,
      is_many_sku_per_binLabel:                   Omni.i18n.model.Bin.is_many_sku_per_bin,
      pick_sequenceLabel:                         Omni.i18n.model.Bin.pick_sequence,
      zoneLabel:                                  Omni.i18n.model.Bin.zone,
      pick_zoneLabel:                             Omni.i18n.model.Bin.pick_zone,
      cube_capacityLabel:                         Omni.i18n.model.Bin.cube_capacity,
      is_areaLabel:                               Omni.i18n.model.Bin.is_area,
      is_count_cartonsLabel:                      Omni.i18n.model.Bin.is_count_cartons,
      is_emptyLabel:                              Omni.i18n.model.Bin.is_empty,
      carton_countLabel:                          Omni.i18n.model.Bin.carton_count,
      on_hand_cubeLabel:                          Omni.i18n.model.Bin.on_hand_cube,
      due_in_cubeLabel:                           Omni.i18n.model.Bin.due_in_cube,
      due_out_cubeLabel:                          Omni.i18n.model.Bin.due_out_cube,
      is_request_label_printLabel:                Omni.i18n.model.Bin.is_request_label_print,
      bin_label_typeLabel:                        Omni.i18n.model.Bin.bin_label_type,
      is_enabledLabel:                            Omni.i18n.model.Bin.is_enabled
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
            { name: 'area_id',                        fieldLabel: this.area_idLabel,                    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Area',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'area_id', itemTpl:'{display}' },
            { name: 'area_short_name',                fieldLabel: this.area_short_nameLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'aisle',                          fieldLabel: this.aisleLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'section',                        fieldLabel: this.sectionLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'level',                          fieldLabel: this.levelLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'position',                       fieldLabel: this.positionLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bin_nbr',                        fieldLabel: this.bin_nbrLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bin_code',                       fieldLabel: this.bin_codeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bin_type',                       fieldLabel: this.bin_typeLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'last_activity_date',             fieldLabel: this.last_activity_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Sequencing',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_many_sku_per_bin',            fieldLabel: this.is_many_sku_per_binLabel,        allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'pick_sequence',                  fieldLabel: this.pick_sequenceLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'zone',                           fieldLabel: this.zoneLabel,                       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pick_zone',                      fieldLabel: this.pick_zoneLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Usage',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'cube_capacity',                  fieldLabel: this.cube_capacityLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_area',                        fieldLabel: this.is_areaLabel,                    allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_count_cartons',               fieldLabel: this.is_count_cartonsLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_empty',                       fieldLabel: this.is_emptyLabel,                   allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'carton_count',                   fieldLabel: this.carton_countLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'on_hand_cube',                   fieldLabel: this.on_hand_cubeLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'due_in_cube',                    fieldLabel: this.due_in_cubeLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'due_out_cube',                   fieldLabel: this.due_out_cubeLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_request_label_print',         fieldLabel: this.is_request_label_printLabel,     allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'bin_label_type',                 fieldLabel: this.bin_label_typeLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
