Ext.define('Omni.view.hubs.StandardContextMenu', {
    extend: 'Buildit.ux.ContextMenu',
    alias: 'widget.omni-hubs-StandardContextMenu',


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
                        xtype: 'panel'
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