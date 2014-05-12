Ext.define('Desk.view.teams.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-teams-Explorer',
  allowFind : false,
  allowInspect : false,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-teams-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-teams-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  team_idLabel                            : Desk.i18n.model.Team.team_id,
  teamable_idLabel                        : Desk.i18n.model.Team.teamable_id,
  teamable_typeLabel                      : Desk.i18n.model.Team.teamable_type,
  user_idLabel                            : Desk.i18n.model.Team.user_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Teams',
  subtitle : 'Create and maintain Teams',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Team')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
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
      header       : me.user_idLabel,
      dataIndex    : 'user_display',
      flex         : 1
    }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
