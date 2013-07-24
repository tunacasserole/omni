Ext.define('Omni.view.till_audits.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-till_audits-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'till_audit_id',
        value:    me.record.get('till_audit_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-till_audits-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Till Audit',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
