Ext.define('Omni.view.projections.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-projections-Form',


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'projection_id',
      value: this.record.get('projection_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      forecast_profile_idLabel: Omni.i18n.model.Projection.forecast_profile_id,
      projection_approver_idLabel: Omni.i18n.model.Projection.projection_approver_id,
      projection_closer_idLabel: Omni.i18n.model.Projection.projection_closer_id,
      department_idLabel: Omni.i18n.model.Projection.department_id,
      stateLabel: Omni.i18n.model.Projection.state,
      displayLabel: Omni.i18n.model.Projection.display,
      descriptionLabel: Omni.i18n.model.Projection.description,
      approval_3_dateLabel: Omni.i18n.model.Projection.approval_3_date,
      approval_4_dateLabel: Omni.i18n.model.Projection.approval_4_date,
      plan_yearLabel: Omni.i18n.model.Projection.plan_year,
    });
    // LABELS (End)


    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General Information',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [
          // { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
          {
            xtype: 'textfield',
            name: 'state',
            fieldLabel: this.stateLabel,
            disabled: true,
            allowBlank: true
          }, {
            name: 'department_id',
            fieldLabel: this.department_idLabel,
            allowBlank: true,
            disabled: (this.record.phantom != true && this.record.get('state') != 'draft'),
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Department', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'department_id',
            itemTpl: '{display}'
          }, {
            xtype: 'buildit-Lookup',
            name: 'plan_year',
            fieldLabel: this.plan_yearLabel,
            allowBlank: true,
            disabled: (this.record.phantom != true && this.record.get('state') != 'draft'),
            category: 'PLAN_YEAR'
          }, {
            name: 'forecast_profile_id',
            fieldLabel: this.forecast_profile_idLabel,
            allowBlank: true,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.ForecastProfile', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'forecast_profile_id',
            itemTpl: '{display}'
          }, {
            xtype: 'textfield',
            name: 'description',
            fieldLabel: this.descriptionLabel,
            allowBlank: true
          }, {
            name: 'projection_approver_user_display',
            fieldLabel: this.projection_approver_idLabel,
            allowBlank: true,
            disabled: true,
            xtype:  'textfield'
            // xtype: 'buildit-Locator',
            // store: Ext.create('Buildit.store.User', {
            //   pageSize: 10
            // }),
            // displayField: 'full_name',
            // queryField: 'full_name',
            // valueField: 'user_id',
            // itemTpl: '{full_name}'
          }, {
            name: 'projection_closer_user_display',
            fieldLabel: this.projection_closer_idLabel,
            allowBlank: true,
            disabled: true,
            xtype:  'textfield'
            // xtype: 'buildit-Locator',
            // store: Ext.create('Buildit.store.User', {
            //   pageSize: 10
            // }),
            // displayField: 'full_name',
            // queryField: 'full_name',
            // valueField: 'user_id',
            // itemTpl: '{full_name}'
          },
          {
            xtype: 'datefield',
            name: 'approval_3_date',
            fieldLabel: this.approval_3_dateLabel,
            allowBlank: true,
            disabled: true
          }, {
            xtype: 'datefield',
            name: 'approval_4_date',
            fieldLabel: this.approval_4_dateLabel,
            allowBlank: true,
            disabled: true
          },

        ]
      }]
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
      actions: [{
        xtype: 'button',
        iconCls: 'icon-rocket',
        tooltip: 'Forecast',
        listeners: {
          beforerender: this.prepareForecastAction,
          click: this.onForecastAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'submit',
        tooltip: 'Release',
        listeners: {
          beforerender: this.prepareReleaseAction,
          click: this.onReleaseAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'close',
        tooltip: 'Close',
        listeners: {
          beforerender: this.prepareCloseAction,
          click: this.onCloseAction,
          scope: me
        }
      }, {
        xtype: 'button',
        cls: 'approve',
        tooltip: 'Approve',
        listeners: {
          beforerender: this.prepareApproveAction,
          click: this.onApproveAction,
          scope: me
        }
      }]
    });

    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================
    // LISTENERS (End)

    this.callParent();

  }, // initComponent

  // HANDLERS (Start) ======================================================================

  /**
   *
   */
  onForecastAction: function(action, eOpts) {
    this.processEventTransition('forecast', 'Projection was successfully forecasted.', 'An error occurred processing this projection.');
  }, // onAction

  /**
   *
   */
  onReleaseAction: function(action, eOpts) {
    this.processEventTransition('release', 'Projection was successfully released.', 'An error occurred processing this projection.');
  }, // onAction

  /**
   *
   */
  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close', 'Projection was successfully closed.', 'An error occurred processing this projection.');
  }, // onAction

  /**
   *
   */
  onApproveAction: function(action, eOpts) {
    this.processEventTransition('approve', 'Projection was successfully approved.', 'An error occurred processing this projection.');
  }, // onAction

  /**
   *
   */
  prepareForecastAction: function(action, eOpts) {
    var currentState = this.record.get('state');

    this.record.phantom != true && currentState != 'complete' ? action.show() : action.hide();

  }, // prepareAction

  /**
   *
   */
  prepareReleaseAction: function(action, eOpts) {
    var currentState = this.record.get('state');

    (this.record.phantom != true && currentState == 'forecast') ? action.show() : action.hide();

  }, // prepareAction

  /**
   *
   */
  prepareCloseAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    // JASON need regular expression here
    (this.record.phantom != true) && (currentState == 'projection_1' || currentState == 'projection_2' || (currentState == 'projection_3' && this.record.get('approval_3_date') != null) || (currentState == 'projection_4' && this.record.get('approval_4_date') != null)) ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  prepareApproveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    // console.log(this.record);
    (this.record.phantom != true) && ((currentState == 'projection_3' && this.record.get('approval_3_date') == null) || (currentState == 'projection_4' && this.record.get('approval_4_date') == null)) ? action.show() : action.hide();
  }, // prepareAction

  /**
   *
   */
  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Projection.fireEvent({
        id: this.record.get('projection_id'),
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

  }, // processEventTransition
  // HANDLERS (End)
});
