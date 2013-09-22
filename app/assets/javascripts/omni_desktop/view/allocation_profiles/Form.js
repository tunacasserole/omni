Ext.define('Omni.view.allocation_profiles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-allocation_profiles-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'allocation_profile_id',
      value:      this.record.get('allocation_profile_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      allocation_profile_idLabel:             Omni.i18n.model.AllocationProfile.allocation_profile_id,    
      displayLabel:                           Omni.i18n.model.AllocationProfile.display,    
      descriptionLabel:                       Omni.i18n.model.AllocationProfile.description,    
      allocation_formulaLabel:                Omni.i18n.model.AllocationProfile.allocation_formula,    
      stateLabel:                             Omni.i18n.model.AllocationProfile.state,    
      units_allocatedLabel:                   Omni.i18n.model.AllocationProfile.units_allocated,    
      units_shippedLabel:                     Omni.i18n.model.AllocationProfile.units_shipped,    
      is_destroyedLabel:                      Omni.i18n.model.AllocationProfile.is_destroyed    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },    
            { xtype: 'textfield', name: 'percent_to_allocate',            fieldLabel: this.percent_to_allocateLabel         , allowBlank: true },                
            { xtype: 'buildit-Lookup', name: 'allocation_formula',        fieldLabel: this.allocation_formulaLabel          , allowBlank: true, category: 'ALLOCATION_FORMULA'},    
            { xtype: 'buildit-Lookup', name: 'excess_demand_option',      fieldLabel: this.excess_demand_optionLabel        , allowBlank: true, category: 'EXCESS_DEMAND_OPTION'}, 
            { xtype: 'buildit-Lookup', name: 'excess_supply_option',      fieldLabel: this.excess_supply_optionLabel        , allowBlank: true, category: 'EXCESS_SUPPLY_OPTION'}, 
            { xtype: 'buildit-Lookup', name: 'rounding_option',           fieldLabel: this.rounding_optionLabel             , allowBlank: true, category: 'ROUNDING_OPTION'},    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit AllocationProfiles',
      newTitle: 'New Allocation Profile',
      newSubtitle: 'Complete the following to create a new Allocation Profile'
    });
    // TITLES (End)

    this.callParent();
    
  }

});