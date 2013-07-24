Ext.define('Omni.view.supplier_ratings.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-supplier_ratings-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'supplier_rating_id',
        value:    me.record.get('supplier_rating_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-supplier_ratings-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Supplier Rating',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
