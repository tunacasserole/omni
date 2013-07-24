Ext.define('Omni.view.grades.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-grades-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      gradesetLabel:                              Omni.i18n.model.Grade.gradeset,
      grade_nameLabel:                            Omni.i18n.model.Grade.grade_name,
      short_nameLabel:                            Omni.i18n.model.Grade.short_name,
      grade_orderLabel:                           Omni.i18n.model.Grade.grade_order
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
            { name: 'gradeset',                       fieldLabel: this.gradesetLabel,                   allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'GRADESET' },
            { name: 'grade_name',                     fieldLabel: this.grade_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'grade_order',                    fieldLabel: this.grade_orderLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
