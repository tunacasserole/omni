Ext.define('Omni.view.departments.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-departments-Explorer',


  // LABELS (Start) ======================================================================
  displayLabel: Omni.i18n.model.Department.display,
  department_nbrLabel: Omni.i18n.model.Department.department_nbr,
  buyer_user_displayLabel: Omni.i18n.model.Department.buyer_user_display,
  company_displayLabel: Omni.i18n.model.Department.company_display,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Department',
  subtitle: 'First level of the Product Hierarchy',
  // TITLES (End)


  // EXPLORER CONFIG (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Department'),

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu',
  },

  inspectorConfig: {
    xtype: 'omni-departments-Inspector'
  },

  newForms: [{
    xtype: 'omni-departments-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent: function() {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
          header: this.displayLabel,
          dataIndex: 'display',
          flex: 1,
          sortable: false
        }, {
          header: this.buyer_user_displayLabel,
          dataIndex: 'buyer_user_display',
          flex: 1,
          sortable: false
        }, {
          header: this.company_displayLabel,
          dataIndex: 'company_display',
          flex: 1,
          sortable: false
        }, {
          header: this.department_nbrLabel,
          dataIndex: 'department_nbr',
          flex: 1,
          sortable: false
        },

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
