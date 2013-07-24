Ext.define('Omni.view.products.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-products-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Product.display,
      product_nbrLabel:                           Omni.i18n.model.Product.product_nbr,
      descriptionLabel:                           Omni.i18n.model.Product.description,
      category_idLabel:                           Omni.i18n.model.Product.category_id
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
            { name: 'product_nbr',                    fieldLabel: this.product_nbrLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'category_id',                    fieldLabel: this.category_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Category',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'category_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Product',
      subtitle:      'Web shopping products',
      newTitle:      'Product',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
