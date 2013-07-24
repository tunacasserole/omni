Ext.define('Omni.view.suppliers.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-suppliers-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'supplier_id',
        value:    me.record.get('supplier_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-suppliers-Form'
        },
        {
          title: 'Notes',
          xtype: 'buildit-notes-Explorer'
        },
        {
          title: 'Ratings',
          xtype: 'omni-supplier_ratings-Explorer'
        },
        {
          title: 'Contacts',
          xtype: 'omni-supplier_contacts-Explorer'
        }
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Supplier',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
