Ext.define('Omni.view.bts.Form', {

    extend: 'Buildit.ux.Form',
    alias: 'widget.omni-bts-Form',


    initComponent: function() {

      var me = this;

      // FILTER (Start) =======================================================================
      var associativeFilter = {
        property: 'bts_id',
        value: this.record.get('bts_id')
      };
      // FILTER (End)


      // LABELS (Start) =======================================================================
      Ext.applyIf(this, {
        department_idLabel: Omni.i18n.model.Bts.department_id,
        stateLabel: Omni.i18n.model.Bts.state,
        displayLabel: Omni.i18n.model.Bts.display,
        descriptionLabel: Omni.i18n.model.Bts.description,
        plan_yearLabel: Omni.i18n.model.Bts.plan_year,
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
              {
                xtype: 'textfield',
                name: 'state',
                fieldLabel: this.stateLabel,
                disabled: true,
                allowBlank: true
              }, {
                xtype: 'textfield',
                name: 'display',
                fieldLabel: this.displayLabel,
                allowBlank: true
              }, {
                xtype: 'textarea',
                rows: 3,
                name: 'description',
                fieldLabel: this.descriptionLabel,
                allowBlank: true
              }, , {
                xtype: 'buildit-Locator',
                store: Ext.create('Omni.store.Department', {
                  pageSize: 12
                }),
                displayField: 'display',
                queryField: 'display',
                valueField: 'department_id',
                itemTpl: '<b>{display}</b>',
                name: 'department_id',
                initialValue: this.record.get('department_display'),
                fieldLabel: this.department_idLabel,
                allowBlank: true
              }, {
                xtype: 'buildit-Lookup',
                name: 'plan_year',
                fieldLabel: this.plan_yearLabel,
                allowBlank: true,
                disabled: (this.record.phantom != true && this.record.get('state') != 'draft'),
                category: 'PLAN_YEAR'
              }
              ]
            }]
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
          actions: [{
            xtype: 'button',
            cls: 'submit',
            tooltip: 'Run BTS',
            listeners: {
              beforerender: this.prepareRunAction,
              click: this.onRunAction,
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
      onRunAction: function(action, eOpts) {
        // Buildit.infoMsg('Your request has been submitted.')
        this.processEventTransition('run', 'Bts was successfully submitted.  An email confirmation will be sent to you when it is complete.', 'An error occurred running this bts.');
      }, // onBuildAction

      processEventTransition: function(eventName, successMsg, failureMsg) {
        var me = this;

        Omni.service.Bts.fireEvent({
            id: this.record.get('bts_id'),
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


      /**
       *
       */
      prepareRunAction: function(action, eOpts) {
        var currentState = this.record.get('state');

        if (this.record.phantom == true)
          action.hide();

      }, // prepareRunAction


    });
