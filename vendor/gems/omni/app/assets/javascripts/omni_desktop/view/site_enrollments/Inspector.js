Ext.define('Omni.view.site_enrollments.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-site_enrollments-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'site_enrollment_id',
        value:    me.record.get('site_enrollment_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-site_enrollments-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site Enrollment',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
