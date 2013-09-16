Ext.define('Omni.view.gl_accounts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-gl_accounts-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'gl_account_id',
        value:      this.record.get('gl_account_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-gl_accounts-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Gl Account',
      subtitle:  this.record.get('gl_account_id')
    });
    // TITLES (End)

    this.callParent();
  }
});