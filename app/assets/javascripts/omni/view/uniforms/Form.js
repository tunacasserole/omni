Ext.define('Omni.view.uniforms.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-uniforms-Form',


  // LABELS (Start) =======================================================================
  uniform_idLabel: Omni.i18n.model.Uniform.uniform_id,
  account_idLabel: Omni.i18n.model.Uniform.account_id,
  contract_idLabel: Omni.i18n.model.Uniform.contract_id,
  displayLabel: Omni.i18n.model.Uniform.display,
  uniform_nbrLabel: Omni.i18n.model.Uniform.uniform_nbr,
  uniform_nameLabel: Omni.i18n.model.Uniform.uniform_name,
  descriptionLabel: Omni.i18n.model.Uniform.description,
  stateLabel: Omni.i18n.model.Uniform.state,
  school_yearLabel: Omni.i18n.model.Uniform.school_year,
  discount_percentLabel: Omni.i18n.model.Uniform.discount_percent,
  teacher_discount_percentLabel: Omni.i18n.model.Uniform.teacher_discount_percent,
  administrator_discount_percentLabel: Omni.i18n.model.Uniform.administrator_discount_percent,
  is_discount_in_storeLabel: Omni.i18n.model.Uniform.is_discount_in_store,
  is_discount_on_webLabel: Omni.i18n.model.Uniform.is_discount_on_web,
  is_free_shippingLabel: Omni.i18n.model.Uniform.is_free_shipping,
  is_destroyedLabel: Omni.i18n.model.Uniform.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'uniform_id',
      value: this.record.get('uniform_id')
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
            // }, {
            //   xtype: 'textfield',
            //   name: 'contract_id',
            //   fieldLabel: me.contract_idLabel,
            //   maxLength: 32,
            //   minLength: 0,
            //   allowBlank: true
            // }, {
            //   xtype: 'textfield',
            //   name: 'display',
            //   fieldLabel: me.displayLabel,
            //   maxLength: 200,
            //   minLength: 0,
            //   allowBlank: false
            // }, {
            xtype: 'textfield',
            name: 'uniform_nbr',
            fieldLabel: me.uniform_nbrLabel,
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
            xtype: 'buildit-Lookup',
            name: 'school_year',
            fieldLabel: me.school_yearLabel,
            category: 'PLAN_YEAR',
            lkp: 'code',
            allowBlank: false
          }, {
            xtype: 'textfield',
            name: 'uniform_name',
            fieldLabel: me.uniform_nameLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'textarea',
            name: 'description',
            fieldLabel: me.descriptionLabel,
            maxLength: 4000,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'discount_percent',
            fieldLabel: me.discount_percentLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'teacher_discount_percent',
            fieldLabel: me.teacher_discount_percentLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'administrator_discount_percent',
            fieldLabel: me.administrator_discount_percentLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_discount_in_store',
            fieldLabel: me.is_discount_in_storeLabel
          }, {
            xtype: 'checkbox',
            name: 'is_discount_on_web',
            fieldLabel: me.is_discount_on_webLabel
          }, {
            xtype: 'checkbox',
            name: 'is_free_shipping',
            fieldLabel: me.is_free_shippingLabel
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
      title: 'Uniform',
      subtitle: 'Edit Uniform'
    });
    // TITLES (End)

      // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        xtype: 'button',
        iconCls: 'fa fa-thumbs-up',
        // iconCls: 'fa-thumbs-o-up',
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
      }]
    });

    // ACTIONS (End)


    // LISTENERS (Start) ================================================p===================

    // LISTENERS (End)


    this.callParent();


    // me.advancedCreateWindow = Ext.create('Omni.view.purchases.AdvancedCreatePanel');
    // me.advancedHidden = true;
  },

  // HANDLERS (Start) ======================================================================

  // onAdvancedCreateToggle : function(btn, e){

  //   var me               = this;
  //   me.advancedHidden    = !me.advancedHidden;

  //   if(me.advancedHidden){
  //     me.advancedCreateWindow.hide();
  //   } else {
  //     me.advancedCreateWindow.showBy(btn);
  //   }

  // }, // onAdvancedCreateToggle

  onActivateAction: function(action, eOpts) {
    this.processEventTransition('activate_q', 'Uniform activation was submitted, this may take a while.', 'An error occurred activating this uniform.');
  }, // onBuildAction

  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close_q', 'Uniform close was submitted.', 'An error occurred closing this uniform.');
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

    Omni.service.Uniform.fireEvent({
        id: this.record.get('uniform_id'),
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
