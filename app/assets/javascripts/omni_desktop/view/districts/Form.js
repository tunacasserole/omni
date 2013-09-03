Ext.define('Omni.view.districts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-districts-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.District.display,
      district_nbrLabel:                          Omni.i18n.model.District.district_nbr,
      descriptionLabel:                           Omni.i18n.model.District.description,
      short_nameLabel:                            Omni.i18n.model.District.short_name,
      region_idLabel:                             Omni.i18n.model.District.region_id,
      user_idLabel:                               Omni.i18n.model.District.user_id
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'district_nbr',                   fieldLabel: this.district_nbrLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'region_id',                      fieldLabel: this.region_idLabel,                  allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Region',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'region_id', itemTpl:'{display}' },
            { name: 'user_id',                        fieldLabel: this.user_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
