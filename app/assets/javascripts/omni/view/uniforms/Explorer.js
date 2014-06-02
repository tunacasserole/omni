Ext.define('Omni.view.uniforms.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-uniforms-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'omni-uniforms-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-uniforms-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  uniform_idLabel: Omni.i18n.model.Uniform.uniform_id,
  account_idLabel: Omni.i18n.model.Uniform.account_id,
  contract_idLabel: Omni.i18n.model.Uniform.contract_id,
  displayLabel: Omni.i18n.model.Uniform.display,
  uniform_nbrLabel: Omni.i18n.model.Uniform.uniform_nbr,
  uniform_nameLabel: Omni.i18n.model.Uniform.uniform_name,
  descriptionLabel: Omni.i18n.model.Uniform.description,
  stateLabel: Omni.i18n.model.Uniform.state,
  school_yearLabel: Omni.i18n.model.Uniform.school_year,
  teacher_discount_percentLabel: Omni.i18n.model.Uniform.teacher_discount_percent,
  administrator_discount_percentLabel: Omni.i18n.model.Uniform.administrator_discount_percent,
  is_discount_in_storeLabel: Omni.i18n.model.Uniform.is_discount_in_store,
  is_discount_on_webLabel: Omni.i18n.model.Uniform.is_discount_on_web,
  is_free_shippingLabel: Omni.i18n.model.Uniform.is_free_shipping,
  is_destroyedLabel: Omni.i18n.model.Uniform.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Uniforms',
  subtitle: 'Create and maintain Uniforms',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.Uniform')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [{
      //   header: me.account_idLabel,
      //   dataIndex: 'account_display',
      //   flex: 1
      // }, {
        header: me.uniform_nbrLabel,
        dataIndex: 'uniform_nbr',
        flex: 1
      }, {
        header: me.uniform_nameLabel,
        dataIndex: 'uniform_name',
        flex: 1
      }, {
        header: me.stateLabel,
        dataIndex: 'state',
        flex: 1
      }, {
        header: me.school_yearLabel,
        dataIndex: 'school_year',
        flex: 1
      }]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
