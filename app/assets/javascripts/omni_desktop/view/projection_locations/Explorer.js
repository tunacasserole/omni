Ext.define('Omni.view.projection_locations.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-projection_locations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.ProjectionLocation'),

  contextMenuConfig: {
    xtype: 'omni-projection_locations-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-projection_locations-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-projection_locations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  projection_location_idLabel:            Omni.i18n.model.ProjectionLocation.projection_location_id,
  projection_idLabel:                     Omni.i18n.model.ProjectionLocation.projection_id,
  location_idLabel:                       Omni.i18n.model.ProjectionLocation.location_id,
  displayLabel:                           Omni.i18n.model.ProjectionLocation.display,
  stateLabel:                             Omni.i18n.model.ProjectionLocation.state,
  approval_dateLabel:                     Omni.i18n.model.ProjectionLodation.approval_date,
  is_destroyedLabel:                      Omni.i18n.model.ProjectionLocation.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Projection Locations',
  subtitle:  'Create and maintain Projection Locations',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.projection_location_idLabel,        dataIndex: 'projection_location_id',      flex: 1 },    
        // { header: this.projection_idLabel,                 dataIndex: 'projection_id',               flex: 1 },    
        { header: this.location_idLabel,                      dataIndex: 'location_display',            flex: 1 },    
        // { header: this.displayLabel,                       dataIndex: 'display',                     flex: 1 },    
        { header: this.stateLabel,                            dataIndex: 'state',                       flex: 1 },    
        { header: this.approval_dateLabel,                    dataIndex: 'approval_date',               flex: 1 }
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});