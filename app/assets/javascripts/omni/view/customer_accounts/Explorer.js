Ext.define('Omni.view.customer_accounts.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-customer_accounts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-customer_accounts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-customer_accounts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  customer_account_idLabel                : Omni.i18n.model.CustomerAccount.customer_account_id,
  displayLabel                            : Omni.i18n.model.CustomerAccount.display,
  customer_idLabel                        : Omni.i18n.model.CustomerAccount.customer_id,
  account_idLabel                         : Omni.i18n.model.CustomerAccount.account_id,
  commentLabel                            : Omni.i18n.model.CustomerAccount.comment,
  is_contactLabel                         : Omni.i18n.model.CustomerAccount.is_contact,
  is_teacherLabel                         : Omni.i18n.model.CustomerAccount.is_teacher,
  is_administratorLabel                   : Omni.i18n.model.CustomerAccount.is_administrator,
  is_destroyedLabel                       : Omni.i18n.model.CustomerAccount.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Customer Accounts',
  subtitle : 'Create and maintain Customer Accounts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.CustomerAccount')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    {
      header       : me.displayLabel,
      dataIndex    : 'display',
      flex         : 1
    },
    {
      header       : me.customer_idLabel,
      dataIndex    : 'customer_id',
      flex         : 1
    },
    {
      header       : me.account_idLabel,
      dataIndex    : 'account_id',
      flex         : 1
    },
    {
      header       : me.commentLabel,
      dataIndex    : 'comment',
      flex         : 1
    },
    {
      xtype        : 'checkcolumn',
      header       : me.is_contactLabel,
      dataIndex    : 'is_contact',
      flex         : 1
    },
    {
      xtype        : 'checkcolumn',
      header       : me.is_teacherLabel,
      dataIndex    : 'is_teacher',
      flex         : 1
    },
    {
      xtype        : 'checkcolumn',
      header       : me.is_administratorLabel,
      dataIndex    : 'is_administrator',
      flex         : 1
    },
    {
      xtype        : 'checkcolumn',
      header       : me.is_destroyedLabel,
      dataIndex    : 'is_destroyed',
      flex         : 1
    }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});