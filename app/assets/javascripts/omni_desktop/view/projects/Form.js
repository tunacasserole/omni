Ext.define('Omni.view.projects.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-projects-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'project_id',
      value:      this.record.get('project_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      project_idLabel:                        Omni.i18n.model.Project.project_id,    
      stateLabel:                             Omni.i18n.model.Project.state,    
      displayLabel:                           Omni.i18n.model.Project.display,    
      descriptionLabel:                       Omni.i18n.model.Project.description,    
      release_dateLabel:                      Omni.i18n.model.Project.release_date,    
      is_destroyedLabel:                      Omni.i18n.model.Project.is_destroyed    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */
            // { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel  , disabled: true     , allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'datefield', name: 'release_date',                   fieldLabel: this.release_dateLabel                , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Projects',
      newTitle: 'New Project',
      newSubtitle: 'Complete the following to create a new Project'
    });
    // TITLES (End)

    this.callParent();
    
  }

});