Ext.define('Desk.view.approvals.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.desk-approvals-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'approval_id',
        value     : this.record.get('approval_id')
      },

      associativeSearch : {
        with: {
          approval_id : {
            equal_to : this.record.get('approval_id')
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
          xtype     : 'desk-approvals-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Approval',
      subtitle  : this.record.get('approver_display')
    });
    // TITLES (End)

    this.callParent();
  }
});
