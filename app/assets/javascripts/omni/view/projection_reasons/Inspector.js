Ext.define('Omni.view.projection_reasons.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-projection_reasons-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'projection_reason_id',
        value:    me.record.get('projection_reason_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-projection_reasons-Form'
        }
        ,{title: 'Notes',             xtype: 'buildit-notes-Explorer',                      
          defaultSearch: { with: 
            {
              notable_type: {equal_to: 'Omni::ProjectionDetail'},
              notable_id:   {equal_to: me.record.get('projection_detail_id')}
            }
          }
        }        
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Projection Reason',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
