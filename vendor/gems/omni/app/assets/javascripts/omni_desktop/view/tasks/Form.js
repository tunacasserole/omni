Ext.define('Omni.view.tasks.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tasks-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'task_id',
      value:      this.record.get('task_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      task_idLabel:                          Omni.i18n.model.Task.task_id,    
      project_idLabel:                        Omni.i18n.model.Task.project_id,    
      task_nbrLabel:                         Omni.i18n.model.Task.task_nbr,    
      task_typeLabel:                        Omni.i18n.model.Task.task_type,    
      stateLabel:                             Omni.i18n.model.Task.state,    
      displayLabel:                           Omni.i18n.model.Task.display,    
      descriptionLabel:                       Omni.i18n.model.Task.description,    
      importanceLabel:                        Omni.i18n.model.Task.importance,    
      pointsLabel:                            Omni.i18n.model.Task.points,    
      assignee_idLabel:                       Omni.i18n.model.Task.assignee_id,    
      creator_idLabel:                        Omni.i18n.model.Task.creator_id,    
      target_releaseLabel:                    Omni.i18n.model.Task.target_release,    
      actual_releaseLabel:                    Omni.i18n.model.Task.actual_release,    
      is_destroyedLabel:                      Omni.i18n.model.Task.is_destroyed    
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

            // { xtype: 'textfield', name: 'task_id',                       fieldLabel: this.task_idLabel                    , allowBlank: true },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel, disabled: true , allowBlank: true },    
            { xtype: 'textfield', name: 'task_nbr',  disabled: true,     fieldLabel: this.task_nbrLabel                   , allowBlank: true },                
            { name: 'project_id', fieldLabel: this.project_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Project',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'project_id', itemTpl:'{display}',initialValue: this.record.get('project_display'), },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },                
            { xtype: 'buildit-Lookup', name: 'task_type', category: 'TASK_TYPE', fieldLabel: this.task_typeLabel                  , allowBlank: true },    
            { xtype: 'textarea', rows: 3, name: 'description',                    fieldLabel: this.descriptionLabel    , allowBlank: true },    
            { xtype: 'buildit-Lookup', category: 'IMPORTANCE', name: 'importance', fieldLabel: this.importanceLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'points',                         fieldLabel: this.pointsLabel                      , allowBlank: true },    
            { name: 'assignee_id', fieldLabel: this.assignee_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('assignee_display'), },
            { name: 'creator_id', fieldLabel: this.creator_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('creator_display'), },            
            { xtype: 'datefield', name: 'target_release',                 fieldLabel: this.target_releaseLabel              , allowBlank: true },    
            { xtype: 'datefield', name: 'actual_release',                 fieldLabel: this.actual_releaseLabel              , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Tasks',
      newTitle: 'New Task',
      newSubtitle: 'Complete the following to create a new Task'
    });
    // TITLES (End)

    this.callParent();
    
  }

});