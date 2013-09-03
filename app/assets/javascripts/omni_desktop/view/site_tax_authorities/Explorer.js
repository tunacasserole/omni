Ext.define('Omni.view.site_tax_authorities.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-site_tax_authorities-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SiteTaxAuthority'),

      contextMenuConfig:{
        xtype:'omni-site_tax_authorities-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-site_tax_authorities-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-site_tax_authorities-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      site_displayLabel: Omni.i18n.model.SiteTaxAuthority.site_display,
      tax_authority_displayLabel: Omni.i18n.model.SiteTaxAuthority.tax_authority_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.site_displayLabel, dataIndex: 'site_display',  flex: 1,  sortable: true  },
        { header: this.tax_authority_displayLabel, dataIndex: 'tax_authority_display',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site Tax Authority',
      subtitle:  'Government agencies that collect sales tax from a school'
    });
    // TITLES (End)



    this.callParent();
  }

});
