Ext.define('Omni.view.subclasses.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-subclasses-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Subclass.display,
      subclass_nbrLabel:                          Omni.i18n.model.Subclass.subclass_nbr,
      descriptionLabel:                           Omni.i18n.model.Subclass.description,
      short_nameLabel:                            Omni.i18n.model.Subclass.short_name,
      classification_idLabel:                     Omni.i18n.model.Subclass.classification_id,
      markup_percent_high_limitLabel:             Omni.i18n.model.Subclass.markup_percent_high_limit,
      markup_percent_low_limitLabel:              Omni.i18n.model.Subclass.markup_percent_low_limit
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,     xtype: 'textfield'        },
            { name: 'subclass_nbr',                   fieldLabel: this.subclass_nbrLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'classification_id',              fieldLabel: this.classification_idLabel,          allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Classification',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'classification_id', itemTpl:'{display}' },
            { name: 'markup_percent_high_limit',      fieldLabel: this.markup_percent_high_limitLabel,  allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'markup_percent_low_limit',       fieldLabel: this.markup_percent_low_limitLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Subclasses',
      newTitle: 'New Subclass',
      newSubtitle: 'Complete the following to create a new subclass.'
    });
    // TITLES (End)    
    this.callParent();
  }

});
