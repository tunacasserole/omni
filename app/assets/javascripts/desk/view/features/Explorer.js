Ext.define('Desk.view.features.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-features-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-features-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-features-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  feature_idLabel                         : Desk.i18n.model.Feature.feature_id,
  project_idLabel                         : Desk.i18n.model.Feature.project_id,
  feature_nbrLabel                        : Desk.i18n.model.Feature.feature_nbr,
  feature_typeLabel                       : Desk.i18n.model.Feature.feature_type,
  stateLabel                              : Desk.i18n.model.Feature.state,
  displayLabel                            : Desk.i18n.model.Feature.display,
  descriptionLabel                        : Desk.i18n.model.Feature.description,
  release_dateLabel                       : Desk.i18n.model.Feature.release_date,
  estimated_hoursLabel                    : Desk.i18n.model.Feature.estimated_hours,
  actual_hoursLabel                       : Desk.i18n.model.Feature.actual_hours,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Features',
  subtitle : 'Create and maintain Features',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Feature')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        // {
        //   header       : me.project_idLabel,
        //   dataIndex    : 'project_display',
        //   flex         : 1
        // },
        {
          header       : me.feature_nbrLabel,
          dataIndex    : 'feature_nbr',
          flex         : 1
        },
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 2
        },
        // {
        //   header       : me.feature_typeLabel,
        //   dataIndex    : 'feature_type',
        //   flex         : 1
        // },
        // {
        //   header       : me.descriptionLabel,
        //   dataIndex    : 'description',
        //   flex         : 1
        // },
        {
          header       : me.estimated_hoursLabel,
          dataIndex    : 'estimated_hours',
          flex         : 1
        },
        {
          header       : me.actual_hoursLabel,
          dataIndex    : 'actual_hours',
          flex         : 1
        },
        // {
        //   header       : me.release_dateLabel,
        //   dataIndex    : 'release_date',
        //   flex         : 1
        // },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
