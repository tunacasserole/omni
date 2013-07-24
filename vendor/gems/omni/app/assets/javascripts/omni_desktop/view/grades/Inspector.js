Ext.define('Omni.view.grades.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-grades-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'grade_id',
        value:    me.record.get('grade_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-grades-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Grade',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
