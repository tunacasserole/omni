Ext.define('Omni.view.classifications.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-classifications-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.Classification.display,
      classification_nbrLabel:                    Omni.i18n.model.Classification.classification_nbr,
      descriptionLabel:                           Omni.i18n.model.Classification.description,
      short_nameLabel:                            Omni.i18n.model.Classification.short_name,
      planner_user_idLabel:                       Omni.i18n.model.Classification.planner_user_id,
      department_idLabel:                         Omni.i18n.model.Classification.department_id
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
            { name: 'classification_nbr',             fieldLabel: this.classification_nbrLabel,         allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'short_name',                     fieldLabel: this.short_nameLabel,                 allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'planner_user_id',                fieldLabel: this.planner_user_idLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'department_id',                  fieldLabel: this.department_idLabel,              allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Department',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'department_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Class',
      newTitle: 'New Class',
      newSubtitle: 'Complete the following to create a new Class.'
    });
    // TITLES (End)

    this.callParent();
  }

});
