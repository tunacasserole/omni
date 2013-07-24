Ext.define('Omni.view.containers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-containers-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      container_nbrLabel:                         Omni.i18n.model.Container.container_nbr,
      descriptionLabel:                           Omni.i18n.model.Container.description,
      container_typeLabel:                        Omni.i18n.model.Container.container_type,
      parent_container_idLabel:                   Omni.i18n.model.Container.parent_container_id,
      is_labeledLabel:                            Omni.i18n.model.Container.is_labeled,
      barcode_nbrLabel:                           Omni.i18n.model.Container.barcode_nbr,
      stateLabel:                                 Omni.i18n.model.Container.state,
      create_dateLabel:                           Omni.i18n.model.Container.create_date,
      last_update_dateLabel:                      Omni.i18n.model.Container.last_update_date,
      is_locatedLabel:                            Omni.i18n.model.Container.is_located,
      is_movingLabel:                             Omni.i18n.model.Container.is_moving,
      is_in_transitLabel:                         Omni.i18n.model.Container.is_in_transit,
      bin_idLabel:                                Omni.i18n.model.Container.bin_id,
      is_container_lostLabel:                     Omni.i18n.model.Container.is_container_lost,
      last_verify_dateLabel:                      Omni.i18n.model.Container.last_verify_date,
      capacityLabel:                              Omni.i18n.model.Container.capacity,
      capacity_weightLabel:                       Omni.i18n.model.Container.capacity_weight,
      inside_lengthLabel:                         Omni.i18n.model.Container.inside_length,
      inside_heightLabel:                         Omni.i18n.model.Container.inside_height,
      inside_widthLabel:                          Omni.i18n.model.Container.inside_width,
      is_outside_dimensionsLabel:                 Omni.i18n.model.Container.is_outside_dimensions,
      outside_lengthLabel:                        Omni.i18n.model.Container.outside_length,
      outside_heightLabel:                        Omni.i18n.model.Container.outside_height,
      outside_widthLabel:                         Omni.i18n.model.Container.outside_width,
      tare_weightLabel:                           Omni.i18n.model.Container.tare_weight,
      fill_percentLabel:                          Omni.i18n.model.Container.fill_percent,
      carton_countLabel:                          Omni.i18n.model.Container.carton_count,
      actual_weightLabel:                         Omni.i18n.model.Container.actual_weight,
      actual_cubeLabel:                           Omni.i18n.model.Container.actual_cube,
      filled_percentLabel:                        Omni.i18n.model.Container.filled_percent
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
            { name: 'container_nbr',                  fieldLabel: this.container_nbrLabel,              allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'container_type',                 fieldLabel: this.container_typeLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'parent_container_id',            fieldLabel: this.parent_container_idLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Container',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'container_id', itemTpl:'{display}' },
            { name: 'is_labeled',                     fieldLabel: this.is_labeledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'barcode_nbr',                    fieldLabel: this.barcode_nbrLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'create_date',                    fieldLabel: this.create_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'last_update_date',               fieldLabel: this.last_update_dateLabel,           allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Location',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'is_located',                     fieldLabel: this.is_locatedLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_moving',                      fieldLabel: this.is_movingLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_in_transit',                  fieldLabel: this.is_in_transitLabel,              allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'bin_id',                         fieldLabel: this.bin_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Bin',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'bin_id', itemTpl:'{display}' },
            { name: 'is_container_lost',              fieldLabel: this.is_container_lostLabel,          allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'last_verify_date',               fieldLabel: this.last_verify_dateLabel,           allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Measures',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'capacity',                       fieldLabel: this.capacityLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'capacity_weight',                fieldLabel: this.capacity_weightLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inside_length',                  fieldLabel: this.inside_lengthLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inside_height',                  fieldLabel: this.inside_heightLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'inside_width',                   fieldLabel: this.inside_widthLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_outside_dimensions',          fieldLabel: this.is_outside_dimensionsLabel,      allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'outside_length',                 fieldLabel: this.outside_lengthLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'outside_height',                 fieldLabel: this.outside_heightLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'outside_width',                  fieldLabel: this.outside_widthLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'tare_weight',                    fieldLabel: this.tare_weightLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'fill_percent',                   fieldLabel: this.fill_percentLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'carton_count',                   fieldLabel: this.carton_countLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'actual_weight',                  fieldLabel: this.actual_weightLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'actual_cube',                    fieldLabel: this.actual_cubeLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'filled_percent',                 fieldLabel: this.filled_percentLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
