Ext.define('Omni.view.categories.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-categories-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'category_id',
      value:      this.record.get('category_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      category_idLabel:                       Omni.i18n.model.Category.category_id,    
      displayLabel:                           Omni.i18n.model.Category.display,    
      category_codeLabel:                     Omni.i18n.model.Category.category_code,    
      descriptionLabel:                       Omni.i18n.model.Category.description,    
      category_typeLabel:                     Omni.i18n.model.Category.category_type,    
      is_destroyedLabel:                      Omni.i18n.model.Category.is_destroyed    
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

            { xtype: 'textfield', name: 'category_id',                    fieldLabel: this.category_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'category_code',                  fieldLabel: this.category_codeLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'category_type',                  fieldLabel: this.category_typeLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Categories',
      newTitle: 'New Category',
      newSubtitle: 'Complete the following to create a new Category'
    });
    // TITLES (End)

    this.callParent();
    
  }

});