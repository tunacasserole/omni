Ext.define('Omni.view.programs.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-programs-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      program_nbrLabel:                           Omni.i18n.model.Program.program_nbr,
      site_idLabel:                               Omni.i18n.model.Program.site_id,
      program_nameLabel:                          Omni.i18n.model.Program.program_name,
      descriptionLabel:                           Omni.i18n.model.Program.description,
      effective_dateLabel:                        Omni.i18n.model.Program.effective_date,
      end_dateLabel:                              Omni.i18n.model.Program.end_date,
      contract_sent_dateLabel:                    Omni.i18n.model.Program.contract_sent_date,
      contract_received_dateLabel:                Omni.i18n.model.Program.contract_received_date,
      order_form_sent_dateLabel:                  Omni.i18n.model.Program.order_form_sent_date,
      contract_won_dateLabel:                     Omni.i18n.model.Program.contract_won_date,
      contract_lost_dateLabel:                    Omni.i18n.model.Program.contract_lost_date,
      is_exclusiveLabel:                          Omni.i18n.model.Program.is_exclusive,
      teacher_discount_percentLabel:              Omni.i18n.model.Program.teacher_discount_percent,
      administrator_discount_percentLabel:        Omni.i18n.model.Program.administrator_discount_percent,
      is_discount_in_storeLabel:                  Omni.i18n.model.Program.is_discount_in_store,
      is_discount_on_webLabel:                    Omni.i18n.model.Program.is_discount_on_web,
      is_activeLabel:                             Omni.i18n.model.Program.is_active
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
            { name: 'program_nbr',                    fieldLabel: this.program_nbrLabel,                allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'program_name',                   fieldLabel: this.program_nameLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'contract_sent_date',             fieldLabel: this.contract_sent_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'contract_received_date',         fieldLabel: this.contract_received_dateLabel,     allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'order_form_sent_date',           fieldLabel: this.order_form_sent_dateLabel,       allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'contract_won_date',              fieldLabel: this.contract_won_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'contract_lost_date',             fieldLabel: this.contract_lost_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'is_exclusive',                   fieldLabel: this.is_exclusiveLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'teacher_discount_percent',       fieldLabel: this.teacher_discount_percentLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'administrator_discount_percent', fieldLabel: this.administrator_discount_percentLabel,allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_discount_in_store',           fieldLabel: this.is_discount_in_storeLabel,       allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_discount_on_web',             fieldLabel: this.is_discount_on_webLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_active',                      fieldLabel: this.is_activeLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
