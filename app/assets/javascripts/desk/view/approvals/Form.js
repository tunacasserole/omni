Ext.define('Desk.view.approvals.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-approvals-Form',
  backOnNew: true,

  // LABELS (Start) =======================================================================
  approval_idLabel: Desk.i18n.model.Approval.approval_id,
  approver_idLabel: Desk.i18n.model.Approval.approver_id,
  approval_nbrLabel: Desk.i18n.model.Approval.approval_nbr,
  approval_typeLabel: Desk.i18n.model.Approval.approval_type,
  displayLabel: Desk.i18n.model.Approval.display,
  descriptionLabel: Desk.i18n.model.Approval.description,
  approval_dateLabel: Desk.i18n.model.Approval.approval_date,
  audit_created_byLabel: Desk.i18n.model.Approval.audit_created_by,
  audit_updated_byLabel: Desk.i18n.model.Approval.audit_updated_by,
  audit_created_atLabel: Desk.i18n.model.Approval.audit_created_at,
  audit_updated_atLabel: Desk.i18n.model.Approval.audit_updated_at,
  // LABELS (End)

  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'approval_id',
      value: this.record.get('approval_id')
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
            name: 'approval_nbr',
            fieldLabel: me.approval_nbrLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'approver_id',
            fieldLabel: this.approver_idLabel,
            allowBlank: true,
            disabled: false,
            emptyText: 'auto-populated on save'
          }, {
            //   xtype: 'textfield',
            //   name: 'approval_type',
            //   fieldLabel: me.approval_typeLabel,
            //   allowBlank: true,
            //   xtype: 'buildit-Lookup',
            //   category: 'APPROVAL_TYPE'
            // }, {
            xtype: 'textfield',
            name: 'display',
            fieldLabel: me.displayLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: false
            // }, {
            //   xtype: 'textarea',
            //   name: 'description',
            //   fieldLabel: me.descriptionLabel,
            //   maxLength: 4000,
            //   minLength: 0,
            //   allowBlank: true
          }, {
            xtype: 'datefield',
            name: 'approval_date',
            fieldLabel: me.approval_dateLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
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
      subtitle: 'Edit Approval',
      newTitle: 'New Approval',
      newSubtitle: 'Complete the following to create a new Approval'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-hand-o-left',
        tooltip: 'Request',
        listeners: {
          beforerender: this.prepareRequestAction,
          click: this.onRequestAction,
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
        tooltip: 'Finalize',
        listeners: {
          beforerender: this.prepareFinalizeAction,
          click: this.onFinalizeAction,
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

  onFinalizeAction: function(action, eOpts) {
    this.processEventTransition('finalize', 'finalize was succesfull.', 'finalize encountered an error.');
  }, // onBuildAction

  onRequestAction: function(action, eOpts) {
    this.processEventTransition('request', 'request was succesfull', 'request encountered an error.');
  }, // onBuildAction

  onRejectAction: function(action, eOpts) {
    this.processEventTransition('reject', 'reject was succesfull', 'reject encountered an error.');
  }, // onBuildAction

  prepareRequestAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareRejectAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'request' ? action.show() : action.hide();
  },

  prepareFinalizeAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'request' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Desk.service.Approval.fireEvent({
        id: this.record.get('approval_id'),
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
