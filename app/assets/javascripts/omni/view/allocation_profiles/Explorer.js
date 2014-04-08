Ext.define('Omni.view.allocation_profiles.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-allocation_profiles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.AllocationProfile'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
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
  percent_to_allocateLabel:               Omni.i18n.model.AllocationProfile.percent_to_allocate,
  excess_demand_optionLabel:              Omni.i18n.model.AllocationProfile.excess_demand_option,
  excess_supply_optionLabel:              Omni.i18n.model.AllocationProfile.excess_supply_option,
  rounding_optionLabel:                   Omni.i18n.model.AllocationProfile.rounding_option,
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
          header       : this.allocation_formulaLabel,
          dataIndex    : 'allocation_formula',
          flex         : 1
        },
        {
          header       : this.percent_to_allocateLabel,
          dataIndex    : 'percent_to_allocate',
          flex         : 1
        },
        {
          header       : this.excess_demand_optionLabel,
          dataIndex    : 'excess_demand_option',
          flex         : 1
        },
        {
          header       : this.excess_supply_optionLabel,
          dataIndex    : 'excess_supply_option',
          flex         : 1
        },
        {
          header       : this.rounding_optionLabel,
          dataIndex    : 'rounding_option',
          flex         : 1
        }
        //         {
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
