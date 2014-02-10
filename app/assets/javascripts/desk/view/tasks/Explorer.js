Ext.define('Desk.view.tasks.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-tasks-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-tasks-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-tasks-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  task_idLabel                            : Desk.i18n.model.Task.task_id,
  taskable_idLabel                        : Desk.i18n.model.Task.taskable_id,
  taskable_typeLabel                      : Desk.i18n.model.Task.taskable_type,
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

  // TITLES (Start) ======================================================================
  title    : 'Tasks',
  subtitle : 'Create and maintain Tasks',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Task')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.task_nbrLabel,
          dataIndex    : 'task_nbr',
          flex         : 1
        },
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : me.task_typeLabel,
          dataIndex    : 'task_type',
          flex         : 1
        },
        {
          header       : me.task_dueLabel,
          dataIndex    : 'task_due',
          flex         : 1
        },
        {
          header       : me.task_startLabel,
          dataIndex    : 'task_start',
          flex         : 1
        },
        {
          header       : me.task_endLabel,
          dataIndex    : 'task_end',
          flex         : 1
        },
        {
          header       : me.owner_idLabel,
          dataIndex    : 'owner_display',
          flex         : 1
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
