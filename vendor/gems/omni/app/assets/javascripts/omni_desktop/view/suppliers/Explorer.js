Ext.define('Omni.view.suppliers.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-suppliers-Explorer',


    // LABELS (Start) ======================================================================
  supplier_nbrLabel:                        Omni.i18n.model.Supplier.supplier_nbr,
  line_1Label:                              Omni.i18n.model.Supplier.line_1,
  phoneLabel:                               Omni.i18n.model.Supplier.phone,
  supplier_ucc_prefixLabel:                 Omni.i18n.model.Supplier.supplier_ucc_prefix,
  line_2Label:                              Omni.i18n.model.Supplier.line_2,
  legacy_supplier_codeLabel:                Omni.i18n.model.Supplier.legacy_supplier_code,
  cityLabel:                                Omni.i18n.model.Supplier.city,
  state_codeLabel:                          Omni.i18n.model.Supplier.state_code,
  zipLabel:                                 Omni.i18n.model.Supplier.zip,
  faxLabel:                                 Omni.i18n.model.Supplier.fax,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Supplier',
  subtitle:  'Any entity that supplies Parker with goods or services',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Supplier'),

  contextMenuConfig:{
    xtype:        'omni-suppliers-ExplorerContextMenu',
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
        { header: this.supplier_nbrLabel,                                dataIndex: 'supplier_nbr',                       flex: 1,   sortable: true  },
        { header: this.line_1Label,                                      dataIndex: 'line_1',                             flex: 1,   sortable: true  },
        { header: this.phoneLabel,                                       dataIndex: 'phone',                              flex: 1,   sortable: true  },
        { header: this.supplier_ucc_prefixLabel,                         dataIndex: 'supplier_ucc_prefix',                flex: 1,   sortable: true  },
        { header: this.line_2Label,                                      dataIndex: 'line_2',                             flex: 1,   sortable: true  },
        { header: this.legacy_supplier_codeLabel,                        dataIndex: 'legacy_supplier_code',               flex: 1,   sortable: true  },
        { header: this.cityLabel,                                        dataIndex: 'city',                               flex: 1,   sortable: true  },
        { header: this.state_codeLabel,                                  dataIndex: 'state_code',                         flex: 1,   sortable: true  },
        { header: this.zipLabel,                                         dataIndex: 'zip',                                flex: 1,   sortable: true  },
        { header: this.faxLabel,                                         dataIndex: 'fax',                                flex: 1,   sortable: true  }
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
