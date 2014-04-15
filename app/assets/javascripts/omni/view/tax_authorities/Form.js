Ext.define('Omni.view.tax_authorities.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tax_authorities-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.TaxAuthority.display,
      descriptionLabel:                           Omni.i18n.model.TaxAuthority.description,
      tax_authority_typeLabel:                    Omni.i18n.model.TaxAuthority.tax_authority_type,
      short_nameLabel:                            Omni.i18n.model.TaxAuthority.short_name,
      state_codeLabel:                            Omni.i18n.model.TaxAuthority.state_code,
      filing_frequencyLabel:                      Omni.i18n.model.TaxAuthority.filing_frequency,
      is_tax_when_no_presenceLabel:               Omni.i18n.model.TaxAuthority.is_tax_when_no_presence
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textarea'        },
            { name: 'tax_authority_type',             fieldLabel: this.tax_authority_typeLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup', category: 'TAX_AUTHORITY_TYPE' },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup', category: 'STATE_CODE' },
            { name: 'state_code',                     fieldLabel: this.state_codeLabel,                 allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'filing_frequency',               fieldLabel: this.filing_frequencyLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_tax_when_no_presence',        fieldLabel: this.is_tax_when_no_presenceLabel,    allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
