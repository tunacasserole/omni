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
            {
              xtype: 'textfield',
              name: 'display',
              fieldLabel: this.displayLabel,
              allowBlank: false
            },     
            {
              xtype: 'textfield',
              name: 'short_name',
              fieldLabel: this.short_nameLabel,
              allowBlank: true
            },     
            {
              xtype: 'textfield',
              name: 'description',
              fieldLabel: this.descriptionLabel,
              allowBlank: true
            },     

          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Cost Models',
      newTitle: 'New Cost Model',
      newSubtitle: 'Complete the following to create a new Cost Model'
    });
    // TITLES (End)

    this.callParent();
    
  }

});