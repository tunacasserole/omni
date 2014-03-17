Ext.define('Omni.view.uniform_details.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-uniform_details-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'uniform_detail_id',
        value     : this.record.get('uniform_detail_id')
      },

      associativeSearch : {
        with: {
          uniform_detail_id : {
            equal_to : this.record.get('uniform_detail_id')
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
          xtype     : 'omni-uniform_details-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Uniform Detail',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
