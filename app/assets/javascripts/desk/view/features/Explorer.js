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
  stateLabel                              : Desk.i18n.model.Feature.state,
  displayLabel                            : Desk.i18n.model.Feature.display,
  descriptionLabel                        : Desk.i18n.model.Feature.description,
  release_dateLabel                       : Desk.i18n.model.Feature.release_date,
  is_destroyedLabel                       : Desk.i18n.model.Feature.is_destroyed,
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