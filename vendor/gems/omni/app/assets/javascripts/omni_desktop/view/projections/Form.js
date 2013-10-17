Ext.define('Omni.view.projections.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-projections-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'projection_id',
      value:      this.record.get('projection_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      projection_idLabel:                     Omni.i18n.model.Projection.projection_id,    
      forecast_profile_idLabel:               Omni.i18n.model.Projection.forecast_profile_id,    
      department_idLabel:                     Omni.i18n.model.Projection.department_id,    
      projection_closer_user_idLabel:         Omni.i18n.model.Projection.projection_closer_user_id,    
      projection_approver_user_idLabel:       Omni.i18n.model.Projection.projection_approver_user_id,    
      projection_typeLabel:                   Omni.i18n.model.Projection.projection_type,    
      plan_yearLabel:                         Omni.i18n.model.Projection.plan_year,    
      stateLabel:                             Omni.i18n.model.Projection.state,    
      displayLabel:                           Omni.i18n.model.Projection.display,    
      descriptionLabel:                       Omni.i18n.model.Projection.description,    
      approval_3_dateLabel:                   Omni.i18n.model.Projection.approval_3_date,    
      approval_4_dateLabel:                   Omni.i18n.model.Projection.approval_4_date,    
      versionLabel:                           Omni.i18n.model.Projection.version,    
      audit_updated_atLabel:                  Omni.i18n.model.Projection.audit_updated_at,    
      audit_created_atLabel:                  Omni.i18n.model.Projection.audit_created_at,    
      audit_created_byLabel:                  Omni.i18n.model.Projection.audit_created_by,    
      audit_updated_byLabel:                  Omni.i18n.model.Projection.audit_updated_by,    
      is_destroyedLabel:                      Omni.i18n.model.Projection.is_destroyed    
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

            { xtype: 'textfield', name: 'projection_id',                  fieldLabel: this.projection_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'forecast_profile_id',            fieldLabel: this.forecast_profile_idLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'department_id',                  fieldLabel: this.department_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_closer_user_id',      fieldLabel: this.projection_closer_user_idLabel   , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_approver_user_id',    fieldLabel: this.projection_approver_user_idLabel , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_type',                fieldLabel: this.projection_typeLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'plan_year',                      fieldLabel: this.plan_yearLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'approval_3_date',                fieldLabel: this.approval_3_dateLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'approval_4_date',                fieldLabel: this.approval_4_dateLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'version',                        fieldLabel: this.versionLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_updated_at',               fieldLabel: this.audit_updated_atLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_created_at',               fieldLabel: this.audit_created_atLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_created_by',               fieldLabel: this.audit_created_byLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_updated_by',               fieldLabel: this.audit_updated_byLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Projections',
      newTitle: 'New Projection',
      newSubtitle: 'Complete the following to create a new Projection'
    });
    // TITLES (End)

    this.callParent();
    
  }

});