Ext.define('Omni.view.account_tax_authorities.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-account_tax_authorities-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowInspect: false,
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'omni-account_tax_authorities-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-account_tax_authorities-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  account_tax_authority_idLabel: Omni.i18n.model.AccountTaxAuthority.account_tax_authority_id,
  displayLabel: Omni.i18n.model.AccountTaxAuthority.display,
  account_idLabel: Omni.i18n.model.AccountTaxAuthority.account_id,
  tax_authority_idLabel: Omni.i18n.model.AccountTaxAuthority.tax_authority_id,
  is_destroyedLabel: Omni.i18n.model.AccountTaxAuthority.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Account Tax Authorities',
  subtitle: 'Create and maintain Account Tax Authorities',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.AccountTaxAuthority')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [
        // {
        //   header       : me.displayLabel,
        //   dataIndex    : 'display',
        //   flex         : 1
        // },
        // {
        //   header       : me.account_idLabel,
        //   dataIndex    : 'account_display',
        //   flex         : 1
        // },
        {
          header: me.tax_authority_idLabel,
          dataIndex: 'tax_authority_display',
          flex: 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
