Ext.define('Omni.view.projection_locations.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-projection_locations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store    : Ext.create('Omni.store.ProjectionLocation'),

  contextMenuConfig : {
    xtype    : 'omni-projection_locations-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-projection_locations-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-projection_locations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  location_idLabel                        : Omni.i18n.model.ProjectionLocation.location_id,
  displayLabel                            : Omni.i18n.model.ProjectionLocation.display,
  approval_dateLabel                      : Omni.i18n.model.ProjectionLocation.approval_date,
  stateLabel                              : Omni.i18n.model.ProjectionLocation.state,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Projection Locations',
  subtitle : 'Create and maintain Projection Locations',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1
        },
        {
          header       : this.approval_dateLabel,
          dataIndex    : 'approval_date',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
