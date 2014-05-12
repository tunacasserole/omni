Ext.define('Desk.view.cases.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-cases-Form',

  // LABELS (Start) =======================================================================
  case_idLabel: Desk.i18n.model.Case.case_id,
  requestor_idLabel: Desk.i18n.model.Case.requestor_id,
  owner_idLabel: Desk.i18n.model.Case.owner_id,
  project_idLabel: Desk.i18n.model.Case.project_id,
  case_nbrLabel: Desk.i18n.model.Case.case_nbr,
  case_typeLabel: Desk.i18n.model.Case.case_type,
  case_sizeLabel: Desk.i18n.model.Case.case_size,
  case_urgencyLabel: Desk.i18n.model.Case.case_urgency,
  detailsLabel: Desk.i18n.model.Case.details,
  stateLabel: Desk.i18n.model.Case.state,
  displayLabel: Desk.i18n.model.Case.display,
  descriptionLabel: Desk.i18n.model.Case.description,
  is_approvedLabel: Desk.i18n.model.Case.is_approved,
  audit_created_byLabel: Desk.i18n.model.Case.audit_created_by,
  audit_created_by_nameLabel: Desk.i18n.model.Case.audit_created_by_name,
  audit_updated_byLabel: Desk.i18n.model.Case.audit_updated_by,
  audit_updated_by_nameLabel: Desk.i18n.model.Case.audit_updated_by_name,
  audit_created_atLabel: Desk.i18n.model.Case.audit_created_at,
  audit_updated_atLabel: Desk.i18n.model.Case.audit_updated_at,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'case_id',
      value: this.record.get('case_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'textfield',
            name: 'case_nbr',
            fieldLabel: me.case_nbrLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'state',
            fieldLabel: me.stateLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'display',
            fieldLabel: me.displayLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Desk.store.Project', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'project_id',
            itemTpl: '{display}',
            name: 'project_id',
            fieldLabel: me.project_idLabel,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'requestor_id',
            fieldLabel: this.requestor_idLabel,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Desk.store.Team', {
              pageSize: 20
            }),
            displayField: 'user_display',
            queryField: 'user_display',
            valueField: 'user_id',
            itemTpl: '{user_display}',
            name: 'owner_id',
            fieldLabel: this.owner_idLabel,
            allowBlank: true,
            defaultSearch: {
              with: {
                teamable_type: {
                  equal_to: 'Desk::Project'
                },
                teamable_id: {
                  equal_to: me.record.get('project_id')
                }
              }
            }
            // xtype: 'buildit-Locator',
            // store: Ext.create('Buildit.store.User', {
            //   pageSize: 20
            // }),
            // displayField: 'full_name',
            // queryField: 'full_name',
            // valueField: 'user_id',
            // itemTpl: '{full_name}',
            // name: 'owner_id',
            // fieldLabel: this.owner_idLabel,
            // allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'case_type',
            fieldLabel: me.case_typeLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            category: 'CASE_TYPE'
          }, {
            xtype: 'textarea',
            name: 'details',
            fieldLabel: me.detailsLabel,
            maxLength: 4000,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textarea',
            name: 'description',
            fieldLabel: me.descriptionLabel,
            maxLength: 4000,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Lookup',
            name: 'case_urgency',
            fieldLabel: me.case_urgencyLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            category: 'CASE_URGENCY'
          }, {
            xtype: 'buildit-Lookup',
            name: 'case_size',
            fieldLabel: me.case_sizeLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            category: 'CASE_SIZE'
          }, {
            xtype: 'textfield',
            name: 'audit_created_by_name',
            fieldLabel: me.audit_created_by_nameLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'textfield',
            name: 'audit_updated_by_name',
            fieldLabel: me.audit_updated_by_nameLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Cases',
      newTitle: 'New Case',
      newSubtitle: 'Complete the following to create a new Case'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-thumb-tack',
        tooltip: 'Backlog',
        listeners: {
          beforerender: this.prepareBacklogAction,
          click: this.onBacklogAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-caret-square-o-right',
        tooltip: 'Activate',
        listeners: {
          beforerender: this.prepareActivateAction,
          click: this.onActivateAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-hand-o-right',
        tooltip: 'Review',
        listeners: {
          beforerender: this.prepareReviewAction,
          click: this.onReviewAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-thumbs-o-down',
        tooltip: 'Reject',
        listeners: {
          beforerender: this.prepareRejectAction,
          click: this.onRejectAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-thumbs-o-up',
        tooltip: 'Close',
        listeners: {
          beforerender: this.prepareCloseAction,
          click: this.onCloseAction,
          scope: me
        }
      }]
    });

    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================

    // LISTENERS (End)


    this.callParent();

  },

  // HANDLERS (Start) ======================================================================

  onActivateAction: function(action, eOpts) {
    this.processEventTransition('activate', 'activate was succesfull.', 'activate encountered an error.');
  }, // onBuildAction

  onBacklogAction: function(action, eOpts) {
    this.processEventTransition('backlog', 'backlog was succesfull.', 'backlog encountered an error.');
  }, // onBuildAction

  onReviewAction: function(action, eOpts) {
    this.processEventTransition('review', 'review was succesfull', 'review encountered an error.');
  }, // onBuildAction

  onRejectAction: function(action, eOpts) {
    this.processEventTransition('reject', 'reject was succesfull', 'reject encountered an error.');
  }, // onBuildAction

  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close', 'close was succesfull', 'close encountered an error.');
  }, // onBuildAction

  prepareActivateAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'backlog' ? action.show() : action.hide();
  },

  prepareReviewAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'active' ? action.show() : action.hide();
  },

  prepareBacklogAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'active' ? action.show() : action.hide();
  },

  prepareRejectAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'review' ? action.show() : action.hide();
  },

  prepareCloseAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'review' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Desk.service.Case.fireEvent({
        id: this.record.get('case_id'),
        name: eventName
      },
      function(result, e) {
        me.getForm().clearInvalid();
        if (result && result.success == true) {
          Buildit.infoMsg(successMsg);
          me.record.set(result);
          me.loadRecord(me.record);
          me.fireEvent('recordchanged', me, me.banner);
          me.doLayout();
        } else {
          var response = Ext.JSON.decode(e.xhr.responseText).result;

          if (response.errors)
            me.getForm().markInvalid(response.errors);

          var error_message = failureMsg;
          if (response.message)
            error_message = response.message;

          if (response.errors)
            error_message = error_message + '. Please fix the highlighted fields and try again.'

          Buildit.errorMsg(error_message);
        }
      }
    );

  },

  // HANDLERS (End)

});
