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
      percent_to_allocateLabel:               Omni.i18n.model.AllocationProfile.percent_to_allocate,    
      excess_demand_optionLabel:              Omni.i18n.model.AllocationProfile.excess_demand_option,    
      excess_supply_optionLabel:              Omni.i18n.model.AllocationProfile.excess_supply_option,    
      rounding_optionLabel:                   Omni.i18n.model.AllocationProfile.rounding_option,    
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

            { xtype: 'textfield', name: 'allocation_profile_id',          fieldLabel: this.allocation_profile_idLabel       , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'allocation_formula',             fieldLabel: this.allocation_formulaLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'percent_to_allocate',            fieldLabel: this.percent_to_allocateLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'excess_demand_option',           fieldLabel: this.excess_demand_optionLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'excess_supply_option',           fieldLabel: this.excess_supply_optionLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'rounding_option',                fieldLabel: this.rounding_optionLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
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