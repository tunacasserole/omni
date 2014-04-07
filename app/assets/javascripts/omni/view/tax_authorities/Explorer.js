Ext.define('Omni.view.tax_authorities.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-tax_authorities-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TaxAuthority'),

      contextMenuConfig:{
        xtype:'omni-tax_authorities-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-tax_authorities-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-tax_authorities-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.TaxAuthority.display,
      descriptionLabel: Omni.i18n.model.TaxAuthority.description,
      tax_authority_typeLabel: Omni.i18n.model.TaxAuthority.tax_authority_type,
      short_nameLabel: Omni.i18n.model.TaxAuthority.short_name,
      state_codeLabel: Omni.i18n.model.TaxAuthority.state_code,
      filing_frequencyLabel: Omni.i18n.model.TaxAuthority.filing_frequency
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: false  },
        { header: this.descriptionLabel, dataIndex: 'description',  flex: 1,  sortable: false  },
        { header: this.tax_authority_typeLabel, dataIndex: 'tax_authority_type',  flex: 1,  sortable: false  },
        { header: this.short_nameLabel, dataIndex: 'short_name',  flex: 1,  sortable: false  },
        { header: this.state_codeLabel, dataIndex: 'state_code',  flex: 1,  sortable: false  },
        { header: this.filing_frequencyLabel, dataIndex: 'filing_frequency',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Tax Authority',
      subtitle:  'Entities for which Parker must collect and remit Sales Tax'
    });
    // TITLES (End)



    this.callParent();
  }

});
