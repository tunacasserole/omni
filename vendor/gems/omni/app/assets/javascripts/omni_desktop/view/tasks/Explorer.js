Ext.define('Omni.view.tasks.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-tasks-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Task'),

  contextMenuConfig : {
    xtype    : 'omni-tasks-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-tasks-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-tasks-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  task_idLabel:                          Omni.i18n.model.Task.task_id,
  project_idLabel:                        Omni.i18n.model.Task.project_id,
  task_nbrLabel:                         Omni.i18n.model.Task.task_nbr,
  task_typeLabel:                        Omni.i18n.model.Task.task_type,
  stateLabel:                             Omni.i18n.model.Task.state,
  displayLabel:                           Omni.i18n.model.Task.display,
  descriptionLabel:                       Omni.i18n.model.Task.description,
  importanceLabel:                        Omni.i18n.model.Task.importance,
  pointsLabel:                            Omni.i18n.model.Task.points,
  assignee_idLabel:                       Omni.i18n.model.Task.assignee_id,
  creator_idLabel:                        Omni.i18n.model.Task.creator_id,
  target_releaseLabel:                    Omni.i18n.model.Task.target_release,
  actual_releaseLabel:                    Omni.i18n.model.Task.actual_release,
  is_destroyedLabel:                      Omni.i18n.model.Task.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Tasks',
  subtitle:  'Create and maintain Tasks',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.task_idLabel,
        //   dataIndex    : 'task_id',
        //   flex         : 1
        // },
        {
          header       : this.project_idLabel,
          dataIndex    : 'project_display',
          flex         : 1
        },
        {
          header       : this.task_nbrLabel,
          dataIndex    : 'task_nbr',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 3
        },        
        {
          header       : this.task_typeLabel,
          dataIndex    : 'task_type',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        // {
        //   header       : this.descriptionLabel,
        //   dataIndex    : 'description',
        //   flex         : 1
        // },
        {
          header       : this.importanceLabel,
          dataIndex    : 'importance',
          flex         : 1
        },
        {
          header       : this.pointsLabel,
          dataIndex    : 'points',
          flex         : 1
        },
        {
          header       : this.assignee_idLabel,
          dataIndex    : 'assignee_display',
          flex         : 1
        },
        {
          header       : this.creator_idLabel,
          dataIndex    : 'creator_display',
          flex         : 1
        },
        {
          header       : this.target_releaseLabel,
          dataIndex    : 'target_release',
          flex         : 1
        }
        // {
        //   header       : this.actual_releaseLabel,
        //   dataIndex    : 'actual_release',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});