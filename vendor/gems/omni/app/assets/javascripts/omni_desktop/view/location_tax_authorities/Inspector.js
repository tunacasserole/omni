Ext.define('Omni.view.location_tax_authorities.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-location_tax_authorities-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'location_tax_authority_id',
        value:    me.record.get('location_tax_authority_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-location_tax_authorities-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Location Tax Authority',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
