Ext.define('Omni.view.uniform_lookups.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-uniform_lookups-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'uniform_lookup_id',
        value     : this.record.get('uniform_lookup_id')
      },

      associativeSearch : {
        with: {
          uniform_lookup_id : {
            equal_to : this.record.get('uniform_lookup_id')
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
          xtype     : 'omni-uniform_lookups-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Uniform Lookup',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
