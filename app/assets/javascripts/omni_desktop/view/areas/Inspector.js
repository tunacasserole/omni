Ext.define('Omni.view.areas.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-areas-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'area_id',
        value:    me.record.get('area_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-areas-Form'
        }
        // {
        //   title: 'Notes',
        //   xtype: 'buildit-notes-Explorer'
        // },
        // {
        //   title: 'Bins',
        //   xtype: 'omni-bins-Explorer'
        // }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Area',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
