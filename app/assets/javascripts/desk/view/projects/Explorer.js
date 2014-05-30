Ext.define('Desk.view.projects.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.desk-projects-Explorer',
  allowFind: true,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'desk-projects-Form'
  }],

  inspectorConfig: {
    xtype: 'desk-projects-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  project_idLabel: Desk.i18n.model.Project.project_id,
  owner_idLabel: Desk.i18n.model.Project.owner_id,
  project_nbrLabel: Desk.i18n.model.Project.project_nbr,
  project_typeLabel: Desk.i18n.model.Project.project_type,
  stateLabel: Desk.i18n.model.Project.state,
  displayLabel: Desk.i18n.model.Project.display,
  descriptionLabel: Desk.i18n.model.Project.description,
  target_dateLabel: Desk.i18n.model.Project.target_date,
  estimated_daysLabel: Desk.i18n.model.Project.estimated_days,
  actual_daysLabel: Desk.i18n.model.Project.actual_days,
  backlog_countLabel: Desk.i18n.model.Project.backlog_count,
  open_countLabel: Desk.i18n.model.Project.open_count,
  closed_countLabel: Desk.i18n.model.Project.closed_count,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Projects',
  subtitle: 'Create and maintain Projects',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Desk.store.Project')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [

        {
          header: me.project_nbrLabel,
          dataIndex: 'project_nbr',
          flex: 1
        }, {
          header: me.displayLabel,
          dataIndex: 'display',
          flex: 2
        }, {
          header: me.owner_idLabel,
          dataIndex: 'owner_display',
          flex: 2
        },
        {
          header       : me.backlog_countLabel,
          dataIndex    : 'backlog_count',
          flex         : 1
        },
        {
          header       : me.open_countLabel,
          dataIndex    : 'open_count',
          flex         : 1
        },
        {
          header       : me.closed_countLabel,
          dataIndex    : 'closed_count',
          flex         : 1
        }
        // {
        //   header       : me.target_dateLabel,
        //   dataIndex    : 'target_date',
        //   flex         : 1
        // },
        // {
        //   header: me.stateLabel,
        //   dataIndex: 'state',
        //   flex: 1
        // }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
