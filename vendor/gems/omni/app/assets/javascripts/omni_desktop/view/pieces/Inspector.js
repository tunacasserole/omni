Ext.define('Omni.view.pieces.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-pieces-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'piece_id',
        value:      this.record.get('piece_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-pieces-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Piece',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});