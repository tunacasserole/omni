Ext.define('Omni.view.style_supplier_colors.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-style_supplier_colors-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      style_supplier_idLabel:                     Omni.i18n.model.StyleSupplierColor.style_supplier_id,
      style_color_idLabel:                        Omni.i18n.model.StyleSupplierColor.style_color_id
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
            { name: 'style_supplier_id',              fieldLabel: this.style_supplier_idLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.StyleSupplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_supplier_id', itemTpl:'{display}' },
            { name: 'style_color_id',                 fieldLabel: this.style_color_idLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.StyleColor',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_color_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
