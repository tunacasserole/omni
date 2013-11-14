Ext.define('Omni.view.receipt_allocations.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-receipt_allocations-Form',


  // LABELS (Start) =======================================================================
  receipt_allocation_idLabel              : Omni.i18n.model.ReceiptAllocation.receipt_allocation_id,
  receipt_allocation_nbrLabel             : Omni.i18n.model.ReceiptAllocation.receipt_allocation_nbr,
  receipt_detail_idLabel                  : Omni.i18n.model.ReceiptAllocation.receipt_detail_id,
  location_idLabel                        : Omni.i18n.model.ReceiptAllocation.location_id,
  displayLabel                            : Omni.i18n.model.ReceiptAllocation.display,
  stateLabel                              : Omni.i18n.model.ReceiptAllocation.state,
  units_neededLabel                       : Omni.i18n.model.ReceiptAllocation.units_needed,
  units_allocatedLabel                    : Omni.i18n.model.ReceiptAllocation.units_allocated,
  units_shippedLabel                      : Omni.i18n.model.ReceiptAllocation.units_shipped,
  is_destroyedLabel                       : Omni.i18n.model.ReceiptAllocation.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'receipt_allocation_id',
      value       : this.record.get('receipt_allocation_id')
    };
    // FILTER (End)




    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : this.stateLabel,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textfield',
              name         : 'receipt_allocation_nbr',
              fieldLabel   : this.receipt_allocation_nbrLabel,
              allowBlank   : true
            },
            { xtype: 'buildit-Locator', name: 'location_id',              fieldLabel: this.location_idLabel                 , allowBlank: true,   disabled: false,  store: Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : this.displayLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_needed',
              fieldLabel   : this.units_neededLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_allocated',
              fieldLabel   : this.units_allocatedLabel,
              allowBlank   : true
            },
            {
              xtype        : 'numberfield',
              name         : 'units_shipped',
              fieldLabel   : this.units_shippedLabel,
              allowBlank   : true
            }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'ReceiptAllocation',
      subtitle    : 'Edit ReceiptAllocation'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.receipt_allocations.Form'
