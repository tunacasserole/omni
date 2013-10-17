Ext.define('Omni.view.projections.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projections-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'projection_id',
        value:      this.record.get('projection_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projections-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Projection',
      subtitle:  this.record.get('projection_id')
    });
    // TITLES (End)

    this.callParent();
  }
});