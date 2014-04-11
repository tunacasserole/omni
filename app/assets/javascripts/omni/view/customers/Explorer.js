Ext.define('Omni.view.customers.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-customers-Explorer',

  // EXPLORER CONFIG (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Customer'),

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu',
  },

  inspectorConfig: {
    xtype: 'omni-customers-Inspector'
  },

  newForms: [{
    xtype: 'omni-customers-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      customer_nbrLabel: Omni.i18n.model.Customer.customer_nbr,
      displayLabel: Omni.i18n.model.Customer.display,
      line_1Label: Omni.i18n.model.Customer.line_1,
      cityLabel: Omni.i18n.model.Customer.city,
      state_codeLabel: Omni.i18n.model.Customer.state_code,
      zipLabel: Omni.i18n.model.Customer.zip,
      phoneLabel: Omni.i18n.model.Customer.phone,
      email_addressLabel: Omni.i18n.model.Customer.email_address
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.displayLabel,
        dataIndex: 'display',
        flex: 3,
        sortable: false
      }, {
        header: this.line_1Label,
        dataIndex: 'line_1',
        flex: 2,
        sortable: false
      }, {
        header: this.cityLabel,
        dataIndex: 'city',
        flex: 2,
        sortable: false
      }, {
        header: this.state_codeLabel,
        dataIndex: 'state_code',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('STATE_CODE')
      }, {
        header: this.zipLabel,
        dataIndex: 'zip',
        flex: 1,
        sortable: false
      }, {
        header: this.phoneLabel,
        dataIndex: 'phone',
        flex: 1,
        sortable: false
      }, {
        header: this.email_addressLabel,
        dataIndex: 'email_address',
        flex: 2,
        sortable: false
      }, {
        header: this.customer_nbrLabel,
        dataIndex: 'customer_nbr',
        flex: 1,
        sortable: false
      }, ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Customer',
      subtitle: 'A person or company that buys Parker products'
    });
    // TITLES (End)



    this.callParent();
  }

});
