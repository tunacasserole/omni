Ext.define('Omni.view.contracts.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-contracts-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'contract_id',
        value:      this.record.get('contract_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-contracts-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Contract',
      subtitle:  this.record.get('contract_id')
    });
    // TITLES (End)

    this.callParent();
  }
});