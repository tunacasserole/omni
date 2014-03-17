Ext.define('Omni.view.labels.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-labels-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Label.display,
      descriptionLabel:                           Omni.i18n.model.Label.description,
      label_typeLabel:                            Omni.i18n.model.Label.label_type,
      short_nameLabel:                            Omni.i18n.model.Label.short_name,
      displayLabel:                               Omni.i18n.model.Label.display
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'label_type',                     fieldLabel: this.label_typeLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Lookup',      category:   'LABEL_TYPE' },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
