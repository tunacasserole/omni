Ext.define('Omni.view.customers.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-customers-Explorer',

  
    
  
  
  
  // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Customer'),

  contextMenuConfig:{
    xtype:        'omni-customers-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-customers-Inspector'
  },

  newForms:[{
    xtype:        'omni-customers-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      customer_nbrLabel:                     Omni.i18n.model.Customer.customer_nbr,
      registration_dateLabel:                Omni.i18n.model.Customer.registration_date,
      line_1Label:                           Omni.i18n.model.Customer.line_1,
      cityLabel:                             Omni.i18n.model.Customer.city,
      state_codeLabel:                       Omni.i18n.model.Customer.state_code,
      zipLabel:                              Omni.i18n.model.Customer.zip,
      phoneLabel:                            Omni.i18n.model.Customer.phone,
      email_addressLabel:                    Omni.i18n.model.Customer.email_address
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.customer_nbrLabel,                                dataIndex: 'customer_nbr',                       flex: 1,   sortable: true  },
        { header: this.registration_dateLabel,                           dataIndex: 'registration_date',                  flex: 1,   sortable: true ,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.line_1Label,                                      dataIndex: 'line_1',                             flex: 1,   sortable: true  },
        { header: this.cityLabel,                                        dataIndex: 'city',                               flex: 1,   sortable: true  },
        { header: this.state_codeLabel,                                  dataIndex: 'state_code',                         flex: 1,   sortable: true , renderer: Buildit.util.Format.lookupRenderer('STATE_CODE') },
        { header: this.zipLabel,                                         dataIndex: 'zip',                                flex: 1,   sortable: true  },
        { header: this.phoneLabel,                                       dataIndex: 'phone',                              flex: 1,   sortable: true  },
        { header: this.email_addressLabel,                               dataIndex: 'email_address',                      flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Customer',
      subtitle:  'A person or company that buys Parker products'
    });
    // TITLES (End)



    this.callParent();
  }

});