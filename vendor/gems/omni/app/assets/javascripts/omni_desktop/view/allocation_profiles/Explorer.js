Ext.define('Omni.view.allocation_profiles.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-allocation_profiles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.AllocationProfile'),

  contextMenuConfig : {
    xtype    : 'omni-allocation_profiles-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-allocation_profiles-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-allocation_profiles-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  allocation_profile_idLabel:             Omni.i18n.model.AllocationProfile.allocation_profile_id,
  displayLabel:                           Omni.i18n.model.AllocationProfile.display,
  descriptionLabel:                       Omni.i18n.model.AllocationProfile.description,
  allocation_formulaLabel:                Omni.i18n.model.AllocationProfile.allocation_formula,
  stateLabel:                             Omni.i18n.model.AllocationProfile.state,
  units_allocatedLabel:                   Omni.i18n.model.AllocationProfile.units_allocated,
  units_shippedLabel:                     Omni.i18n.model.AllocationProfile.units_shipped,
  is_destroyedLabel:                      Omni.i18n.model.AllocationProfile.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'AllocationProfiles',
  subtitle:  'Create and maintain AllocationProfiles',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.allocation_profile_idLabel,
          dataIndex    : 'allocation_profile_id',
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
          header       : this.allocation_formulaLabel,
          dataIndex    : 'allocation_formula',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : this.units_allocatedLabel,
          dataIndex    : 'units_allocated',
          flex         : 1
        },
        {
          header       : this.units_shippedLabel,
          dataIndex    : 'units_shipped',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});