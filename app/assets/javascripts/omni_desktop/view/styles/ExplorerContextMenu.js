Ext.define('Omni.view.styles.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.omni-styles-ExplorerContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================


        /**
         * SELECT ALL
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are approved.
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
        }

        /**
         * DESELECT ALL
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are approved.
         */
        ,{
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

        // SEPARATOR
        ,'-'

        /**
         * NEW
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are approved.
         */
        ,{
          text: 'New',
          cls: 'icon-new'
        }

        // SEPARATOR
        ,'-'

        /**
         * EXPORT
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are approved.
         */
        ,{
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
        }

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are approved.
         */
        ,{
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
        // RIGHT ACTIONS (End)

      ],


      leftActions: [

        // LEFT ACTIONS (Start) =================================================================

        // /**
        //  * PLAN
        //  * Supports the plan of the selected items in the explorer grid. If none
        //  * are selected then no records are planned.
        //  */
        // {
        //   text:'Start Planning',
        //   cls: 'icon-applications',
        //   action: 'plan',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickPlan,
        //       scope: me
        //     }
        //   }
        // }

        // /**
        //  * ACTIVATE
        //  * Supports the deletion of the selected items in the explorer grid. If none
        //  * are selected then no records are approved.
        //  */
        // ,{
        //   text:'Activate',
        //   cls: 'icon-applications',
        //   action: 'activate',
        //   confirm: true,
        //   multi: true,
        //   privileges: [],
        //   listeners: {
        //     click: {
        //       fn: this.clickActivate,
        //       scope: me
        //     }
        //   }
        // }

        /**
         * BUILD LOCATIONS
         * Supports the building of style locations for the selected style
         */
        ,{
          text:'Build Locations',
          cls: 'icon-settings',
          action: 'gen_locations',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickLocations,
              scope: me
            }
          }
        }
        /**
         * BUILD SKUS
         * Supports the building of skus for the selected style
         */
        ,{
          text:'Build Skus',
          cls: 'icon-settings',
          action: 'build',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickBuild,
              scope: me
            }
          }
        }


        // LEFT ACTIONS (End)

      ]

    });

    this.callParent();
  },



  // CUSTOM ACTION HANDLERS (Start) ====================================================================

  clickPlan: function(btn, e, eOpts){
    Omni.logic.styles.ExplorerProcessSelectedItems.click(btn, 'plan');
  },

  clickActivate: function(btn, e, eOpts){
    Omni.logic.styles.ExplorerProcessSelectedItems.click(btn, 'activate');
  },

  clickLocations: function(btn, e, eOpts){
    Omni.logic.styles.ExplorerProcessSelectedItems.click(btn, 'gen_locations');
  },

  clickBuild: function(btn, e, eOpts){
    Omni.logic.styles.ExplorerProcessSelectedItems.click(btn, 'build');
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

