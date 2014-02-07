Ext.define('Desk.view.projects.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-projects-Explorer',

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
  stateLabel                              : Desk.i18n.model.Project.state,
  displayLabel                            : Desk.i18n.model.Project.display,
  descriptionLabel                        : Desk.i18n.model.Project.description,
  release_dateLabel                       : Desk.i18n.model.Project.release_date,
  is_destroyedLabel                       : Desk.i18n.model.Project.is_destroyed,
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
        },
        {
          header       : me.release_dateLabel,
          dataIndex    : 'release_date',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});