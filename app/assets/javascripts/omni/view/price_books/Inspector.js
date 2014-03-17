Ext.define('Omni.view.price_books.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-price_books-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'price_book_id',
        value:    me.record.get('price_book_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-price_books-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Price Book',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
