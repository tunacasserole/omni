Ext.define('Omni.view.purchase_details.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-purchase_details-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

            leftActions: [

        // LEFT ACTIONS (Start) =================================================================

       /**
         * Allocate
         * Supports performing 'Allocate' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
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
         * Receive
         * Supports performing 'Receive' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        // {
        //   text:'Receive',
        //   cls: 'icon-settings',
        //   action: 'receive',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickReceive,
        //       scope: me
        //     }
        //   }
        // },

       /**
         * Cancel
         * Supports performing 'Cancel' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        {
          text:'Cancel',
          cls: 'icon-settings',
          action: 'cancel',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickReceive,
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

  clickAllocate: function(btn, e, eOpts){
    Omni.logic.purchase_details.ExplorerProcessSelectedItems.click(btn, 'allocate');
  },

  clickReceive: function(btn, e, eOpts){
    Omni.logic.purchase_details.ExplorerProcessSelectedItems.click(btn, 'receive');
  },

  clickCancel: function(btn, e, eOpts){
    Omni.logic.purchase_details.ExplorerProcessSelectedItems.click(btn, 'cancel');
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