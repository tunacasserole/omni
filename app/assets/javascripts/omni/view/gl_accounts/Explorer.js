Ext.define('Omni.view.gl_accounts.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-gl_accounts-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.GlAccount'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-gl_accounts-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-gl_accounts-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.GlAccount.display,
      gl_main_accountLabel: Omni.i18n.model.GlAccount.gl_main_account,
      gl_sub_accountLabel: Omni.i18n.model.GlAccount.gl_sub_account,
      is_location_fillLabel: Omni.i18n.model.GlAccount.is_location_fill,
      gl_account_typeLabel: Omni.i18n.model.GlAccount.gl_account_type
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.displayLabel,
        dataIndex: 'display',
        flex: 1,
        sortable: false
      }, {
        header: this.gl_main_accountLabel,
        dataIndex: 'gl_main_account',
        flex: 1,
        sortable: false
      }, {
        header: this.gl_sub_accountLabel,
        dataIndex: 'gl_sub_account',
        flex: 1,
        sortable: false
      }, {
        header: this.is_location_fillLabel,
        dataIndex: 'is_location_fill',
        flex: 1,
        sortable: false
      }, {
        header: this.gl_account_typeLabel,
        dataIndex: 'gl_account_type',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Gl Account',
      subtitle: 'General Ledger chart of accounts'
    });
    // TITLES (End)



    this.callParent();
  }

});
