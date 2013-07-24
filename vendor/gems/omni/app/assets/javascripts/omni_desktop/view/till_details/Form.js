Ext.define('Omni.view.till_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-till_details-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      till_idLabel:                               Omni.i18n.model.TillDetail.till_id,
      tender_idLabel:                             Omni.i18n.model.TillDetail.tender_id,
      tender_countLabel:                          Omni.i18n.model.TillDetail.tender_count,
      tender_amountLabel:                         Omni.i18n.model.TillDetail.tender_amount
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
            { name: 'tender_id',                      fieldLabel: this.tender_idLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Tender',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'tender_id', itemTpl:'{display}' },
            { name: 'tender_count',                   fieldLabel: this.tender_countLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'tender_amount',                  fieldLabel: this.tender_amountLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
