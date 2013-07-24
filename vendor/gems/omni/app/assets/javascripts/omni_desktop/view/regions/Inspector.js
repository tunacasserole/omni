Ext.define('Omni.view.regions.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-regions-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'region_id',
        value:    me.record.get('region_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-regions-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Districts',
          xtype: 'omni-districts-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Region',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
