Ext.define('Omni.view.tax_authorities.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-tax_authorities-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'tax_authority_id',
        value:    me.record.get('tax_authority_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-tax_authorities-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Tax Authority',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
