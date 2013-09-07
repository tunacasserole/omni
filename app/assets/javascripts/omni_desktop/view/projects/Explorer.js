Ext.define('Omni.view.projects.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-projects-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Project'),

  contextMenuConfig : {
    xtype    : 'omni-projects-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-projects-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-projects-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  project_idLabel:                        Omni.i18n.model.Project.project_id,
  stateLabel:                             Omni.i18n.model.Project.state,
  displayLabel:                           Omni.i18n.model.Project.display,
  descriptionLabel:                       Omni.i18n.model.Project.description,
  release_dateLabel:                      Omni.i18n.model.Project.release_date,
  is_destroyedLabel:                      Omni.i18n.model.Project.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Projects',
  subtitle:  'Create and maintain Projects',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.project_idLabel,
        //   dataIndex    : 'project_id',
        //   flex         : 1
        // },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        // {
        //   header       : this.descriptionLabel,
        //   dataIndex    : 'description',
        //   flex         : 1
        // },
        {
          header       : this.release_dateLabel,
          dataIndex    : 'release_date',
          flex         : 1
        }
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