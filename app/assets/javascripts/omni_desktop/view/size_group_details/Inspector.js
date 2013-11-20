Ext.define('Omni.view.size_group_details.Inspector', {
  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-size_group_details-Inspector',

  initComponent:function () {
    var me = this;

    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'size_group_detail_id',
        value:    me.record.get('size_group_detail_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-size_group_details-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Size Group Detail',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
