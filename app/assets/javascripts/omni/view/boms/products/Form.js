Ext.define('Omni.view.products.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-products-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'product_id',
      value:      this.record.get('product_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                           Omni.i18n.model.Product.display,    
      product_nbrLabel:                       Omni.i18n.model.Product.product_nbr,    
      descriptionLabel:                       Omni.i18n.model.Product.description,    
      category_idLabel:                       Omni.i18n.model.Product.category_id,    
      is_destroyedLabel:                      Omni.i18n.model.Product.is_destroyed,    
      product_idLabel:                        Omni.i18n.model.Product.product_id    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'product_nbr',                    fieldLabel: this.product_nbrLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'category_id',                    fieldLabel: this.category_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'product_id',                     fieldLabel: this.product_idLabel                  , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Products',
      newTitle: 'New Product',
      newSubtitle: 'Complete the following to create a new Product'
    });
    // TITLES (End)

    this.callParent();
    
  }

});