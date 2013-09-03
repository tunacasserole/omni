Ext.define('Omni.view.program_products.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-program_products-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      program_idLabel:                            Omni.i18n.model.ProgramProduct.program_id,
      product_idLabel:                            Omni.i18n.model.ProgramProduct.product_id,
      from_grade_idLabel:                         Omni.i18n.model.ProgramProduct.from_grade_id,
      thru_grade_idLabel:                         Omni.i18n.model.ProgramProduct.thru_grade_id,
      uniform_sourceLabel:                        Omni.i18n.model.ProgramProduct.uniform_source,
      is_required_maleLabel:                      Omni.i18n.model.ProgramProduct.is_required_male,
      is_required_femaleLabel:                    Omni.i18n.model.ProgramProduct.is_required_female,
      is_optional_maleLabel:                      Omni.i18n.model.ProgramProduct.is_optional_male,
      is_optional_femaleLabel:                    Omni.i18n.model.ProgramProduct.is_optional_female,
      is_includes_logoLabel:                      Omni.i18n.model.ProgramProduct.is_includes_logo,
      discount_percentLabel:                      Omni.i18n.model.ProgramProduct.discount_percent,
      is_activeLabel:                             Omni.i18n.model.ProgramProduct.is_active
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
            { name: 'program_id',                     fieldLabel: this.program_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Program',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'program_id', itemTpl:'{display}' },
            { name: 'product_id',                     fieldLabel: this.product_idLabel,                 allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Product',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'product_id', itemTpl:'{display}' },
            { name: 'from_grade_id',                  fieldLabel: this.from_grade_idLabel,              allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Grade',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'grade_id', itemTpl:'{display}' },
            { name: 'thru_grade_id',                  fieldLabel: this.thru_grade_idLabel,              allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Grade',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'grade_id', itemTpl:'{display}' },
            { name: 'uniform_source',                 fieldLabel: this.uniform_sourceLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'UNIFORM_SOURCE' },
            { name: 'is_required_male',               fieldLabel: this.is_required_maleLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_required_female',             fieldLabel: this.is_required_femaleLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_optional_male',               fieldLabel: this.is_optional_maleLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_optional_female',             fieldLabel: this.is_optional_femaleLabel,         allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_includes_logo',               fieldLabel: this.is_includes_logoLabel,           allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'discount_percent',               fieldLabel: this.discount_percentLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_active',                      fieldLabel: this.is_activeLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
