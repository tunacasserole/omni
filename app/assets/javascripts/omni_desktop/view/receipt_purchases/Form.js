Ext.define('Omni.view.receipt_purchases.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-receipt_purchases-Form',


  // LABELS (Start) =======================================================================
  receipt_purchase_idLabel                : Omni.i18n.model.ReceiptPurchase.receipt_purchase_id,
  displayLabel                            : Omni.i18n.model.ReceiptPurchase.display,
  receipt_idLabel                         : Omni.i18n.model.ReceiptPurchase.receipt_id,
  purchase_idLabel                        : Omni.i18n.model.ReceiptPurchase.purchase_id,
  is_destroyedLabel                       : Omni.i18n.model.ReceiptPurchase.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'receipt_purchase_id',
      value       : this.record.get('receipt_purchase_id')
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
          /*
            {
              xtype        : 'buildit-Locator', 
              store        : Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField : 'name', 
              queryField   : 'name', 
              valueField   : 'value_field', 
              itemTpl      :'{name}',
              name         : 'attribute_name', 
              fieldLabel   : this.attribute_nameLabel, 
              allowBlank   : true 
            }
          */

            {
              xtype        : 'textfield',
              name         : 'receipt_purchase_id',
              fieldLabel   : this.receipt_purchase_idLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : this.displayLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'receipt_id',
              fieldLabel   : this.receipt_idLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'purchase_id',
              fieldLabel   : this.purchase_idLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'is_destroyed',
              fieldLabel   : this.is_destroyedLabel,
              allowBlank   : true
            }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'ReceiptPurchase',
      subtitle    : 'Edit ReceiptPurchase'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.receipt_purchases.Form'