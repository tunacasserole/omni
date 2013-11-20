Ext.define('Omni.view.size_groups.Form', {
  extend:'Buildit.ux.Form',
  alias:'widget.omni-size_groups-Form',

  initComponent:function () {
    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.SizeGroup.display,
      size_group_nbrLabel:                        Omni.i18n.model.SizeGroup.size_group_nbr,
      descriptionLabel:                           Omni.i18n.model.SizeGroup.description,
      short_nameLabel:                            Omni.i18n.model.SizeGroup.short_name,
      concatenated_nameLabel:                     Omni.i18n.model.SizeGroup.concatenated_name
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
            { name: 'size_group_nbr',                 fieldLabel: this.size_group_nbrLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'concatenated_name',              fieldLabel: this.concatenated_nameLabel,          allowBlank: false,  disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Size Group',
      newTitle: 'New Size Group',
      newSubtitle: 'Complete the following to create a new Size Group.'
    });
    // TITLES (End)
    this.callParent();

  }

});
