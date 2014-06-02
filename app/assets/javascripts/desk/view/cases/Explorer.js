Ext.define('Desk.view.cases.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.desk-cases-Explorer',
  allowFind: true,
  allowDelete: false,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'desk-cases-Form'
  }],

  inspectorConfig: {
    xtype: 'desk-cases-Inspector'
  },

  filters: [{
    showAll: 'Roles',
    items: [
      ['role_requestor', "I'm the requestor"],
      ['role_owner', "I'm the owner"],
      ['role_reviewer', "I'm the reviewer"],
      // ['role_follower',            "I'm following it"],
    ]
  }, {
    showAll: 'Kind of Request',
    items: [
      ['type_bug', "Bugs"],
      ['type_question', "Questions"],
      ['type_data', "Data"],
      ['type_enhancement', "Enhancements"],
    ]
  }, {
    showAll: 'Urgency',
    items: [
      ['urgency_showstopper', "Showstopper"],
      ['urgency_high', "High"],
      ['urgency_standard', "Standard"],
      ['urgency_low', "Low"]
    ]
  }, {
    showAll: 'State',
    items: [
      ['state_backlog', "Backlog"],
      ['state_draft', "Draft"],
      ['state_needs_approval', "Needs Approval"],
      ['state_approved_to_activate', "Approved to Activate"],
      ['state_active', "Active"],
      ['state_ready_to_close', "Ready to Close"],
      ['state_closed', "Closed"],
    ]
  }, {
    showAll: 'Size',
    items: [
      ['size_extra_small', "Extra Small"],
      ['size_small', "Small"],
      ['size_medium', "Medium"],
      ['size_large', "Large"],
      ['size_extra_large', "Extra Large"]
    ]
  }],

  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  case_idLabel: Desk.i18n.model.Case.case_id,
  requestor_idLabel: Desk.i18n.model.Case.requestor_id,
  reviewer_idLabel: Desk.i18n.model.Case.reviewer_id,
  owner_idLabel: Desk.i18n.model.Case.owner_id,
  project_idLabel: Desk.i18n.model.Case.project_id,
  case_nbrLabel: Desk.i18n.model.Case.case_nbr,
  case_typeLabel: Desk.i18n.model.Case.case_type,
  case_sizeLabel: Desk.i18n.model.Case.case_size,
  case_urgencyLabel: Desk.i18n.model.Case.case_urgency,
  stateLabel: Desk.i18n.model.Case.state,
  displayLabel: Desk.i18n.model.Case.display,
  descriptionLabel: Desk.i18n.model.Case.description,
  audit_created_byLabel: Desk.i18n.model.Case.audit_created_by,
  audit_updated_byLabel: Desk.i18n.model.Case.audit_updated_by,
  audit_created_atLabel: Desk.i18n.model.Case.audit_created_at,
  audit_updated_atLabel: Desk.i18n.model.Case.audit_updated_at,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Support Requests',
  subtitle: 'Work with support requests',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Desk.store.Case')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [{
          header: me.case_nbrLabel,
          dataIndex: 'case_nbr',
          flex: 1
        }, {
          header: me.stateLabel,
          dataIndex: 'state',
          flex: 2,
          renderer: this.formatState
        }, {
          header: me.displayLabel,
          dataIndex: 'display',
          flex: 4
        }, {
          header: me.case_urgencyLabel,
          dataIndex: 'case_urgency',
          flex: 2,
          renderer: Buildit.util.Format.lookupRenderer('CASE_URGENCY'),
        }, {
          header: me.case_sizeLabel,
          dataIndex: 'case_size',
          flex: 2,
          renderer: this.formatSize
        }, {
          header: me.case_typeLabel,
          dataIndex: 'case_type',
          flex: 2,
          renderer: this.formatType
        }, {
          header: me.owner_idLabel,
          dataIndex: 'owner_display',
          flex: 2
        }, {
          header: me.reviewer_idLabel,
          dataIndex: 'reviewer_display',
          flex: 2
        }, {
          header: me.requestor_idLabel,
          dataIndex: 'requestor_display',
          flex: 2
        }, {
          header: me.project_idLabel,
          dataIndex: 'project_display',
          flex: 1
        }
        // }, {
        //   header: me.case_sizeLabel,
        //   dataIndex: 'case_size',
        //   flex: 1
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_approvedLabel,
        //   dataIndex    : 'is_approved',
        //   flex         : 1
        // },
      ]
    });
    // COLUMNS (End)


    me.callParent();
  },

  formatState: function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ');
  },

  formatSize: function(value) {
    return value.charAt(0) + value.slice(1).toLowerCase().replace(/_/g, ' ');
  },

  formatType: function(value) {
    return value.charAt(0) + value.slice(1).toLowerCase();
  }

});
