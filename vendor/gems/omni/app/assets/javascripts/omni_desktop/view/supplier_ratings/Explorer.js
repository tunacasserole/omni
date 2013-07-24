Ext.define('Omni.view.supplier_ratings.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-supplier_ratings-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SupplierRating'),

      contextMenuConfig:{
        xtype:'omni-supplier_ratings-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-supplier_ratings-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-supplier_ratings-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      supplier_displayLabel: Omni.i18n.model.SupplierRating.supplier_display,
      supplier_rating_subject_displayLabel: Omni.i18n.model.SupplierRating.supplier_rating_subject_display,
      rating_dateLabel: Omni.i18n.model.SupplierRating.rating_date,
      rating_valueLabel: Omni.i18n.model.SupplierRating.rating_value
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.supplier_displayLabel, dataIndex: 'supplier_display',  flex: 1,  sortable: true  },
        { header: this.supplier_rating_subject_displayLabel, dataIndex: 'supplier_rating_subject_display',  flex: 1,  sortable: true  },
        { header: this.rating_dateLabel, dataIndex: 'rating_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.rating_valueLabel, dataIndex: 'rating_value',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Supplier Rating',
      subtitle:  'Supplier performance ratings'
    });
    // TITLES (End)



    this.callParent();
  }

});
