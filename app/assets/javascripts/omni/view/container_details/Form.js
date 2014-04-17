Ext.define('Omni.view.container_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-container_details-Form',

  initComponent:function () {

    var me = this;

    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      container_detail_nbrLabel:                  Omni.i18n.model.ContainerDetail.container_detail_nbr,
      container_idLabel:                          Omni.i18n.model.ContainerDetail.container_id,
      stateLabel:                                 Omni.i18n.model.ContainerDetail.state,
      sku_idLabel:                                Omni.i18n.model.ContainerDetail.sku_id,
      last_activity_dateLabel:                    Omni.i18n.model.ContainerDetail.last_activity_date,
      create_dateLabel:                           Omni.i18n.model.ContainerDetail.create_date,
      selling_unitsLabel:                         Omni.i18n.model.ContainerDetail.selling_units,
      commited_unitsLabel:                        Omni.i18n.model.ContainerDetail.commited_units,
      pack_typeLabel:                             Omni.i18n.model.ContainerDetail.pack_type,
      sell_units_per_packLabel:                   Omni.i18n.model.ContainerDetail.sell_units_per_pack,
      is_quality_holdLabel:                       Omni.i18n.model.ContainerDetail.is_quality_hold,
      is_duty_paidLabel:                          Omni.i18n.model.ContainerDetail.is_duty_paid,
      last_count_dateLabel:                       Omni.i18n.model.ContainerDetail.last_count_date,
      is_auditedLabel:                            Omni.i18n.model.ContainerDetail.is_audited,
      is_inspectedLabel:                          Omni.i18n.model.ContainerDetail.is_inspected,
      Inspection_dateLabel:                       Omni.i18n.model.ContainerDetail.Inspection_date,
      container_inventory_sourceLabel:            Omni.i18n.model.ContainerDetail.container_inventory_source,
      container_detail_sourceLabel:               Omni.i18n.model.ContainerDetail.container_detail_source,
      purchase_detail_idLabel:                    Omni.i18n.model.ContainerDetail.purchase_detail_id,
      supplier_idLabel:                           Omni.i18n.model.ContainerDetail.supplier_id,
      supplier_item_identifierLabel:              Omni.i18n.model.ContainerDetail.supplier_item_identifier,
      lot_identifierLabel:                        Omni.i18n.model.ContainerDetail.lot_identifier,
      job_idLabel:                         Omni.i18n.model.ContainerDetail.job_id,
      receipt_detail_idLabel:                     Omni.i18n.model.ContainerDetail.receipt_detail_id,
      pick_idLabel:                        Omni.i18n.model.ContainerDetail.pick_id,
      origin_container_detail_idLabel:            Omni.i18n.model.ContainerDetail.origin_container_detail_id
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'container_detail_nbr',           fieldLabel: this.container_detail_nbrLabel,       allowBlank: true,   disabled: true,    xtype: 'textfield'        },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: true,    xtype: 'textfield'        },
            // { name: 'container_id',                   fieldLabel: this.container_idLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Container',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'container_id', itemTpl:'{display}' },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'last_activity_date',             fieldLabel: this.last_activity_dateLabel,         allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'create_date',                    fieldLabel: this.create_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Inventory',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'selling_units',                  fieldLabel: this.selling_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'commited_units',                 fieldLabel: this.commited_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pack_type',                      fieldLabel: this.pack_typeLabel,                  allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup', category: 'PACK_TYPE'        },
            { name: 'sell_units_per_pack',            fieldLabel: this.sell_units_per_packLabel,        allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'is_quality_hold',                fieldLabel: this.is_quality_holdLabel,            allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_duty_paid',                   fieldLabel: this.is_duty_paidLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'last_count_date',                fieldLabel: this.last_count_dateLabel,            allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'is_audited',                     fieldLabel: this.is_auditedLabel,                 allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'is_inspected',                   fieldLabel: this.is_inspectedLabel,               allowBlank: true,   disabled: false,    xtype: 'checkbox'         },
            { name: 'Inspection_date',                fieldLabel: this.Inspection_dateLabel,            allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Inventory Source',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'container_inventory_source',     fieldLabel: this.container_inventory_sourceLabel, allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'container_detail_source',        fieldLabel: this.container_detail_sourceLabel,    allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'purchase_detail_id',             fieldLabel: this.purchase_detail_idLabel,         allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.PurchaseDetail',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'purchase_detail_id', itemTpl:'{display}' },
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'supplier_item_identifier',       fieldLabel: this.supplier_item_identifierLabel,   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'lot_identifier',                 fieldLabel: this.lot_identifierLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'job_id',                         fieldLabel: this.job_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Job',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'job_id', itemTpl:'{display}' },
            { name: 'receipt_detail_id',              fieldLabel: this.receipt_detail_idLabel,          allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ReceiptDetail',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'receipt_detail_id', itemTpl:'{display}' }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Inventory Destination',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'pick_id',                 fieldLabel: this.pick_idLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Pick',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'pick_id', itemTpl:'{display}' },
            { name: 'origin_container_detail_id',     fieldLabel: this.origin_container_detail_idLabel, allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.ContainerDetail',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'container_detail_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Container Details',
      newTitle: 'New Container Detail',
      newSubtitle: 'Complete the following to create a new container detail.'
    });
    // TITLES (End)

    this.callParent();
  }

});
