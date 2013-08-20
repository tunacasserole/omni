Ext.define('Omni.view.accounts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-accounts-Inspector',


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
        {title: 'Profile',           xtype: 'omni-accounts-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Account',
      subtitle:  this.record.get('id')
    });
    // TITLES (End)

    this.callParent();
  }
});