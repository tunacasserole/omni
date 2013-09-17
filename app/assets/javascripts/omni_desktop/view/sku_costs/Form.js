  Ext.define('Omni.view.sku_costs.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sku_costs-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'sku_cost_id',
      value:      this.record.get('sku_cost_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      sku_cost_idLabel:                       Omni.i18n.model.SkuCost.sku_cost_id,
      displayLabel:                           Omni.i18n.model.SkuCost.display,
      sku_idLabel:                            Omni.i18n.model.SkuCost.sku_id,
      first_costLabel:                        Omni.i18n.model.SkuCost.first_cost,
      last_costLabel:                         Omni.i18n.model.SkuCost.last_cost,
      average_costLabel:                      Omni.i18n.model.SkuCost.average_cost,
      on_hand_unitsLabel:                     Omni.i18n.model.SkuCost.on_hand_units,
      cost_poolLabel:                         Omni.i18n.model.SkuCost.cost_pool,
      retail_poolLabel:                       Omni.i18n.model.SkuCost.retail_pool,
      is_updated_average_costLabel:           Omni.i18n.model.SkuCost.is_updated_average_cost,
      is_destroyedLabel:                      Omni.i18n.model.SkuCost.is_destroyed
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

            // { xtype: 'textfield', name: 'sku_cost_id',                    fieldLabel: this.sku_cost_idLabel                 , allowBlank: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            { name: 'sku_id', fieldLabel: this.sku_idLabel,   allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { xtype: 'textfield', name: 'first_cost',                     fieldLabel: this.first_costLabel                  , allowBlank: true },
            { xtype: 'textfield', name: 'last_cost',                      fieldLabel: this.last_costLabel                   , allowBlank: true },
            { xtype: 'textfield', name: 'average_cost',                   fieldLabel: this.average_costLabel                , allowBlank: true },
            { xtype: 'textfield', name: 'on_hand_units',                  fieldLabel: this.on_hand_unitsLabel               , allowBlank: true },
            { xtype: 'textfield', name: 'cost_pool',                      fieldLabel: this.cost_poolLabel                   , allowBlank: true },
            { xtype: 'textfield', name: 'retail_pool',                    fieldLabel: this.retail_poolLabel                 , allowBlank: true },
            { xtype: 'checkbox', name: 'is_updated_average_cost',        fieldLabel: this.is_updated_average_costLabel     , allowBlank: true },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Sku Costs',
      newTitle: 'New Sku Cost',
      newSubtitle: 'Complete the following to create a new Sku Cost'
    });
    // TITLES (End)

    this.callParent();

  }

});