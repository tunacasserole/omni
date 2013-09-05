Ext.define('Omni.view.bts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-bts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'bts_id',
      value:      this.record.get('bts_id')
    };
    // FILTER (End)

    
// LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      bts_idLabel:                            Omni.i18n.model.Bts.bts_id,    
      region_idLabel:                         Omni.i18n.model.Bts.region_id,    
      district_idLabel:                       Omni.i18n.model.Bts.district_id,          
      location_idLabel:                       Omni.i18n.model.Bts.location_id,    
      department_idLabel:                     Omni.i18n.model.Bts.department_id,    
      classification_idLabel:                 Omni.i18n.model.Bts.classification_id,    
      subclass_idLabel:                       Omni.i18n.model.Bts.subclass_id,    
      style_idLabel:                          Omni.i18n.model.Bts.style_id,    
      sku_idLabel:                            Omni.i18n.model.Bts.sku_id,    
      color_idLabel:                          Omni.i18n.model.Bts.color_id,    
      stateLabel:                             Omni.i18n.model.Bts.state,    
      displayLabel:                           Omni.i18n.model.Bts.display,    
      descriptionLabel:                       Omni.i18n.model.Bts.description,    
      plan_yearLabel:                         Omni.i18n.model.Bts.plan_year,    
      is_source_parkerLabel:                  Omni.i18n.model.Bts.is_source_parker,    
      is_source_buckheadLabel:                Omni.i18n.model.Bts.is_source_buckhead,    
      is_source_gritsLabel:                   Omni.i18n.model.Bts.is_source_grits,        
      is_on_handLabel:                        Omni.i18n.model.Bts.is_on_hand,          
      is_wipLabel:                            Omni.i18n.model.Bts.is_wip,                      
      is_allocatedLabel:                      Omni.i18n.model.Bts.is_allocated,                      
      is_in_transitLabel:                     Omni.i18n.model.Bts.is_in_transit,
      is_ytdLabel:                            Omni.i18n.model.Bts.is_ytd,   
      is_py1Label:                            Omni.i18n.model.Bts.is_py1,      
      is_py2Label:                            Omni.i18n.model.Bts.is_py2,       
      is_projectedLabel:                      Omni.i18n.model.Bts.is_projected,    
      is_drop_dataLabel:                      Omni.i18n.model.Bts.is_drop_data,    
      is_create_detailLabel:                  Omni.i18n.model.Bts.is_create_detail,
      is_sum_styleLabel:                      Omni.i18n.model.Bts.is_sum_style,                                                 
      is_sum_subclassLabel:                   Omni.i18n.model.Bts.is_sum_subclass,  
      is_sum_classLabel:                      Omni.i18n.model.Bts.is_sum_class,  
      is_sum_departmentLabel:                 Omni.i18n.model.Bts.is_sum_department,                   
      versionLabel:                           Omni.i18n.model.Bts.version,    
      audit_updated_atLabel:                  Omni.i18n.model.Bts.audit_updated_at,    
      audit_created_atLabel:                  Omni.i18n.model.Bts.audit_created_at,    
      audit_created_byLabel:                  Omni.i18n.model.Bts.audit_created_by,    
      audit_updated_byLabel:                  Omni.i18n.model.Bts.audit_updated_by,    
      is_destroyedLabel:                      Omni.i18n.model.Bts.is_destroyed    
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
            { xtype: 'textarea', rows: 3, name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },    
            // { xtype: 'textfield', name: 'plan_year',                      fieldLabel: this.plan_yearLabel                   , allowBlank: true },    
            // { xtype: 'textfield', name: 'bts_type',                fieldLabel: this.bts_typeLabel             , allowBlank: true },    
            // { xtype: 'textfield', name: 'version',                        fieldLabel: this.versionLabel                     , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
        ,{
          xtype:        'fieldset',
          title:        'Products to include',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            {
              xtype: 'label',
              text: 'Enter one value below.  If you provide multiples, the system will run only at the lowest level provided.',
              cls: 'instruction'
            }                   
            // { name: 'department_id',  fieldLabel: this.department_idLabel,             allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Department',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'department_id', itemTpl:'{display}' },
            // { name: 'classification_id', fieldLabel: this.classification_idLabel,      allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Classification',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'classification_id', itemTpl:'{display}' },            
            ,{
              xtype           : 'buildit-Locator',
              store           : Ext.create('Omni.store.Subclass',{pageSize: 12}),
              displayField    : 'display',
              queryField      : 'display',
              valueField      : 'subclass_id',
              itemTpl         : '<b>{display}</b> <span style="float:right">Class:   {classification_display}</span>',              
              name            : 'subclass_id',
              initialValue    : this.record.get('subclass_display'),
              fieldLabel      : this.subclass_idLabel,
              allowBlank      : true
              // listeners        : {
                // clear          : me.clearSubclass,
                // select         : me.selectSubclass,                
                // scope            : me
              // }
            }   
            ,{
              xtype           : 'buildit-Locator',
              store           : Ext.create('Omni.store.Style',{pageSize: 12}),
              displayField    : 'display',
              queryField      : 'display',
              valueField      : 'style_id',
              // dependsOn       : 'subclass_id',              
              itemTpl         : '<b>{display}</b> <span style="float:right">Subclass:   {subclass_display}</span>',              
              name            : 'style_id',
              initialValue    : this.record.get('style_display'),
              fieldLabel      : this.style_idLabel,
              allowBlank      : true
              // listeners        : {
                // render           : me.preRenderStyle,
                // scope            : me
              // }
            }                     
           ,{
              xtype           : 'buildit-Locator',
              store           : Ext.create('Omni.store.Sku',{pageSize: 12}),
              displayField    : 'display',
              queryField      : 'display',
              valueField      : 'sku_id',
              dependsOn       : 'style_id',              
              itemTpl         : '<b>{style_display} - {display}</b>',              
              name            : 'sku_id',
              initialValue    : this.record.get('sku_id'),
              fieldLabel      : this.style_idLabel,
              allowBlank      : true
              // listeners        : {
                // render           : me.preRenderStyle,
                // scope            : me
              // }
            }
        ]
        }                     
           ,{
          xtype:        'fieldset',
          title:        'Columns to calculate',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { xtype: 'checkbox', name: 'is_on_hand',               fieldLabel: this.is_on_handLabel            , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_wip',                   fieldLabel: this.is_wipLabel          , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_allocated',             fieldLabel: this.is_allocatedLabel        , allowBlank: true },
            { xtype: 'checkbox', name: 'is_in_transit',            fieldLabel: this.is_in_transitLabel        , allowBlank: true },            
            { xtype: 'checkbox', name: 'is_ytd',                   fieldLabel: this.is_ytdLabel            , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_py1',                   fieldLabel: this.is_py1Label          , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_py2',                   fieldLabel: this.is_py2Label        , allowBlank: true },
            { xtype: 'checkbox', name: 'is_projected',             fieldLabel: this.is_projectedLabel        , allowBlank: true }                        
          ]
        } 
        ,{
          xtype:        'fieldset',
          title:        'Data Sources to include',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { xtype: 'checkbox', name: 'is_source_parker',               fieldLabel: this.is_source_parkerLabel            , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_source_buckhead',             fieldLabel: this.is_source_buckheadLabel          , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_source_grits',               fieldLabel: this.is_source_gritsLabel        , allowBlank: true }
          ]
        }                
        ,{
          xtype:        'fieldset',
          title:        'General Report Options',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '70%'},
          layout:       'anchor',
          items:[
            { xtype: 'checkbox', name: 'is_drop_data',               fieldLabel: this.is_drop_dataLabel            , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_create_detail',               fieldLabel: this.is_create_detailLabel            , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_sum_style',                   fieldLabel: this.is_sum_styleLabel                , allowBlank: false },    
            // { xtype: 'checkbox', name: 'is_sum_subclass',                fieldLabel: this.is_sum_subclassLabel             , allowBlank: false },    
            // { xtype: 'checkbox', name: 'is_sum_class',                   fieldLabel: this.is_sum_classLabel                , allowBlank: false },    
            // { xtype: 'checkbox', name: 'is_sum_department',              fieldLabel: this.is_sum_departmentLabel           , allowBlank: false },                
          ]
        }                
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Bts',
      newTitle: 'New BTS',
      newSubtitle: 'Enter the parameters to run a new BTS'
    });
    // TITLES (End)


    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          cls        : 'submit',
          tooltip    : 'Run BTS',
          listeners  : {
            beforerender  : this.prepareRunAction,
            click         : this.onRunAction,
            scope         : me
          }
        }
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
  onRunAction : function(action, eOpts){
    // Buildit.infoMsg('Your request has been submitted.')
    this.processEventTransition('run', 'Bts was successfully submitted.  An email confirmation will be sent to you when it is complete.', 'An error occurred running this bts.');
  }, // onBuildAction

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.Bts.fireEvent({
        id      : this.record.get('bts_id'),
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
  prepareRunAction : function(action, eOpts) {
    var currentState = this.record.get('state');

    // if(currentState != 'new')
    //   action.hide();

  }, // prepareSubmitAction

  /**
   *
   */
  //  preRenderStyle : function(field, eOpts) {
  //   if(this.record.get('subclass_id'))
  //     field.setDisabled(false);
  //   else
  //     field.setDisabled(true);
  // },

  // clearSubclass :function( field ) {
  //   var form = field.up('form');

  //   // clear value(s)
  //   form.getForm().findField('style_id').setValue(null);
  //   form.getForm().findField('style_id').setDisabled(true);    

  // },

  // selectSubclass :function( field, records, eOpts ) {
  //   var form = field.up('form');
  //   form.getForm().findField('style_id').setDisabled(false);
  // }
  // HANDLERS (End)

});