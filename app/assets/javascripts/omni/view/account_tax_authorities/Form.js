Ext.define('Omni.view.account_tax_authorities.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-account_tax_authorities-Form',


  // LABELS (Start) =======================================================================
  account_tax_authority_idLabel: Omni.i18n.model.AccountTaxAuthority.account_tax_authority_id,
  displayLabel: Omni.i18n.model.AccountTaxAuthority.display,
  account_idLabel: Omni.i18n.model.AccountTaxAuthority.account_id,
  tax_authority_idLabel: Omni.i18n.model.AccountTaxAuthority.tax_authority_id,
  is_destroyedLabel: Omni.i18n.model.AccountTaxAuthority.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'account_tax_authority_id',
      value: this.record.get('account_tax_authority_id')
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
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Account',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'account_id',
            //   fieldLabel   : me.account_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : false
            // },
            {
              xtype: 'buildit-Locator',
              store: Ext.create('Omni.store.TaxAuthority', {
                pageSize: 10
              }),
              displayField: 'display',
              itemTpl: '{display}',
              name: 'tax_authority_id',
              fieldLabel: me.tax_authority_idLabel,
              //initialValue: me.record.get('display'),
              gotoTarget: 'omni-grades-Inspector',
              allowBlank: false
            }
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
      title: 'Account Tax Authority',
      subtitle: 'Edit Account Tax Authority'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.account_tax_authorities.Form'
