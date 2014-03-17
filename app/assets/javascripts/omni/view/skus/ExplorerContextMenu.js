Ext.define('Omni.view.skus.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-skus-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      leftActions: [

        // LEFT ACTIONS (Start) =================================================================

        /**
         * ACTIVATE
         * Supports the release of the selected items in the explorer grid. If none
         * are selected then no records are released.
         */
        ,{
          text:'Activate',
          cls: 'icon-applications',
          action: 'activate',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickActivate,
              scope: me
            }
          }
        }

        /**
         * deactivate
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are approved.
         */
        ,{
          text:'Deactivate',
          cls: 'icon-applications',
          action: 'deactivate',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickDeactivate,
              scope: me
            }
          }
        }

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
         * export
         * Supports the export of the selected items in the explorer grid. If none
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

      ]

    });

    this.callParent();
  },



  // CUSTOM ACTION HANDLERS (Start) ====================================================================

  clickActivate: function(btn, e, eOpts){
    Omni.logic.skus.ExplorerProcessSelectedItems.click(btn, 'activate');
  },

  clickDeactivate: function(btn, e, eOpts){
    Omni.logic.skus.ExplorerProcessSelectedItems.click(btn, 'deactivate');
  },

  // CUSTOM ACTION HANDLERS (End)



  // ACTION HANDLERS (Start) ====================================================================

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

