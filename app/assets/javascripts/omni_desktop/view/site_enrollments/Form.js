Ext.define('Omni.view.site_enrollments.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-site_enrollments-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      site_idLabel:                               Omni.i18n.model.SiteEnrollment.site_id,
      school_yearLabel:                           Omni.i18n.model.SiteEnrollment.school_year,
      grade_idLabel:                              Omni.i18n.model.SiteEnrollment.grade_id,
      genderLabel:                                Omni.i18n.model.SiteEnrollment.gender,
      school_year_start_dateLabel:                Omni.i18n.model.SiteEnrollment.school_year_start_date,
      school_year_end_dateLabel:                  Omni.i18n.model.SiteEnrollment.school_year_end_date,
      enrollmentLabel:                            Omni.i18n.model.SiteEnrollment.enrollment
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'school_year',                    fieldLabel: this.school_yearLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Lookup',      category:   'SCHOOL_YEAR' },
            { name: 'grade_id',                       fieldLabel: this.grade_idLabel,                   allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Grade',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'grade_id', itemTpl:'{display}' },
            { name: 'gender',                         fieldLabel: this.genderLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Lookup',      category:   'GENDER' },
            { name: 'school_year_start_date',         fieldLabel: this.school_year_start_dateLabel,     allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'school_year_end_date',           fieldLabel: this.school_year_end_dateLabel,       allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'enrollment',                     fieldLabel: this.enrollmentLabel,                 allowBlank: false,  disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
