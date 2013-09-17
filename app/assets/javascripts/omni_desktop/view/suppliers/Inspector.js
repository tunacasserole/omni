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
        }
        ,{title: 'Contacts', xtype: 'omni-supplier_contacts-Explorer', module: 'cfars',
           defaultSearch: { with:
             {
               supplier_id:   {equal_to: me.record.get('supplier_id')}
             }
          },
          showBadge: true
        }
        // ,{title: 'SKUs', xtype: 'omni-sku_suppliers-Explorer', module: 'contracts',
        //    defaultSearch: { with:
        //      {
        //        supplier_id:   {equal_to: me.record.get('supplier_id ')}
        //      }
        //   },
        //   showBadge: true
        // }
        // ,{
        //   title: 'Ratings',
        //   xtype: 'omni-supplier_ratings-Explorer', module: 'projects', module: 'projects',
        //    defaultSearch: { with:
        //      {
        //        supplier_id:   {equal_to: me.record.get('supplier_id')}
        //      }
        //   },
        //   showBadge: true
        // }
        // ,{
        //   title: 'Contacts',
        //   xtype: 'omni-supplier_contacts-Explorer'
        // }
        // ,{
        //   xtype    : 'buildit-CardGroup',
        //   title    : 'Support',
        //   module   : 'notes',
        //   cards    : [
        //     {
        //       title: 'Notes',
        //       xtype: 'buildit-notes-Explorer',
        //       defaultSearch: { with:
        //         {
        //           notable_type: {equal_to: 'Omni::Supplier'},
        //           notable_id:   {equal_to: me.record.get('supplier_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title: 'Attachments',
        //       xtype: 'buildit-attachments-Explorer',
        //       defaultSearch: { with:
        //         {
        //           attachable_type: {equal_to: 'Omni::Supplier'},
        //           attachable_id:   {equal_to: me.record.get('supplier_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title:      'Audit',
        //       xtype:      'buildit-audits-Explorer',
        //       model:      'Omni::Supplier',
        //       model_id:   me.record.get('supplier_id')
        //     }
        //   ]
        // }
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
