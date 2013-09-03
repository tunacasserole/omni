Ext.define('Omni.view.districts.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-districts-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'district_id',
        value:    me.record.get('district_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-districts-Form'
        },
        {
          title: 'Notes',
          xtype: 'omni-notes-Explorer'
        },
        {
          title: 'Locations',
          xtype: 'omni-locations-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'District',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
