Ext.define('Omni.view.supplier_rating_subjects.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-supplier_rating_subjects-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SupplierRatingSubject'),

      contextMenuConfig:{
        xtype:'omni-supplier_rating_subjects-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-supplier_rating_subjects-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-supplier_rating_subjects-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.SupplierRatingSubject.display,
      descriptionLabel: Omni.i18n.model.SupplierRatingSubject.description,
      supplier_rating_subject_typeLabel: Omni.i18n.model.SupplierRatingSubject.supplier_rating_subject_type,
      weighting_percentLabel: Omni.i18n.model.SupplierRatingSubject.weighting_percent
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel, dataIndex: 'display',  flex: 1,  sortable: true  },
        { header: this.descriptionLabel, dataIndex: 'description',  flex: 1,  sortable: true  },
        { header: this.supplier_rating_subject_typeLabel, dataIndex: 'supplier_rating_subject_type',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('SUPPLIER_RATING_SUBJECT_TYPE') },
        { header: this.weighting_percentLabel, dataIndex: 'weighting_percent',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Supplier Rating Subject',
      subtitle:  'Areas for rating suppliers, such as value, reliability'
    });
    // TITLES (End)



    this.callParent();
  }

});
