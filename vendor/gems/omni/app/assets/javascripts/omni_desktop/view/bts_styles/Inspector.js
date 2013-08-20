Ext.define('Omni.view.bts_styles.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-bts_styles-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'bts_style_id',
        value:      this.record.get('bts_style_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-bts_styles-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Bts Style',
      subtitle:  this.record.get('bts_style_id')
    });
    // TITLES (End)

    this.callParent();
  }
});