Ext.define('Omni.view.rulesets.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-rulesets-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Ruleset.display,
      ruleset_codeLabel:                          Omni.i18n.model.Ruleset.ruleset_code,
      descriptionLabel:                           Omni.i18n.model.Ruleset.description,
      is_activeLabel:                             Omni.i18n.model.Ruleset.is_active
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'ruleset_code',                   fieldLabel: this.ruleset_codeLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_active',                      fieldLabel: this.is_activeLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
