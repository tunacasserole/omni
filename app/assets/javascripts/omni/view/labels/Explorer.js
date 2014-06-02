Ext.define('Omni.view.labels.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-labels-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Label'),

      contextMenuConfig: {
        xtype: 'omni-app-ExplorerContextMenu'
      },

      newForms: [{
        xtype: 'omni-labels-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-labels-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Label.display,
      descriptionLabel: Omni.i18n.model.Label.description,
      label_typeLabel: Omni.i18n.model.Label.label_type,
      short_nameLabel: Omni.i18n.model.Label.short_name
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.displayLabel,
        dataIndex: 'display',
        flex: 1,
        sortable: false
      }, {
        header: this.descriptionLabel,
        dataIndex: 'description',
        flex: 1,
        sortable: false
      }, {
        header: this.label_typeLabel,
        dataIndex: 'label_type',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('LABEL_TYPE')
      }, {
        header: this.short_nameLabel,
        dataIndex: 'short_name',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Label',
      subtitle: 'All labels, eg, price tags, care labels, carton labels'
    });
    // TITLES (End)



    this.callParent();
  }

});
