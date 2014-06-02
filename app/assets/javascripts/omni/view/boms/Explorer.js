Ext.define('Omni.view.boms.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-boms-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Bom'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-boms-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-boms-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      bomable_typeLabel: Omni.i18n.model.Bom.bomable_type,
      bomable_idLabel: Omni.i18n.model.Bom.bomable_id,
      bom_nbrLabel: Omni.i18n.model.Bom.bom_nbr,
      descriptionLabel: Omni.i18n.model.Bom.description
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.bomable_typeLabel,
        dataIndex: 'bomable_type',
        flex: 1,
        sortable: false
      }, {
        header: this.bomable_idLabel,
        dataIndex: 'bomable_id',
        flex: 1,
        sortable: false
      }, {
        header: this.bom_nbrLabel,
        dataIndex: 'bom_nbr',
        flex: 1,
        sortable: false
      }, {
        header: this.descriptionLabel,
        dataIndex: 'description',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Bom',
      subtitle: 'Bills of materials; a BOM is a recipe for making a style/SKU'
    });
    // TITLES (End)



    this.callParent();
  }

});
