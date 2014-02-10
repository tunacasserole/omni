Ext.define('Desk.view.projects.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-projects-Form',

  // LABELS (Start) =======================================================================
  project_idLabel                         : Desk.i18n.model.Project.project_id,
  project_nbrLabel                        : Desk.i18n.model.Project.project_nbr,
  project_typeLabel                       : Desk.i18n.model.Project.project_type,
  stateLabel                              : Desk.i18n.model.Project.state,
  displayLabel                            : Desk.i18n.model.Project.display,
  descriptionLabel                        : Desk.i18n.model.Project.description,
  release_dateLabel                       : Desk.i18n.model.Project.release_date,
  estimated_daysLabel                     : Desk.i18n.model.Project.estimated_days,
  actual_daysLabel                        : Desk.i18n.model.Project.actual_days,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'project_id',
      value       : this.record.get('project_id')
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
              name         : 'state',
              fieldLabel   : me.stateLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textfield',
              name         : 'project_nbr',
              fieldLabel   : me.project_nbrLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false,
              disabled     : true
            },
            // {
            //   xtype        : 'textfield',
            //   name         : 'project_type',
            //   fieldLabel   : me.project_typeLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textarea',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 2000,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'release_date',
              fieldLabel   : me.release_dateLabel,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'estimated_days',
              fieldLabel   : me.estimated_daysLabel,
              minValue     : 0,
              maxValue     : 100,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'actual_days',
              fieldLabel   : me.actual_daysLabel,
              minValue     : 0,
              maxValue     : 100,
              allowBlank   : true
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
      title       : 'Project',
      subtitle    : 'Edit Project'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Desk.view.projects.Form'
