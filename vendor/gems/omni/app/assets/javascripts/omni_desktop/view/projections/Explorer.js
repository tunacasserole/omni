Ext.define('Omni.view.projections.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-projections-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Projection'),

  contextMenuConfig : {
    xtype    : 'omni-projections-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-projections-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-projections-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  projection_idLabel:                     Omni.i18n.model.Projection.projection_id,
  forecast_profile_idLabel:               Omni.i18n.model.Projection.forecast_profile_id,
  department_idLabel:                     Omni.i18n.model.Projection.department_id,
  projection_closer_user_idLabel:         Omni.i18n.model.Projection.projection_closer_user_id,
  projection_approver_user_idLabel:       Omni.i18n.model.Projection.projection_approver_user_id,
  projection_typeLabel:                   Omni.i18n.model.Projection.projection_type,
  plan_yearLabel:                         Omni.i18n.model.Projection.plan_year,
  stateLabel:                             Omni.i18n.model.Projection.state,
  displayLabel:                           Omni.i18n.model.Projection.display,
  descriptionLabel:                       Omni.i18n.model.Projection.description,
  approval_3_dateLabel:                   Omni.i18n.model.Projection.approval_3_date,
  approval_4_dateLabel:                   Omni.i18n.model.Projection.approval_4_date,
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

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.projection_idLabel,
          dataIndex    : 'projection_id',
          flex         : 1
        },
        {
          header       : this.forecast_profile_idLabel,
          dataIndex    : 'forecast_profile_id',
          flex         : 1
        },
        {
          header       : this.department_idLabel,
          dataIndex    : 'department_id',
          flex         : 1
        },
        {
          header       : this.projection_closer_user_idLabel,
          dataIndex    : 'projection_closer_user_id',
          flex         : 1
        },
        {
          header       : this.projection_approver_user_idLabel,
          dataIndex    : 'projection_approver_user_id',
          flex         : 1
        },
        {
          header       : this.projection_typeLabel,
          dataIndex    : 'projection_type',
          flex         : 1
        },
        {
          header       : this.plan_yearLabel,
          dataIndex    : 'plan_year',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.approval_3_dateLabel,
          dataIndex    : 'approval_3_date',
          flex         : 1
        },
        {
          header       : this.approval_4_dateLabel,
          dataIndex    : 'approval_4_date',
          flex         : 1
        },
        {
          header       : this.versionLabel,
          dataIndex    : 'version',
          flex         : 1
        },
        {
          header       : this.audit_updated_atLabel,
          dataIndex    : 'audit_updated_at',
          flex         : 1
        },
        {
          header       : this.audit_created_atLabel,
          dataIndex    : 'audit_created_at',
          flex         : 1
        },
        {
          header       : this.audit_created_byLabel,
          dataIndex    : 'audit_created_by',
          flex         : 1
        },
        {
          header       : this.audit_updated_byLabel,
          dataIndex    : 'audit_updated_by',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});