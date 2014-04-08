Ext.define('Omni.view.price_books.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-price_books-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.PriceBook'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-price_books-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-price_books-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  price_book_idLabel:                     Omni.i18n.model.PriceBook.price_book_id,
  displayLabel:                           Omni.i18n.model.PriceBook.display,
  descriptionLabel:                       Omni.i18n.model.PriceBook.description,
  price_book_typeLabel:                   Omni.i18n.model.PriceBook.price_book_type,
  short_nameLabel:                        Omni.i18n.model.PriceBook.short_name,
  is_destroyedLabel:                      Omni.i18n.model.PriceBook.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'PriceBooks',
  subtitle:  'Create and maintain PriceBooks',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.price_book_idLabel,
          dataIndex    : 'price_book_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.price_book_typeLabel,
          dataIndex    : 'price_book_type',
          flex         : 1
        },
        {
          header       : this.short_nameLabel,
          dataIndex    : 'short_name',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
