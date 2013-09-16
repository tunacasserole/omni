Ext.define('Omni.view.price_books.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-price_books-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'price_book_id',
      value:      this.record.get('price_book_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      price_book_idLabel:                     Omni.i18n.model.PriceBook.price_book_id,    
      displayLabel:                           Omni.i18n.model.PriceBook.display,    
      descriptionLabel:                       Omni.i18n.model.PriceBook.description,    
      price_book_typeLabel:                   Omni.i18n.model.PriceBook.price_book_type,    
      short_nameLabel:                        Omni.i18n.model.PriceBook.short_name,    
      is_destroyedLabel:                      Omni.i18n.model.PriceBook.is_destroyed    
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

            { xtype: 'textfield', name: 'price_book_id',                  fieldLabel: this.price_book_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'price_book_type',                fieldLabel: this.price_book_typeLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'short_name',                     fieldLabel: this.short_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit PriceBooks',
      newTitle: 'New Price Book',
      newSubtitle: 'Complete the following to create a new Price Book'
    });
    // TITLES (End)

    this.callParent();
    
  }

});