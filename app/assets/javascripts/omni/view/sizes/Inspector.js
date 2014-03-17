Ext.define('Omni.view.sizes.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sizes-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'size_id',
        value:    me.record.get('size_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sizes-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Size',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
