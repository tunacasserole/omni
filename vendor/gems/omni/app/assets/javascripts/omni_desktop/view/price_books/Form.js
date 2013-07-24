Ext.define('Omni.view.price_books.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-price_books-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.PriceBook.display,
      descriptionLabel:                           Omni.i18n.model.PriceBook.description,
      price_book_typeLabel:                       Omni.i18n.model.PriceBook.price_book_type,
      short_nameLabel:                            Omni.i18n.model.PriceBook.short_name
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'price_book_type',                fieldLabel: this.price_book_typeLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'PRICE_BOOK_TYPE' },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
