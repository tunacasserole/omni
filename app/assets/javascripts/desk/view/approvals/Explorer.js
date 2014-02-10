Ext.define('Desk.view.approvals.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-approvals-Explorer',
  allowInspect : false,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-approvals-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-approvals-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  approval_idLabel                       : Desk.i18n.model.Approval.approval_id,
  approval_nbrLabel                       : Desk.i18n.model.Approval.approval_nbr,
  approval_typeLabel                      : Desk.i18n.model.Approval.approval_type,
  displayLabel                            : Desk.i18n.model.Approval.display,
  descriptionLabel                        : Desk.i18n.model.Approval.description,
  approval_dateLabel                      : Desk.i18n.model.Approval.approval_date,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Approvals',
  subtitle : 'Create and maintain Approvals',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Approval')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.approval_nbrLabel,
          dataIndex    : 'approval_nbr',
          flex         : 1
        },
        {
          header       : me.approver_idLabel,
          dataIndex    : 'approver_display',
          flex         : 1
        },
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 2
        },
        // {
        //   header       : me.approval_dateLabel,
        //   dataIndex    : 'approval_date',
        //   flex         : 1
        // },
        // {
        //   header       : me.approval_typeLabel,
        //   dataIndex    : 'approval_type',
        //   flex         : 1
        // },
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
