Ext.define('Omni.view.program_colors.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-program_colors-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      program_style_idLabel:                      Omni.i18n.model.ProgramColor.program_style_id,
      style_color_idLabel:                        Omni.i18n.model.ProgramColor.style_color_id,
      is_activeLabel:                             Omni.i18n.model.ProgramColor.is_active
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
            { name: 'program_style_id',               fieldLabel: this.program_style_idLabel,           allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ProgramStyle',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'program_style_id', itemTpl:'{display}' },
            { name: 'style_color_id',                 fieldLabel: this.style_color_idLabel,             allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.StyleColor',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'style_color_id', itemTpl:'{display}' },
            { name: 'is_active',                      fieldLabel: this.is_activeLabel,                  allowBlank: true,   disabled: false,    xtype: 'checkbox'         }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
