Ext.define('Omni.view.categories.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-categories-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'category_id',
        value:      this.record.get('category_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-categories-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Category',
      subtitle:  this.record.get('category_id')
    });
    // TITLES (End)

    this.callParent();
  }
});