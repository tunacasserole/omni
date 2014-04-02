Ext.define('Omni.view.app.HubContextMenu', {
    extend: 'Buildit.ux.ContextMenu',
    alias: 'widget.omni-app-HubContextMenu',


    initComponent: function() {
        var me = this;

        Ext.apply(this, {

            rightActions: [

                /**
                 * SETTINGS
                 * Supports the deletion of the selected items in the explorer grid. If none
                 * are selected then no records are deleted.
                 */
                {
                    xtype: 'buildit-SettingsButton',
                    target: {
                        xtype: 'omni-settings-Inspector'
                    }
                },

                /**
                 * APPLICATIONS
                 * Supports the deletion of the selected items in the explorer grid. If none
                 * are selected then no records are deleted.
                 */
                {
                    iconCls: 'fa fa-desktop',
                    tooltip: 'Change application',
                    action: 'applications',
                    confirm: true,
                    multi: true,
                    privileges: [],
                    listeners: {
                        click: {
                            fn: Ext.emptyFn,
                            scope: me
                        }
                    }
                }

            ],


            leftActions: [

                /**
         * NEW
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.

        {
          text: 'New',
          cls: 'icon-new'
        }
        */
            ]

        });

        this.callParent();
    }

});