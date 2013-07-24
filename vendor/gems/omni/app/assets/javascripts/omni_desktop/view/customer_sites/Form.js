Ext.define('Omni.view.customer_sites.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-customer_sites-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      customer_idLabel:                           Omni.i18n.model.CustomerSite.customer_id,
      site_idLabel:                               Omni.i18n.model.CustomerSite.site_id,
      commentLabel:                               Omni.i18n.model.CustomerSite.comment,
      is_site_contactLabel:                       Omni.i18n.model.CustomerSite.is_site_contact,
      is_teacherLabel:                            Omni.i18n.model.CustomerSite.is_teacher,
      is_administratorLabel:                      Omni.i18n.model.CustomerSite.is_administrator
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
            { name: 'customer_id',                    fieldLabel: this.customer_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Customer',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'customer_id', itemTpl:'{display}' },
            { name: 'site_id',                        fieldLabel: this.site_idLabel,                    allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Site',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'site_id', itemTpl:'{display}' },
            { name: 'comment',                        fieldLabel: this.commentLabel,                    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_site_contact',                fieldLabel: this.is_site_contactLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_teacher',                     fieldLabel: this.is_teacherLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_administrator',               fieldLabel: this.is_administratorLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
