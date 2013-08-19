Ext.define('Omni.view.mark_transfer_lines.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-mark_transfer_lines-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'id',
        value:      this.record.get('id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-mark_transfer_lines-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Mark Transfer Line',
      subtitle:  this.record.get('id')
    });
    // TITLES (End)

    this.callParent();
  }
});