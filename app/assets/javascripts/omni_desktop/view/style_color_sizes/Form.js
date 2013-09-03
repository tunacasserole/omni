Ext.define('Omni.view.style_color_sizes.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-style_color_sizes-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      style_color_idLabel:                        Omni.i18n.model.StyleColorSize.style_color_id,
      size_idLabel:                               Omni.i18n.model.StyleColorSize.size_id,
      stateLabel:                                 Omni.i18n.model.StyleColor.state,
      sku_idLabel:                                Omni.i18n.model.StyleColorSize.sku_id,
      sku_nameLabel:                              Omni.i18n.model.StyleColorSize.sku_name,
      pos_nameLabel:                              Omni.i18n.model.StyleColorSize.pos_name,
      is_special_orderLabel:                      Omni.i18n.model.StyleColorSize.is_special_order,
      is_not_availableLabel:                      Omni.i18n.model.StyleColorSize.is_not_available,
      fabric_bom_adjust_percentLabel:             Omni.i18n.model.StyleColorSize.fabric_bom_adjust_percent
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
            { name: 'style_color_id',                 fieldLabel: this.style_color_idLabel,             allowBlank: true,   disabled: true,     xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.StyleColor',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_color_id', itemTpl:'{display}' },
            { name: 'size_id',                        fieldLabel: this.size_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Size',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'size_id', itemTpl:'{display}' },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: true,     xtype: 'textfield'        },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'sku_name',                       fieldLabel: this.sku_nameLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pos_name',                       fieldLabel: this.pos_nameLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_special_order',               fieldLabel: this.is_special_orderLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_not_available',               fieldLabel: this.is_not_availableLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'fabric_bom_adjust_percent',      fieldLabel: this.fabric_bom_adjust_percentLabel,  allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
