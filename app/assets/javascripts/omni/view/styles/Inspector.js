Ext.define('Omni.view.styles.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-styles-Inspector',

  initComponent:function () {

    var me = this;

    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'style_id',
        value:    me.record.get('style_id')
      },

      seeker: {with:{stock_nbr: {equal_to: me.record.get('display').substring(0,4)}}}
      //stock_nbr:   {equal_to: me.record.get('display').substring(0,4)}
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-styles-Form',
          module: 'cfars'
        }
        ,{title: 'Colors', xtype: 'omni-style_colors-Explorer', module: 'samples',
           defaultSearch: { with:
             {
               style_id:   {equal_to: me.record.get('style_id')}
             }
          },
          showBadge: true
        }
        ,{title: 'Suppliers', xtype: 'omni-style_suppliers-Explorer', module: 'contacts',
           defaultSearch: { with:
             {
               style_id:   {equal_to: me.record.get('style_id')}
             }
          },
          showBadge: true
        }
        ,{title: 'Locations', xtype: 'omni-style_locations-Explorer', module: 'projects',
           defaultSearch: { with:
             {
               style_id:   {equal_to: me.record.get('style_id')}
             }
          },
          showBadge: true
        }
        ,{title: 'SKUs', xtype: 'omni-skus-Explorer', module: 'contracts',
           defaultSearch: { with:
             {
               style_id:   {equal_to: me.record.get('style_id')}
             }
          },
          showBadge: true
        }
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
        //           notable_type: {equal_to: 'Omni::Style'},
        //           notable_id:   {equal_to: me.record.get('style_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title: 'Attachments',
        //       xtype: 'buildit-attachments-Explorer',
        //       defaultSearch: { with:
        //         {
        //           attachable_type: {equal_to: 'Omni::Style'},
        //           attachable_id:   {equal_to: me.record.get('style_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title:      'Audit',
        //       xtype:      'buildit-audits-Explorer',
        //       model:      'Omni::Style',
        //       model_id:   me.record.get('style_id')
        //     }
        //   ]
        // }

        // ,{
        //   xtype    : 'buildit-CardGroup',
        //   title    : 'Parker Information',
        //   cards    : [
        //               {title: 'Parker Stock', xtype: 'mark-products-Explorer', module: 'addresses',
        //                  defaultSearch: { with:
        //                    {
        //                      stock_nbr:   {equal_to: me.record.get('display').substring(0,4)}
        //                    }
        //                 }
        //               }
        //               ,{title: 'Parker Inventory', xtype: 'mark-inventories-Explorer', module: 'email_addresses',
        //                  defaultSearch: { with:
        //                    {
        //                      stock_nbr:   {equal_to: me.record.get('display').substring(0,4)}
        //                    }
        //                 }
        //                 ,showBadge: true
        //               }
        //               ,{title: 'Parker Order Lines', xtype: 'mark-order_lines-Explorer', module: 'telephones',
        //                  defaultSearch: { with:
        //                    {
        //                      stock_nbr:   {equal_to: me.record.get('display').substring(0,4)}
        //                    }
        //                 }
        //                 ,showBadge: true
        //               }
        //               ,{title: 'Omni Stock', xtype: 'mark-products-Form', module: 'tasks',
        //                    seeker: this.seeker
        //               }
        //   ]
        // }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Style',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
