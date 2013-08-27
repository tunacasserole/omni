Ext.define('Omni.view.departments.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-departments-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'department_id',
        value:    me.record.get('department_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-departments-Form'
        },
        {
          title: 'Classifications',
          xtype: 'omni-classifications-Explorer',
           defaultSearch: { with: 
             {
               department_id:   {equal_to: me.record.get('department_id')}
             }
          }

        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Department',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
