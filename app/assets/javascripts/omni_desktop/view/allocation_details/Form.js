Ext.define('Omni.view.allocation_details.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-allocation_details-Form',


  // LABELS (Start) =======================================================================
  allocation_detail_idLabel               : Omni.i18n.model.AllocationDetail.allocation_detail_id,
  sku_idLabel                             : Omni.i18n.model.AllocationDetail.sku_id,
  location_idLabel                        : Omni.i18n.model.AllocationDetail.location_id,
  allocation_idLabel                      : Omni.i18n.model.AllocationDetail.allocation_id,
  allocation_detail_nbrLabel              : Omni.i18n.model.AllocationDetail.allocation_detail_nbr,
  stateLabel                              : Omni.i18n.model.AllocationDetail.state,
  units_neededLabel                       : Omni.i18n.model.AllocationDetail.units_needed,
  units_allocatedLabel                    : Omni.i18n.model.AllocationDetail.units_allocated,
  units_shippedLabel                      : Omni.i18n.model.AllocationDetail.units_shipped,
  is_destroyedLabel                       : Omni.i18n.model.AllocationDetail.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'allocation_detail_id',
      value       : this.record.get('allocation_detail_id')
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
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: true,     xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            {
              xtype        : 'textfield',
              name         : 'allocation_detail_nbr',
              fieldLabel   : this.allocation_detail_nbrLabel,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : this.stateLabel,
              allowBlank   : true,
              disabled     : true
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
      title       : 'AllocationDetail',
      subtitle    : 'Edit AllocationDetail'
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
        {
          xtype      : 'button',
          cls        : 'close-event',
          tooltip    : 'Calculate',
          listeners  : {
            beforerender  : this.prepareCalculateAction,
            click         : this.onCalculateAction,
            scope         : me
          }
        },
         {
          xtype      : 'button',
          cls        : 'duplicate',
          tooltip    : 'Transfer',
          listeners  : {
            beforerender  : this.prepareTransferAction,
            click         : this.onTransferAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          cls        : 'ship',
          tooltip    : 'Ship',
          listeners  : {
            beforerender  : this.prepareShipAction,
            click         : me.onShipAction,
            scope         : me
          }
        }

      ]
    });

    // ACTIONS (End)
    this.callParent();

  },  // initComponent

  // HANDLERS (Start) ======================================================================

  onCalculateAction : function(action, eOpts){
    this.processEventTransition('calculate', 'Allocation detail was successfully calculated.', 'An error occurred calculating this allocation detail.');
  }, // onBuildAction

  onLockAction : function(action, eOpts){
    this.processEventTransition('lock', 'Allocation detail was successfully locked.', 'An error occurred locking this allocation detail.');
  }, // onBuildAction

  onUnlockAction : function(action, eOpts){
    this.processEventTransition('unlock', 'Allocation detail was successfully unlocked.', 'An error occurred unlocking this allocation detail.');
  }, // onBuildAction

  onTransferAction : function(action, eOpts){
    this.processEventTransition('transfer', 'Allocation detail was successfully transferred.', 'An error occurred transferring this allocation detail.');
  }, // onBuildAction

  onShipAction : function(action, eOpts){
    this.processEventTransition('ship', 'Allocation detail was successfully shipped.', 'An error occurred shipping this allocation detail.');
  }, // onBuildAction


  prepareCalculateAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareLockAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareUnlockAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'locked' ? action.show() : action.hide();
  },

  prepareTransferAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'locked' ? action.show() : action.hide();
  },

  prepareShipAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'transfer_request' ? action.show() : action.hide();
  },

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.AllocationDetail.fireEvent({
        id      : this.record.get('allocation_detail_id'),
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
}); // Ext.define('Omni.view.allocation_details.Form'
