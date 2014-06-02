Ext.define('Omni.view.supplier_contacts.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-supplier_contacts-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SupplierContact'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-supplier_contacts-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-supplier_contacts-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.SupplierContact.display,
      is_order_contactLabel: Omni.i18n.model.SupplierContact.is_order_contact,
      is_return_contactLabel: Omni.i18n.model.SupplierContact.is_return_contact,
      is_payment_contactLabel: Omni.i18n.model.SupplierContact.is_payment_contact,
      is_executive_contactLabel: Omni.i18n.model.SupplierContact.is_executive_contact,
      phoneLabel: Omni.i18n.model.SupplierContact.phone,
      email_addressLabel: Omni.i18n.model.SupplierContact.email_address
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.displayLabel,
        dataIndex: 'display',
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
        flex: 1,
        sortable: false
      }, {
        header: this.is_order_contactLabel,
        dataIndex: 'is_order_contact',
        flex: 1,
        sortable: false
      }, {
        header: this.is_return_contactLabel,
        dataIndex: 'is_return_contact',
        flex: 1,
        sortable: false
      }, {
        header: this.is_payment_contactLabel,
        dataIndex: 'is_payment_contact',
        flex: 1,
        sortable: false
      }, {
        header: this.is_executive_contactLabel,
        dataIndex: 'is_executive_contact',
        flex: 1,
        sortable: false
      }, ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Supplier Contact',
      subtitle: 'All of the contact people for a supplier'
    });
    // TITLES (End)



    this.callParent();
  }

});
