Ext.define('Omni.view.categories.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-categories-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Category'),

      contextMenuConfig:{
        xtype:'omni-categories-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-categories-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-categories-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel:                          Omni.i18n.model.Category.display,
      category_codeLabel:                    Omni.i18n.model.Category.category_code,
      category_typeLabel:                    Omni.i18n.model.Category.category_type
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 1,   sortable: true  },
        { header: this.category_codeLabel,                               dataIndex: 'category_code',                      flex: 1,   sortable: true  },
        { header: this.category_typeLabel,                               dataIndex: 'category_type',                      flex: 1,   sortable: true, renderer: Buildit.util.Format.lookupRenderer('CATEGORY_TYPE') }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Category',
      subtitle:  'First level of the Web shopping Product Hierarchy'
    });
    // TITLES (End)



    this.callParent();
  }

});
