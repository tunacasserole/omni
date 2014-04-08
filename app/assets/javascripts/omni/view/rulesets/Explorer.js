Ext.define('Omni.view.rulesets.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-rulesets-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Ruleset'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-rulesets-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-rulesets-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Ruleset.display,
      ruleset_codeLabel: Omni.i18n.model.Ruleset.ruleset_code,
      descriptionLabel: Omni.i18n.model.Ruleset.description,
      is_activeLabel: Omni.i18n.model.Ruleset.is_active
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
        header: this.ruleset_codeLabel,
        dataIndex: 'ruleset_code',
        flex: 1,
        sortable: false
      }, {
        header: this.descriptionLabel,
        dataIndex: 'description',
        flex: 1,
        sortable: false
      }, {
        header: this.is_activeLabel,
        dataIndex: 'is_active',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Ruleset',
      subtitle: 'Transaction updating rules'
    });
    // TITLES (End)



    this.callParent();
  }

});
