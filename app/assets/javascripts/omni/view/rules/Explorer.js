Ext.define('Omni.view.rules.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-rules-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Rule'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-rules-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-rules-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      ruleset_displayLabel: Omni.i18n.model.Rule.ruleset_display,
      rule_typeLabel: Omni.i18n.model.Rule.rule_type,
      input_attributeLabel: Omni.i18n.model.Rule.input_attribute,
      model_nameLabel: Omni.i18n.model.Rule.model_name,
      attribute_nameLabel: Omni.i18n.model.Rule.attribute_name,
      rule_actionLabel: Omni.i18n.model.Rule.rule_action,
      is_activeLabel: Omni.i18n.model.Rule.is_active,
      rule_seqLabel: Omni.i18n.model.Rule.rule_seq
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.ruleset_displayLabel,
        dataIndex: 'ruleset_display',
        flex: 1,
        sortable: false
      }, {
        header: this.rule_typeLabel,
        dataIndex: 'rule_type',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('RULE_TYPE')
      }, {
        header: this.input_attributeLabel,
        dataIndex: 'input_attribute',
        flex: 1,
        sortable: false
      }, {
        header: this.model_nameLabel,
        dataIndex: 'model_name',
        flex: 1,
        sortable: false
      }, {
        header: this.attribute_nameLabel,
        dataIndex: 'attribute_name',
        flex: 1,
        sortable: false
      }, {
        header: this.rule_actionLabel,
        dataIndex: 'rule_action',
        flex: 1,
        sortable: false,
        renderer: Buildit.util.Format.lookupRenderer('RULE_ACTION')
      }, {
        header: this.is_activeLabel,
        dataIndex: 'is_active',
        flex: 1,
        sortable: false
      }, {
        header: this.rule_seqLabel,
        dataIndex: 'rule_seq',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Rule',
      subtitle: 'Updates to be performed for each rule'
    });
    // TITLES (End)



    this.callParent();
  }

});
