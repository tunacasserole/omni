Ext.define('Omni.view.imports.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-imports-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'import_id',
      value:      this.record.get('import_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      import_idLabel:                         Omni.i18n.model.Import.import_id,    
      department_idLabel:                     Omni.i18n.model.Import.department_id,          
      stateLabel:                             Omni.i18n.model.Import.state,    
      displayLabel:                           Omni.i18n.model.Import.display,    
      data_sourceLabel:                       Omni.i18n.model.Import.data_source,    
      job_typeLabel:                          Omni.i18n.model.Import.job_type,    
      table_nameLabel:                        Omni.i18n.model.Import.table_name,    
      model_nameLabel:                        Omni.i18n.model.Import.model_name,    
      file_nameLabel:                         Omni.i18n.model.Import.file_name,    
      file_pathLabel:                         Omni.i18n.model.Import.file_path,    
      start_dateLabel:                        Omni.i18n.model.Import.start_date,    
      end_dateLabel:                          Omni.i18n.model.Import.end_date,    
      run_modeLabel:                          Omni.i18n.model.Import.run_mode,    
      argument_hashLabel:                     Omni.i18n.model.Import.argument_hash,    
      is_drop_dataLabel:                      Omni.i18n.model.Import.is_drop_data,    
      is_destroyedLabel:                      Omni.i18n.model.Import.is_destroyed    
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
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , disabled: true, allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },                
         // { xtype: 'buildit-Lookup',name: 'target_system',              fieldLabel: this.target_systemLabel,              , allowBlank: true,   disabled: false, category:   'TARGET_SYSTEM' },            
            // { xtype: 'textfield', name: 'target_table',                   fieldLabel: this.target_tableLabel                , allowBlank: true },    
            // { xtype: 'textfield', name: 'import_id',                      fieldLabel: this.import_idLabel                   , allowBlank: true },   
            // { xtype: 'textfield', name: 'target',                         fieldLabel: this.targetLabel                      , allowBlank: true },                
            { xtype: 'buildit-Lookup', name: 'data_source',               fieldLabel: this.data_sourceLabel                      , allowBlank: true, category:   'DATA_SOURCE' },            
            { xtype: 'buildit-Lookup', name: 'job_type',                   fieldLabel: this.job_typeLabel                    , allowBlank: true, category:   'JOB_TYPE' },            
            { xtype: 'textfield', name: 'table_name',                     fieldLabel: this.table_nameLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'model_name',                     fieldLabel: this.model_nameLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'file_name',                      fieldLabel: this.file_nameLabel                   , allowBlank: true },    
            { xtype: 'textfield', name: 'file_path',                      fieldLabel: this.file_pathLabel                   , allowBlank: true },    
            { xtype: 'datefield', name: 'start_date',                     fieldLabel: this.start_dateLabel                  , allowBlank: true },    
            { xtype: 'datefield', name: 'end_date',                       fieldLabel: this.end_dateLabel                    , allowBlank: true },    
            { name: 'department_id',    fieldLabel: this.department_idLabel,  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Department',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'department_id', itemTpl:'{display}' },            
            // { xtype: 'textfield', name: 'run_mode',                       fieldLabel: this.run_modeLabel                    , allowBlank: true },    
            // { xtype: 'textfield', name: 'argument_hash',                  fieldLabel: this.argument_hashLabel               , allowBlank: true },    
            { xtype: 'checkbox', name: 'is_drop_data',                   fieldLabel: this.is_drop_dataLabel                , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


        // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Imports',
      newTitle: 'New Import',
      newSubtitle: 'Complete the following to create a new Import'
    });
    // TITLES (End)

    
    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          cls        : 'submit',
          tooltip    : 'Submit Import',
          listeners  : {
            beforerender  : this.prepareSubmitAction,
            click         : this.onSubmitAction,
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
  onSubmitAction : function(action, eOpts){
    Buildit.infoMsg('Your request has been submitted.')
    this.processEventTransition('submit', 'Import job was successfully submitted.', 'An error occurred submitting this import job.');
  }, // onSubmitAction

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.Import.fireEvent({
        id      : this.record.get('import_id'),
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
  prepareSubmitAction : function(action, eOpts) {
    var currentState = this.record.get('state');

    // if(currentState != 'new')
    //   action.hide();

  }, // prepareSubmitAction

  // HANDLERS (End)

});