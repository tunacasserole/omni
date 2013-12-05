Ext.define('Omni.view.receipt_purchases.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-receipt_purchases-Form',

  // LABELS (Start) =======================================================================
  receipt_purchase_idLabel: Omni.i18n.model.ReceiptPurchase.receipt_purchase_id,
  displayLabel: Omni.i18n.model.ReceiptPurchase.display,
  receipt_idLabel: Omni.i18n.model.ReceiptPurchase.receipt_id,
  purchase_idLabel: Omni.i18n.model.ReceiptPurchase.purchase_id,
  is_destroyedLabel: Omni.i18n.model.ReceiptPurchase.is_destroyed,
  // LABELS (End)

  initComponent: function() {

    var me = this;

    var disabled = !this.record.phantom;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'receipt_purchase_id',
      value: this.record.get('receipt_purchase_id')
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
          //   fieldLabel   : this.displayLabel,
          //   allowBlank   : true
          // },
          // { name: 'receipt_id', fieldLabel: this.receipt_idLabel, xtype: 'buildit-Locator',  store: Ext.create('Omni.store.Receipt',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'receipt_id', itemTpl:'{display}' },
          {
            name: 'purchase_id',
            fieldLabel: this.purchase_idLabel,
            disabled: disabled,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Purchase', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'purchase_id',
            itemTpl: '{display}',
            defaultSearch: {
              with: {
                state: {
                  any_of: ['open', 'partial']
                }
              }
            }
          }
        ]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Receipt Purchase',
      subtitle: 'Edit Receipt Purchase',
      newTitle: 'New Receipt Purchase',
      newSubtitle: 'Complete the following to create a new Receipt Purchase'
    });
    // TITLES (End)

    // ACTIONS (Start) =====================================================================
    Ext.apply(this, {
      actions: [{
        tooltip: 'Receive',
        cls: 'close-event',
        xtype: 'button',
        listeners: {
          beforerender: this.prepareReceiveAction,
          click: this.onReceiveAction,
          scope: me
        }
      }]
    });
    // ACTIONS (End)

    // LISTENERS (Start) ===================================================================
    // LISTENERS (End)

    this.callParent();

  },

  onReceiveAction: function(action, eOpts) {
    this.processEventTransition('receive', 'Receipt Purchase was successfully received.', 'An error occurred receiving this receipt.');
  }, // onBuildAction

  prepareReceiveAction: function(action, eOpts) {
    var currentState = this.record.get('state');
    currentState === 'draft' || currentState === 'scheduled' || currentState === 'processing' ? action.show() : action.hide();
  },

  processEventTransition: function(eventName, successMsg, failureMsg) {
    var me = this;

    Omni.service.ReceiptPurchase.fireEvent({
        id: this.record.get('receipt_purchase_id'),
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
