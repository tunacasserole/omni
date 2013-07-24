Ext.define('Omni.view.sizes.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sizes-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      size_nbrLabel:                              Omni.i18n.model.Size.size_nbr,
      descriptionLabel:                           Omni.i18n.model.Size.description,
      size_typeLabel:                             Omni.i18n.model.Size.size_type,
      short_nameLabel:                            Omni.i18n.model.Size.short_name,
      concatenated_nameLabel:                     Omni.i18n.model.Size.concatenated_name,
      dimension_1Label:                           Omni.i18n.model.Size.dimension_1,
      dimension_2Label:                           Omni.i18n.model.Size.dimension_2
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
            { name: 'size_nbr',                       fieldLabel: this.size_nbrLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'size_type',                      fieldLabel: this.size_typeLabel,                  allowBlank: false,  disabled: false,    xtype: 'buildit-Lookup',      category:   'SIZE_TYPE' },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'concatenated_name',              fieldLabel: this.concatenated_nameLabel,          allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'dimension_1',                    fieldLabel: this.dimension_1Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'dimension_2',                    fieldLabel: this.dimension_2Label,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
