Ext.define('Omni.view.forecast_profiles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-forecast_profiles-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'forecast_profile_id',
      value:      this.record.get('forecast_profile_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      forecast_profile_idLabel:               Omni.i18n.model.ForecastProfile.forecast_profile_id,    
      displayLabel:                           Omni.i18n.model.ForecastProfile.display,    
      sales_2012_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_2012_weight,    
      sales_2011_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_2011_weight,    
      sales_2010_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_2010_weight,    
      contract_year_1_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_1_weight,    
      contract_year_2_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_2_weight,    
      contract_year_3_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_3_weight,    
      contract_year_4_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_4_weight,    
      contract_year_5_weightLabel:            Omni.i18n.model.ForecastProfile.contract_year_5_weight,    
      forecast_formulaLabel:                  Omni.i18n.model.ForecastProfile.forecast_formula,    
      is_destroyedLabel:                      Omni.i18n.model.ForecastProfile.is_destroyed    
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

/*             { xtype: 'textfield', name: 'forecast_profile_id',            fieldLabel: this.forecast_profile_idLabel         , allowBlank: false },     */
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sales_2012_weight',               fieldLabel: this.sales_2012_weightLabel            , allowBlank: true },    
            { xtype: 'textfield', name: 'sales_2011_weight',               fieldLabel: this.sales_2011_weightLabel            , allowBlank: true },    
            { xtype: 'textfield', name: 'sales_2010_weight',               fieldLabel: this.sales_2010_weightLabel            , allowBlank: true },    
            { xtype: 'textfield', name: 'contract_year_1_weight',         fieldLabel: this.contract_year_1_weightLabel      , allowBlank: true },    
            { xtype: 'textfield', name: 'contract_year_2_weight',         fieldLabel: this.contract_year_2_weightLabel      , allowBlank: true },    
            { xtype: 'textfield', name: 'contract_year_3_weight',         fieldLabel: this.contract_year_3_weightLabel      , allowBlank: true },    
            { xtype: 'textfield', name: 'contract_year_4_weight',         fieldLabel: this.contract_year_4_weightLabel      , allowBlank: true },    
            { xtype: 'textfield', name: 'contract_year_5_weight',         fieldLabel: this.contract_year_5_weightLabel      , allowBlank: true },    
            { xtype: 'buildit-Lookup',name: 'forecast_formula',           fieldLabel: this.forecast_formulaLabel           , allowBlank: true, category: 'FORECAST_FORMULA' },
/*             { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }     */
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit ForecastProfiles',
      newTitle: 'New Forecast Profile',
      newSubtitle: 'Complete the following to create a new Forecast Profile'
    });
    // TITLES (End)

    this.callParent();
    
  }

});