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
          title    : 'Parker Research Center',
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
                  stock_nbr: {equal_to: me.record.get('mark_stock')},
                  // size: {equal_to: me.record.get('mark_size')}
                }
              },
              showBadge: true
            }
            ,{
              title: 'Order History',
              xtype: 'omni-mark_order_reports-Explorer',
              defaultSearch: { with:
                {                  
                  stock_nbr: {equal_to: me.record.get('mark_stock')},
                  // size: {equal_to: me.record.get('mark_size')}
                }
              },
              showBadge: true
            }            
          ]
        }
         ,{
          xtype    : 'buildit-CardGroup',
          title    : 'Buckhead Research Center',
          module   : 'notes',
          cards    : [
            {
              title: 'Buckhead Inventory',
              xtype: 'omni-rms_item_dynamics-Explorer',
              defaultSearch: { with:
                {
                  ItemID: {equal_to: me.record.get('buckhead_identifier')}
                }
              },
              showBadge: true
            }
            ,{
              title: 'Buckhead WIP',
              xtype: 'omni-rms_items-Explorer',
              defaultSearch: { with:
                {
                  ItemID: {equal_to: me.record.get('buckhead_identifier')}
                }
              },
              showBadge: true
            }
          ]
        }
         ,{
          xtype    : 'buildit-CardGroup',
          title    : 'Grits Research Center',
          module   : 'notes',
          cards    : [
            {
              title: 'Grits Inventory',
              xtype: 'omni-grits_bts-Explorer',
              defaultSearch: { with:
                {
                  tg_sku_id: {equal_to: me.record.get('grits_identifier')}
                }
              },
              showBadge: true
            }
          ]
        }                 
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