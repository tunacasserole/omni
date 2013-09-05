Ext.define('Omni.view.tasks.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tasks-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'task_id',
      value:      this.record.get('task_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      task_idLabel:                          Omni.i18n.model.Task.task_id,    
      project_idLabel:                        Omni.i18n.model.Task.project_id,    
      task_nbrLabel:                         Omni.i18n.model.Task.task_nbr,    
      task_typeLabel:                        Omni.i18n.model.Task.task_type,    
      stateLabel:                             Omni.i18n.model.Task.state,    
      displayLabel:                           Omni.i18n.model.Task.display,    
      descriptionLabel:                       Omni.i18n.model.Task.description,    
      importanceLabel:                        Omni.i18n.model.Task.importance,    
      pointsLabel:                            Omni.i18n.model.Task.points,    
      assignee_idLabel:                       Omni.i18n.model.Task.assignee_id,    
      creator_idLabel:                        Omni.i18n.model.Task.creator_id,    
      target_releaseLabel:                    Omni.i18n.model.Task.target_release,    
      actual_releaseLabel:                    Omni.i18n.model.Task.actual_release,    
      is_destroyedLabel:                      Omni.i18n.model.Task.is_destroyed    
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

            // { xtype: 'textfield', name: 'task_id',                       fieldLabel: this.task_idLabel                    , allowBlank: true },    
            { xtype: 'textfield', name: 'task_nbr',  disabled: true,     fieldLabel: this.task_nbrLabel                   , allowBlank: true },                
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel, disabled: true , allowBlank: true },    
            { name: 'project_id', fieldLabel: this.project_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Project',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'project_id', itemTpl:'{display}',initialValue: this.record.get('project_display'), },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },                
            { xtype: 'buildit-Lookup', name: 'task_type', category: 'TASK_TYPE', fieldLabel: this.task_typeLabel                  , allowBlank: true },    
            { xtype: 'textarea', rows: 3, name: 'description',                    fieldLabel: this.descriptionLabel    , allowBlank: true },    
            { xtype: 'buildit-Lookup', category: 'IMPORTANCE', name: 'importance', fieldLabel: this.importanceLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'points',                         fieldLabel: this.pointsLabel                      , allowBlank: true },    
            { name: 'assignee_id', fieldLabel: this.assignee_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('assignee_display'), },
            { name: 'creator_id', fieldLabel: this.creator_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('creator_display'), },            
            { xtype: 'datefield', name: 'target_release',                 fieldLabel: this.target_releaseLabel              , allowBlank: true },    
            { xtype: 'datefield', name: 'actual_release',                 fieldLabel: this.actual_releaseLabel              , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          iconCls    : 'icon-thumbs-up',
          scope      : me,
          tooltip    : 'Complete Task',
          listeners  : {
            beforerender : this.prepareCompleteAction,
            click        : this.onCompleteAction,
            scope        : me
          }
        },
        {
          xtype      : 'button',
          iconCls    : 'icon-thumbs-down',
          scope      : me,
          tooltip    : 'Cancel Task',
          listeners  : {
            beforerender : this.prepareCancelAction,
            click        : this.onCancelAction,
            scope        : me
          }
        }
      ]
    });

    // ACTIONS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Tasks',
      newTitle: 'New Task',
      newSubtitle: 'Complete the following to create a new Task'
    });
    // TITLES (End)

    this.callParent();
    
  },

    // HANDLERS (Start) ======================================================================
  /**
   *
   */
  onCancelAction : function(action, eOpts){
    this.processEventTransition('cancel', 'Task was successfully canceled.', 'An error occurred canceling this Task');
  }, // onRejectAction

  /**
   *
   */
  onCompleteAction : function(action, eOpts){
    this.processEventTransition('close', 'Task was successfully completed.', 'An error occurred completing this Task');
  }, // onShipAction


  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Sbna.service.Cfar.fireEvent({
        id      : this.record.get('task_id'),
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
  prepareCancelAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    if(this.record.phantom == true || currentState == 'closed')
      action.hide();
  }, // prepareCancelAction

  /**
   *
   */
  prepareCompleteAction : function(action, eOpts) {
    var currentState = this.record.get('state');

    currentState == 'active' ? action.show() : action.hide();
  } //   prepareCompleteAction


  // HANDLERS (End)

});
