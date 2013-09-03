Ext.define('Omni.view.companies.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-companies-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'company_id',
        value:    me.record.get('company_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-companies-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Company',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
