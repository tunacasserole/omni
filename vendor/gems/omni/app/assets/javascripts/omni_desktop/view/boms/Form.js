Ext.define('Omni.view.boms.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-boms-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      bom_nbrLabel:                               Omni.i18n.model.Bom.bom_nbr,
      descriptionLabel:                           Omni.i18n.model.Bom.description,
      bom_typeLabel:                              Omni.i18n.model.Bom.bom_type,
      versionLabel:                               Omni.i18n.model.Bom.version,
      effective_dateLabel:                        Omni.i18n.model.Bom.effective_date,
      end_dateLabel:                              Omni.i18n.model.Bom.end_date,
      is_primary_bomLabel:                        Omni.i18n.model.Bom.is_primary_bom,
      labor_hoursLabel:                           Omni.i18n.model.Bom.labor_hours,
      machine_hoursLabel:                         Omni.i18n.model.Bom.machine_hours,
      construction_hoursLabel:                    Omni.i18n.model.Bom.construction_hours,
      is_enabledLabel:                            Omni.i18n.model.Bom.is_enabled
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
            { name: 'bom_nbr',                        fieldLabel: this.bom_nbrLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'bom_type',                       fieldLabel: this.bom_typeLabel,                   allowBlank: false,  disabled: false,    xtype: 'buildit-Lookup',      category:   'BOM_TYPE' },
            { name: 'version',                        fieldLabel: this.versionLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'is_primary_bom',                 fieldLabel: this.is_primary_bomLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'labor_hours',                    fieldLabel: this.labor_hoursLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'machine_hours',                  fieldLabel: this.machine_hoursLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'construction_hours',             fieldLabel: this.construction_hoursLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_enabled',                     fieldLabel: this.is_enabledLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
