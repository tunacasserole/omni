Ext.define('Omni.view.bom_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-bom_details-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      uom_codeLabel:                              Omni.i18n.model.BomDetail.uom_code,
      bom_idLabel:                                Omni.i18n.model.BomDetail.bom_id,
      color_idLabel:                              Omni.i18n.model.BomDetail.color_id,
      sku_idLabel:                                Omni.i18n.model.BomDetail.sku_id,
      quantityLabel:                              Omni.i18n.model.BomDetail.quantity,
      waste_percentLabel:                         Omni.i18n.model.BomDetail.waste_percent
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
            { name: 'bom_id',                         fieldLabel: this.bom_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Bom',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'bom_id', itemTpl:'{display}' },
            { name: 'color_id',                       fieldLabel: this.color_idLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Color',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'color_id', itemTpl:'{display}' },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'quantity',                       fieldLabel: this.quantityLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'waste_percent',                  fieldLabel: this.waste_percentLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'uom_code',                       fieldLabel: this.uom_codeLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'UOM_CODE' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
