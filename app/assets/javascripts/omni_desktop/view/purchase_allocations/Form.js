Ext.define('Omni.view.purchase_allocations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-purchase_allocations-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'purchase_allocation_id',
      value:      this.record.get('purchase_allocation_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      purchase_allocation_idLabel:            Omni.i18n.model.PurchaseAllocation.purchase_allocation_id,
      purchase_detail_idLabel:                Omni.i18n.model.PurchaseAllocation.purchase_detail_id,
      allocation_idLabel:                     Omni.i18n.model.PurchaseAllocation.allocation_id,
      location_idLabel:                       Omni.i18n.model.PurchaseAllocation.location_id,
      displayLabel:                           Omni.i18n.model.PurchaseAllocation.display,
      purchase_allocation_nbrLabel:           Omni.i18n.model.PurchaseAllocation.purchase_allocation_nbr,
      stateLabel:                             Omni.i18n.model.PurchaseAllocation.state,
      units_neededLabel:                      Omni.i18n.model.PurchaseAllocation.units_needed,
      units_allocatedLabel:                   Omni.i18n.model.PurchaseAllocation.units_allocated,
      units_shippedLabel:                     Omni.i18n.model.PurchaseAllocation.units_shipped,
      is_destroyedLabel:                      Omni.i18n.model.PurchaseAllocation.is_destroyed
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

            // { xtype: 'textfield', name: 'purchase_allocation_id',         fieldLabel: this.purchase_allocation_idLabel      , allowBlank: true },
            // { xtype: 'textfield', name: 'purchase_detail_id',             fieldLabel: this.purchase_detail_idLabel          , allowBlank: true },
            { xtype: 'buildit-Locator',   name: 'allocation_id',          fieldLabel: this.allocation_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Allocation',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'allocation_id', itemTpl:'{display}' },
            { xtype: 'buildit-Locator',   name: 'location_id',            fieldLabel: this.location_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            { xtype: 'textfield', name: 'purchase_allocation_nbr',        fieldLabel: this.purchase_allocation_nbrLabel     , allowBlank: true },
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },
            { xtype: 'textfield', name: 'units',                          fieldLabel: this.unitsLabel                       , allowBlank: true },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Purchase Allocations',
      newTitle: 'New Purchase Allocation',
      newSubtitle: 'Complete the following to create a new Purchase Allocation'
    });
    // TITLES (End)

    this.callParent();

  }

});