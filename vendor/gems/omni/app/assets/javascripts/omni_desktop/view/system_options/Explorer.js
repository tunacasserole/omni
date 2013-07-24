Ext.define('Omni.view.system_options.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-system_options-Explorer',


    // LABELS (Start) ======================================================================
  displayLabel:                             Omni.i18n.model.SystemOption.display,
  price_book_displayLabel:                  Omni.i18n.model.SystemOption.price_book_display,
  professional_discount_percentLabel:       Omni.i18n.model.SystemOption.professional_discount_percent,
  employee_discount_percentLabel:           Omni.i18n.model.SystemOption.employee_discount_percent,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'System Option',
  subtitle:  'All system options',
  // TITLES (End)


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.SystemOption'),

  contextMenuConfig:{
    xtype:        'omni-system_options-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-system_options-Inspector'
  },

  newForms:[{
    xtype:        'omni-system_options-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 1,   sortable: true  },
        { header: this.price_book_displayLabel,                          dataIndex: 'price_book_display',                 flex: 1,   sortable: true  },
        { header: this.professional_discount_percentLabel,               dataIndex: 'professional_discount_percent',      flex: 1,   sortable: true  },
        { header: this.employee_discount_percentLabel,                   dataIndex: 'employee_discount_percent',          flex: 1,   sortable: true  }
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
