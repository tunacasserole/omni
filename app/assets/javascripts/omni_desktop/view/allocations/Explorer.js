Ext.define('Omni.view.allocations.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-allocations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Allocation'),

  contextMenuConfig: {
    xtype: 'omni-allocations-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-allocations-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-allocations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  allocation_idLabel:                     Omni.i18n.model.Allocation.allocation_id,
  displayLabel:                           Omni.i18n.model.Allocation.display,
  allocation_nbrLabel:                    Omni.i18n.model.Allocation.allocation_nbr,
  stateLabel:                             Omni.i18n.model.Allocation.state,
  location_idLabel:                       Omni.i18n.model.Allocation.location_id,
  is_destroyedLabel:                      Omni.i18n.model.Allocation.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Allocations',
  subtitle:  'Create and maintain Allocations',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.allocation_idLabel,                 dataIndex: 'allocation_id',               flex: 1 },    
        { header: this.displayLabel,                       dataIndex: 'display',                     flex: 1 },    
        { header: this.allocation_nbrLabel,                dataIndex: 'allocation_nbr',              flex: 1 },    
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },    
        { header: this.location_idLabel,                   dataIndex: 'location_display',                 flex: 1 },    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});