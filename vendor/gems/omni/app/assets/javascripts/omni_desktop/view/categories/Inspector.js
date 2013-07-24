Ext.define('Omni.view.categories.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-categories-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'category_id',
        value:    me.record.get('category_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-categories-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Products',
          xtype: 'omni-products-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Category',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
