Ext.define('Omni.view.uniform_details.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-uniform_details-Form',
  backOnNew: true,

  // LABELS (Start) =======================================================================
  uniform_detail_idLabel: Omni.i18n.model.UniformDetail.uniform_detail_id,
  displayLabel: Omni.i18n.model.UniformDetail.display,
  uniform_idLabel: Omni.i18n.model.UniformDetail.uniform_id,
  style_idLabel: Omni.i18n.model.UniformDetail.style_id,
  color_idLabel: Omni.i18n.model.UniformDetail.color_id,
  style_color_idLabel: Omni.i18n.model.UniformDetail.style_color_id,
  uniform_detail_nbrLabel: Omni.i18n.model.UniformDetail.uniform_detail_nbr,
  stateLabel: Omni.i18n.model.UniformDetail.state,
  from_grade_idLabel: Omni.i18n.model.UniformDetail.from_grade_id,
  thru_grade_idLabel: Omni.i18n.model.UniformDetail.thru_grade_id,
  is_required_maleLabel: Omni.i18n.model.UniformDetail.is_required_male,
  is_required_femaleLabel: Omni.i18n.model.UniformDetail.is_required_female,
  is_optional_maleLabel: Omni.i18n.model.UniformDetail.is_optional_male,
  is_optional_femaleLabel: Omni.i18n.model.UniformDetail.is_optional_female,
  is_includes_logoLabel: Omni.i18n.model.UniformDetail.is_includes_logo,
  discount_amountLabel: Omni.i18n.model.UniformDetail.discount_amount,
  discount_percentLabel: Omni.i18n.model.UniformDetail.discount_percent,
  uniform_sourceLabel: Omni.i18n.model.UniformDetail.uniform_source,
  retail_priceLabel: Omni.i18n.model.UniformDetail.retail_price,
  price_unitsLabel: Omni.i18n.model.UniformDetail.price_units,
  is_approvedLabel: Omni.i18n.model.UniformDetail.is_approved,
  is_destroyedLabel: Omni.i18n.model.UniformDetail.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'uniform_detail_id',
      value: this.record.get('uniform_detail_id')
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
          items: [
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Uniform',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'uniform_id',
            //   fieldLabel   : me.uniform_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Style',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'style_id',
            //   fieldLabel   : me.style_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Color',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'color_id',
            //   fieldLabel   : me.color_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : true
            // },
            {
              xtype: 'textfield',
              name: 'uniform_detail_nbr',
              fieldLabel: me.uniform_detail_nbrLabel,
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
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.StyleColor', {
                pageSize: 10
              }),
              displayField: 'display',
              itemTpl: '{display}',
              name: 'style_color_id',
              fieldLabel: me.style_color_idLabel,
              gotoTarget: 'omni-style_colors-Inspector',
              // emptyText    : 'auto-populated on save',

              //initialValue : me.record.get('display'),
              allowBlank: false
            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Grade', {
                pageSize: 10
              }),
              displayField: 'display',
              itemTpl: '{display}',
              name: 'from_grade_id',
              valueField: 'grade_id',
              fieldLabel: me.from_grade_idLabel,
              gotoTarget: 'omni-grades-Inspector',
              emptyText: 'auto-populated on save',
              //initialValue : me.record.get('from_grade_display'),
              allowBlank: true
            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.Grade', {
                pageSize: 10
              }),
              displayField: 'display',
              itemTpl: '{display}',
              name: 'thru_grade_id',
              valueField: 'grade_id',
              fieldLabel: me.thru_grade_idLabel,
              gotoTarget: 'omni-grades-Inspector',
              emptyText: 'auto-populated on save',
              //initialValue : me.record.get('thru_grade_display'),
              allowBlank: true
            }, {
              xtype: 'checkbox',
              name: 'is_required_male',
              fieldLabel: me.is_required_maleLabel
            }, {
              xtype: 'checkbox',
              name: 'is_required_female',
              fieldLabel: me.is_required_femaleLabel
            }, {
              xtype: 'checkbox',
              name: 'is_optional_male',
              fieldLabel: me.is_optional_maleLabel
            }, {
              xtype: 'checkbox',
              name: 'is_optional_female',
              fieldLabel: me.is_optional_femaleLabel,
            }, {
              xtype: 'checkbox',
              name: 'is_includes_logo',
              fieldLabel: me.is_includes_logoLabel,
            }, {
              xtype: 'numberfield',
              name: 'discount_percent',
              fieldLabel: me.discount_percentLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'discount_amount',
              fieldLabel: me.discount_amountLabel,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'buildit-Lookup',
              name: 'uniform_source',
              fieldLabel: me.uniform_sourceLabel,
              category: 'UNIFORM_SOURCE',
              lkp: 'code',
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'retail_price',
              fieldLabel: me.retail_priceLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'numberfield',
              name: 'price_units',
              fieldLabel: me.price_unitsLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: true
            },
            // {
            //   xtype        : 'checkbox',
            //   name         : 'is_approved',
            //   fieldLabel   : me.is_approvedLabel,
            //   disabled     : true
            // },
          ]
        }
        /*,
=======
    extend: 'Buildit.ux.Form',
    alias: 'widget.omni-uniform_details-Form',
    backOnNew: true,

    // LABELS (Start) =======================================================================
    uniform_detail_idLabel: Omni.i18n.model.UniformDetail.uniform_detail_id,
    displayLabel: Omni.i18n.model.UniformDetail.display,
    uniform_idLabel: Omni.i18n.model.UniformDetail.uniform_id,
    style_idLabel: Omni.i18n.model.UniformDetail.style_id,
    color_idLabel: Omni.i18n.model.UniformDetail.color_id,
    style_color_idLabel: Omni.i18n.model.UniformDetail.style_color_id,
    uniform_detail_nbrLabel: Omni.i18n.model.UniformDetail.uniform_detail_nbr,
    stateLabel: Omni.i18n.model.UniformDetail.state,
    from_grade_idLabel: Omni.i18n.model.UniformDetail.from_grade_id,
    thru_grade_idLabel: Omni.i18n.model.UniformDetail.thru_grade_id,
    is_required_maleLabel: Omni.i18n.model.UniformDetail.is_required_male,
    is_required_femaleLabel: Omni.i18n.model.UniformDetail.is_required_female,
    is_optional_maleLabel: Omni.i18n.model.UniformDetail.is_optional_male,
    is_optional_femaleLabel: Omni.i18n.model.UniformDetail.is_optional_female,
    is_includes_logoLabel: Omni.i18n.model.UniformDetail.is_includes_logo,
    discount_amountLabel: Omni.i18n.model.UniformDetail.discount_amount,
    discount_percentLabel: Omni.i18n.model.UniformDetail.discount_percent,
    uniform_sourceLabel: Omni.i18n.model.UniformDetail.uniform_source,
    retail_priceLabel: Omni.i18n.model.UniformDetail.retail_price,
    price_unitsLabel: Omni.i18n.model.UniformDetail.price_units,
    is_approvedLabel: Omni.i18n.model.UniformDetail.is_approved,
    is_destroyedLabel: Omni.i18n.model.UniformDetail.is_destroyed,
    // LABELS (End)


    initComponent: function() {

        var me = this;

        // FILTER (Start) =======================================================================
        var associativeFilter = {
            property: 'uniform_detail_id',
            value: this.record.get('uniform_detail_id')
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
                    items: [
                        // {
                        //   xtype        : 'textfield',
                        //   name         : 'display',
                        //   fieldLabel   : me.displayLabel,
                        //   maxLength    : 200,
                        //   minLength    : 0,
                        //   allowBlank   : true
                        // },
                        // {
                        //   xtype        : 'buildit-Locator',
                        //   store        : Ext.create('Omni.store.Uniform',{pageSize: 10}),
                        //   displayField : 'display',
                        //   itemTpl      : '{display}',
                        //   name         : 'uniform_id',
                        //   fieldLabel   : me.uniform_idLabel,
                        //   initialValue : me.record.get('display'),
                        //   allowBlank   : true
                        // },
                        // {
                        //   xtype        : 'buildit-Locator',
                        //   store        : Ext.create('Omni.store.Style',{pageSize: 10}),
                        //   displayField : 'display',
                        //   itemTpl      : '{display}',
                        //   name         : 'style_id',
                        //   fieldLabel   : me.style_idLabel,
                        //   initialValue : me.record.get('display'),
                        //   allowBlank   : true
                        // },
                        // {
                        //   xtype        : 'buildit-Locator',
                        //   store        : Ext.create('Omni.store.Color',{pageSize: 10}),
                        //   displayField : 'display',
                        //   itemTpl      : '{display}',
                        //   name         : 'color_id',
                        //   fieldLabel   : me.color_idLabel,
                        //   initialValue : me.record.get('display'),
                        //   allowBlank   : true
                        // },
                        {
                            xtype: 'textfield',
                            name: 'uniform_detail_nbr',
                            fieldLabel: me.uniform_detail_nbrLabel,
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
                            xtype: 'buildit-Locator',
                            store: Ext.create('Omni.store.StyleColor', {
                                pageSize: 10
                            }),
                            displayField: 'display',
                            itemTpl: '{display}',
                            name: 'style_color_id',
                            fieldLabel: me.style_color_idLabel,
                            gotoTarget: 'omni-style_colors-Inspector',
                            emptyText: 'auto-populated on save',
                            //initialValue : me.record.get('display'),
                            allowBlank: false
                        }, {
                            xtype: 'buildit-Locator',
                            store: Ext.create('Omni.store.Grade', {
                                pageSize: 10
                            }),
                            displayField: 'display',
                            itemTpl: '{display}',
                            name: 'from_grade_id',
                            valueField: 'grade_id',
                            fieldLabel: me.from_grade_idLabel,
                            gotoTarget: 'omni-grades-Inspector',
                            emptyText: 'auto-populated on save',
                            //initialValue : me.record.get('from_grade_display'),
                            allowBlank: true
                        }, {
                            xtype: 'buildit-Locator',
                            store: Ext.create('Omni.store.Grade', {
                                pageSize: 10
                            }),
                            displayField: 'display',
                            itemTpl: '{display}',
                            name: 'thru_grade_id',
                            valueField: 'grade_id',
                            fieldLabel: me.thru_grade_idLabel,
                            gotoTarget: 'omni-grades-Inspector',
                            //initialValue : me.record.get('thru_grade_display'),
                            allowBlank: true
                        }, {
                            xtype: 'checkbox',
                            name: 'is_required_male',
                            fieldLabel: me.is_required_maleLabel
                        }, {
                            xtype: 'checkbox',
                            name: 'is_required_female',
                            fieldLabel: me.is_required_femaleLabel
                        }, {
                            xtype: 'checkbox',
                            name: 'is_optional_male',
                            fieldLabel: me.is_optional_maleLabel
                        }, {
                            xtype: 'checkbox',
                            name: 'is_optional_female',
                            fieldLabel: me.is_optional_femaleLabel,
                        }, {
                            xtype: 'checkbox',
                            name: 'is_includes_logo',
                            fieldLabel: me.is_includes_logoLabel,
                        }, {
                            xtype: 'numberfield',
                            name: 'discount_percent',
                            fieldLabel: me.discount_percentLabel,
                            maxLength: 100,
                            minLength: 0,
                            allowBlank: true
                        }, {
                            xtype: 'numberfield',
                            name: 'discount_amount',
                            fieldLabel: me.discount_amountLabel,
                            minLength: 0,
                            allowBlank: true
                        }, {
                            xtype: 'buildit-Lookup',
                            name: 'uniform_source',
                            fieldLabel: me.uniform_sourceLabel,
                            category: 'UNIFORM_SOURCE',
                            lkp: 'code',
                            allowBlank: true
                        }, {
                            xtype: 'numberfield',
                            name: 'retail_price',
                            fieldLabel: me.retail_priceLabel,
                            maxLength: 100,
                            minLength: 0,
                            allowBlank: true
                        }, {
                            xtype: 'numberfield',
                            name: 'price_units',
                            fieldLabel: me.price_unitsLabel,
                            maxLength: 100,
                            minLength: 0,
                            allowBlank: true
                        },
                        // {
                        //   xtype        : 'checkbox',
                        //   name         : 'is_approved',
                        //   fieldLabel   : me.is_approvedLabel,
                        //   disabled     : true
                        // },
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
      title: 'Uniform Detail',
      subtitle: 'Edit Uniform Detail'
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

    // LISTENERS (Start) ===================================================================

    // LISTENERS (End)


    this.callParent();


    // me.advancedCreateWindow = Ext.create('Omni.view.uniform_details.AdvancedCreatePanel');
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
    this.processEventTransition('activate', 'Uniform Detail was successfully activated.', 'An error occurred activating this uniform detail.');
  }, // onBuildAction

  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close', 'Uniform Detail was successfully close.', 'An error occurred closing this uniform detail.');
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

    Omni.service.UniformDetail.fireEvent({
        id: this.record.get('uniform_detail_id'),
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
