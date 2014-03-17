Ext.define('Omni.view.labels.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-labels-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'label_id',
        value:    me.record.get('label_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-labels-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Label',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
