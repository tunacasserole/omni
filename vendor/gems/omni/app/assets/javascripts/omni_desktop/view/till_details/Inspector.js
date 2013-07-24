Ext.define('Omni.view.till_details.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-till_details-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'till_detail_id',
        value:    me.record.get('till_detail_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-till_details-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Till Detail',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
