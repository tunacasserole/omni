Ext.define('Omni.view.categories.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-categories-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Category.display,
      category_codeLabel:                         Omni.i18n.model.Category.category_code,
      descriptionLabel:                           Omni.i18n.model.Category.description,
      category_typeLabel:                         Omni.i18n.model.Category.category_type
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
            { name: 'category_code',                  fieldLabel: this.category_codeLabel,              allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'category_type',                  fieldLabel: this.category_typeLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'CATEGORY_TYPE' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
