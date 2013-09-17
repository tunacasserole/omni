Ext.define('Omni.view.projections.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-projections-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

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
        },

        /**
         * Build
         * Supports performing 'Build' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        // {
        //   text:'Build',
        //   cls: 'icon-settings',
        //   action: 'build',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickBuild,
        //       scope: me
        //     }
        //   }
        // },

        /**
         * Forecast
         * Supports performing 'Forecast' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        // {
        //   text:'Forecast',
        //   cls: 'icon-settings',
        //   action: 'forecast',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickForecast,
        //       scope: me
        //     }
        //   }
        // },

        /**
         * Release
         * Supports performing 'Release' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        // {
        //   text:'Release',
        //   cls: 'icon-settings',
        //   action: 'release',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickRelease,
        //       scope: me
        //     }
        //   }
        // },

        /**
         * Revise
         * Supports performing 'Revise' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        // {
        //   text:'Revise',
        //   cls: 'icon-settings',
        //   action: 'revise',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickRevise,
        //       scope: me
        //     }
        //   }
        // },

        /**
         * Approve
         * Supports performing 'Approve' on the selected items in the explorer grid.
         * If none are selected then no records are deleted.
         */
        // {
        //   text:'Approve',
        //   cls: 'icon-settings',
        //   action: 'approve',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickApprove,
        //       scope: me
        //     }
        //   }
        // },

        // LEFT ACTIONS (End)

      ],


      // RIGHT ACTIONS (Start) ================================================================
      rightActions: [

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
        },

        // SEPARATOR
        '-',

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

      ]
     // RIGHT ACTIONS (End)


    });

    this.callParent();
  },


  // ACTION HANDLERS (Start) ====================================================================

  clickBuild: function(btn, e, eOpts){
    Omni.logic.projections.ExplorerProcessSelectedItems.click(btn, 'build');
  },

  clickForecast: function(btn, e, eOpts){
    Omni.logic.projections.ExplorerProcessSelectedItems.click(btn, 'forecast');
  },

  clickRelease: function(btn, e, eOpts){
    Omni.logic.projections.ExplorerProcessSelectedItems.click(btn, 'release');
  },

  clickApprove: function(btn, e, eOpts){
    Omni.logic.projections.ExplorerProcessSelectedItems.click(btn, 'approve');
  },

  clickRevise: function(btn, e, eOpts){
    Omni.logic.projections.ExplorerProcessSelectedItems.click(btn, 'revise');
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

