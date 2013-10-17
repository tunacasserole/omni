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
      projection_location_idLabel:            Omni.i18n.model.ProjectionDetail.projection_location_id,    
      projection_line_nbrLabel:               Omni.i18n.model.ProjectionDetail.projection_line_nbr,    
      forecast_profile_idLabel:               Omni.i18n.model.ProjectionDetail.forecast_profile_id,    
      sku_idLabel:                            Omni.i18n.model.ProjectionDetail.sku_id,    
      location_idLabel:                       Omni.i18n.model.ProjectionDetail.location_id,    
      first_forecast_unitsLabel:              Omni.i18n.model.ProjectionDetail.first_forecast_units,    
      last_forecast_unitsLabel:               Omni.i18n.model.ProjectionDetail.last_forecast_units,    
      last_forecast_dateLabel:                Omni.i18n.model.ProjectionDetail.last_forecast_date,    
      projection_1_unitsLabel:                Omni.i18n.model.ProjectionDetail.projection_1_units,    
      projection_2_unitsLabel:                Omni.i18n.model.ProjectionDetail.projection_2_units,    
      projection_3_unitsLabel:                Omni.i18n.model.ProjectionDetail.projection_3_units,    
      projection_4_unitsLabel:                Omni.i18n.model.ProjectionDetail.projection_4_units,    
      sale_units_ytdLabel:                    Omni.i18n.model.ProjectionDetail.sale_units_ytd,    
      sale_units_py1Label:                    Omni.i18n.model.ProjectionDetail.sale_units_py1,    
      sale_units_py2Label:                    Omni.i18n.model.ProjectionDetail.sale_units_py2,    
      sale_units_py3Label:                    Omni.i18n.model.ProjectionDetail.sale_units_py3,    
      number_of_schoolsLabel:                 Omni.i18n.model.ProjectionDetail.number_of_schools,    
      average_salesLabel:                     Omni.i18n.model.ProjectionDetail.average_sales,    
      standard_deviationLabel:                Omni.i18n.model.ProjectionDetail.standard_deviation,    
      is_destroyedLabel:                      Omni.i18n.model.ProjectionDetail.is_destroyed,    
      audit_created_byLabel:                  Omni.i18n.model.ProjectionDetail.audit_created_by,    
      audit_updated_byLabel:                  Omni.i18n.model.ProjectionDetail.audit_updated_by,    
      audit_created_atLabel:                  Omni.i18n.model.ProjectionDetail.audit_created_at,    
      audit_updated_atLabel:                  Omni.i18n.model.ProjectionDetail.audit_updated_at    
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

            { xtype: 'textfield', name: 'projection_detail_id',           fieldLabel: this.projection_detail_idLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_id',                  fieldLabel: this.projection_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_location_id',         fieldLabel: this.projection_location_idLabel      , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_line_nbr',            fieldLabel: this.projection_line_nbrLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'forecast_profile_id',            fieldLabel: this.forecast_profile_idLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'sku_id',                         fieldLabel: this.sku_idLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'location_id',                    fieldLabel: this.location_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'first_forecast_units',           fieldLabel: this.first_forecast_unitsLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'last_forecast_units',            fieldLabel: this.last_forecast_unitsLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'last_forecast_date',             fieldLabel: this.last_forecast_dateLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_1_units',             fieldLabel: this.projection_1_unitsLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_2_units',             fieldLabel: this.projection_2_unitsLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_3_units',             fieldLabel: this.projection_3_unitsLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_4_units',             fieldLabel: this.projection_4_unitsLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_ytd',                 fieldLabel: this.sale_units_ytdLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_py1',                 fieldLabel: this.sale_units_py1Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_py2',                 fieldLabel: this.sale_units_py2Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'sale_units_py3',                 fieldLabel: this.sale_units_py3Label              , allowBlank: false },    
            { xtype: 'textfield', name: 'number_of_schools',              fieldLabel: this.number_of_schoolsLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'average_sales',                  fieldLabel: this.average_salesLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'standard_deviation',             fieldLabel: this.standard_deviationLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_created_by',               fieldLabel: this.audit_created_byLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_updated_by',               fieldLabel: this.audit_updated_byLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_created_at',               fieldLabel: this.audit_created_atLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_updated_at',               fieldLabel: this.audit_updated_atLabel            , allowBlank: false }    
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