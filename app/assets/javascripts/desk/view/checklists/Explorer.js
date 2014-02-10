Ext.define('Desk.view.checklists.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-checklists-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-checklists-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-checklists-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  checklist_idLabel                       : Desk.i18n.model.Checklist.checklist_id,
  checklist_nbrLabel                      : Desk.i18n.model.Checklist.checklist_nbr,
  checklist_typeLabel                     : Desk.i18n.model.Checklist.checklist_type,
  stateLabel                              : Desk.i18n.model.Checklist.state,
  displayLabel                            : Desk.i18n.model.Checklist.display,
  descriptionLabel                        : Desk.i18n.model.Checklist.description,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Checklists',
  subtitle : 'Create and maintain Checklists',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Checklist')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.checklist_nbrLabel,
          dataIndex    : 'checklist_nbr',
          flex         : 1
        },
        {
          header       : me.checklist_typeLabel,
          dataIndex    : 'checklist_type',
          flex         : 1
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : me.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});