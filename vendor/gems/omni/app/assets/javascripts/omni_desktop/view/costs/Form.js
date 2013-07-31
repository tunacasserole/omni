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
      first_costLabel:                        Omni.i18n.model.Cost.first_cost,    
      last_costLabel:                         Omni.i18n.model.Cost.last_cost,    
      average_costLabel:                      Omni.i18n.model.Cost.average_cost,    
      on_hand_unitsLabel:                     Omni.i18n.model.Cost.on_hand_units,    
      cost_poolLabel:                         Omni.i18n.model.Cost.cost_pool,    
      retail_poolLabel:                       Omni.i18n.model.Cost.retail_pool,    
      is_updated_average_costLabel:           Omni.i18n.model.Cost.is_updated_average_cost,    
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

            // { xtype: 'textfield', name: 'cost_id',                        fieldLabel: this.cost_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'first_cost',                     fieldLabel: this.first_costLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'last_cost',                      fieldLabel: this.last_costLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'average_cost',                   fieldLabel: this.average_costLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'on_hand_units',                  fieldLabel: this.on_hand_unitsLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'cost_pool',                      fieldLabel: this.cost_poolLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'retail_pool',                    fieldLabel: this.retail_poolLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'is_updated_average_cost',        fieldLabel: this.is_updated_average_costLabel     , allowBlank: false },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
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