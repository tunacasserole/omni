Ext.define('Omni.view.receipt_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-receipt_details-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'receipt_detail_id',
      value:      this.record.get('receipt_detail_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel:                             Omni.i18n.model.ReceiptDetail.state,
      displayLabel:                           Omni.i18n.model.ReceiptDetail.display,
      receipt_idLabel:                        Omni.i18n.model.ReceiptDetail.receipt_id,
      sku_idLabel:                            Omni.i18n.model.ReceiptDetail.sku_id,
      sku_aliasLabel:                         Omni.i18n.model.ReceiptDetail.sku_alias,
      allocation_profile_idLabel:             Omni.i18n.model.ReceiptDetail.allocation_profile_id,
      receipt_line_nbrLabel:                  Omni.i18n.model.ReceiptDetail.receipt_line_nbr,
      purchase_detail_idLabel:                Omni.i18n.model.ReceiptDetail.purchase_detail_id,
      received_unitsLabel:                    Omni.i18n.model.ReceiptDetail.received_units,
      receipt_pack_sizeLabel:                 Omni.i18n.model.ReceiptDetail.receipt_pack_size,
      receipt_pack_typeLabel:                 Omni.i18n.model.ReceiptDetail.receipt_pack_type,
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
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            { xtype: 'textfield', name: 'receipt_line_nbr',               fieldLabel: this.receipt_line_nbrLabel            , allowBlank: true },
            { name: 'sku_id',                    fieldLabel: this.sku_idLabel, allowBlank: true,   xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'allocation_profile_id',     fieldLabel: this.allocation_profile_idLabel,             allowBlank: true,   xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.AllocationProfile',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'allocation_profile_id', itemTpl:'{display}' },
            { xtype: 'textfield', name: 'sku_alias',                        fieldLabel: this.sku_aliasLabel                     , allowBlank: true },
            { xtype: 'numberfield', name: 'received_units',                 fieldLabel: this.received_unitsLabel              , allowBlank: true },
            { xtype: 'numberfield', name: 'receipt_pack_size',                 fieldLabel: this.receipt_pack_sizeLabel              , allowBlank: true },
            { xtype: 'buildit-Lookup', name: 'receipt_pack_type',             fieldLabel: this.receipt_pack_typeLabel               , allowBlank: true,  category:   'RECEIPT_PACK_TYPE' },
            ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit ReceiptDetails',
      newTitle: 'New Receipt Detail',
      newSubtitle: 'Complete the following to create a new Receipt Detail'
    });
    // TITLES (End)

    this.callParent();

  }

});
