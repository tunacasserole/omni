Ext.define('Desk.view.projects.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.desk-projects-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'project_id',
        value     : this.record.get('project_id')
      },

      associativeSearch : {
        with: {
          project_id : {
            equal_to : this.record.get('project_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'desk-projects-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Project',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});