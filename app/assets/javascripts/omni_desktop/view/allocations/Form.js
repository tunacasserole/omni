Ext.define('Omni.view.allocations.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-allocations-Form',


  // LABELS (Start) =======================================================================
  allocation_idLabel                      : Omni.i18n.model.Allocation.allocation_id,
  allocatable_idLabel                     : Omni.i18n.model.Allocation.allocatable_id,
  allocatable_typeLabel                   : Omni.i18n.model.Allocation.allocatable_type,
  sku_idLabel                             : Omni.i18n.model.Allocation.sku_id,
  location_idLabel                        : Omni.i18n.model.Allocation.location_id,
  allocation_profile_idLabel              : Omni.i18n.model.Allocation.allocation_profile_id,
  allocation_nbrLabel                     : Omni.i18n.model.Allocation.allocation_nbr,
  stateLabel                              : Omni.i18n.model.Allocation.state,
  displayLabel                            : Omni.i18n.model.Allocation.display,
  descriptionLabel                        : Omni.i18n.model.Allocation.description,
  units_to_allocateLabel                  : Omni.i18n.model.Allocation.units_to_allocate,
  on_hand_unitsLabel                  : Omni.i18n.model.Allocation.on_hand_units,
  in_transit_unitsLabel                  : Omni.i18n.model.Allocation.in_transit_units,
  non_sellable_unitsLabel                  : Omni.i18n.model.Allocation.non_sellable_units,
  allocated_unitsLabel                  : Omni.i18n.model.Allocation.allocated_units,
  reserved_unitsLabel                  : Omni.i18n.model.Allocation.reserved_units,
  shipping_unitsLabel                  : Omni.i18n.model.Allocation.shipping_units,
  work_in_process_unitsLabel                  : Omni.i18n.model.Allocation.work_in_process_units,
  supplier_on_order_unitsLabel                  : Omni.i18n.model.Allocation.supplier_on_order_units,
  warehouse_on_order_unitsLabel                  : Omni.i18n.model.Allocation.warehouse_on_order_units,
  is_destroyedLabel                       : Omni.i18n.model.Allocation.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'allocation_id',
      value       : this.record.get('allocation_id')
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
              name         : 'allocation_nbr',
              fieldLabel   : this.allocation_nbrLabel,
              allowBlank   : true,
              disabled     : true
            },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'allocation_profile_id',          fieldLabel: this.allocation_profile_idLabel,      allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.AllocationProfile',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'allocation_profile_id', itemTpl:'{display}' },
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : this.displayLabel,
            //   allowBlank   : true
            // },
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : this.descriptionLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_to_allocate',
              fieldLabel   : this.units_to_allocateLabel,
              allowBlank   : true
            }
          ]
        },        {
          xtype        : 'fieldset',
          title        : 'Inventory Information',
          collapsible  : true,
          defaultType  : 'textfield',
          collapsed    : true,
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'numberfield',
              name         : 'on_hand_units',
              fieldLabel   : this.on_hand_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'in_transit_units',
              fieldLabel   : this.in_transit_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'non_sellable_units',
              fieldLabel   : this.non_sellable_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'allocated_units',
              fieldLabel   : this.allocated_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'reserved_units',
              fieldLabel   : this.reserved_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'shipping_units',
              fieldLabel   : this.shipping_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'work_in_process_units',
              fieldLabel   : this.work_in_process_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'supplier_on_order_units',
              fieldLabel   : this.supplier_on_order_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            },
            {
              xtype        : 'numberfield',
              name         : 'warehouse_on_order_units',
              fieldLabel   : this.warehouse_on_order_unitsLabel,
              allowBlank   : true,
              diasbled     : true
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Allocation',
      subtitle    : 'Edit Allocation'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
        {
          xtype      : 'button',
          cls        : 'duplicate',
          tooltip    : 'Calculate',
          listeners  : {
            beforerender  : this.prepareAllocateAction,
            click         : this.onAllocateAction,
            scope         : me
          }
        },
        {
          xtype      : 'button',
          iconCls    : 'icon-thumbs-up',
          tooltip    : 'Approve',
          listeners  : {
            beforerender  : this.prepareApproveAction,
            click         : this.onApproveAction,
            scope         : me
          }
        },
         {
          xtype      : 'button',
          cls        : 'close-event',
          tooltip    : 'Transfer',
          listeners  : {
            beforerender  : this.prepareTransferAction,
            click         : this.onTransferAction,
            scope         : me
          }
        }
      ]
    });

    // ACTIONS (End)
    this.callParent();

  },  // initComponent

  // HANDLERS (Start) ======================================================================

  onAllocateAction : function(action, eOpts){
    this.processEventTransition('allocate', 'Allocation was successfully allocated.', 'An error occurred allocated this allocation.');
  }, // onBuildAction

  onApproveAction : function(action, eOpts){
    this.processEventTransition('approve', 'Allocation was successfully approved.', 'An error occurred approving this allocation.');
  }, // onBuildAction

  onTransferAction : function(action, eOpts){
    this.processEventTransition('transfer', 'Allocation was successfully transferred.', 'An error occurred transferring this allocation.');
  }, // onBuildAction

  onShipAction : function(action, eOpts){
    this.processEventTransition('ship', 'Allocation was successfully shipped.', 'An error occurred shipping this allocation.');
  }, // onBuildAction


  prepareAllocateAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareApproveAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareTransferAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'approved' ? action.show() : action.hide();
  },

  prepareShipAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'transfer_request' ? action.show() : action.hide();
  },

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.Allocation.fireEvent({
        id      : this.record.get('allocation_id'),
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
}); // Ext.define('Omni.view.allocations.Form'
