Ext.define('Omni.view.purchase_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchase_details-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_detail_id',
      value:      this.record.get('purchase_detail_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      purchase_detail_idLabel:                Omni.i18n.model.PurchaseDetail.purchase_detail_id,    
      purchase_idLabel:                       Omni.i18n.model.PurchaseDetail.purchase_id,    
      displayLabel:                           Omni.i18n.model.PurchaseDetail.display,    
      stateLabel:                             Omni.i18n.model.PurchaseDetail.state,    
      purchase_line_nbrLabel:                 Omni.i18n.model.PurchaseDetail.purchase_line_nbr,    
      sku_idLabel:                            Omni.i18n.model.PurchaseDetail.sku_id,    
      cost_idLabel:                           Omni.i18n.model.PurchaseDetail.cost_id,    
      descriptionLabel:                       Omni.i18n.model.PurchaseDetail.description,    
      supplier_costLabel:                     Omni.i18n.model.PurchaseDetail.supplier_cost,    
      invoice_costLabel:                      Omni.i18n.model.PurchaseDetail.invoice_cost,    
      inventory_costLabel:                    Omni.i18n.model.PurchaseDetail.inventory_cost,    
      extra_costLabel:                        Omni.i18n.model.PurchaseDetail.extra_cost,    
      supplier_item_identifierLabel:          Omni.i18n.model.PurchaseDetail.supplier_item_identifier,    
      color_nameLabel:                        Omni.i18n.model.PurchaseDetail.color_name,    
      size_nameLabel:                         Omni.i18n.model.PurchaseDetail.size_name,    
      sku_aliasLabel:                         Omni.i18n.model.PurchaseDetail.sku_alias,    
      units_orderedLabel:                     Omni.i18n.model.PurchaseDetail.units_ordered,    
      order_pack_sizeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_size,    
      order_pack_typeLabel:                   Omni.i18n.model.PurchaseDetail.order_pack_type,    
      order_cost_unitsLabel:                  Omni.i18n.model.PurchaseDetail.order_cost_units,    
      order_multiple_typeLabel:               Omni.i18n.model.PurchaseDetail.order_multiple_type,    
      order_multipleLabel:                    Omni.i18n.model.PurchaseDetail.order_multiple,    
      units_approvedLabel:                    Omni.i18n.model.PurchaseDetail.units_approved,    
      units_cancelledLabel:                   Omni.i18n.model.PurchaseDetail.units_cancelled,    
      is_destroyedLabel:                      Omni.i18n.model.PurchaseDetail.is_destroyed    
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

            // { xtype: 'textfield', name: 'purchase_detail_id',             fieldLabel: this.purchase_detail_idLabel          , allowBlank: true },    
            // { xtype: 'textfield', name: 'purchase_id',                    fieldLabel: this.purchase_idLabel                 , allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'purchase_line_nbr',              fieldLabel: this.purchase_line_nbrLabel           , allowBlank: true },    
            { xtype: 'buildit-Locator',   name: 'sku_id',          fieldLabel: this.sku_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { xtype: 'buildit-Locator',   name: 'cost_id',          fieldLabel: this.cost_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Cost',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'cost_id', itemTpl:'{display}' },
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },    
            { xtype: 'textfield', name: 'supplier_cost',                  fieldLabel: this.supplier_costLabel               , allowBlank: true },    
            { xtype: 'textfield', name: 'invoice_cost',                   fieldLabel: this.invoice_costLabel                , allowBlank: true },    
            { xtype: 'textfield', name: 'inventory_cost',                 fieldLabel: this.inventory_costLabel              , allowBlank: true },    
            { xtype: 'textfield', name: 'extra_cost',                     fieldLabel: this.extra_costLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'supplier_item_identifier',       fieldLabel: this.supplier_item_identifierLabel    , allowBlank: true },    
            { xtype: 'textfield', name: 'color_name',                     fieldLabel: this.color_nameLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'size_name',                      fieldLabel: this.size_nameLabel                   , allowBlank: true },    
            { xtype: 'textfield', name: 'sku_alias',                      fieldLabel: this.sku_aliasLabel                   , allowBlank: true },    
            { xtype: 'textfield', name: 'units_ordered',                  fieldLabel: this.units_orderedLabel               , allowBlank: true },    
            { xtype: 'textfield', name: 'order_pack_size',                fieldLabel: this.order_pack_sizeLabel             , allowBlank: true },    
            { xtype: 'buildit-Lookup', name: 'order_pack_type',               fieldLabel: this.order_pack_typeLabel         , allowBlank: true, category:   'PACK_TYPE' },            
            { xtype: 'textfield', name: 'order_cost_units',               fieldLabel: this.order_cost_unitsLabel            , allowBlank: true },    
            { xtype: 'buildit-Lookup', name: 'order_multiple_type',               fieldLabel: this.order_multiple_typeLabel         , allowBlank: true, category:   'ORDER_MULTIPLE_TYPE' },            
            { xtype: 'textfield', name: 'order_multiple',                 fieldLabel: this.order_multipleLabel              , allowBlank: true },    
            { xtype: 'textfield', name: 'units_approved',                 fieldLabel: this.units_approvedLabel              , allowBlank: true },    
            { xtype: 'textfield', name: 'units_cancelled',                fieldLabel: this.units_cancelledLabel             , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit PurchaseDetails',
      newTitle: 'New Purchase Detail',
      newSubtitle: 'Complete the following to create a new Purchase Detail'
    });
    // TITLES (End)

    this.callParent();
    
  }

});