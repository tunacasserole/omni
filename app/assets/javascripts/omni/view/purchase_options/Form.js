Ext.define('Omni.view.purchase_options.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-purchase_options-Form',


  // LABELS (Start) =======================================================================
  purchase_option_idLabel: Omni.i18n.model.PurchaseOption.purchase_option_id,
  displayLabel: Omni.i18n.model.PurchaseOption.display,
  approver_1_idLabel: Omni.i18n.model.PurchaseOption.approver_1_id,
  approver_2_idLabel: Omni.i18n.model.PurchaseOption.approver_2_id,
  approver_3_idLabel: Omni.i18n.model.PurchaseOption.approver_3_id,
  approver_1_limitLabel: Omni.i18n.model.PurchaseOption.approver_1_limit,
  approver_2_limitLabel: Omni.i18n.model.PurchaseOption.approver_2_limit,
  approver_3_limitLabel: Omni.i18n.model.PurchaseOption.approver_3_limit,
  is_destroyedLabel: Omni.i18n.model.PurchaseOption.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'purchase_option_id',
      value: this.record.get('purchase_option_id')
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
            name: 'display',
            fieldLabel: me.displayLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'approver_1_id',
            fieldLabel: this.approver_1_idLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'approver_1_limit',
            fieldLabel: me.approver_1_limitLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'approver_2_id',
            fieldLabel: this.approver_2_idLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'approver_2_limit',
            fieldLabel: me.approver_2_limitLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'approver_3_id',
            fieldLabel: this.approver_3_idLabel,
            allowBlank: true
          }, {
            xtype: 'numberfield',
            name: 'approver_3_limit',
            fieldLabel: me.approver_3_limitLabel,
            maxLength: 100,
            minLength: 0,
            allowBlank: true
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
      title: 'Purchase Option',
      subtitle: 'Edit Purchase Option'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.purchase_options.Form'
