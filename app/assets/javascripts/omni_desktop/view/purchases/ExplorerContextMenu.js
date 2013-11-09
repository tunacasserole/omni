Ext.define('Omni.view.purchases.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-purchases-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

            leftActions: [

        // LEFT ACTIONS (Start) =================================================================

      // /**
      //    * Release
      //    * Supports performing 'Release' on the selected items in the explorer grid.
      //    * If none are selected then no records are deleted.
      //    */
      //   {
      //     text:'Release',
      //     cls: 'icon-settings',
      //     action: 'release',
      //     confirm: true,
      //     multi: true,
      //     privileges: [],
      //     listeners: {
      //       click: {
      //         fn: this.clickRelease,
      //         scope: me
      //       }
      //     }
      //   },

      //  /**
      //    * Approve
      //    * Supports performing 'Approve' on the selected items in the explorer grid.
      //    * If none are selected then no records are deleted.
      //    */
      //   {
      //     text:'Approve',
      //     cls: 'icon-settings',
      //     action: 'approve',
      //     confirm: true,
      //     multi: true,
      //     privileges: [],
      //     listeners: {
      //       click: {
      //         fn: this.clickApprove,
      //         scope: me
      //       }
      //     }
      //   },

      //   /**
      //    * Allocate
      //    * Supports performing 'Allocate' on the selected items in the explorer grid.
      //    * If none are selected then no records are deleted.
      //    */
      //   {
      //     text:'Allocate',
      //     cls: 'icon-settings',
      //     action: 'allocate',
      //     confirm: true,
      //     multi: true,
      //     privileges: [],
      //     listeners: {
      //       click: {
      //         fn: this.clickAllocate,
      //         scope: me
      //       }
      //     }
      //   },

      //   // SEPARATOR
      //   '-',

      //  /**
      //    * Print
      //    */
      //   {
      //     text:'Print',
      //     cls: 'icon-settings',
      //     action: 'print',
      //     confirm: true,
      //     multi: true,
      //     privileges: [],
      //     listeners: {
      //       click: {
      //         fn: this.clickPrint,
      //         scope: me
      //       }
      //     }
      //   },

      // /**
      //    * Cancel
      //    * Supports performing 'Cancel' on the selected items in the explorer grid.
      //    * If none are selected then no records are deleted.
      //    */
      //   {
      //     text:'Cancel',
      //     cls: 'icon-settings',
      //     action: 'cancel',
      //     confirm: true,
      //     multi: true,
      //     privileges: [],
      //     listeners: {
      //       click: {
      //         fn: this.clickCancel,
      //         scope: me
      //       }
      //     }
      //   },

        // LEFT ACTIONS (End)

      ],
      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          text:'Delete',
          cls: 'icon-delete',
          action: 'delete',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickDelete,
              scope: me
            }
          }
        },

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          text:'Export',
          cls: 'icon-export',
          action: 'export',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickExport,
              scope: me
            }
          }
        },

        // SEPARATOR
        '-',


        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          text:'Select All',
          cls: 'icon-select-all',
          action: 'select-all',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickSelectAll,
              scope: me
            }
          }
        },


        /**
         * EXPORT
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          text:'Deselect All',
          cls: 'icon-deselect-all',
          action: 'deselect-all',
          confirm: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickDeselectAll,
              scope: me
            }
          }
        }

        // RIGHT ACTIONS (End)

      ],



    });

    this.callParent();
  },



  // ACTION HANDLERS (Start) ====================================================================

  clickPrint: function(btn, e, eOpts){
    Omni.logic.purchases.ExplorerProcessSelectedItems.click(btn, 'print');
  },

  clickRelease: function(btn, e, eOpts){
    Omni.logic.purchases.ExplorerProcessSelectedItems.click(btn, 'release');
  },

  clickAllocate: function(btn, e, eOpts){
    Omni.logic.purchases.ExplorerProcessSelectedItems.click(btn, 'allocate');
  },

  clickApprove: function(btn, e, eOpts){
    Omni.logic.purchases.ExplorerProcessSelectedItems.click(btn, 'approve');
  },

  clickCancel: function(btn, e, eOpts){
    Omni.logic.purchases.ExplorerProcessSelectedItems.click(btn, 'cancel');
  },

  clickDelete: function(btn, e, eOpts){
    Buildit.logic.explorer.action.Delete.click(btn);
  },

  clickExport: function(btn, e, eOpts){
    Buildit.logic.explorer.action.Export.click(btn);
  },

  clickSelectAll: function(btn, e, eOpts){
    Buildit.logic.explorer.action.SelectAll.click(btn);
  },

  clickDeselectAll: function(btn, e, eOpts){
    Buildit.logic.explorer.action.DeselectAll.click(btn);
  },

  clickNew: function(btn, e, eOpts){
    // TODO
  },

  clickImport: function(btn, e, eOpts){
    // TODO
  }

  // ACTION HANDLERS (End)

});
