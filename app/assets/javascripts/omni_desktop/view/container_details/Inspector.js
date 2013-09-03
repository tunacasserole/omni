Ext.define('Omni.view.container_details.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-container_details-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'container_detail_id',
        value:    me.record.get('container_detail_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-container_details-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'ContainerDetail',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
