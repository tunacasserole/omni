Ext.define('Omni.view.location_tax_holidays.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-location_tax_holidays-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'location_tax_holiday_id',
        value:    me.record.get('location_tax_holiday_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-location_tax_holidays-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Location Tax Holiday',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
