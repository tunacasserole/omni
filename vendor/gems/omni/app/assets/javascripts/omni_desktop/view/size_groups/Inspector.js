Ext.define('Omni.view.size_groups.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-size_groups-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'size_group_id',
        value:    me.record.get('size_group_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-size_groups-Form'
        }
        ,{title: 'Sizes', xtype: 'omni-size_group_details-Explorer', module: 'contracts',
           defaultSearch: { with: 
             {
               size_group_id:   {equal_to: me.record.get('size_group_id')}
             }
          },
          showBadge: true
        }        
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Size Group',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
