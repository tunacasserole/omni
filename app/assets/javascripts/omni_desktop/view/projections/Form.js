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
      region_idLabel:                         Omni.i18n.model.Projection.region_id,
      district_idLabel:                       Omni.i18n.model.Projection.district_id,
      location_idLabel:                       Omni.i18n.model.Projection.location_id,
      department_idLabel:                     Omni.i18n.model.Projection.department_id,
      classification_idLabel:                 Omni.i18n.model.Projection.classification_id,
      subclass_idLabel:                       Omni.i18n.model.Projection.subclass_id,
      style_idLabel:                          Omni.i18n.model.Projection.style_id,
      sku_idLabel:                            Omni.i18n.model.Projection.sku_id,
      color_idLabel:                          Omni.i18n.model.Projection.color_id,
      stateLabel:                             Omni.i18n.model.Projection.state,
      displayLabel:                           Omni.i18n.model.Projection.display,
      descriptionLabel:                       Omni.i18n.model.Projection.description,
      plan_yearLabel:                         Omni.i18n.model.Projection.plan_year,
      projection_typeLabel:                   Omni.i18n.model.Projection.projection_type,
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
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel,      disabled: true  ,allowBlank: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            // { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },
            { name: 'forecast_profile_id', fieldLabel: this.forecast_profile_idLabel, allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ForecastProfile',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'forecast_profile_id', itemTpl:'{display}' },
            // { xtype: 'textfield', name: 'plan_year',                      fieldLabel: this.plan_yearLabel                   , allowBlank: true },
            // { xtype: 'textfield', name: 'projection_type',                fieldLabel: this.projection_typeLabel             , allowBlank: true },
            // { xtype: 'textfield', name: 'version',                        fieldLabel: this.versionLabel                     , allowBlank: true },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
          ]
        }
        ,{
          xtype:        'fieldset',
          title:        'Product Info',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { name: 'department_id',  fieldLabel: this.department_idLabel,             allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Department',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'department_id', itemTpl:'{display}' },
            { name: 'classification_id', fieldLabel: this.classification_idLabel,      allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Classification',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'classification_id', itemTpl:'{display}' },
            { name: 'subclass_id', fieldLabel: this.subclass_idLabel,                  allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Subclass',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'subclass_id', itemTpl:'{display}' },
            { name: 'style_id', fieldLabel: this.style_idLabel,                        allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Style',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_id', itemTpl:'{display}' },
            { name: 'sku_id', fieldLabel: this.sku_idLabel,                             allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'color_id', fieldLabel: this.color_idLabel,                         allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Color',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'color_id', itemTpl:'{display}' },
          ]
        }
        ,{
          xtype:        'fieldset',
          title:        'Location Info',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { name: 'region_id', fieldLabel: this.region_idLabel,                       allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Region',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'region_id', itemTpl:'{display}' },
            { name: 'district_id', fieldLabel: this.district_idLabel,                   allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.District',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'district_id', itemTpl:'{display}' },
            { name: 'location_id', fieldLabel: this.location_idLabel,                   allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
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


    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          cls        : 'submit',
          tooltip    : 'Build Projection',
          listeners  : {
            beforerender  : this.prepareBuildAction,
            click         : this.onBuildAction,
            scope         : me
          }
        }
        // {
        //   xtype      : 'button',
        //   cls        : 'submit',
        //   tooltip    : 'Forecast Projection',
        //   listeners  : {
        //     beforerender  : this.prepareForecastAction,
        //     click         : this.onForecastAction,
        //     scope         : me
        //   }
        // }
      ]
    });

    // ACTIONS (End)



    // LISTENERS (Start) ===================================================================

    // LISTENERS (End)


    this.callParent();

  },  // initComponent


  // HANDLERS (Start) ======================================================================


  /**
   *
   */
  onBuildAction : function(action, eOpts){
    this.processEventTransition('build', 'Projection was successfully built.', 'An error occurred building this projection.');
  }, // onBuildAction

  onForecastAction : function(action, eOpts){
    this.processEventTransition('forecast', 'Projection was successfully forecasted.', 'An error occurred forecasting this projection.');
  }, // onBuildAction

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.Projection.fireEvent({
        id      : this.record.get('projection_id'),
        name    : eventName
      },
      function(result, e){
        me.getForm().clearInvalid();
        if(result && result.success == true){
          Buildit.infoMsg(successMsg);
          me.record.set(result);
          me.loadRecord(me.record);
          me.fireEvent('recordchanged', me, me.banner);
          me.doLayout();
        } else {
          var response = Ext.JSON.decode(e.xhr.responseText).result;

          if(response.errors)
            me.getForm().markInvalid(response.errors);

          var error_message = failureMsg;
          if(response.message)
            error_message = response.message;

          if(response.errors)
            error_message = error_message + '. Please fix the highlighted fields and try again.'

          Buildit.errorMsg(error_message);
        }
      }
    );

  }, // processEventTransition


  /**
   *
   */
  prepareBuildAction : function(action, eOpts) {
    var currentState = this.record.get('state');

    // if(currentState != 'new')
    //   action.hide();

  }, // prepareSubmitAction

  /**
   *
   */
  prepareForecastAction : function(action, eOpts) {
    var currentState = this.record.get('state');

    // if(currentState != 'new')
    //   action.hide();

  }, // prepareSubmitAction

  // HANDLERS (End)

});