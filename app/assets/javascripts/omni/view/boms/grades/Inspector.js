Ext.define('Omni.view.grades.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-grades-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'grade_id',
        value:      this.record.get('grade_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-grades-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Grade',
      subtitle:  this.record.get('grade_id')
    });
    // TITLES (End)

    this.callParent();
  }
});