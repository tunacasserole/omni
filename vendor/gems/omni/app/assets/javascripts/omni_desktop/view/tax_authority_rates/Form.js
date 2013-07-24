Ext.define('Omni.view.tax_authority_rates.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tax_authority_rates-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      tax_authority_idLabel:                      Omni.i18n.model.TaxAuthorityRate.tax_authority_id,
      effective_dateLabel:                        Omni.i18n.model.TaxAuthorityRate.effective_date,
      end_dateLabel:                              Omni.i18n.model.TaxAuthorityRate.end_date,
      tax_percentLabel:                           Omni.i18n.model.TaxAuthorityRate.tax_percent
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
            { name: 'tax_authority_id',               fieldLabel: this.tax_authority_idLabel,           allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.TaxAuthority',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'tax_authority_id', itemTpl:'{display}' },
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'tax_percent',                    fieldLabel: this.tax_percentLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
