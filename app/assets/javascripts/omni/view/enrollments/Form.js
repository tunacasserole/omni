Ext.define('Omni.view.enrollments.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-enrollments-Form',


  // LABELS (Start) =======================================================================
  enrollment_idLabel                      : Omni.i18n.model.Enrollment.enrollment_id,
  account_idLabel                         : Omni.i18n.model.Enrollment.account_id,
  displayLabel                            : Omni.i18n.model.Enrollment.display,
  school_yearLabel                        : Omni.i18n.model.Enrollment.school_year,
  grade_idLabel                           : Omni.i18n.model.Enrollment.grade_id,
  genderLabel                             : Omni.i18n.model.Enrollment.gender,
  enrollmentLabel                         : Omni.i18n.model.Enrollment.enrollment,
  school_year_start_dateLabel             : Omni.i18n.model.Enrollment.school_year_start_date,
  school_year_end_dateLabel               : Omni.i18n.model.Enrollment.school_year_end_date,
  is_destroyedLabel                       : Omni.i18n.model.Enrollment.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'enrollment_id',
      value       : this.record.get('enrollment_id')
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
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Account',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'account_id',
            //   fieldLabel   : me.account_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : false
            // },
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : false
            // },
            {
              xtype        : 'buildit-Lookup',
              name         : 'school_year',
              fieldLabel   : me.school_yearLabel,
              category     : 'PLAN_YEAR',
              lkp          : 'code',
              allowBlank   : false
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Omni.store.Grade',{pageSize: 10}),
              displayField : 'display',
              itemTpl      : '{display}',
              name         : 'grade_id',
              fieldLabel   : me.grade_idLabel,
              //initialValue : me.record.get('display'),
              allowBlank   : false
            },
            {
              xtype        : 'buildit-Lookup',
              name         : 'gender',
              fieldLabel   : me.genderLabel,
              category     : 'GENDER',
              lkp          : 'code',
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'enrollment',
              fieldLabel   : me.enrollmentLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'datefield',
              name         : 'school_year_start_date',
              fieldLabel   : me.school_year_start_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'school_year_end_date',
              fieldLabel   : me.school_year_end_dateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
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
      title       : 'Enrollment',
      subtitle    : 'Edit Enrollment'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.enrollments.Form'
