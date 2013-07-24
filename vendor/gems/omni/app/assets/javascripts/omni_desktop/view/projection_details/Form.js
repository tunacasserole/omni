Ext.define('Omni.view.projection_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-projection_details-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'projection_detail_id',
      value:      this.record.get('projection_detail_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      projection_detail_idLabel:              Omni.i18n.model.ProjectionDetail.projection_detail_id,    
      displayLabel:                           Omni.i18n.model.ProjectionDetail.display,    
      projection_idLabel:                     Omni.i18n.model.ProjectionDetail.projection_id,    
      projection_line_nbrLabel:               Omni.i18n.model.ProjectionDetail.projection_line_nbr,    
      forecast_profile_idLabel:               Omni.i18n.model.ProjectionDetail.forecast_profile_id,    
      sku_idLabel:                            Omni.i18n.model.ProjectionDetail.sku_id,    
      location_idLabel:                       Omni.i18n.model.ProjectionDetail.location_id,    
      forecast_unitsLabel:                    Omni.i18n.model.ProjectionDetail.forecast_units,    
      proposed_unitsLabel:                    Omni.i18n.model.ProjectionDetail.proposed_units,    
      approved_unitsLabel:                    Omni.i18n.model.ProjectionDetail.approved_units,    
      closed_unitsLabel:                      Omni.i18n.model.ProjectionDetail.closed_units,    
      projection_2_unitsLabel:                Omni.i18n.model.ProjectionDetail.projection_2_units,    
      projection_update_unitsLabel:           Omni.i18n.model.ProjectionDetail.projection_update_units,    
      projection_adjustment_unitsLabel:        Omni.i18n.model.ProjectionDetail.projection_adjustment_units,    
      sale_units_2013Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2013,    
      sale_units_2012Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2012,    
      sale_units_2011Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2011,    
      sale_units_2010Label:                    Omni.i18n.model.ProjectionDetail.sale_units_2010,    
      number_of_schoolsLabel:                 Omni.i18n.model.ProjectionDetail.number_of_schools,    
      average_contract_yearLabel:             Omni.i18n.model.ProjectionDetail.average_contract_year,    
      years_activeLabel:                      Omni.i18n.model.ProjectionDetail.years_active,    
      average_salesLabel:                     Omni.i18n.model.ProjectionDetail.average_sales,    
      standard_deviationLabel:                Omni.i18n.model.ProjectionDetail.standard_deviation,    
      is_destroyedLabel:                      Omni.i18n.model.ProjectionDetail.is_destroyed    
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

            // { xtype: 'textfield', name: 'projection_detail_id',           fieldLabel: this.projection_detail_idLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            // { xtype: 'textfield', name: 'projection_id',                  fieldLabel: this.projection_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_line_nbr',            fieldLabel: this.projection_line_nbrLabel         , allowBlank: false }, 
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('Omni.store.ForecastProfile',{pageSize: 10}), 
              displayField: 'display', 
              queryField: 'display', 
              valueField: 'forecast_profile_id', 
              itemTpl:'{display}',
              name: 'forecast_profile_id', 
              fieldLabel: this.forecast_profile_idLabel, 
              allowBlank: true 
            },
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('Omni.store.Sku',{pageSize: 10}), 
              displayField: 'display', 
              queryField: 'display', 
              valueField: 'sku_id', 
              itemTpl:'{display}',
              name: 'sku_id', 
              fieldLabel: this.sku_idLabel, 
              allowBlank: true 
            },
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('Omni.store.Location',{pageSize: 10}), 
              displayField: 'display', 
              queryField: 'display', 
              valueField: 'location_id', 
              itemTpl:'{display}',
              name: 'location_id', 
              fieldLabel: this.location_idLabel, 
              allowBlank: true 
            },
            { xtype: 'textfield', name: 'forecast_units',                 fieldLabel: this.forecast_unitsLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'proposed_units',                 fieldLabel: this.proposed_unitsLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'approved_units',                 fieldLabel: this.approved_unitsLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'closed_units',                   fieldLabel: this.closed_unitsLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_2_units',             fieldLabel: this.projection_2_unitsLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_update_units',        fieldLabel: this.projection_update_unitsLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_adjustment_units',     fieldLabel: this.projection_adjustment_unitsLabel  , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_2013',                 fieldLabel: this.sale_units_2013Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_2012',                 fieldLabel: this.sale_units_2012Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_2011',                 fieldLabel: this.sale_units_2011Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_2010',                 fieldLabel: this.sale_units_2010Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'number_of_schools',              fieldLabel: this.number_of_schoolsLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'average_contract_year',          fieldLabel: this.average_contract_yearLabel       , allowBlank: false },    
            { xtype: 'textfield', name: 'years_active',                   fieldLabel: this.years_activeLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'average_sales',                  fieldLabel: this.average_salesLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'standard_deviation',             fieldLabel: this.standard_deviationLabel          , allowBlank: false },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit ProjectionDetails',
      newTitle: 'New Projection Detail',
      newSubtitle: 'Complete the following to create a new Projection Detail'
    });
    // TITLES (End)

    this.callParent();
    
  }

});