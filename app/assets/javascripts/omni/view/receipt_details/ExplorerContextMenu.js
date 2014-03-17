Ext.define('Omni.view.receipt_details.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-receipt_details-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

            leftActions: [

        // LEFT ACTIONS (Start) =================================================================

       /**
         * Allocate
         * Supports performing 'Allocate' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Allocate',
          cls: 'icon-settings',
          action: 'allocate',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickAllocate,
              scope: me
            }
          }
        },

       /**
         * Release
         * Supports performing 'Release' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Release',
          cls: 'icon-settings',
          action: 'release',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickRelease,
              scope: me
            }
          }
        },

       /**
         * Hold
         * Supports performing 'Hold' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Hold',
          cls: 'icon-settings',
          action: 'hold',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickHold,
              scope: me
            }
          }
        },

       /**
         * Complete
         * Supports performing 'Complete' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Complete',
          cls: 'icon-settings',
          action: 'complete',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickComplete,
              scope: me
            }
          }
        },

        // LEFT ACTIONS (End)

      ],
      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are processed.
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
         * are selected then no records are processed.
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
         * are selected then no records are processed.
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
         * are selected then no records are processed.
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

  clickAllocate: function(btn, e, eOpts){
    Omni.logic.receipt_details.ExplorerProcessSelectedItems.click(btn, 'allocate');
  },

  clickRelease: function(btn, e, eOpts){
    Omni.logic.receipt_details.ExplorerProcessSelectedItems.click(btn, 'release');
  },

  clickComplete: function(btn, e, eOpts){
    Omni.logic.receipt_details.ExplorerProcessSelectedItems.click(btn, 'complete');
  },

  clickHold: function(btn, e, eOpts){
    Omni.logic.receipt_details.ExplorerProcessSelectedItems.click(btn, 'hold');
  },

  clickCancel: function(btn, e, eOpts){
    Omni.logic.receipt_details.ExplorerProcessSelectedItems.click(btn, 'cancel');
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
