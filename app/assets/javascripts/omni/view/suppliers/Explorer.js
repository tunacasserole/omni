Ext.define('Omni.view.suppliers.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-suppliers-Explorer',


    // LABELS (Start) ======================================================================
  supplier_nbrLabel:                        Omni.i18n.model.Supplier.supplier_nbr,
  line_1Label:                              Omni.i18n.model.Supplier.line_1,
  phoneLabel:                               Omni.i18n.model.Supplier.phone,
  supplier_nameLabel:                       Omni.i18n.model.Supplier.supplier_name,
  line_2Label:                              Omni.i18n.model.Supplier.line_2,
  legacy_supplier_codeLabel:                Omni.i18n.model.Supplier.legacy_supplier_code,
  cityLabel:                                Omni.i18n.model.Supplier.city,
  state_codeLabel:                          Omni.i18n.model.Supplier.state_code,
  zipLabel:                                 Omni.i18n.model.Supplier.zip,
  faxLabel:                                 Omni.i18n.model.Supplier.fax,
  is_enabledLabel:                          Omni.i18n.model.Supplier.is_enabled,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Supplier',
  subtitle:  'Any entity that supplies Parker with goods or services',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Supplier'),

  contextMenuConfig:{
    xtype    : 'omni-app-ExplorerContextMenu'
  },

  inspectorConfig: {
    xtype:        'omni-suppliers-Inspector'
  },

  newForms:[{
    xtype:        'omni-suppliers-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.supplier_nbrLabel,                                dataIndex: 'supplier_nbr',                       flex: 1,   sortable: false  },
        { header: this.supplier_nameLabel,                                     dataIndex: 'supplier_name',                flex: 2,   sortable: false  },
        { header: this.line_1Label,                                      dataIndex: 'line_1',                             flex: 2,   sortable: false  },
        { header: this.phoneLabel,                                       dataIndex: 'phone',                              flex: 1,   sortable: false  },
        // { header: this.line_2Label,                                      dataIndex: 'line_2',                             flex: 1,   sortable: false  },
        // { header: this.legacy_supplier_codeLabel,                        dataIndex: 'legacy_supplier_code',               flex: 1,   sortable: false  },
        { header: this.cityLabel,                                        dataIndex: 'city',                               flex: 1,   sortable: false  },
        { header: this.state_codeLabel,                                  dataIndex: 'state_code',                         flex: 1,   sortable: false  },
        { header: this.zipLabel,                                         dataIndex: 'zip',                                flex: 1,   sortable: false  },
        // { header: this.faxLabel,                                         dataIndex: 'fax',                                flex: 1,   sortable: false  },
        { header: this.is_enabledLabel, dataIndex: 'is_enabled',  flex: 1,  sortable: false  },
      ]
    });
    // COLUMNS (End)

    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
