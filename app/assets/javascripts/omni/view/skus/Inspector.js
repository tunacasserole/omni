Ext.define('Omni.view.skus.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-skus-Inspector',



  initComponent:function () {

    var me = this;


    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_id',
        value:    me.record.get('sku_id')
      }
    });
    // INSPECTOR INIT (End)
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-skus-Form',
          module: 'contracts'
        }
        ,{
          title: 'Aliases',
          xtype: 'omni-sku_aliases-Explorer', module: 'samples',
          defaultSearch: { with:
             {
               sku_id:   {equal_to: me.record.get('sku_id')}
             }
          }
        }
        ,{
          title: 'Inventory',
          xtype: 'omni-inventories-Explorer', module: 'samples',
          defaultSearch: { with:
             {
               sku_id:   {equal_to: me.record.get('sku_id')}
             }
          }
        }
        ,{
          title: 'Prices',
          xtype: 'omni-sku_prices-Explorer', module: 'samples',
          defaultSearch: { with:
             {
               sku_id:   {equal_to: me.record.get('sku_id')}
             }
          }
        }
        ,{
          title: 'Suppliers',
          xtype: 'omni-sku_suppliers-Explorer', module: 'samples',
          defaultSearch: { with:
             {
               sku_id:   {equal_to: me.record.get('sku_id')}
             }
          }
        }
        // ,{
        //   title: 'BOMs',
        //   xtype: 'omni-boms-Explorer', module: 'monthly_reports', module: 'contacts',
        //   defaultSearch: { with:
        //      {
        //        sku_id:   {equal_to: me.record.get('sku_id')}
        //      }
        //   }
        // }
        // ,{
        //   title: 'Sales History',
        //   xtype: 'omni-skus-Chart', module: 'customers',
        //   defaultSearch: { with:
        //      {
        //        sku_id:   {equal_to: me.record.get('sku_id')}
        //      }
        //   }
        // }
        // ,{title: 'Period Results', xtype: 'omni-period_results-Explorer', module: 'approvals',
        //    defaultSearch: { with:
        //      {
        //        sku_id:   {equal_to: me.record.get('sku_id')}
        //      }
        //   }
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
        //           notable_type: {equal_to: 'Omni::Sku'},
        //           notable_id:   {equal_to: me.record.get('sku_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title: 'Attachments',
        //       xtype: 'buildit-attachments-Explorer',
        //       defaultSearch: { with:
        //         {
        //           attachable_type: {equal_to: 'Omni::Sku'},
        //           attachable_id:   {equal_to: me.record.get('sku_id')}
        //         }
        //       },
        //       showBadge: true
        //     },
        //     {
        //       title:      'Audit',
        //       xtype:      'buildit-audits-Explorer',
        //       model:      'Omni::Sku',
        //       model_id:   me.record.get('sku_id')
        //     }
        //   ]
        // }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Sku',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)


    this.callParent();
  }

});
