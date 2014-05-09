Ext.define('Omni.view.products.Inspector', {
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-products-Inspector',


  initComponent: function() {
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'product_id',
        value: this.record.get('product_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-products-Form'
      }, {
        title: 'Styles',
        xtype: 'omni-styles-Explorer',
        defaultSearch: {
          with: {
            product_id: {
              equal_to: me.record.get('product_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Product',
      subtitle: this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
