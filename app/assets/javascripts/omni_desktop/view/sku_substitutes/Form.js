Ext.define('Omni.view.sku_substitutes.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_substitutes-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_idLabel:                                Omni.i18n.model.SkuSubstitute.sku_id,
      substitute_sku_idLabel:                     Omni.i18n.model.SkuSubstitute.substitute_sku_id,
      sku_substitute_typeLabel:                   Omni.i18n.model.SkuSubstitute.sku_substitute_type,
      effective_dateLabel:                        Omni.i18n.model.SkuSubstitute.effective_date,
      end_dateLabel:                              Omni.i18n.model.SkuSubstitute.end_date,
      priorityLabel:                              Omni.i18n.model.SkuSubstitute.priority
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
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'substitute_sku_id',              fieldLabel: this.substitute_sku_idLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'sku_substitute_type',            fieldLabel: this.sku_substitute_typeLabel,        allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'SKU_SUBSTITUTE_TYPE' },
            { name: 'effective_date',                 fieldLabel: this.effective_dateLabel,             allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'priority',                       fieldLabel: this.priorityLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
