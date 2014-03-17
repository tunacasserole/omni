Ext.define('Omni.view.enrollments.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-enrollments-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms: [{
    xtype: 'omni-enrollments-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-enrollments-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  enrollment_idLabel: Omni.i18n.model.Enrollment.enrollment_id,
  account_idLabel: Omni.i18n.model.Enrollment.account_id,
  displayLabel: Omni.i18n.model.Enrollment.display,
  school_yearLabel: Omni.i18n.model.Enrollment.school_year,
  grade_idLabel: Omni.i18n.model.Enrollment.grade_id,
  genderLabel: Omni.i18n.model.Enrollment.gender,
  enrollmentLabel: Omni.i18n.model.Enrollment.enrollment,
  school_year_start_dateLabel: Omni.i18n.model.Enrollment.school_year_start_date,
  school_year_end_dateLabel: Omni.i18n.model.Enrollment.school_year_end_date,
  is_destroyedLabel: Omni.i18n.model.Enrollment.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Enrollments',
  subtitle: 'Work with Enrollments',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.Enrollment')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [{
      //   header: me.account_idLabel,
      //   dataIndex: 'account_display',
      //   flex: 1
      // }, {
        header: me.school_yearLabel,
        dataIndex: 'school_year',
        flex: 1,
        renderer: Buildit.util.Format.lookupRenderer('PLAN_YEAR'),
        lkp: 'code'
      }, {
        header: me.grade_idLabel,
        dataIndex: 'grade_display',
        flex: 1
      }, {
        header: me.genderLabel,
        dataIndex: 'gender',
        flex: 1,
        renderer: Buildit.util.Format.lookupRenderer('GENDER'),
        lkp: 'code'
      }, {
        header: me.enrollmentLabel,
        dataIndex: 'enrollment',
        flex: 1
      }]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
