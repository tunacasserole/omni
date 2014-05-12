Ext.define('Desk.view.projects.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-projects-Form',

  // LABELS (Start) =======================================================================
  project_idLabel: Desk.i18n.model.Project.project_id,
  project_nbrLabel: Desk.i18n.model.Project.project_nbr,
  project_typeLabel: Desk.i18n.model.Project.project_type,
  stateLabel: Desk.i18n.model.Project.state,
  displayLabel: Desk.i18n.model.Project.display,
  owner_idLabel: Desk.i18n.model.Project.owner_id,
  descriptionLabel: Desk.i18n.model.Project.description,
  target_dateLabel: Desk.i18n.model.Project.target_date,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'project_id',
      value: this.record.get('project_id')
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
              name: 'state',
              fieldLabel: me.stateLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'project_nbr',
              fieldLabel: me.project_nbrLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: false,
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
              store: Ext.create('Buildit.store.User', {
                pageSize: 20
              }),
              displayField: 'full_name',
              queryField: 'full_name',
              valueField: 'user_id',
              itemTpl: '{full_name}',
              name: 'owner_id',
              fieldLabel: this.owner_idLabel,
              allowBlank: true
            }, {
              xtype: 'textarea',
              name: 'description',
              fieldLabel: me.descriptionLabel,
              maxLength: 2000,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'datefield',
              name: 'target_date',
              fieldLabel: me.target_dateLabel,
              allowBlank: true
            }
            // {
            //   xtype        : 'textfield',
            //   name         : 'estimated_days',
            //   fieldLabel   : me.estimated_daysLabel,
            //   minValue     : 0,
            //   maxValue     : 100,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'textfield',
            //   name         : 'actual_days',
            //   fieldLabel   : me.actual_daysLabel,
            //   minValue     : 0,
            //   maxValue     : 100,
            //   allowBlank   : true
            // }
          ]
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
      subtitle: 'Edit Projects',
      newTitle: 'New Project',
      newSubtitle: 'Complete the following to create a new Project'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
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
          iconCls: 'fa fa-times-circle-o',
          tooltip: 'Close',
          listeners: {
            beforerender: this.prepareCloseAction,
            click: this.onCloseAction,
            scope: me
          }
        }

      ]
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

  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close', 'close was succesfull', 'close encountered an error.');
  }, // onBuildAction

  prepareActivateAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareCloseAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'active' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Desk.service.Project.fireEvent({
        id: this.record.get('project_id'),
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
