Ext.define('Omni.view.gl_accounts.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-gl_accounts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.GlAccount'),

  contextMenuConfig : {
    xtype    : 'omni-gl_accounts-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-gl_accounts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-gl_accounts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  gl_account_idLabel:                     Omni.i18n.model.GlAccount.gl_account_id,
  displayLabel:                           Omni.i18n.model.GlAccount.display,
  gl_main_accountLabel:                   Omni.i18n.model.GlAccount.gl_main_account,
  gl_sub_accountLabel:                    Omni.i18n.model.GlAccount.gl_sub_account,
  is_location_fillLabel:                  Omni.i18n.model.GlAccount.is_location_fill,
  gl_account_typeLabel:                   Omni.i18n.model.GlAccount.gl_account_type,
  is_destroyedLabel:                      Omni.i18n.model.GlAccount.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'GlAccounts',
  subtitle:  'Create and maintain GlAccounts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.gl_account_idLabel,
          dataIndex    : 'gl_account_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.gl_main_accountLabel,
          dataIndex    : 'gl_main_account',
          flex         : 1
        },
        {
          header       : this.gl_sub_accountLabel,
          dataIndex    : 'gl_sub_account',
          flex         : 1
        },
        {
          header       : this.is_location_fillLabel,
          dataIndex    : 'is_location_fill',
          flex         : 1
        },
        {
          header       : this.gl_account_typeLabel,
          dataIndex    : 'gl_account_type',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});