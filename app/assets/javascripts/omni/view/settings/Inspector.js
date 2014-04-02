Ext.define('Omni.view.settings.Inspector', {
    extend: 'Buildit.ux.inspector.Panel',
    alias: 'widget.omni-settings-Inspector',


    initComponent: function() {
        var me = this;

        // INSPECTOR INIT (Start) ==============================================================
        Ext.applyIf(this, {
            associativeFilter: {
                property: 'user_id',
                value: this.record.get('user_id')
            },

            associativeSearch: {
                with: {
                    user_id: {
                        equal_to: this.record.get('user_id')
                    }
                }
            }

        });
        // INSPECTOR INIT (End)

        // CARDS (Start) =======================================================================
        Ext.apply(this, {
            cards: [{
                title: 'Profile',
                xtype: 'buildit-users-Form',
                module: 'users',
                title: 'Personal Details'
            }, {
                title: 'Bookmarks',
                xtype: 'buildit-bookmarks-Explorer',
                module: 'bookmarks',
                defaultSearch: me.associativeSearch,
                allowNew: false,
                allowSave: true
            }, {
                title: 'Audit',
                xtype: 'buildit-audits-Explorer',
                model: 'Buildit::User',
                model_id: me.record.get('user_id')
            }]
        });
        // CARDS (End)

        // TITLES (Start) ======================================================================
        Ext.applyIf(this, {
            title: 'Settings',
            subtitle: this.record.get('full_name')
        });
        // TITLES (End)

        this.callParent();
    }
});