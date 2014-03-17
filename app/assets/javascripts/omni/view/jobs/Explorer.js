Ext.define('Omni.view.jobs.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-jobs-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-jobs-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-jobs-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  job_idLabel                             : Omni.i18n.model.Job.job_id,
  displayLabel                            : Omni.i18n.model.Job.display,
  jobable_idLabel                         : Omni.i18n.model.Job.jobable_id,
  jobable_typeLabel                       : Omni.i18n.model.Job.jobable_type,
  job_nbrLabel                            : Omni.i18n.model.Job.job_nbr,
  sku_idLabel                             : Omni.i18n.model.Job.sku_id,
  production_location_idLabel             : Omni.i18n.model.Job.production_location_id,
  supplier_idLabel                        : Omni.i18n.model.Job.supplier_id,
  job_descriptionLabel                    : Omni.i18n.model.Job.job_description,
  job_typeLabel                           : Omni.i18n.model.Job.job_type,
  release_dateLabel                       : Omni.i18n.model.Job.release_date,
  start_dateLabel                         : Omni.i18n.model.Job.start_date,
  complete_dateLabel                      : Omni.i18n.model.Job.complete_date,
  target_complete_dateLabel               : Omni.i18n.model.Job.target_complete_date,
  request_unitsLabel                      : Omni.i18n.model.Job.request_units,
  complete_unitsLabel                     : Omni.i18n.model.Job.complete_units,
  is_cancelledLabel                       : Omni.i18n.model.Job.is_cancelled,
  stateLabel                              : Omni.i18n.model.Job.state,
  weightLabel                             : Omni.i18n.model.Job.weight,
  heightLabel                             : Omni.i18n.model.Job.height,
  bustLabel                               : Omni.i18n.model.Job.bust,
  waistLabel                              : Omni.i18n.model.Job.waist,
  high_hipLabel                           : Omni.i18n.model.Job.high_hip,
  hipLabel                                : Omni.i18n.model.Job.hip,
  across_shoulder_frontLabel              : Omni.i18n.model.Job.across_shoulder_front,
  across_shoulder_backLabel               : Omni.i18n.model.Job.across_shoulder_back,
  shoulder_lengthLabel                    : Omni.i18n.model.Job.shoulder_length,
  back_lengthLabel                        : Omni.i18n.model.Job.back_length,
  hps_to_waistLabel                       : Omni.i18n.model.Job.hps_to_waist,
  neck_circumferenceLabel                 : Omni.i18n.model.Job.neck_circumference,
  arm_circumferenceLabel                  : Omni.i18n.model.Job.arm_circumference,
  wrist_circumferenceLabel                : Omni.i18n.model.Job.wrist_circumference,
  inseamLabel                             : Omni.i18n.model.Job.inseam,
  outseamLabel                            : Omni.i18n.model.Job.outseam,
  thighLabel                              : Omni.i18n.model.Job.thigh,
  arm_lengthLabel                         : Omni.i18n.model.Job.arm_length,
  total_riseLabel                         : Omni.i18n.model.Job.total_rise,
  head_circumferenceLabel                 : Omni.i18n.model.Job.head_circumference,
  is_destroyedLabel                       : Omni.i18n.model.Job.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Jobs',
  subtitle : 'Create and maintain Jobs',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Job')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : me.jobable_idLabel,
          dataIndex    : 'jobable_id',
          flex         : 1
        },
        {
          header       : me.jobable_typeLabel,
          dataIndex    : 'jobable_type',
          flex         : 1
        },
        {
          header       : me.job_nbrLabel,
          dataIndex    : 'job_nbr',
          flex         : 1
        },
        {
          header       : me.sku_idLabel,
          dataIndex    : 'sku_id',
          flex         : 1
        },
        {
          header       : me.production_location_idLabel,
          dataIndex    : 'production_location_id',
          flex         : 1
        },
        {
          header       : me.supplier_idLabel,
          dataIndex    : 'supplier_id',
          flex         : 1
        },
        {
          header       : me.job_descriptionLabel,
          dataIndex    : 'job_description',
          flex         : 1
        },
        {
          header       : me.job_typeLabel,
          dataIndex    : 'job_type',
          flex         : 1
        },
        {
          header       : me.release_dateLabel,
          dataIndex    : 'release_date',
          flex         : 1
        },
        {
          header       : me.start_dateLabel,
          dataIndex    : 'start_date',
          flex         : 1
        },
        {
          header       : me.complete_dateLabel,
          dataIndex    : 'complete_date',
          flex         : 1
        },
        {
          header       : me.target_complete_dateLabel,
          dataIndex    : 'target_complete_date',
          flex         : 1
        },
        {
          header       : me.request_unitsLabel,
          dataIndex    : 'request_units',
          flex         : 1
        },
        {
          header       : me.complete_unitsLabel,
          dataIndex    : 'complete_units',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_cancelledLabel,
          dataIndex    : 'is_cancelled',
          flex         : 1
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.weightLabel,
          dataIndex    : 'weight',
          flex         : 1
        },
        {
          header       : me.heightLabel,
          dataIndex    : 'height',
          flex         : 1
        },
        {
          header       : me.bustLabel,
          dataIndex    : 'bust',
          flex         : 1
        },
        {
          header       : me.waistLabel,
          dataIndex    : 'waist',
          flex         : 1
        },
        {
          header       : me.high_hipLabel,
          dataIndex    : 'high_hip',
          flex         : 1
        },
        {
          header       : me.hipLabel,
          dataIndex    : 'hip',
          flex         : 1
        },
        {
          header       : me.across_shoulder_frontLabel,
          dataIndex    : 'across_shoulder_front',
          flex         : 1
        },
        {
          header       : me.across_shoulder_backLabel,
          dataIndex    : 'across_shoulder_back',
          flex         : 1
        },
        {
          header       : me.shoulder_lengthLabel,
          dataIndex    : 'shoulder_length',
          flex         : 1
        },
        {
          header       : me.back_lengthLabel,
          dataIndex    : 'back_length',
          flex         : 1
        },
        {
          header       : me.hps_to_waistLabel,
          dataIndex    : 'hps_to_waist',
          flex         : 1
        },
        {
          header       : me.neck_circumferenceLabel,
          dataIndex    : 'neck_circumference',
          flex         : 1
        },
        {
          header       : me.arm_circumferenceLabel,
          dataIndex    : 'arm_circumference',
          flex         : 1
        },
        {
          header       : me.wrist_circumferenceLabel,
          dataIndex    : 'wrist_circumference',
          flex         : 1
        },
        {
          header       : me.inseamLabel,
          dataIndex    : 'inseam',
          flex         : 1
        },
        {
          header       : me.outseamLabel,
          dataIndex    : 'outseam',
          flex         : 1
        },
        {
          header       : me.thighLabel,
          dataIndex    : 'thigh',
          flex         : 1
        },
        {
          header       : me.arm_lengthLabel,
          dataIndex    : 'arm_length',
          flex         : 1
        },
        {
          header       : me.total_riseLabel,
          dataIndex    : 'total_rise',
          flex         : 1
        },
        {
          header       : me.head_circumferenceLabel,
          dataIndex    : 'head_circumference',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});