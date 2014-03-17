Ext.define('Omni.view.account_grades.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-account_grades-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'account_grade_id',
        value     : this.record.get('account_grade_id')
      },

      associativeSearch : {
        with: {
          account_grade_id : {
            equal_to : this.record.get('account_grade_id')
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
          xtype     : 'omni-account_grades-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Account Grade',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
