Ext.define('Omni.view.purchase_costs.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchase_costs-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_cost_id',
      value:      this.record.get('purchase_cost_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      purchase_cost_idLabel:                  Omni.i18n.model.PurchaseCost.purchase_cost_id,
      displayLabel:                           Omni.i18n.model.PurchaseCost.display,
      purchase_detail_idLabel:                Omni.i18n.model.PurchaseCost.purchase_detail_id,
      cost_detail_idLabel:                    Omni.i18n.model.PurchaseCost.cost_detail_id,
      cost_typeLabel:                         Omni.i18n.model.PurchaseCost.cost_type,
      cost_amountLabel:                       Omni.i18n.model.PurchaseCost.cost_amount,
      cost_percentLabel:                      Omni.i18n.model.PurchaseCost.cost_percent,
      estimated_costLabel:                    Omni.i18n.model.PurchaseCost.estimated_cost,
      actual_costLabel:                       Omni.i18n.model.PurchaseCost.actual_cost,
      is_destroyedLabel:                      Omni.i18n.model.PurchaseCost.is_destroyed
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

            // { xtype: 'textfield', name: 'purchase_cost_id',               fieldLabel: this.purchase_cost_idLabel            , allowBlank: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            // { xtype: 'textfield', name: 'purchase_detail_id',             fieldLabel: this.purchase_detail_idLabel          , allowBlank: true },
            // { xtype: 'textfield', name: 'cost_detail_id',                 fieldLabel: this.cost_detail_idLabel              , allowBlank: true },
            { xtype: 'buildit-Lookup', name: 'cost_type',               fieldLabel: this.cost_typeLabel                      , allowBlank: true, category:   'COST_TYPE' },
            { xtype: 'textfield', name: 'cost_amount',                    fieldLabel: this.cost_amountLabel                 , allowBlank: true },
            { xtype: 'textfield', name: 'cost_percent',                   fieldLabel: this.cost_percentLabel                , allowBlank: true },
            { xtype: 'textfield', name: 'estimated_cost',                 fieldLabel: this.estimated_costLabel              , allowBlank: true },
            { xtype: 'textfield', name: 'actual_cost',                    fieldLabel: this.actual_costLabel                 , allowBlank: true },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Purchase Costs',
      newTitle: 'New Purchase Cost',
      newSubtitle: 'Complete the following to create a new Purchase Cost'
    });
    // TITLES (End)

    this.callParent();

  }

});