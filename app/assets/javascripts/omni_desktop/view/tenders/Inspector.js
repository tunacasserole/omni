Ext.define('Omni.view.tenders.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-tenders-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'tender_id',
        value:    me.record.get('tender_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-tenders-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Tender',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
