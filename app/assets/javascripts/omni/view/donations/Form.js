Ext.define('Omni.view.donations.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-donations-Form',


  // LABELS (Start) =======================================================================
  donation_idLabel                        : Omni.i18n.model.Donation.donation_id,
  displayLabel                            : Omni.i18n.model.Donation.display,
  account_idLabel                         : Omni.i18n.model.Donation.account_id,
  donation_dateLabel                      : Omni.i18n.model.Donation.donation_date,
  donation_amountLabel                    : Omni.i18n.model.Donation.donation_amount,
  is_destroyedLabel                       : Omni.i18n.model.Donation.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'donation_id',
      value       : this.record.get('donation_id')
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
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Account',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'account_id',
            //   fieldLabel   : me.account_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : true
            // },
            {
              xtype        : 'datefield',
              name         : 'donation_date',
              fieldLabel   : me.donation_dateLabel,
              // maxLength    : 100,
              // minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'donation_amount',
              fieldLabel   : me.donation_amountLabel,
              // maxLength    : 100,
              // minLength    : 0,
              allowBlank   : true
            },
          ]
        }/*,
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
      title       : 'Donation',
      subtitle    : 'Edit Donation'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.donations.Form'
