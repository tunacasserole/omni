Ext.define('Omni.view.issues.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-issues-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Issue'),
  allowFind : true,
  contextMenuConfig : {
    xtype    : 'omni-issues-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-issues-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-issues-Inspector'
  },

  filters: [
    {
      showAll  : 'State',
      items    : [
        ['state_active',        "Active"],
        ['state_backlog',           "Backlog"],
        ['state_closed',           "Closed"]
      ]
    }
    ,{
      showAll      : 'Type',
      items        : [
        ['type_bug',               "Bugs"],
        ['type_feature',           "Features"],
        ['type_unknown',              "Unknown"]
      ]
    }
    ,{
      showAll      : 'Severity',
      items        : [
        ['severity_low',               "Low"],
        ['severity_medium',           "Medium"],
        ['severity_high',              "High"]
      ]
    }    
  ],

  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  issue_idLabel:                          Omni.i18n.model.Issue.issue_id,
  issue_nbrLabel:                         Omni.i18n.model.Issue.issue_nbr,
  stateLabel:                             Omni.i18n.model.Issue.state,
  displayLabel:                           Omni.i18n.model.Issue.display,
  descriptionLabel:                       Omni.i18n.model.Issue.description,
  severityLabel:                          Omni.i18n.model.Issue.severity,
  assignee_idLabel:                       Omni.i18n.model.Issue.assignee_id,
  creator_idLabel:                        Omni.i18n.model.Issue.creator_id,
  issue_typeLabel:                        Omni.i18n.model.Issue.issue_type,
  is_destroyedLabel:                      Omni.i18n.model.Issue.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Issues',
  subtitle:  'Create and maintain Issues',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.issue_idLabel,
        //   dataIndex    : 'issue_id',
        //   flex         : 1
        // },
        {
          header       : this.issue_nbrLabel,
          dataIndex    : 'issue_nbr',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 2
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 2
        },
        {
          header       : this.severityLabel,
          dataIndex    : 'severity',
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
          header       : this.issue_typeLabel,
          dataIndex    : 'issue_type',
          flex         : 1
        },
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