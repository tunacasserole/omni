Ext.define('Omni.view.location_tax_authorities.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-location_tax_authorities-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.LocationTaxAuthority'),

      contextMenuConfig:{
        xtype:'omni-location_tax_authorities-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-location_tax_authorities-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-location_tax_authorities-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel: Omni.i18n.model.LocationTaxAuthority.location_display,
      tax_authority_displayLabel: Omni.i18n.model.LocationTaxAuthority.tax_authority_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.location_displayLabel, dataIndex: 'location_display',  flex: 1,  sortable: true  },
        { header: this.tax_authority_displayLabel, dataIndex: 'tax_authority_display',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Location Tax Authority',
      subtitle:  'Government agencies that collect sales tax from a store'
    });
    // TITLES (End)



    this.callParent();
  }

});
