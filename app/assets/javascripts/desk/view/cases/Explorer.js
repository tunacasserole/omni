Ext.define('Desk.view.cases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-cases-Explorer',
  allowFind : 'true',

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
  case_typeLabel                            : Desk.i18n.model.Case.case_type,
  case_nbrLabel                           : Desk.i18n.model.Case.case_nbr,
  stateLabel                              : Desk.i18n.model.Case.state,
  summaryLabel                            : Desk.i18n.model.Case.summary,
  tagsLabel                               : Desk.i18n.model.Case.tags,
  descriptionLabel                        : Desk.i18n.model.Case.description,
  is_destroyedLabel                       : Desk.i18n.model.Case.is_destroyed,
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
          flex         : 1,
          emptyText    : 'auto-generated on save'
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.case_typeLabel,
          dataIndex    : 'case_type',
          flex         : 2,
          renderer      : Buildit.util.Format.lookupRenderer('CASE_TYPE'),
          lkp           : 'code_int'
        },
        {
          header       : me.summaryLabel,
          dataIndex    : 'summary',
          flex         : 2
        },

        // {
        //   header       : me.tagsLabel,
        //   dataIndex    : 'tags',
        //   flex         : 1
        // },
        {
          header       : me.descriptionLabel,
          dataIndex    : 'description',
          flex         : 3
        },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
