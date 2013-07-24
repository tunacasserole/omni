Ext.define('Omni.view.seasonal_indices.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-seasonal_indices-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'seasonal_index_id',
        value:    me.record.get('seasonal_index_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-seasonal_indices-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Seasonal Index',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
