Ext.define('Desk.view.guides.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.desk-guides-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'guide_id',
        value     : this.record.get('guide_id')
      },

      associativeSearch : {
        with: {
          guide_id : {
            equal_to : this.record.get('guide_id')
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
          xtype     : 'desk-guides-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Guide',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});