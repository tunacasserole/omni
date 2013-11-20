Ext.define('Omni.view.receipt_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-receipt_details-Form',

  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'receipt_detail_id',
      value:      this.record.get('receipt_detail_id')
    };
    // FILTER (End)

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel:                             Omni.i18n.model.ReceiptDetail.state,
      displayLabel:                           Omni.i18n.model.ReceiptDetail.display,
      receipt_idLabel:                        Omni.i18n.model.ReceiptDetail.receipt_id,
      sku_idLabel:                            Omni.i18n.model.ReceiptDetail.sku_id,
      sku_aliasLabel:                         Omni.i18n.model.ReceiptDetail.sku_alias,
      allocation_profile_idLabel:             Omni.i18n.model.ReceiptDetail.allocation_profile_id,
      receipt_line_nbrLabel:                  Omni.i18n.model.ReceiptDetail.receipt_line_nbr,
      purchase_detail_idLabel:                Omni.i18n.model.ReceiptDetail.purchase_detail_id,
      received_unitsLabel:                    Omni.i18n.model.ReceiptDetail.received_units,
      receipt_pack_sizeLabel:                 Omni.i18n.model.ReceiptDetail.receipt_pack_size,
      receipt_pack_typeLabel:                 Omni.i18n.model.ReceiptDetail.receipt_pack_type,
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
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            { xtype: 'textfield', name: 'receipt_line_nbr',               fieldLabel: this.receipt_line_nbrLabel            , allowBlank: true },
            { name: 'sku_id',               fieldLabel: this.sku_idLabel, xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'allocation_profile_id',fieldLabel: this.allocation_profile_idLabel, xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.AllocationProfile',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'allocation_profile_id', itemTpl:'{display}' },
            { xtype: 'textfield', name: 'sku_alias',                       fieldLabel: this.sku_aliasLabel                     , allowBlank: true },
            { xtype: 'numberfield', name: 'received_units',                fieldLabel: this.received_unitsLabel              , allowBlank: true },
            { xtype: 'numberfield', name: 'receipt_pack_size',             fieldLabel: this.receipt_pack_sizeLabel              , allowBlank: true },
            { xtype: 'buildit-Lookup', name: 'receipt_pack_type',          fieldLabel: this.receipt_pack_typeLabel               , allowBlank: true,  category:   'PACK_TYPE' },
            ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Receipt Details',
      newTitle: 'New Receipt Detail',
      newSubtitle: 'Complete the following to create a new Receipt Detail'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [
         {
          tooltip    : 'Complete',
          cls        : 'close',
          xtype      : 'button',
          listeners  : {
            beforerender  : this.prepareCompleteAction,
            click         : this.onCompleteAction,
            scope         : me
          }
        },
        {
          tooltip    : 'Allocate',
          iconCls    : 'icon-sitemap',
          xtype      : 'button',
          listeners  : {
            beforerender  : this.prepareAllocateAction,
            click         : this.onAllocateAction,
            scope         : me
          }
        },
        {
          tooltip    : 'Hold',
          iconCls    : 'icon-thumbs-down',
          xtype      : 'button',
          listeners  : {
            beforerender  : this.prepareHoldAction,
            click         : this.onHoldAction,
            scope         : me
          }
        },
         {
          tooltip    : 'Release',
          iconCls    : 'icon-thumbs-up',
          xtype      : 'button',
          listeners  : {
            beforerender  : this.prepareReleaseAction,
            click         : this.onReleaseAction,
            scope         : me
          }
        }
      ]
    });
    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================
    // LISTENERS (End)

  this.callParent();

},

  onCompleteAction : function(action, eOpts){
    this.processEventTransition('complete', 'Receipt Detail was successfully completed.', 'An error occurred completing this receipt detail.');
  }, // onBuildAction

  onAllocateAction : function(action, eOpts){
    this.processEventTransition('allocate', 'Receipt Detail was successfully allocated.', 'An error occurred allocating this receipt detail.');
  }, // onBuildAction

  onHoldAction : function(action, eOpts){
    this.processEventTransition('hold', 'Receipt Detail was successfully held.', 'An error occurred holding this receipt detail.');
  }, // onBuildAction

  onReleaseAction : function(action, eOpts){
    this.processEventTransition('release', 'Receipt Detail was successfully released.', 'An error occurred releasing this receipt detail.');
  }, // onBuildAction

  prepareCompleteAction : function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' ? action.show() : action.hide();
  },

  prepareAllocateAction : function(action, eOpts) {
    var currentState = this.record.get('state');
        currentState === 'complete' ? action.show() : action.hide();
  },

  prepareHoldAction : function(action, eOpts) {
    var currentState = this.record.get('state');
        currentState === 'draft' ? action.show() : action.hide();
  },

  prepareReleaseAction : function(action, eOpts) {
    var currentState = this.record.get('state');
        currentState === 'hold' ? action.show() : action.hide();
  },

  processEventTransition : function(eventName, successMsg, failureMsg){
    var me = this;

    Omni.service.ReceiptDetail.fireEvent({
        id      : this.record.get('receipt_detail_id'),
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
