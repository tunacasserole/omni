Ext.define('Omni.view.enrollments.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-enrollments-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'enrollment_id',
        value     : this.record.get('enrollment_id')
      },

      associativeSearch : {
        with: {
          enrollment_id : {
            equal_to : this.record.get('enrollment_id')
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
          xtype     : 'omni-enrollments-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Enrollment',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
