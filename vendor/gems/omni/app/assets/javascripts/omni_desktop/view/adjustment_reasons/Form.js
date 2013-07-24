Ext.define('Omni.view.adjustment_reasons.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-adjustment_reasons-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.AdjustmentReason.display,
      descriptionLabel:                           Omni.i18n.model.AdjustmentReason.description,
      short_nameLabel:                            Omni.i18n.model.AdjustmentReason.short_name,
      ruleset_idLabel:                            Omni.i18n.model.AdjustmentReason.ruleset_id,
      is_allowed_cost_entryLabel:                 Omni.i18n.model.AdjustmentReason.is_allowed_cost_entry,
      is_cost_adjustmentLabel:                    Omni.i18n.model.AdjustmentReason.is_cost_adjustment
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'ruleset_id',                     fieldLabel: this.ruleset_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'is_allowed_cost_entry',          fieldLabel: this.is_allowed_cost_entryLabel,      allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_cost_adjustment',             fieldLabel: this.is_cost_adjustmentLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
