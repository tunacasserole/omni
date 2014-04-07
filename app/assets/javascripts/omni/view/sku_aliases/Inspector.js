Ext.define('Omni.view.sku_aliases.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-sku_aliases-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'sku_alias_id',
        value     : this.record.get('sku_alias_id')
      },

      associativeSearch : {
        with: {
          sku_alias_id : {
            equal_to : this.record.get('sku_alias_id')
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
          xtype     : 'omni-sku_aliases-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Sku Alias',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
