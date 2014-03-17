Ext.define('Omni.view.jobs.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-jobs-Form',


  // LABELS (Start) =======================================================================
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


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'job_id',
      value       : this.record.get('job_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 300,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'jobable_id',
              fieldLabel   : me.jobable_idLabel,
              maxLength    : 32,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'jobable_type',
              fieldLabel   : me.jobable_typeLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'job_nbr',
              fieldLabel   : me.job_nbrLabel,
              maxLength    : 11,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Omni.store.Sku',{pageSize: 10}),
              displayField : 'display',
              itemTpl      : '{display}',
              name         : 'sku_id',
              fieldLabel   : me.sku_idLabel,
              //initialValue : me.record.get('display'),
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Omni.store.Location',{pageSize: 10}),
              displayField : 'display',
              itemTpl      : '{display}',
              name         : 'production_location_id',
              fieldLabel   : me.production_location_idLabel,
              //initialValue : me.record.get('display'),
              allowBlank   : false
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Omni.store.Supplier',{pageSize: 10}),
              displayField : 'display',
              itemTpl      : '{display}',
              name         : 'supplier_id',
              fieldLabel   : me.supplier_idLabel,
              //initialValue : me.record.get('display'),
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'job_description',
              fieldLabel   : me.job_descriptionLabel,
              maxLength    : 300,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'job_type',
              fieldLabel   : me.job_typeLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'release_date',
              fieldLabel   : me.release_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'start_date',
              fieldLabel   : me.start_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'complete_date',
              fieldLabel   : me.complete_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'target_complete_date',
              fieldLabel   : me.target_complete_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'request_units',
              fieldLabel   : me.request_unitsLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'complete_units',
              fieldLabel   : me.complete_unitsLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'checkbox',
              name         : 'is_cancelled',
              fieldLabel   : me.is_cancelledLabel
            },
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : me.stateLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'weight',
              fieldLabel   : me.weightLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'height',
              fieldLabel   : me.heightLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'bust',
              fieldLabel   : me.bustLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'waist',
              fieldLabel   : me.waistLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'high_hip',
              fieldLabel   : me.high_hipLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'hip',
              fieldLabel   : me.hipLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'across_shoulder_front',
              fieldLabel   : me.across_shoulder_frontLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'across_shoulder_back',
              fieldLabel   : me.across_shoulder_backLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'shoulder_length',
              fieldLabel   : me.shoulder_lengthLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'back_length',
              fieldLabel   : me.back_lengthLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'hps_to_waist',
              fieldLabel   : me.hps_to_waistLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'neck_circumference',
              fieldLabel   : me.neck_circumferenceLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'arm_circumference',
              fieldLabel   : me.arm_circumferenceLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'wrist_circumference',
              fieldLabel   : me.wrist_circumferenceLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'inseam',
              fieldLabel   : me.inseamLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'outseam',
              fieldLabel   : me.outseamLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'thigh',
              fieldLabel   : me.thighLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'arm_length',
              fieldLabel   : me.arm_lengthLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'total_rise',
              fieldLabel   : me.total_riseLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'head_circumference',
              fieldLabel   : me.head_circumferenceLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'checkbox',
              name         : 'is_destroyed',
              fieldLabel   : me.is_destroyedLabel
            }
          ]
        }/*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Job',
      subtitle    : 'Edit Job'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.jobs.Form'
