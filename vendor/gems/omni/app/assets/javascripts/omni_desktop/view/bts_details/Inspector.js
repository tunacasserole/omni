Ext.define('Omni.view.bts_details.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-bts_details-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'bts_detail_id',
        value:      this.record.get('bts_detail_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-bts_details-Form'}
        ,{
          xtype    : 'buildit-CardGroup',
          title    : 'Mark Research Center',
          module   : 'notes',
          cards    : [
            {
              title: 'Inventory',
              xtype: 'omni-mark_inventories-Explorer',
              defaultSearch: { with:
                {
                  stock_nbr: {equal_to: me.record.get('mark_stock')}
                  // size: {equal_to: me.record.get('mark_size')}
                }
              },
              showBadge: true
            }
            ,{
              title: 'WIP',
              xtype: 'omni-mark_wips-Explorer',
              defaultSearch: { with:
                {
                  stock_nbr: {equal_to: me.record.get('mark_stock')},
                  // size: {equal_to: me.record.get('mark_size')}
                }
              },
              showBadge: true
            }
            ,{
              title: 'Transfers',
              xtype: 'omni-mark_transfer_lines-Explorer',
              defaultSearch: { with:
                {
                  // status_id: {equal_to: 8},                  
                  stock_nbr: {equal_to: me.record.get('mark_stock')},
                  // size: {equal_to: me.record.get('mark_size')}
                }
              },
              showBadge: true
            }

          ]
        }         

            // ,{
            //   title: 'Wip',
            //   xtype: 'omni-mark_wips-Explorer',
            //   defaultSearch: { with:
            //     {
            //       stock_nbr: {equal_to: me.record.get('mark_stock')},
            //     }
            //   },
            //   showBadge: true
            // }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Bts Detail',
      subtitle:  this.record.get('sku_display')
    });
    // TITLES (End)

    this.callParent();
  }
});