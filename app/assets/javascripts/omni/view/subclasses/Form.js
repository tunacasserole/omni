Ext.define('Omni.view.subclasses.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-subclasses-Form',

  initComponent: function() {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Subclass.display,
      subclass_nbrLabel: Omni.i18n.model.Subclass.subclass_nbr,
      descriptionLabel: Omni.i18n.model.Subclass.description,
      short_nameLabel: Omni.i18n.model.Subclass.short_name,
      classification_idLabel: Omni.i18n.model.Subclass.classification_id,
      markup_percent_high_limitLabel: Omni.i18n.model.Subclass.markup_percent_high_limit,
      markup_percent_low_limitLabel: Omni.i18n.model.Subclass.markup_percent_low_limit
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'display',
          fieldLabel: this.displayLabel,
          allowBlank: false,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'subclass_nbr',
          fieldLabel: this.subclass_nbrLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'description',
          fieldLabel: this.descriptionLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'short_name',
          fieldLabel: this.short_nameLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'classification_id',
          fieldLabel: this.classification_idLabel,
          allowBlank: false,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Classification', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'classification_id',
          itemTpl: '{display}',
          gotoTarget: 'omni-classifications-Inspector'
        }, {
          name: 'markup_percent_high_limit',
          fieldLabel: this.markup_percent_high_limitLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'markup_percent_low_limit',
          fieldLabel: this.markup_percent_low_limitLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Subclasses',
      newTitle: 'New Subclass',
      newSubtitle: 'Complete the following to create a new subclass.'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-cogs',
        tooltip: 'Forecast',
        listeners: {
          beforerender: this.prepareForecastAction,
          click: this.onForecastAction,
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

  onForecastAction: function(action, eOpts) {
    this.processEventTransition('forecast_q', 'Subclass is being forecasted, this may take a while.', 'An error occurred forecasting this subclass.');
  }, // onBuildAction

  prepareForecastAction: function(action, eOpts) {
    this.record.phantom != true ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.Subclass.fireEvent({
        id: this.record.get('subclass_id'),
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
