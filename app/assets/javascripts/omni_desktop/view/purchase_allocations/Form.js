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

            { xtype             : 'textfield',
              name              : 'purchase_allocation_nbr',
              fieldLabel        : this.purchase_allocation_nbrLabel,
              allowBlank        : true
            },
            { xtype             : 'buildit-Locator',
              name              : 'location_id',
              fieldLabel        : this.location_idLabel,
              allowBlank        : true,
              store             : Ext.create('Omni.store.Location',{pageSize: 50}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'location_id',
              itemTpl           : '{display}'
            },
            { xtype             : 'textfield',
              name              : 'state',
              fieldLabel        : this.stateLabel,
              allowBlank        : true,
              disabled          : true
            },
            { xtype             : 'textfield',
              name              : 'units_needed',
              fieldLabel        : this.units_neededLabel,
              disabled          : true,
              allowBlank        : true
            },
            { xtype             : 'numberfield',
              name              : 'units_allocated',
              fieldLabel        : this.units_allocatedLabel,
              minValue          : 0,
              allowBlank        : false
            },
            { xtype             : 'textfield',
              name              : 'units_shipped',
              fieldLabel        : this.units_shippedLabel,
              disabled          : true,
              allowBlank        : true
            }
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