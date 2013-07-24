Ext.define('Omni.view.site_enrollments.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-site_enrollments-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SiteEnrollment'),

      contextMenuConfig:{
        xtype:'omni-site_enrollments-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-site_enrollments-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-site_enrollments-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      site_displayLabel: Omni.i18n.model.SiteEnrollment.site_display,
      school_yearLabel: Omni.i18n.model.SiteEnrollment.school_year,
      grade_displayLabel: Omni.i18n.model.SiteEnrollment.grade_display,
      genderLabel: Omni.i18n.model.SiteEnrollment.gender,
      enrollmentLabel: Omni.i18n.model.SiteEnrollment.enrollment
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.site_displayLabel, dataIndex: 'site_display',  flex: 1,  sortable: true  },
        { header: this.school_yearLabel, dataIndex: 'school_year',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('SCHOOL_YEAR') },
        { header: this.grade_displayLabel, dataIndex: 'grade_display',  flex: 1,  sortable: true  },
        { header: this.genderLabel, dataIndex: 'gender',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('GENDER') },
        { header: this.enrollmentLabel, dataIndex: 'enrollment',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site Enrollment',
      subtitle:  'School enrollment numbers'
    });
    // TITLES (End)



    this.callParent();
  }

});
