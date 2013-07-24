Ext.define('Omni.view.classifications.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-classifications-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'classification_id',
        value:    me.record.get('classification_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-classifications-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Subclasses',
          xtype: 'omni-subclasses-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Classification',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
