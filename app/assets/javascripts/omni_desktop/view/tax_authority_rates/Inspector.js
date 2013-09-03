Ext.define('Omni.view.tax_authority_rates.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-tax_authority_rates-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'tax_authority_rate_id',
        value:    me.record.get('tax_authority_rate_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-tax_authority_rates-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Tax Authority Rate',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
