Ext.define('Omni.view.adjustments.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-adjustments-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      adjustment_nbrLabel:                        Omni.i18n.model.Adjustment.adjustment_nbr,
      stateLabel:                                 Omni.i18n.model.Adjustment.state,
      location_idLabel:                           Omni.i18n.model.Adjustment.location_id,
      sku_idLabel:                                Omni.i18n.model.Adjustment.sku_id,
      bin_idLabel:                                Omni.i18n.model.Adjustment.bin_id,
      descriptionLabel:                           Omni.i18n.model.Adjustment.description,
      request_dateLabel:                          Omni.i18n.model.Adjustment.request_date,
      request_user_idLabel:                       Omni.i18n.model.Adjustment.request_user_id,
      post_dateLabel:                             Omni.i18n.model.Adjustment.post_date,
      post_user_idLabel:                          Omni.i18n.model.Adjustment.post_user_id,
      cancel_dateLabel:                           Omni.i18n.model.Adjustment.cancel_date,
      cancel_user_idLabel:                        Omni.i18n.model.Adjustment.cancel_user_id,
      adjustment_reason_idLabel:                  Omni.i18n.model.Adjustment.adjustment_reason_id,
      adjustment_unitsLabel:                      Omni.i18n.model.Adjustment.adjustment_units,
      adjustment_costLabel:                       Omni.i18n.model.Adjustment.adjustment_cost
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
            { name: 'adjustment_nbr',                 fieldLabel: this.adjustment_nbrLabel,             allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'sku_id',                         fieldLabel: this.sku_idLabel,                     allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },
            { name: 'bin_id',                         fieldLabel: this.bin_idLabel,                     allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Bin',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'bin_id', itemTpl:'{display}' },
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'request_date',                   fieldLabel: this.request_dateLabel,               allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'request_user_id',                fieldLabel: this.request_user_idLabel,            allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'post_date',                      fieldLabel: this.post_dateLabel,                  allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'post_user_id',                   fieldLabel: this.post_user_idLabel,               allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'cancel_date',                    fieldLabel: this.cancel_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'cancel_user_id',                 fieldLabel: this.cancel_user_idLabel,             allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 10}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}' },
            { name: 'adjustment_reason_id',           fieldLabel: this.adjustment_reason_idLabel,       allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.AdjustmentReason',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'adjustment_reason_id', itemTpl:'{display}' },
            { name: 'adjustment_units',               fieldLabel: this.adjustment_unitsLabel,           allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'adjustment_cost',                fieldLabel: this.adjustment_costLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Adjustment',
      subtitle:      'A request to adjustment the unit or cost value of inventory',
      newTitle:      'Adjustment',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
