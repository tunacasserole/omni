Ext.define('Omni.view.allocations.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-allocations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store    : Ext.create('Omni.store.Allocation'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-allocations-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-allocations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  allocation_idLabel                      : Omni.i18n.model.Allocation.allocation_id,
  allocatable_idLabel                     : Omni.i18n.model.Allocation.allocatable_id,
  allocatable_typeLabel                   : Omni.i18n.model.Allocation.allocatable_type,
  sku_idLabel                             : Omni.i18n.model.Allocation.sku_id,
  location_idLabel                        : Omni.i18n.model.Allocation.location_id,
  allocation_profile_idLabel              : Omni.i18n.model.Allocation.allocation_profile_id,
  allocation_nbrLabel                     : Omni.i18n.model.Allocation.allocation_nbr,
  stateLabel                              : Omni.i18n.model.Allocation.state,
  displayLabel                            : Omni.i18n.model.Allocation.display,
  descriptionLabel                        : Omni.i18n.model.Allocation.description,
  units_to_allocateLabel                  : Omni.i18n.model.Allocation.units_to_allocate,
  is_destroyedLabel                       : Omni.i18n.model.Allocation.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Allocations',
  subtitle : 'Create and maintain Allocations',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.allocation_idLabel,
        //   dataIndex    : 'allocation_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.allocatable_idLabel,
        //   dataIndex    : 'allocatable_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.allocatable_typeLabel,
        //   dataIndex    : 'allocatable_type',
        //   flex         : 1
        // },
        {
          header       : this.allocation_nbrLabel,
          dataIndex    : 'allocation_nbr',
          flex         : 1
        },
        {
          header       : this.sku_idLabel,
          dataIndex    : 'sku_display',
          flex         : 1
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1
        },
        {
          header       : this.allocation_profile_idLabel,
          dataIndex    : 'allocation_profile_display',
          flex         : 1
        },
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
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.units_to_allocateLabel,
          dataIndex    : 'units_to_allocate',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
