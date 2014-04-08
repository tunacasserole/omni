Ext.define('Omni.view.receipt_allocations.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-receipt_allocations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store    : Ext.create('Omni.store.ReceiptAllocation'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-receipt_allocations-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-receipt_allocations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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

  // TITLES (Start) ======================================================================
  title    : 'Receipt Allocations',
  subtitle : 'Create and maintain Receipt Allocations',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.receipt_allocation_idLabel,
        //   dataIndex    : 'receipt_allocation_id',
        //   flex         : 1
        // },
        {
          header       : this.receipt_allocation_nbrLabel,
          dataIndex    : 'receipt_allocation_nbr',
          flex         : 1
        },
        // {
        //   header       : this.receipt_detail_idLabel,
        //   dataIndex    : 'receipt_detail_id',
        //   flex         : 1
        // },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : this.units_neededLabel,
          dataIndex    : 'units_needed',
          flex         : 1
        },
        {
          header       : this.units_allocatedLabel,
          dataIndex    : 'units_allocated',
          flex         : 1
        },
        {
          header       : this.units_shippedLabel,
          dataIndex    : 'units_shipped',
          flex         : 1
        },
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
