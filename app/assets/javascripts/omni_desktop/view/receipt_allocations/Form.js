Ext.define('Omni.view.receipt_allocations.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-receipt_allocations-Form',


  // LABELS (Start) =======================================================================
  receipt_allocation_idLabel              : Omni.i18n.model.ReceiptAllocation.receipt_allocation_id,
  receipt_allocation_nbrLabel             : Omni.i18n.model.ReceiptAllocation.receipt_allocation_nbr,
  receipt_detail_idLabel                  : Omni.i18n.model.ReceiptAllocation.receipt_detail_id,
  location_idLabel                        : Omni.i18n.model.ReceiptAllocation.location_id,
  displayLabel                            : Omni.i18n.model.ReceiptAllocation.display,
  stateLabel                              : Omni.i18n.model.ReceiptAllocation.state,
  units_neededLabel                       : Omni.i18n.model.ReceiptAllocation.units_needed,
  units_allocatedLabel                    : Omni.i18n.model.ReceiptAllocation.units_allocated,
  units_shippedLabel                      : Omni.i18n.model.ReceiptAllocation.units_shipped,
  is_destroyedLabel                       : Omni.i18n.model.ReceiptAllocation.is_destroyed,
  // LABELS (End)

  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'receipt_allocation_id',
      value       : this.record.get('receipt_allocation_id')
    };
    // FILTER (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : this.stateLabel,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textfield',
              name         : 'receipt_allocation_nbr',
              fieldLabel   : this.receipt_allocation_nbrLabel,
              allowBlank   : true
            },
            { xtype: 'buildit-Locator', name: 'location_id',              fieldLabel: this.location_idLabel                 , allowBlank: true,   disabled: false,  store: Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : this.displayLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_needed',
              fieldLabel   : this.units_neededLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_allocated',
              fieldLabel   : this.units_allocatedLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_shipped',
              fieldLabel   : this.units_shippedLabel,
              allowBlank   : true
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Receipt Allocation',
      subtitle    : 'Edit Receipt Allocation',
      newTitle:     'New Receipt Allocation',
      newSubtitle:  'Complete the following to create a new Receipt Allocation'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
       {
          xtype      : 'button',
          cls        : 'approve',
          tooltip    : 'Lock',
          listeners  : {
            beforerender  : this.prepareLockAction,
            click         : this.onLockAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          cls        : 'reject',
          tooltip    : 'Unlock',
          listeners  : {
            beforerender  : this.prepareUnlockAction,
            click         : this.onUnlockAction,
            scope         : me
          }
        },
      ]
    });
    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================
    // LISTENERS (End)

  this.callParent();

},

  onLockAction : function(action, eOpts){
    this.processEventTransition('lock', 'Receipt Allocation was successfully locked.', 'An error occurred locking this receipt allocation.');
  }, // onBuildAction

  onUnlockAction : function(action, eOpts){
    this.processEventTransition('unlock', 'Receipt Allocation was successfully unlocked.', 'An error occurred unlocking this receipt allocation.');
  }, // onBuildAction

  prepareLockAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareUnlockAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'locked' ? action.show() : action.hide();
  },

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.ReceiptAllocation.fireEvent({
        id      : this.record.get('receipt_allocation_id'),
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

  },

  // HANDLERS (End)

});
