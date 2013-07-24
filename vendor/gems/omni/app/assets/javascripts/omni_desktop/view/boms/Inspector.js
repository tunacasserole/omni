Ext.define('Omni.view.boms.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-boms-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'bom_id',
        value:    me.record.get('bom_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-boms-Form'
        },
        {
          title: 'Details',
          xtype: 'omni-bom_details-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Bom',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
