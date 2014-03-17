Ext.define('Omni.view.grades.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-grades-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'grade_id',
      value:      this.record.get('grade_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      grade_idLabel:                          Omni.i18n.model.Grade.grade_id,    
      displayLabel:                           Omni.i18n.model.Grade.display,    
      gradesetLabel:                          Omni.i18n.model.Grade.gradeset,    
      grade_nameLabel:                        Omni.i18n.model.Grade.grade_name,    
      short_nameLabel:                        Omni.i18n.model.Grade.short_name,    
      grade_orderLabel:                       Omni.i18n.model.Grade.grade_order,    
      is_destroyedLabel:                      Omni.i18n.model.Grade.is_destroyed    
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

            { xtype: 'textfield', name: 'grade_id',                       fieldLabel: this.grade_idLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'gradeset',                       fieldLabel: this.gradesetLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'grade_name',                     fieldLabel: this.grade_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'short_name',                     fieldLabel: this.short_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'grade_order',                    fieldLabel: this.grade_orderLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Grades',
      newTitle: 'New Grade',
      newSubtitle: 'Complete the following to create a new Grade'
    });
    // TITLES (End)

    this.callParent();
    
  }

});