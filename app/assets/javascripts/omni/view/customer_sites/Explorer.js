Ext.define('Omni.view.customer_accounts.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-customer_accounts-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.CustomerAccount'),

      contextMenuConfig:{
        xtype:'omni-customer_accounts-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-customer_accounts-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-customer_accounts-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      commentLabel: Omni.i18n.model.CustomerAccount.comment,
      is_contactLabel: Omni.i18n.model.CustomerAccount.is_contact,
      is_teacherLabel: Omni.i18n.model.CustomerAccount.is_teacher,
      is_administratorLabel: Omni.i18n.model.CustomerAccount.is_administrator
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.commentLabel, dataIndex: 'comment',  flex: 1,  sortable: true  },
        { header: this.is_contactLabel, dataIndex: 'is_contact',  flex: 1,  sortable: true  },
        { header: this.is_teacherLabel, dataIndex: 'is_teacher',  flex: 1,  sortable: true  },
        { header: this.is_administratorLabel, dataIndex: 'is_administrator',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Customer Account',
      subtitle:  'Ties a customer to the schools their children attend'
    });
    // TITLES (End)



    this.callParent();
  }

});
