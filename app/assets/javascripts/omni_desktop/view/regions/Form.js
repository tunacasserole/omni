Ext.define('Omni.view.regions.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-regions-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Region.display,
      region_nbrLabel:                            Omni.i18n.model.Region.region_nbr,
      descriptionLabel:                           Omni.i18n.model.Region.description,
      short_nameLabel:                            Omni.i18n.model.Region.short_name,
      company_idLabel:                            Omni.i18n.model.Region.company_id,
      user_idLabel:                               Omni.i18n.model.Region.user_id
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
            { name: 'region_nbr',                     fieldLabel: this.region_nbrLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'company_id',                     fieldLabel: this.company_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Company',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'company_id', itemTpl:'{display}' },
            { name: 'user_id',                        fieldLabel: this.user_idLabel,                    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
