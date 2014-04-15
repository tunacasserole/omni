Ext.define('Omni.view.vouchers.Form', {

    extend: 'Buildit.ux.Form',
    alias: 'widget.omni-vouchers-Form',

    // LABELS (Start) =======================================================================
    voucher_idLabel: Omni.i18n.model.Voucher.voucher_id,
    displayLabel: Omni.i18n.model.Voucher.display,
    customer_idLabel: Omni.i18n.model.Voucher.customer_id,
    voucher_nbrLabel: Omni.i18n.model.Voucher.voucher_nbr,
    voucher_typeLabel: Omni.i18n.model.Voucher.voucher_type,
    initial_balanceLabel: Omni.i18n.model.Voucher.initial_balance,
    current_balanceLabel: Omni.i18n.model.Voucher.current_balance,
    issue_dateLabel: Omni.i18n.model.Voucher.issue_date,
    expiration_dateLabel: Omni.i18n.model.Voucher.expiration_date,
    stateLabel: Omni.i18n.model.Voucher.state,
    is_destroyedLabel: Omni.i18n.model.Voucher.is_destroyed,
    // LABELS (End)

    initComponent: function() {

      var me = this;

      // FILTER (Start) =======================================================================
      var associativeFilter = {
        property: 'voucher_id',
        value: this.record.get('voucher_id')
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
                //   allowBlank   : false
                // },
                {
                xtype: 'textfield',
                name: 'state',
                fieldLabel: me.stateLabel,
                allowBlank: true,
                disabled: true
              },
              {
                xtype: 'textfield',
                name: 'voucher_nbr',
                fieldLabel: me.voucher_nbrLabel,
                allowBlank: true,
                disabled: true
              },

              {
                name: 'customer_id',
                fieldLabel: me.customer_idLabel,
                allowBlank: false,
                xtype: 'buildit-Locator',
                store: Ext.create('Omni.store.Customer', {
                  pageSize: 10
                }),
                displayField: 'display',
                queryField: 'display',
                valueField: 'display',
                itemTpl: '{display}',
                initialValue: me.record.get('display'),
                gotoTarget: 'omni-customers-Inspector'
              },
              {
                xtype: 'buildit-Lookup',
                category: 'VOUCHER_TYPE',
                name: 'voucher_type',
                fieldLabel: me.voucher_typeLabel,
                maxLength: 200,
                minLength: 0,
                allowBlank: true
              },
              {
                xtype: 'currencyfield',
                currencySymbol: null,
                name: 'initial_balance',
                fieldLabel: me.initial_balanceLabel,
                allowBlank: true
              },
              {
                xtype: 'currencyfield',
                currencySymbol: null,
                name: 'current_balance',
                fieldLabel: me.current_balanceLabel,
                allowBlank: true
              },
              {
                xtype: 'datefield',
                name: 'issue_date',
                fieldLabel: me.issue_dateLabel,
                allowBlank: true
              },
              {
                xtype: 'datefield',
                name: 'expiration_date',
                fieldLabel: me.expiration_dateLabel,
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
      title: 'Voucher',
      subtitle: 'Edit Voucher'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.vouchers.Form'
