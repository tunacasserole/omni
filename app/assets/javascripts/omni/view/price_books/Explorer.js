Ext.define('Omni.view.price_books.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-price_books-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.PriceBook'),

      contextMenuConfig:{
        xtype:'omni-price_books-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-price_books-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-price_books-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.PriceBook.display,
      descriptionLabel: Omni.i18n.model.PriceBook.description,
      price_book_typeLabel: Omni.i18n.model.PriceBook.price_book_type,
      short_nameLabel: Omni.i18n.model.PriceBook.short_name
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: false  },
        { header: this.descriptionLabel, dataIndex: 'description',  flex: 1,  sortable: false  },
        { header: this.price_book_typeLabel, dataIndex: 'price_book_type',  flex: 1,  sortable: false, renderer: Buildit.util.Format.lookupRenderer('PRICE_BOOK_TYPE') },
        { header: this.short_nameLabel, dataIndex: 'short_name',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Price Book',
      subtitle:  'Contains retail selling prices for Parker products'
    });
    // TITLES (End)



    this.callParent();
  }

});
