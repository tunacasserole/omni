Ext.define('Desk.view.email_messages.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.desk-email_messages-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'email_message_id',
        value     : this.record.get('email_message_id')
      },

      associativeSearch : {
        with: {
          email_message_id : {
            equal_to : this.record.get('email_message_id')
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
          xtype     : 'desk-email_messages-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Email Message',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});
