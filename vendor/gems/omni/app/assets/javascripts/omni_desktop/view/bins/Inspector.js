Ext.define('Omni.view.bins.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-bins-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'bin_id',
        value:    me.record.get('bin_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-bins-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'SKUs',
          xtype: 'omni-bin_skus-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Bin',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
