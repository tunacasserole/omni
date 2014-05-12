Ext.define('Desk.view.tasks.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-tasks-Form',


  // LABELS (Start) =======================================================================
  checklist_idLabel                       : Desk.i18n.model.Task.checklist_id,
  task_nbrLabel                           : Desk.i18n.model.Task.task_nbr,
  task_typeLabel                          : Desk.i18n.model.Task.task_type,
  stateLabel                              : Desk.i18n.model.Task.state,
  displayLabel                            : Desk.i18n.model.Task.display,
  descriptionLabel                        : Desk.i18n.model.Task.description,
  task_dueLabel                           : Desk.i18n.model.Task.task_due,
  task_startLabel                         : Desk.i18n.model.Task.task_start,
  task_endLabel                           : Desk.i18n.model.Task.task_end,
  owner_idLabel                           : Desk.i18n.model.Task.owner_id,
  audit_created_byLabel                   : Desk.i18n.model.Task.audit_created_by,
  audit_updated_byLabel                   : Desk.i18n.model.Task.audit_updated_by,
  audit_created_atLabel                   : Desk.i18n.model.Task.audit_created_at,
  audit_updated_atLabel                   : Desk.i18n.model.Task.audit_updated_at,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'task_id',
      value       : this.record.get('task_id')
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
              name         : 'checklist_id',
              fieldLabel   : me.checklist_idLabel,
              maxLength    : 32,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'task_nbr',
              fieldLabel   : me.task_nbrLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
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
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 4000,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'task_due',
              fieldLabel   : me.task_dueLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'task_type',
              fieldLabel   : me.task_typeLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'task_start',
              fieldLabel   : me.task_startLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'task_end',
              fieldLabel   : me.task_endLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Buildit.store.User',{pageSize: 10}),
              displayField : 'display_as',
              itemTpl      : '{display_as}',
              name         : 'owner_id',
              fieldLabel   : me.owner_idLabel,
              initialValue : me.record.get('display_as'),
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
      title       : 'Task',
      subtitle    : 'Edit Task'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Desk.view.tasks.Form'
