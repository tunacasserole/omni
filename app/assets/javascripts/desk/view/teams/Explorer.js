Ext.define('Desk.view.teams.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.desk-teams-Explorer',
  allowFind: false,
  allowInspect: false,


  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'desk-teams-Form'
  }],

  inspectorConfig: {
    xtype: 'desk-teams-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  team_idLabel: Desk.i18n.model.Team.team_id,
  teamable_idLabel: Desk.i18n.model.Team.teamable_id,
  teamable_typeLabel: Desk.i18n.model.Team.teamable_type,
  user_idLabel: Desk.i18n.model.Team.user_id,
  backlog_countLabel: Desk.i18n.model.Project.backlog_count,
  draft_countLabel: Desk.i18n.model.Project.draft_count,
  needs_approval_countLabel: Desk.i18n.model.Project.needs_approval_count,
  approved_to_activate_countLabel: Desk.i18n.model.Project.approved_to_activate_count,
  active_countLabel: Desk.i18n.model.Project.active_count,
  ready_to_close_countLabel: Desk.i18n.model.Project.ready_to_close_count,
  closed_countLabel: Desk.i18n.model.Project.closed_count,

  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Teams',
  subtitle: 'Create and maintain Teams',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Desk.store.Team')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [
        // {
        //   header       : me.teamable_idLabel,
        //   dataIndex    : 'teamable_id',
        //   flex         : 1
        // },
        // {
        //   header       : me.teamable_typeLabel,
        //   dataIndex    : 'teamable_type',
        //   flex         : 1
        // },

        {
          header: me.user_idLabel,
          dataIndex: 'user_display',
          flex: 1
        }, {
          header: me.backlog_countLabel,
          dataIndex: 'backlog_count',
          flex: 1
        }, {
          header: me.draft_countLabel,
          dataIndex: 'draft_count',
          flex: 1
        }, {
          header: me.needs_approval_countLabel,
          dataIndex: 'needs_approval_count',
          flex: 1
        }, {
          header: me.approved_to_activate_countLabel,
          dataIndex: 'approved_to_activate_count',
          flex: 1
        }, {
          header: me.active_countLabel,
          dataIndex: 'active_count',
          flex: 1
        }, {
          header: me.ready_to_close_countLabel,
          dataIndex: 'ready_to_close_count',
          flex: 1
        }, {
          header: me.closed_countLabel,
          dataIndex: 'closed_count',
          flex: 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
