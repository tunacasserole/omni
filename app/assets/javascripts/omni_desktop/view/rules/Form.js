Ext.define('Omni.view.rules.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-rules-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      ruleset_idLabel:                            Omni.i18n.model.Rule.ruleset_id,
      rule_typeLabel:                             Omni.i18n.model.Rule.rule_type,
      input_attributeLabel:                       Omni.i18n.model.Rule.input_attribute,
      model_nameLabel:                            Omni.i18n.model.Rule.model_name,
      attribute_nameLabel:                        Omni.i18n.model.Rule.attribute_name,
      rule_actionLabel:                           Omni.i18n.model.Rule.rule_action,
      is_activeLabel:                             Omni.i18n.model.Rule.is_active,
      rule_seqLabel:                              Omni.i18n.model.Rule.rule_seq
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
            { name: 'ruleset_id',                     fieldLabel: this.ruleset_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Ruleset',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'ruleset_id', itemTpl:'{display}' },
            { name: 'rule_type',                      fieldLabel: this.rule_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'RULE_TYPE' },
            { name: 'input_attribute',                fieldLabel: this.input_attributeLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'model_name',                     fieldLabel: this.model_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'attribute_name',                 fieldLabel: this.attribute_nameLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'rule_action',                    fieldLabel: this.rule_actionLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'RULE_ACTION' },
            { name: 'is_active',                      fieldLabel: this.is_activeLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'rule_seq',                       fieldLabel: this.rule_seqLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
