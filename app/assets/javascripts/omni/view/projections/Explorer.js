Ext.define('Omni.view.projections.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-projections-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Projection'),

  contextMenuConfig: {
    xtype: 'omni-projections-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-projections-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-projections-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  forecast_profile_idLabel:               Omni.i18n.model.Projection.forecast_profile_id,
  location_idLabel:                       Omni.i18n.model.Projection.location_id,
  department_idLabel:                     Omni.i18n.model.Projection.department_id,
  stateLabel:                             Omni.i18n.model.Projection.state,
  displayLabel:                           Omni.i18n.model.Projection.display,
  descriptionLabel:                       Omni.i18n.model.Projection.description,
  plan_yearLabel:                         Omni.i18n.model.Projection.plan_year,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Projections',
  subtitle:  'Create and maintain Projections',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.projection_idLabel,                 dataIndex: 'projection_id',               flex: 1 },
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },
        { header: this.department_idLabel,                 dataIndex: 'department_display',          flex: 1 },
        { header: this.forecast_profile_idLabel,           dataIndex: 'forecast_profile_display',    flex: 1 },
        // { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },
        { header: this.plan_yearLabel,                     dataIndex: 'plan_year',                   flex: 1 }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
