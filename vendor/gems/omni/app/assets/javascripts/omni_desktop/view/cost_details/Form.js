Ext.define('Omni.view.cost_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-cost_details-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'cost_detail_id',
      value:      this.record.get('cost_detail_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      cost_detail_idLabel:                    Omni.i18n.model.CostDetail.cost_detail_id,    
      displayLabel:                           Omni.i18n.model.CostDetail.display,    
      cost_idLabel:                           Omni.i18n.model.CostDetail.cost_id,    
      cost_detail_nameLabel:                  Omni.i18n.model.CostDetail.cost_detail_name,    
      cost_sourceLabel:                       Omni.i18n.model.CostDetail.cost_source,    
      cost_typeLabel:                         Omni.i18n.model.CostDetail.cost_type,    
      cost_amountLabel:                       Omni.i18n.model.CostDetail.cost_amount,    
      cost_percentLabel:                      Omni.i18n.model.CostDetail.cost_percent,    
      cost_calculationLabel:                  Omni.i18n.model.CostDetail.cost_calculation,
      is_update_inventory_costLabel:          Omni.i18n.model.CostDetail.is_update_inventory_cost,    
      is_update_invoice_costLabel:            Omni.i18n.model.CostDetail.is_update_invoice_cost,    
      is_destroyedLabel:                      Omni.i18n.model.CostDetail.is_destroyed    
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

            // { xtype: 'textfield', name: 'cost_detail_id',                 fieldLabel: this.cost_detail_idLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false, disabled:  true },    
            // { xtype: 'textfield', name: 'cost_id',                        fieldLabel: this.cost_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'cost_detail_name',               fieldLabel: this.cost_detail_nameLabel            , allowBlank: false },    
            { xtype: 'buildit-Lookup', name: 'cost_source',               fieldLabel: this.cost_sourceLabel                 , allowBlank: true, category:   'COST_SOURCE' },            
            { xtype: 'buildit-Lookup', name: 'cost_type',                 fieldLabel: this.cost_typeLabel                   , allowBlank: true, category:   'COST_TYPE' },            
            { xtype: 'buildit-Lookup', name: 'cost_calculation',          fieldLabel: this.cost_calculationLabel            , allowBlank: true, category:   'COST_CALCULATION' },            
            { xtype: 'textfield', name: 'cost_amount',                    fieldLabel: this.cost_amountLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'cost_percent',                   fieldLabel: this.cost_percentLabel                , allowBlank: false }, 
            { xtype: 'checkbox', name: 'is_update_inventory_cost',        fieldLabel: this.is_update_inventory_costLabel    , allowBlank: false },    
            { xtype: 'checkbox', name: 'is_update_invoice_cost',          fieldLabel: this.is_update_invoice_costLabel      , allowBlank: false },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit CostDetails',
      newTitle: 'New Cost Detail',
      newSubtitle: 'Complete the following to create a new Cost Detail'
    });
    // TITLES (End)

    this.callParent();
    
  }

});