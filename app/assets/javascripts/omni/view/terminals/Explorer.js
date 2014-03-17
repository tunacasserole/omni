Ext.define('Omni.view.terminals.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-terminals-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Terminal'),

      contextMenuConfig:{
        xtype:'omni-terminals-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-terminals-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-terminals-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel: Omni.i18n.model.Terminal.location_display,
      terminal_nbrLabel: Omni.i18n.model.Terminal.terminal_nbr,
      mac_addressLabel: Omni.i18n.model.Terminal.mac_address,
      local_server_ipLabel: Omni.i18n.model.Terminal.local_server_ip,
      hq_server_urlLabel: Omni.i18n.model.Terminal.hq_server_url,
      override_sale_dateLabel: Omni.i18n.model.Terminal.override_sale_date
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.location_displayLabel, dataIndex: 'location_display',  flex: 1,  sortable: true  },
        { header: this.terminal_nbrLabel, dataIndex: 'terminal_nbr',  flex: 1,  sortable: true  },
        { header: this.mac_addressLabel, dataIndex: 'mac_address',  flex: 1,  sortable: true  },
        { header: this.local_server_ipLabel, dataIndex: 'local_server_ip',  flex: 1,  sortable: true  },
        { header: this.hq_server_urlLabel, dataIndex: 'hq_server_url',  flex: 1,  sortable: true  },
        { header: this.override_sale_dateLabel, dataIndex: 'override_sale_date',  flex: 1,  sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/y') }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Terminal',
      subtitle:  'A POS register'
    });
    // TITLES (End)



    this.callParent();
  }

});
