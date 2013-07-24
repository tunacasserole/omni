Ext.define('Omni.view.costs.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-costs-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'cost_id',
      value:      this.record.get('cost_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      cost_idLabel:                           Omni.i18n.model.Cost.cost_id,    
      displayLabel:                           Omni.i18n.model.Cost.display,    
      short_nameLabel:                        Omni.i18n.model.Cost.short_name,    
      descriptionLabel:                       Omni.i18n.model.Cost.description,    
      is_activeLabel:                         Omni.i18n.model.Cost.is_active,    
      is_destroyedLabel:                      Omni.i18n.model.Cost.is_destroyed    
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

            // { xtype: 'textfield', name: 'cost_id',                        fieldLabel: this.cost_idLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'short_name',                     fieldLabel: this.short_nameLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_active',                      fieldLabel: this.is_activeLabel                   , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Costs',
      newTitle: 'New Cost',
      newSubtitle: 'Complete the following to create a new Cost'
    });
    // TITLES (End)

    this.callParent();
    
  }

});