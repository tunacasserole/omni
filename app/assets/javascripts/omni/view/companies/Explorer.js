Ext.define('Omni.view.companies.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-companies-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Company'),

      contextMenuConfig:{
        xtype:'omni-companies-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-companies-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-companies-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Company.display,
      company_nbrLabel: Omni.i18n.model.Company.company_nbr,
      line_1Label: Omni.i18n.model.Company.line_1,
      cityLabel: Omni.i18n.model.Company.city,
      state_codeLabel: Omni.i18n.model.Company.state_code,
      zipLabel: Omni.i18n.model.Company.zip,
      phoneLabel: Omni.i18n.model.Company.phone
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: true  },
        { header: this.company_nbrLabel, dataIndex: 'company_nbr',  flex: 1,  sortable: true  },
        { header: this.line_1Label, dataIndex: 'line_1',  flex: 1,  sortable: true  },
        { header: this.cityLabel, dataIndex: 'city',  flex: 1,  sortable: true  },
        { header: this.state_codeLabel, dataIndex: 'state_code',  flex: 1,  sortable: true  },
        { header: this.zipLabel, dataIndex: 'zip',  flex: 1,  sortable: true  },
        { header: this.phoneLabel, dataIndex: 'phone',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Company',
      subtitle:  'Highest level of the Location Hierarchy'
    });
    // TITLES (End)



    this.callParent();
  }

});
