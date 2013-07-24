Ext.define('Omni.view.program_products.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-program_products-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ProgramProduct'),

      contextMenuConfig:{
        xtype:'omni-program_products-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-program_products-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-program_products-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      product_displayLabel: Omni.i18n.model.ProgramProduct.product_display,
      from_grade_displayLabel: Omni.i18n.model.ProgramProduct.from_grade_display,
      discount_percentLabel: Omni.i18n.model.ProgramProduct.discount_percent,
      thru_grade_displayLabel: Omni.i18n.model.ProgramProduct.thru_grade_display,
      uniform_sourceLabel: Omni.i18n.model.ProgramProduct.uniform_source,
      is_required_maleLabel: Omni.i18n.model.ProgramProduct.is_required_male,
      is_required_femaleLabel: Omni.i18n.model.ProgramProduct.is_required_female,
      is_optional_maleLabel: Omni.i18n.model.ProgramProduct.is_optional_male,
      is_optional_femaleLabel: Omni.i18n.model.ProgramProduct.is_optional_female,
      is_includes_logoLabel: Omni.i18n.model.ProgramProduct.is_includes_logo,
      is_activeLabel: Omni.i18n.model.ProgramProduct.is_active
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.product_displayLabel, dataIndex: 'product_display',  flex: 1,  sortable: true  },
        { header: this.from_grade_displayLabel, dataIndex: 'from_grade_display',  flex: 1,  sortable: true  },
        { header: this.discount_percentLabel, dataIndex: 'discount_percent',  flex: 1,  sortable: true  },
        { header: this.thru_grade_displayLabel, dataIndex: 'thru_grade_display',  flex: 1,  sortable: true  },
        { header: this.uniform_sourceLabel, dataIndex: 'uniform_source',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('UNIFORM_SOURCE') },
        { header: this.is_required_maleLabel, dataIndex: 'is_required_male',  flex: 1,  sortable: true  },
        { header: this.is_required_femaleLabel, dataIndex: 'is_required_female',  flex: 1,  sortable: true  },
        { header: this.is_optional_maleLabel, dataIndex: 'is_optional_male',  flex: 1,  sortable: true  },
        { header: this.is_optional_femaleLabel, dataIndex: 'is_optional_female',  flex: 1,  sortable: true  },
        { header: this.is_includes_logoLabel, dataIndex: 'is_includes_logo',  flex: 1,  sortable: true  },
        { header: this.is_activeLabel, dataIndex: 'is_active',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Program Product',
      subtitle:  'The products (web detail pages) that make up a program'
    });
    // TITLES (End)



    this.callParent();
  }

});
