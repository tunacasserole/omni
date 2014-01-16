Ext.define('Omni.view.style_locations.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-style_locations-Explorer',

  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: false,

      store: Ext.create('Omni.store.StyleLocation'),

      contextMenuConfig:{
        xtype:'omni-style_locations-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-style_locations-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-style_locations-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      style_displayLabel:    Omni.i18n.model.StyleLocation.style_display,
      stateLabel:            Omni.i18n.model.StyleLocation.state,
      location_displayLabel: Omni.i18n.model.StyleLocation.location_display,
      is_authorizedLabel:    Omni.i18n.model.StyleLocation.is_authorized,
      is_taxableLabel:       Omni.i18n.model.StyleLocation.is_taxable,
      is_special_orderLabel: Omni.i18n.model.StyleLocation.is_special_order,
      is_discontinuedLabel:  Omni.i18n.model.StyleLocation.is_discontinued
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.style_displayLabel,    dataIndex: 'style_display',    flex: 1,  sortable: true  },
        { header: this.location_displayLabel, dataIndex: 'location_display', flex: 1,  sortable: true  },
        { header: this.stateLabel,            dataIndex: 'state',            flex: 1,  sortable: true  },
        { header: this.is_authorizedLabel,    dataIndex: 'is_authorized',    flex: 1,  sortable: true  },
        { header: this.is_taxableLabel,       dataIndex: 'is_taxable',       flex: 1,  sortable: true  },
        { header: this.is_special_orderLabel, dataIndex: 'is_special_order', flex: 1,  sortable: true  },
        { header: this.is_discontinuedLabel,  dataIndex: 'is_discontinued',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Style Location',
      subtitle:  'The stores, warehouses and web sites that stock or sell a style'
    });
    // TITLES (End)



    this.callParent();
  }

});
