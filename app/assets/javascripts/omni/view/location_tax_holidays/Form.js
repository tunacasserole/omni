Ext.define('Omni.view.location_tax_holidays.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-location_tax_holidays-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.LocationTaxHoliday.location_id,
      short_nameLabel:                            Omni.i18n.model.LocationTaxHoliday.short_name,
      effective_dateLabel:                        Omni.i18n.model.LocationTaxHoliday.effective_date,
      end_dateLabel:                              Omni.i18n.model.LocationTaxHoliday.end_date,
      descriptionLabel:                           Omni.i18n.model.LocationTaxHoliday.description,
      is_tax_holidayLabel:                        Omni.i18n.model.LocationTaxHoliday.is_tax_holiday,
      price_cutoffLabel:                          Omni.i18n.model.LocationTaxHoliday.price_cutoff
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
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_tax_holiday',                 fieldLabel: this.is_tax_holidayLabel,             allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'price_cutoff',                   fieldLabel: this.price_cutoffLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
