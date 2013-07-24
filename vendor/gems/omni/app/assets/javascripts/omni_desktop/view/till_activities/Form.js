Ext.define('Omni.view.till_activities.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-till_activities-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      till_idLabel:                               Omni.i18n.model.TillActivity.till_id,
      till_activity_nbrLabel:                     Omni.i18n.model.TillActivity.till_activity_nbr,
      till_activity_dateLabel:                    Omni.i18n.model.TillActivity.till_activity_date,
      till_activity_reasonLabel:                  Omni.i18n.model.TillActivity.till_activity_reason,
      tender_idLabel:                             Omni.i18n.model.TillActivity.tender_id,
      activity_countLabel:                        Omni.i18n.model.TillActivity.activity_count,
      activity_amountLabel:                       Omni.i18n.model.TillActivity.activity_amount,
      payment_idLabel:                            Omni.i18n.model.TillActivity.payment_id,
      user_idLabel:                               Omni.i18n.model.TillActivity.user_id
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
            { name: 'till_id',                        fieldLabel: this.till_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Till',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'till_id', itemTpl:'{display}' },
            { name: 'till_activity_nbr',              fieldLabel: this.till_activity_nbrLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'till_activity_date',             fieldLabel: this.till_activity_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'till_activity_reason',           fieldLabel: this.till_activity_reasonLabel,       allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'tender_id',                      fieldLabel: this.tender_idLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Tender',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'tender_id', itemTpl:'{display}' },
            { name: 'activity_count',                 fieldLabel: this.activity_countLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'activity_amount',                fieldLabel: this.activity_amountLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'payment_id',                     fieldLabel: this.payment_idLabel,                 allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Payment',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'payment_id', itemTpl:'{display}' },
            { name: 'user_id',                        fieldLabel: this.user_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
