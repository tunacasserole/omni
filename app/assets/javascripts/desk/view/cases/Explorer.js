Ext.define('Desk.view.cases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-cases-Explorer',
  allowFind : true,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },


  newForms : [{
    xtype    : 'desk-cases-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-cases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  case_idLabel                            : Desk.i18n.model.Case.case_id,
  requestor_idLabel                       : Desk.i18n.model.Case.requestor_id,
  project_idLabel                         : Desk.i18n.model.Case.project_id,
  case_nbrLabel                           : Desk.i18n.model.Case.case_nbr,
  case_typeLabel                          : Desk.i18n.model.Case.case_type,
  stateLabel                              : Desk.i18n.model.Case.state,
  displayLabel                            : Desk.i18n.model.Case.display,
  descriptionLabel                        : Desk.i18n.model.Case.description,
  tagsLabel                               : Desk.i18n.model.Case.tags,
  estimated_hoursLabel                    : Desk.i18n.model.Case.estimated_hours,
  actual_hoursLabel                       : Desk.i18n.model.Case.actual_hours,
  is_billableLabel                        : Desk.i18n.model.Case.is_billable,
  audit_created_byLabel                   : Desk.i18n.model.Case.audit_created_by,
  audit_updated_byLabel                   : Desk.i18n.model.Case.audit_updated_by,
  audit_created_atLabel                   : Desk.i18n.model.Case.audit_created_at,
  audit_updated_atLabel                   : Desk.i18n.model.Case.audit_updated_at,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Support Requests',
  subtitle : 'Work with support requests',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Case')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.case_nbrLabel,
          dataIndex    : 'case_nbr',
          flex         : 1
        },
        {
          header       : me.case_typeLabel,
          dataIndex    : 'case_type',
          flex         : 1
        },
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        // {
        //   header       : me.descriptionLabel,
        //   dataIndex    : 'description',
        //   flex         : 1
        // },
        // {
        //   header       : me.tagsLabel,
        //   dataIndex    : 'tags',
        //   flex         : 1
        // },
        // {
        //   header       : me.estimated_hoursLabel,
        //   dataIndex    : 'estimated_hours',
        //   flex         : 1
        // },
        // {
        //   header       : me.actual_hoursLabel,
        //   dataIndex    : 'actual_hours',
        //   flex         : 1
        // },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_billableLabel,
        //   dataIndex    : 'is_billable',
        //   flex         : 1
        // },
        {
          header       : me.project_idLabel,
          dataIndex    : 'project_display',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
