Ext.define('Omni.view.work_orders.ExplorerContextMenuRelase', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-work_orders-ExplorerContextMenuRelase',

  
  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================

        /**
         * Relase
         * Supports performing 'Relase' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        {
          text:'Relase',
          cls: 'icon-settings',
          action: 'relase',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickRelase,
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
         * EXPORT
         * Supports the export of the selected items in the explorer grid.
         * 
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
         * SELECT ALL
         * Supports the selection of all rows in the grid.
         * 
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
         * DESELECT ALL
         * Supports the de-selection of all rows in the grid.
         * 
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


      leftActions: [

        // LEFT ACTIONS (Start) =================================================================

        /**
         * NEW
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          text: 'New',
          cls: 'icon-new'
        }

        // LEFT ACTIONS (End)

      ]

    });

    this.callParent();
  },


  // ACTION HANDLERS (Start) ====================================================================

  clickRelase: function(btn, e, eOpts){
    Omni.logic.work_orders.ExplorerProcessSelectedItems.click(btn, 'relase');
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
  }

  // ACTION HANDLERS (End)

});
