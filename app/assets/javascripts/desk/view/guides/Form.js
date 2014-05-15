Ext.define('Desk.view.guides.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-guides-Form',
  // backOnNew: true,

  // LABELS (Start) =======================================================================
  guide_idLabel: Desk.i18n.model.Guide.guide_id,
  owner_idLabel: Desk.i18n.model.Guide.owner_id,
  reviewer_idLabel: Desk.i18n.model.Guide.reviewer_id,
  guide_nbrLabel: Desk.i18n.model.Guide.guide_nbr,
  guide_nameLabel: Desk.i18n.model.Guide.guide_name,
  descriptionLabel: Desk.i18n.model.Guide.description,
  guide_locationLabel: Desk.i18n.model.Guide.guide_location,
  gem_nameLabel: Desk.i18n.model.Guide.gem_name,
  stateLabel: Desk.i18n.model.Guide.state,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'guide_id',
      value: this.record.get('guide_id')
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
              name: 'guide_nbr',
              fieldLabel: me.guide_nbrLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'state',
              fieldLabel: me.stateLabel,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'guide_name',
              fieldLabel: me.guide_nameLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: false
            }, {
              xtype: 'textarea',
              name: 'description',
              fieldLabel: me.descriptionLabel,
              maxLength: 4000,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'textfield',
              name: 'guide_location',
              fieldLabel: me.guide_locationLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Buildit.store.User', {
                pageSize: 10
              }),
              name: 'owner_id',
              fieldLabel: me.owner_idLabel,
              valueField: 'user_id',
              displayField: 'full_name',
              queryField: 'full_name',
              itemTpl: '{full_name}',
              allowBlank: true
            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Buildit.store.User', {
                pageSize: 10
              }),
              name: 'reviewer_id',
              fieldLabel: me.reviewer_idLabel,
              valueField: 'user_id',
              displayField: 'full_name',
              queryField: 'full_name',
              itemTpl: '{full_name}',
              allowBlank: true
            }
            // {
            //   xtype        : 'textfield',
            //   name         : 'gem_name',
            //   fieldLabel   : me.gem_nameLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
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
      subtitle: 'Edit Guide',
      newTitle: 'New Guide',
      newSubtitle: 'Complete the following to create a new Help Guide'
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
        iconCls: 'fa fa-gavel',
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
        tooltip: 'Approve',
        listeners: {
          beforerender: this.prepareApproveAction,
          click: this.onApproveAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-toggle-right',
        tooltip: 'Activate',
        listeners: {
          beforerender: this.prepareActivateAction,
          click: this.onActivateAction,
          scope: me
        }
      }, {
        xtype: 'button',
        iconCls: 'fa fa-times-circle-o',
        tooltip: 'Retire',
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
    this.processEventTransition('activate', 'guide promoted to next state.', 'activate encountered an error.');
  }, // onBuildAction

  onApproveAction: function(action, eOpts) {
    this.processEventTransition('approve', 'guide is approved for activation.', 'approve encountered an error.');
  }, // onBuildAction

  onBacklogAction: function(action, eOpts) {
    this.processEventTransition('backlog', 'guide was backlogged.', 'backlog encountered an error.');
  }, // onBuildAction

  onReviewAction: function(action, eOpts) {
    this.processEventTransition('review', 'guide was submitted for review.', 'review encountered an error.');
  }, // onBuildAction

  onRejectAction: function(action, eOpts) {
    this.processEventTransition('reject', 'guide was rejected.', 'reject encountered an error.');
  }, // onBuildAction

  onCloseAction: function(action, eOpts) {
    this.processEventTransition('close', 'guide was retired.', 'retire encountered an error.');
  }, // onBuildAction

  prepareApproveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'needs_approval' ? action.show() : action.hide();
  },

  prepareActivateAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'backlog' || currentState === 'needs_approval' ? action.show() : action.hide();
  },

  prepareReviewAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'active' ? action.show() : action.hide();
  },

  prepareBacklogAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareRejectAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'needs_approval' ? action.show() : action.hide();
  },

  prepareCloseAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'backlog' || currentState === 'active' || currentState === 'review' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Desk.service.Guide.fireEvent({
        id: this.record.get('guide_id'),
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
