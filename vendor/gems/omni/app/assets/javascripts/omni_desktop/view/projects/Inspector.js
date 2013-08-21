Ext.define('Omni.view.projects.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projects-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'project_id',
        value:      this.record.get('project_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projects-Form'}
        ,{title: 'Pieces', xtype: 'omni-pieces-Explorer', module: 'pieces',
           defaultSearch: { with: 
             {
               project_id:   {equal_to: me.record.get('project_id')}
             }
          },
          showBadge: true
        }        
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Project',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});