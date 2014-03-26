//= require ./HubContextMenu

Ext.define('Omni.view.app.Hub', {
  extend: 'Buildit.ux.Hub',
  alias: 'widget.omni-app-Hub',
  extend: 'Buildit.ux.Hub',
  bodyStyle: 'background: transparent',
  cls: 'desktop',

  initComponent: function() {
    var me = this;

    // this.socket   = Buildit.lib.SocketManager.get('STANDARD');
    // this.socket.on('newEvents', this.handleNewEvents, me);


    Ext.apply(this, {
      allowSignout: true,
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'omni-app-HubContextMenu'
      },
      sections: [

        // Section: Demand Processing //

        {
          title: 'Demand Processing',
          columns: 2,
          rows: 4,
          tiles: [{
            title: 'Accounts',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-accounts-Explorer'
            }
          }, {
            title: 'Jobs',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-jobs-Explorer'
            }
          }, {
            title: 'Picks',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-picks-Explorer'
            }
          }]
        },

        // Section: Inventory Planning //

        {
          title: 'Inventory Planning',
          columns: 4,
          rows: 4,
          tiles: [{
            title: 'Inventory',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-inventories-Explorer'
            }
          }, {
            title: 'Projections',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-projections-Explorer'
            }
          }, {
            title: 'Purchasing',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-purchases-Explorer'
            }
          }, {
            title: 'Allocations',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-allocations-Explorer'
            }
          }, {
            title: 'Receipts',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-receipts-Explorer'
            }
          }, {
            title: 'Suppliers',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-suppliers-Explorer'
            }
          }, {
            title: 'Stock Ledger Activity',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-stock_ledger_activities-Explorer'
            }
          }, {
            title: 'Transfers',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-transfers-Explorer'
            }
          }, {
            title: 'Daily Results',
            colspan: 2,
            rowspan: 1,
            cls: 'supply',
            target: {
              xtype: 'omni-daily_results-Explorer'
            }
            // }, {
            //   title: 'Period Results',
            //   colspan: 2,
            //   rowspan: 1,
            //   cls: 'supply',
            //   target: {
            //     xtype: 'omni-period_results-Explorer'
            //   }
          }]
        }

        // Section: Product Hierarchy //
        , {
          title: 'product hierarchy',
          columns: 4,
          rows: 3,
          tiles: [{
            title: 'Skus',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-skus-Explorer'
            }
          }, {
            title: 'Styles',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-styles-Explorer'
            }
          }, {
            title: 'Subclasses',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-subclasses-Explorer'
            }
          }, {
            title: 'Classifications',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-classifications-Explorer'
            }
          }, {
            title: 'Departments',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-departments-Explorer'
            }
          }]
        }

        // Section: product setup data //

        , {
          title: 'product setup data',
          columns: 4,
          rows: 3,
          tiles: [{
            title: 'Colors',
            colspan: 2,
            rowspan: 1,
            cls: 'product_setup',
            target: {
              xtype: 'omni-colors-Explorer'
            }
          }, {
            title: 'Sizes',
            colspan: 2,
            rowspan: 1,
            cls: 'product_setup',
            target: {
              xtype: 'omni-sizes-Explorer'
            }
          }, {
            title: 'Size Groups',
            colspan: 2,
            rowspan: 1,
            cls: 'product_setup',
            target: {
              xtype: 'omni-size_groups-Explorer'
            }
          }, {
            title: 'Labels',
            colspan: 2,
            rowspan: 1,
            cls: 'product_setup',
            target: {
              xtype: 'omni-labels-Explorer',
              title: ''
            }
          }, {
            title: 'Price Books',
            colspan: 2,
            rowspan: 1,
            cls: 'product_setup',
            target: {
              xtype: 'omni-price_books-Explorer',
              title: ''
            }
          }, {
            title: 'Allocation Profiles',
            colspan: 2,
            rowspan: 1,
            cls: 'product_setup',
            target: {
              xtype: 'omni-allocation_profiles-Explorer'
            }
          }]
        }
        // Section: Company Hierarchy //


        , {
          title: 'company hierarchy',
          columns: 4,
          rows: 3,
          tiles: [{
            title: 'Companies',
            colspan: 2,
            rowspan: 1,
            cls: 'company',
            target: {
              xtype: 'omni-companies-Explorer'
            }
          }, {
            title: 'Regions',
            colspan: 2,
            rowspan: 1,
            cls: 'company',
            target: {
              xtype: 'omni-regions-Explorer'
            }
          }, {
            title: 'Districts',
            colspan: 2,
            rowspan: 1,
            cls: 'company',
            target: {
              xtype: 'omni-districts-Explorer'
            }
          }, {
            title: 'Locations',
            colspan: 2,
            rowspan: 1,
            cls: 'company',
            target: {
              xtype: 'omni-locations-Explorer'
            }
          }, {
            title: 'Areas',
            colspan: 2,
            rowspan: 1,
            cls: 'company',
            target: {
              xtype: 'omni-areas-Explorer'
            }
          }, {
            title: 'Accounts',
            colspan: 2,
            rowspan: 1,
            cls: 'company',
            target: {
              xtype: 'omni-accounts-Explorer'
            }
          }]
        }

        // Section: company setup data //

        , {
          title: 'company setup data',
          columns: 6,
          rows: 4,
          tiles: [{
            title: 'Gl Accounts',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-gl_accounts-Explorer'
            }
          }, {
            title: 'Transfer Reasons',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-transfer_reasons-Explorer',
              title: ''
            }
          }, {
            title: 'Grades',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-grades-Explorer',
              title: ''
            }
          }, {
            title: 'Periods',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-periods-Explorer',
              title: ''
            }
          }, {
            title: 'Forecast Profiles',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-forecast_profiles-Explorer'
            }
          }, {
            title: 'Rules',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-rules-Explorer'
            }
          }, {
            title: 'Rulesets',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-rulesets-Explorer'
            }
          }, {
            title: 'System Options',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-system_options-Explorer'
            }
          }, {
            title: 'Receipt Formats',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-receipt_formats-Explorer'
            }
          }, {
            title: 'Tenders',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-tenders-Explorer'
            }
          }, {
            title: 'Terminals',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-terminals-Explorer'
            }
          }, {
            title: 'Tills',
            colspan: 2,
            rowspan: 1,
            cls: 'network',
            target: {
              xtype: 'omni-tills-Explorer'
            }
          }]
        }

        // Section: System Admin //
        , {
          title: 'system administration',
          columns: 2,
          rows: 2,
          tiles: [{
            title: 'Tasks',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-tasks-Explorer'
            }
          }, {
            title: 'Issues',
            colspan: 2,
            rowspan: 1,
            cls: 'product_hierarchy',
            target: {
              xtype: 'omni-issues-Explorer'
            }
          }]
        }

        // Section: web hierarchy //

        // ,
        // {
        //   title: 'web hierarchy',
        //   columns: 2,
        //   rows: 3,
        //   tiles: [{
        //     title: 'Category',
        //     colspan: 2,
        //     rowspan: 1,
        //     cls: 'product_setup',
        //     target: {
        //       xtype: 'omni-categories-Explorer',
        //       title: ''
        //     }
        //   }, {
        //     title: 'Product',
        //     colspan: 2,
        //     rowspan: 1,
        //     cls: 'product_setup',
        //     target: {
        //       xtype: 'omni-products-Explorer',
        //       title: ''
        //     }
        //   }, {
        //     title: 'Product Types',
        //     colspan: 2,
        //     rowspan: 1,
        //     cls: 'product_setup',
        //     target: {
        //       xtype: 'omni-product_types-Explorer',
        //       title: ''
        //     }
        //   }, ]
        // }

        // Section: Legacy Data //
        // ,{
        //    title: 'Project Tracking',
        //      columns: 2,
        //      rows: 4,
        //      tiles: [
        //        {title: 'Tasks', colspan: 2, rowspan: 2, cls: 'project_tracking',  target: {xtype: 'omni-tasks-Explorer'}},
        //        {title: 'Projects', colspan: 2, rowspan: 2, cls: 'project_tracking',  target: {xtype: 'omni-projects-Explorer'}}
        //     ]
        //   }

      ]
    });

    this.callParent();
  },

  // handleNewEvents : function(data){
  //    var me = this;
  //    Ext.Array.each(data, function(event){
  //      var newEvent = Ext.create('Buildit.model.Event', event);
  //      // me.store.add(newEvent);
  //        Buildit.infoMsg(event.message)
  //      // Buildit.infoMsg(newEvent.get('message'))
  //    });
  //  }


});