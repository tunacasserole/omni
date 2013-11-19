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
      descriptionLabel:                           Omni.i18n.model.ForecastProfile.description,
      sales_py1_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_py1_weight,
      sales_py2_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_py2_weight,
      sales_py3_weightLabel:                  Omni.i18n.model.ForecastProfile.sales_py3_weight,
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
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },
            { xtype: 'textfield', name: 'description',                        fieldLabel: this.displayLabel                     , allowBlank: false },
            { xtype: 'textfield', name: 'sales_py1_weight',               fieldLabel: this.sales_py1_weightLabel            , allowBlank: true },
            { xtype: 'textfield', name: 'sales_py2_weight',               fieldLabel: this.sales_py2_weightLabel            , allowBlank: true },
            { xtype: 'textfield', name: 'sales_py3_weight',               fieldLabel: this.sales_py3_weightLabel            , allowBlank: true },
            { xtype: 'buildit-Lookup',name: 'forecast_formula',           fieldLabel: this.forecast_formulaLabel           , allowBlank: true, category: 'FORECAST_FORMULA' },
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Forecast Profiles',
      newTitle: 'New Forecast Profile',
      newSubtitle: 'Complete the following to create a new Forecast Profile'
    });
    // TITLES (End)

    this.callParent();

  }

});
