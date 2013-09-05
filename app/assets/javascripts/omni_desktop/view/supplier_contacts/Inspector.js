Ext.define('Omni.view.supplier_contacts.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-supplier_contacts-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'supplier_contact_id',
        value:    me.record.get('supplier_contact_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-supplier_contacts-Form'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Supplier Contact',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});