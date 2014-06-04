Ext.define('Omni.view.purchase_allocations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchase_allocations-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_allocation_id',
      value:      this.record.get('purchase_allocation_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      purchase_allocation_idLabel:            Omni.i18n.model.PurchaseAllocation.purchase_allocation_id,
      purchase_detail_idLabel:                Omni.i18n.model.PurchaseAllocation.purchase_detail_id,
      allocation_idLabel:                     Omni.i18n.model.PurchaseAllocation.allocation_id,
      location_idLabel:                       Omni.i18n.model.PurchaseAllocation.location_id,
      displayLabel:                           Omni.i18n.model.PurchaseAllocation.display,
      purchase_allocation_nbrLabel:           Omni.i18n.model.PurchaseAllocation.purchase_allocation_nbr,
      stateLabel:                             Omni.i18n.model.PurchaseAllocation.state,
      units_neededLabel:                      Omni.i18n.model.PurchaseAllocation.units_needed,
      units_allocatedLabel:                   Omni.i18n.model.PurchaseAllocation.units_allocated,
      units_shippedLabel:                     Omni.i18n.model.PurchaseAllocation.units_shipped,
      is_destroyedLabel:                      Omni.i18n.model.PurchaseAllocation.is_destroyed
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[

            { xtype             : 'textfield',
              name              : 'purchase_allocation_nbr',
              fieldLabel        : this.purchase_allocation_nbrLabel,
              allowBlank        : true,
              disabled          : true
            },
            { xtype             : 'textfield',
              name              : 'state',
              fieldLabel        : this.stateLabel,
              allowBlank        : true,
              disabled          : true
            },
            { xtype             : 'buildit-Locator',
              name              : 'location_id',
              fieldLabel        : this.location_idLabel,
              allowBlank        : false,
              store             : Ext.create('Omni.store.Location',{pageSize: 50}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'location_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'textfield',
              name              : 'units_needed',
              fieldLabel        : this.units_neededLabel,
              disabled          : false,
              allowBlank        : true
            },
            { xtype             : 'numberfield',
              name              : 'units_allocated',
              fieldLabel        : this.units_allocatedLabel,
              minValue          : 0,
              allowBlank        : true
            },
            { xtype             : 'textfield',
              name              : 'units_shipped',
              fieldLabel        : this.units_shippedLabel,
              disabled          : true,
              allowBlank        : true
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Purchase Allocations',
      newTitle: 'New Purchase Allocation',
      newSubtitle: 'Complete the following to create a new Purchase Allocation'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
       {
          xtype      : 'button',
          iconCls    : 'icon-lock',
          tooltip    : 'Lock',
          listeners  : {
            beforerender  : this.prepareLockAction,
            click         : this.onLockAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          iconCls    : 'icon-unlock',
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
    this.processEventTransition('lock', 'Purchase Allocation was successfully locked.', 'An error occurred freezing this purchase allocation.');
  }, // onBuildAction

  onUnlockAction : function(action, eOpts){
    this.processEventTransition('unlock', 'Purchase Allocation was successfully unlocked.', 'An error occurred unfreezing this purchase allocation.');
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

    Omni.service.PurchaseAllocation.fireEvent({
        id      : this.record.get('purchase_allocation_id'),
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
