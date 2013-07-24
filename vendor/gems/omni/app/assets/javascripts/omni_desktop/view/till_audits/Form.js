Ext.define('Omni.view.till_audits.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-till_audits-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      till_idLabel:                               Omni.i18n.model.TillAudit.till_id,
      audit_dateLabel:                            Omni.i18n.model.TillAudit.audit_date,
      tender_idLabel:                             Omni.i18n.model.TillAudit.tender_id,
      system_countLabel:                          Omni.i18n.model.TillAudit.system_count,
      system_amountLabel:                         Omni.i18n.model.TillAudit.system_amount,
      audit_countLabel:                           Omni.i18n.model.TillAudit.audit_count,
      audit_amountLabel:                          Omni.i18n.model.TillAudit.audit_amount,
      gl_interface_dateLabel:                     Omni.i18n.model.TillAudit.gl_interface_date
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
            { name: 'audit_date',                     fieldLabel: this.audit_dateLabel,                 allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'tender_id',                      fieldLabel: this.tender_idLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Tender',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'tender_id', itemTpl:'{display}' },
            { name: 'system_count',                   fieldLabel: this.system_countLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'system_amount',                  fieldLabel: this.system_amountLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'audit_count',                    fieldLabel: this.audit_countLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'audit_amount',                   fieldLabel: this.audit_amountLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'gl_interface_date',              fieldLabel: this.gl_interface_dateLabel,          allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
