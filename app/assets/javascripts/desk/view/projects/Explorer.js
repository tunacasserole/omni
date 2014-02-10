Ext.define('Desk.view.projects.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-projects-Explorer',
  allowFind : true,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-projects-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-projects-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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

  // TITLES (Start) ======================================================================
  title    : 'Projects',
  subtitle : 'Create and maintain Projects',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Project')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.project_nbrLabel,
          dataIndex    : 'project_nbr',
          flex         : 1
        },
        // {
        //   header       : me.project_typeLabel,
        //   dataIndex    : 'project_type',
        //   flex         : 1
        // },
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : me.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        // {
        //   header       : me.release_dateLabel,
        //   dataIndex    : 'release_date',
        //   flex         : 1
        // },
        {
          header       : me.estimated_daysLabel,
          dataIndex    : 'estimated_days',
          flex         : 1
        },
        // {
        //   header       : me.actual_daysLabel,
        //   dataIndex    : 'actual_days',
        //   flex         : 1
        // },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
