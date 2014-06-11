Ext.define('Desk.view.app.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias: 'widget.omni-app-ExplorerContextMenu',

  initComponent: function() {
    var me = this;
    hideApprove = false;

    // if (me.explorer.allowBookmarking && !Ext.isDefined(me.explorer.association)) {
    // hideApprove = false;
    // }
    Ext.apply(this, {

      leftActions: [

        // // LEFT ACTIONS (Start) =================================================================

        // /**
        //  * APPROVE
        //  * Approve a projection detail row.
        //  *
        //  */
        // {
        //   iconCls: 'fa fa-thumbs-up',
        //   tooltip: 'Approve row',
        //   action: 'approve',
        //   hidden: hideApprove,
        //   listeners: {
        //     click: {
        //       fn: this.clickApprove,
        //       scope: me
        //     }
        //   }
        // },


        // /**
        //  * FORECAST
        //  * Forecast a projection detail row.
        //  *
        //  */
        // {
        //   iconCls: 'fa fa-cogs',
        //   tooltip: 'Forecast row',
        //   action: 'forecast',
        //   listeners: {
        //     click: {
        //       fn: this.clickForecast,
        //       scope: me
        //     }
        //   }
        // }
        // // LEFT ACTIONS (End)

      ],

      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
        //  */
        // {
        //   iconCls: 'fa fa-times',
        //   tooltip: 'Delete selected items',
        //   action: 'delete',
        //   confirm: true,
        //   multi: true,
        //   // hidden: !me.allowDelete,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: me.clickDelete,
        //       scope: me
        //     }
        //   }
        // },

        /**
         * EXPORT
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls: 'fa fa-cloud-download',
          tooltip: 'Export',
          action: 'export',
          confirm: true,
          multi: true,
          // hidden: !me.allowExport,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickExport,
              scope: me
            }
          }
        },


        // /**
        //  * SELECT ALL
        //  * Supports the deletion of the selected items in the explorer grid. If none
        //  * are selected then no records are deleted.
        //  */
        // {
        //   iconCls: 'fa fa-check-square-o',
        //   tooltip: 'Select All',
        //   action: 'select-all',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickSelectAll,
        //       scope: me
        //     }
        //   }
        // },


        // /**
        //  * DESELECT ALL
        //  * Supports the deletion of the selected items in the explorer grid. If none
        //  * are selected then no records are deleted.
        //  */
        // {
        //   iconCls: 'fa fa-square-o',
        //   tooltip: 'Deselect all',
        //   action: 'deselect-all',
        //   confirm: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickDeselectAll,
        //       scope: me
        //     }
        //   }
        // }

        // RIGHT ACTIONS (End)

      ]

    });

    this.callParent();
  },



  // ACTION HANDLERS (Start) ====================================================================

  clickExport: function(btn, e, eOpts) {
    Buildit.logic.explorer.action.Export.click(btn);
  },

  // ACTION HANDLERS (End)

});


//  Ext.apply(this, {

//      leftActions: [

//         // LEFT ACTIONS (Start) =================================================================

//        /**
//          * Approve
//          * Supports performing 'Approve' on the selected items in the explorer grid.
//          * If none are selected then no records are processed.
//          */
//         {
//           text:'Approve',
//           cls: 'icon-settings',
//           action: 'approve',
//           confirm: true,
//           multi: true,
//           privileges: [],
//           listeners: {
//             click: {
//               fn: this.clickApprove,
//               scope: me
//             }
//           }
//         },

//         // LEFT ACTIONS (End)

//       ],

//       rightActions: [

//         // RIGHT ACTIONS (Start) ================================================================

//         /**
//          * DELETE
//          * Supports the deletion of the selected items in the explorer grid. If none
//          * are selected then no records are processed.
//          */
//         {
//           text:'Delete',
//           cls: 'icon-delete',
//           action: 'delete',
//           confirm: true,
//           multi: true,
//           privileges: [],
//           listeners: {
//             click: {
//               fn: this.clickDelete,
//               scope: me
//             }
//           }
//         },

//         /**
//          * DELETE
//          * Supports the deletion of the selected items in the explorer grid. If none
//          * are selected then no records are processed.
//          */
//         {
//           text:'Export',
//           cls: 'icon-export',
//           action: 'export',
//           confirm: true,
//           multi: true,
//           privileges: [],
//           listeners: {
//             click: {
//               fn: this.clickExport,
//               scope: me
//             }
//           }
//         },

//         // SEPARATOR
//         '-',


//         *
//          * DELETE
//          * Supports the deletion of the selected items in the explorer grid. If none
//          * are selected then no records are processed.

//         {
//           text:'Select All',
//           cls: 'icon-select-all',
//           action: 'select-all',
//           confirm: true,
//           multi: true,
//           privileges: [],
//           listeners: {
//             click: {
//               fn: this.clickSelectAll,
//               scope: me
//             }
//           }
//         },


//         /**
//          * EXPORT
//          * Supports the deletion of the selected items in the explorer grid. If none
//          * are selected then no records are processed.
//          */
//         {
//           text:'Deselect All',
//           cls: 'icon-deselect-all',
//           action: 'deselect-all',
//           confirm: true,
//           privileges: [],
//           listeners: {
//             click: {
//               fn: this.clickDeselectAll,
//               scope: me
//             }
//           }
//         }

//         // RIGHT ACTIONS (End)

//       ],



//     });

//     this.callParent();
//   },



//   // ACTION HANDLERS (Start) ====================================================================

//   clickApprove: function(btn, e, eOpts){
//     Desk.logic.app.ExplorerProcessSelectedItems.click(btn, 'approve');
//   },

//   clickDelete: function(btn, e, eOpts){
//     Buildit.logic.explorer.action.Delete.click(btn);
//   },

//   clickExport: function(btn, e, eOpts){
//     Buildit.logic.explorer.action.Export.click(btn);
//   },

//   clickSelectAll: function(btn, e, eOpts){
//     Buildit.logic.explorer.action.SelectAll.click(btn);
//   },

//   clickDeselectAll: function(btn, e, eOpts){
//     Buildit.logic.explorer.action.DeselectAll.click(btn);
//   },

//   // ACTION HANDLERS (End)

// });
