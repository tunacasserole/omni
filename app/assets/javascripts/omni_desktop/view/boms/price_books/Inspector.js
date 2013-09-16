Ext.define('Omni.view.price_books.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-price_books-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'price_book_id',
        value:      this.record.get('price_book_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-price_books-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Price Book',
      subtitle:  this.record.get('price_book_id')
    });
    // TITLES (End)

    this.callParent();
  }
});