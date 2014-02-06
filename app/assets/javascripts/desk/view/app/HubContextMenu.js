Ext.define('Desk.view.app.HubContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.desk-app-HubContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      rightActions: [

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are processed.
         */
        {
          text:'Settings',
          cls: 'icon-settings',
          action: 'settings',
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
          text:'Applications',
          cls: 'icon-applications',
          action: 'applications',
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

      ],


      leftActions: [

        /**
         * NEW
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are processed.

        {
          text: 'New',
          cls: 'icon-new'
        }
        */
      ]

    });

    this.callParent();
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
  }

});
