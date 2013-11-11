Ext.define('Omni.view.bts.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-bts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,
  allowEdit: true,

  store: Ext.create('Omni.store.Bts'),

  contextMenuConfig: {
    xtype: 'omni-bts-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-bts-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-bts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  forecast_profile_idLabel:               Omni.i18n.model.Bts.forecast_profile_id,
  location_idLabel:                       Omni.i18n.model.Bts.location_id,
  department_idLabel:                     Omni.i18n.model.Bts.department_id,
  stateLabel:                             Omni.i18n.model.Bts.state,
  displayLabel:                           Omni.i18n.model.Bts.display,
  descriptionLabel:                       Omni.i18n.model.Bts.description,
  plan_yearLabel:                         Omni.i18n.model.Bts.plan_year,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Back to School Report',
  subtitle:  'Run and review the BTS report',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },
        { header: this.displayLabel,   editor:   {},         dataIndex: 'display',                     flex: 1 },
        { header: this.department_idLabel,                 dataIndex: 'department_display',               flex: 1 },
        { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },
        { header: this.plan_yearLabel,                     dataIndex: 'plan_year',                   flex: 1 },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
