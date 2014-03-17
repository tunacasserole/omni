Ext.define('Omni.view.allocation_details.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-allocation_details-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

            leftActions: [

        // LEFT ACTIONS (Start) =================================================================

       /**
         * Lock
         * Supports performing 'Lock' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Lock',
          cls: 'icon-settings',
          action: 'lock',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickLock,
              scope: me
            }
          }
        },

       /**
         * Unlock
         * Supports performing 'Unlock' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Unlock',
          cls: 'icon-settings',
          action: 'unlock',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickUnlock,
              scope: me
            }
          }
        },

        /**
         * Transfer
         * Supports performing 'Transfer' on the selected items in the explorer grid.
         * If none are selected then no records are processed.
         */
        {
          text:'Transfer',
          cls: 'icon-settings',
          action: 'transfer',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickTransfer,
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

  clickLock: function(btn, e, eOpts){
    Omni.logic.allocation_details.ExplorerProcessSelectedItems.click(btn, 'lock');
  },

  clickUnlock: function(btn, e, eOpts){
    Omni.logic.allocation_details.ExplorerProcessSelectedItems.click(btn, 'unlock');
  },

  clickTransfer: function(btn, e, eOpts){
    Omni.logic.allocation_details.ExplorerProcessSelectedItems.click(btn, 'transfer');
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
