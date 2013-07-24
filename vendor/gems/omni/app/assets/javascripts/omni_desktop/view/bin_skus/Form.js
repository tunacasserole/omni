Ext.define('Omni.view.bin_skus.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-bin_skus-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      bin_idLabel:                                Omni.i18n.model.BinSku.bin_id,
      sku_idLabel:                                Omni.i18n.model.BinSku.sku_id,
      sku_alias_idLabel:                          Omni.i18n.model.BinSku.sku_alias_id,
      last_activity_dateLabel:                    Omni.i18n.model.BinSku.last_activity_date,
      being_received_unitsLabel:                  Omni.i18n.model.BinSku.being_received_units,
      on_hand_unitsLabel:                         Omni.i18n.model.BinSku.on_hand_units,
      pack_typeLabel:                             Omni.i18n.model.BinSku.pack_type,
      due_in_unitsLabel:                          Omni.i18n.model.BinSku.due_in_units,
      due_out_unitsLabel:                         Omni.i18n.model.BinSku.due_out_units
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
            { name: 'bin_id',                         fieldLabel: this.bin_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Bin',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'bin_id', itemTpl:'{display}' },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'sku_alias_id',                   fieldLabel: this.sku_alias_idLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SkuAlias',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_alias_id', itemTpl:'{display}' },
            { name: 'last_activity_date',             fieldLabel: this.last_activity_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Bin Contents',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'being_received_units',           fieldLabel: this.being_received_unitsLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'on_hand_units',                  fieldLabel: this.on_hand_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pack_type',                      fieldLabel: this.pack_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'due_in_units',                   fieldLabel: this.due_in_unitsLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'due_out_units',                  fieldLabel: this.due_out_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
