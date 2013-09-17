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
      receipt_detail_idLabel:                 Omni.i18n.model.ReceiptDetail.receipt_detail_id,
      displayLabel:                           Omni.i18n.model.ReceiptDetail.display,
      receipt_idLabel:                        Omni.i18n.model.ReceiptDetail.receipt_id,
      receipt_line_nbrLabel:                  Omni.i18n.model.ReceiptDetail.receipt_line_nbr,
      purchase_detail_idLabel:                Omni.i18n.model.ReceiptDetail.purchase_detail_id,
      received_unitsLabel:                    Omni.i18n.model.ReceiptDetail.received_units,
      stateLabel:                             Omni.i18n.model.ReceiptDetail.state,
      is_destroyedLabel:                      Omni.i18n.model.ReceiptDetail.is_destroyed
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

            // { xtype: 'textfield', name: 'receipt_detail_id',              fieldLabel: this.receipt_detail_idLabel           , allowBlank: true },
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },
            // { xtype: 'textfield', name: 'receipt_id',                     fieldLabel: this.receipt_idLabel                  , allowBlank: true },
            { xtype: 'textfield', name: 'receipt_line_nbr',               fieldLabel: this.receipt_line_nbrLabel            , allowBlank: true },
            // { xtype: 'textfield', name: 'purchase_detail_id',             fieldLabel: this.purchase_detail_idLabel          , allowBlank: true },
            { xtype: 'textfield', name: 'received_units',                 fieldLabel: this.received_unitsLabel              , allowBlank: true },
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }
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