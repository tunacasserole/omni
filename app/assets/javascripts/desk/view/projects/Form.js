Ext.define('Desk.view.projects.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-projects-Form',


  // LABELS (Start) =======================================================================
  project_idLabel                         : Desk.i18n.model.Project.project_id,
  stateLabel                              : Desk.i18n.model.Project.state,
  displayLabel                            : Desk.i18n.model.Project.display,
  descriptionLabel                        : Desk.i18n.model.Project.description,
  release_dateLabel                       : Desk.i18n.model.Project.release_date,
  is_destroyedLabel                       : Desk.i18n.model.Project.is_destroyed,
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
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 2000,
              minLength    : 0,
              allowBlank   : true
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
      title       : 'Project',
      subtitle    : 'Edit Project'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Desk.view.projects.Form'