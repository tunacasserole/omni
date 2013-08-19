Ext.define('Omni.view.issues.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-issues-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'issue_id',
      value:      this.record.get('issue_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      issue_idLabel:                          Omni.i18n.model.Issue.issue_id,    
      issue_nbrLabel:                         Omni.i18n.model.Issue.issue_nbr,    
      stateLabel:                             Omni.i18n.model.Issue.state,    
      displayLabel:                           Omni.i18n.model.Issue.display,    
      descriptionLabel:                       Omni.i18n.model.Issue.description,    
      severityLabel:                          Omni.i18n.model.Issue.severity,    
      assignee_idLabel:                       Omni.i18n.model.Issue.assignee_id,    
      creator_idLabel:                        Omni.i18n.model.Issue.creator_id,    
      issue_typeLabel:                        Omni.i18n.model.Issue.issue_type,    
      is_destroyedLabel:                      Omni.i18n.model.Issue.is_destroyed    
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
            // { xtype: 'textfield', name: 'issue_id',                       fieldLabel: this.issue_idLabel                    , allowBlank: true },    
            { xtype: 'textfield', name: 'issue_nbr',                      fieldLabel: this.issue_nbrLabel                   , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true },    
            { xtype: 'textarea', rows: 5,  name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },    
             { xtype: 'buildit-Lookup', category:   'SEVERITY',   name: 'severity', fieldLabel: this.severityLabel                    , allowBlank: true },    
            { xtype: 'textfield', name: 'assignee_id',                    fieldLabel: this.assignee_idLabel                 , allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('assignee_display'), },
            { xtype: 'textfield', name: 'creator_id',                    fieldLabel: this.creator_idLabel                   , allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('creator_display'), },            
            { xtype: 'buildit-Lookup', category:   'issue_type', name: 'issue_type', fieldLabel: this.issue_typeLabel                  , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
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
          cls        : 'approve',
          scope      : me,
          tooltip    : 'Close Issue',
          listeners  : {
            // beforerender  : this.prepareCloseAction,
            click         : this.onCloseAction,
            scope         : me
          }
        }
        ,{
          xtype      : 'button',
          cls        : 'reject',
          scope      : me,
          tooltip    : 'Backlog issue',
          listeners  : {
            // beforerender  : this.prepareBacklogAction,
            click         : this.onBacklogAction,
            scope         : me
          }
        }
              
      ]
    });
    // ACTIONS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Issues',
      newTitle: 'New Issue',
      newSubtitle: 'Complete the following to create a new Issue'
    });
    // TITLES (End)

    this.callParent();
   
  },

  // HANDLERS (Start) ======================================================================

  /**
   *
   */
  onCloseAction : function(action, eOpts){
    this.processEventTransition('close', 'Issue was successfully closed.', 'An error occurred closing this Issue');
  }, // 

  /**
   *
   */
  onBacklogAction : function(action, eOpts){
    this.processEventTransition('backlog', 'Issue was successfully moved to the backlog.', 'An error occurred moving this issue to the backlog');
  }, 


  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.Issue.fireEvent({
        id      : this.record.get('issue_id'),
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

  //  /**
  //  *
  //  */
  // prepareCloseAction : function(action, eOpts) {

  //   var currentState = this.record.get('state');
  //   currentState == 'draft' ? action.show() : action.hide();
  // }, // prepareApproveAction

  //  *
  //  *
   
  // prepareBacklogAction : function(action, eOpts) {

  //   var currentState = this.record.get('state');
  //   currentState == 'planning' ? action.show() : action.hide();
  // }, // prepareReleaseAction




});

