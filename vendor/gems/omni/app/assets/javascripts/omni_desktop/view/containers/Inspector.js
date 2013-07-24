Ext.define('Omni.view.containers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-containers-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'container_id',
        value:    me.record.get('container_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-containers-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Container',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
