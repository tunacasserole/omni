Ext.define('Omni.view.contacts.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-contacts-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'contact_id',
        value     : this.record.get('contact_id')
      },

      associativeSearch : {
        with: {
          contact_id : {
            equal_to : this.record.get('contact_id')
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
          xtype     : 'omni-contacts-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Contact',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
