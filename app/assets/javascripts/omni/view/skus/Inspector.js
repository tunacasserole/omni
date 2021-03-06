Ext.define('Omni.view.skus.Inspector', {

  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-skus-Inspector',

  initComponent: function() {

    var me = this;

    // LABELS (Start) ======================================================================
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'sku_id',
        value: me.record.get('sku_id')
      }
    });
    // INSPECTOR INIT (End)
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [{
        title: 'Profile',
        xtype: 'omni-skus-Form',
        module: 'contracts'
      }, {
        title: 'Projections',
        xtype: 'omni-projection_details-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            sku_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Inventory',
        xtype: 'omni-inventories-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            sku_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
        // }, {
        //   title: 'Legacy Sales History',
        //   xtype: 'omni-daily_results-Explorer',
        //   defaultSearch: {
        //     with: {
        //       sku_id: {
        //         equal_to: me.record.get('sku_id')
        //       }
        //     }
        //   },
        //   showBadge: true
      }, {
        title: 'Aliases',
        xtype: 'omni-sku_aliases-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            sku_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Prices',
        xtype: 'omni-sku_prices-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            sku_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Suppliers',
        xtype: 'omni-sku_suppliers-Explorer',
        module: 'samples',
        defaultSearch: {
          with: {
            sku_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Notes',
        xtype: 'buildit-notes-Explorer',
        defaultSearch: {
          with: {
            notable_type: {
              equal_to: 'Omni::Sku'
            },
            notable_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
      }, {
        title: 'Attachments',
        xtype: 'buildit-attachments-Explorer',
        defaultSearch: {
          with: {
            attachable_type: {
              equal_to: 'Omni::Sku'
            },
            attachable_id: {
              equal_to: me.record.get('sku_id')
            }
          }
        },
        showBadge: true
      }]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Sku',
      subtitle: this.record.get('display')
    });
    // TITLES (End)


    this.callParent();
  }

});
