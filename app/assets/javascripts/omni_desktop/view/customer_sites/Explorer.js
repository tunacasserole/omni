Ext.define('Omni.view.customer_sites.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-customer_sites-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.CustomerSite'),

      contextMenuConfig:{
        xtype:'omni-customer_sites-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-customer_sites-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-customer_sites-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      commentLabel: Omni.i18n.model.CustomerSite.comment,
      is_site_contactLabel: Omni.i18n.model.CustomerSite.is_site_contact,
      is_teacherLabel: Omni.i18n.model.CustomerSite.is_teacher,
      is_administratorLabel: Omni.i18n.model.CustomerSite.is_administrator
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.commentLabel, dataIndex: 'comment',  flex: 1,  sortable: true  },
        { header: this.is_site_contactLabel, dataIndex: 'is_site_contact',  flex: 1,  sortable: true  },
        { header: this.is_teacherLabel, dataIndex: 'is_teacher',  flex: 1,  sortable: true  },
        { header: this.is_administratorLabel, dataIndex: 'is_administrator',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Customer Site',
      subtitle:  'Ties a customer to the schools their children attend'
    });
    // TITLES (End)



    this.callParent();
  }

});
