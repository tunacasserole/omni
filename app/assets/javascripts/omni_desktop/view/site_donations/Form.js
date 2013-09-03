Ext.define('Omni.view.site_donations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-site_donations-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      site_idLabel:                               Omni.i18n.model.SiteDonation.site_id,
      donation_dateLabel:                         Omni.i18n.model.SiteDonation.donation_date,
      donation_amountLabel:                       Omni.i18n.model.SiteDonation.donation_amount
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'donation_date',                  fieldLabel: this.donation_dateLabel,              allowBlank: false,  disabled: false,    xtype: 'datefield'        },
            { name: 'donation_amount',                fieldLabel: this.donation_amountLabel,            allowBlank: false,  disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
