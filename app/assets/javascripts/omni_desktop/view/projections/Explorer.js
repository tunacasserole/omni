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
  projection_idLabel:                     Omni.i18n.model.Projection.projection_id,
  forecast_profile_idLabel:               Omni.i18n.model.Projection.forecast_profile_id,
  region_idLabel:                         Omni.i18n.model.Projection.region_id,
  location_idLabel:                       Omni.i18n.model.Projection.location_id,
  department_idLabel:                     Omni.i18n.model.Projection.department_id,
  classification_idLabel:                 Omni.i18n.model.Projection.classification_id,
  subclass_idLabel:                       Omni.i18n.model.Projection.subclass_id,
  style_idLabel:                          Omni.i18n.model.Projection.style_id,
  sku_idLabel:                            Omni.i18n.model.Projection.sku_id,
  color_idLabel:                          Omni.i18n.model.Projection.color_id,
  stateLabel:                             Omni.i18n.model.Projection.state,
  displayLabel:                           Omni.i18n.model.Projection.display,
  descriptionLabel:                       Omni.i18n.model.Projection.description,
  plan_yearLabel:                         Omni.i18n.model.Projection.plan_year,
  projection_typeLabel:                   Omni.i18n.model.Projection.projection_type,
  versionLabel:                           Omni.i18n.model.Projection.version,
  audit_updated_atLabel:                  Omni.i18n.model.Projection.audit_updated_at,
  audit_created_atLabel:                  Omni.i18n.model.Projection.audit_created_at,
  audit_created_byLabel:                  Omni.i18n.model.Projection.audit_created_by,
  audit_updated_byLabel:                  Omni.i18n.model.Projection.audit_updated_by,
  is_destroyedLabel:                      Omni.i18n.model.Projection.is_destroyed,
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
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },
        { header: this.department_idLabel,                 dataIndex: 'department_display',               flex: 1 },
        { header: this.forecast_profile_idLabel,           dataIndex: 'forecast_profile_display',         flex: 1 },
        // { header: this.displayLabel,              editor:   {},         dataIndex: 'display',                     flex: 1 },
        { header: this.plan_yearLabel,                     dataIndex: 'plan_year',                   flex: 1 },
        { header: this.location_idLabel,                   dataIndex: 'location_display',                 flex: 1 },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
