Ext.define('Omni.view.jobs.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-jobs-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'job_id',
        value     : this.record.get('job_id')
      },

      associativeSearch : {
        with: {
          job_id : {
            equal_to : this.record.get('job_id')
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
          xtype     : 'omni-jobs-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Job',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
