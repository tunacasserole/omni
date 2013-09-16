Ext.define('Omni.view.tills.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-tills-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'till_id',
        value:      this.record.get('till_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-tills-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Till',
      subtitle:  this.record.get('till_id')
    });
    // TITLES (End)

    this.callParent();
  }
});