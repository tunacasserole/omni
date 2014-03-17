Ext.define('Omni.view.picks.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-picks-Form',



  initComponent:function () {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      stateLabel:                                 Omni.i18n.model.Pick.state,
      pick_nbrLabel:                       Omni.i18n.model.Pick.pick_nbr,
      fulfillment_location_idLabel:               Omni.i18n.model.Pick.fulfillment_location_id,
      job_idLabel:                         Omni.i18n.model.Pick.job_id,
      request_unitsLabel:                         Omni.i18n.model.Pick.request_units,
      complete_unitsLabel:                        Omni.i18n.model.Pick.complete_units,
      release_dateLabel:                          Omni.i18n.model.Pick.release_date,
      start_dateLabel:                            Omni.i18n.model.Pick.start_date,
      complete_dateLabel:                         Omni.i18n.model.Pick.complete_date,
      ship_dateLabel:                             Omni.i18n.model.Pick.ship_date
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
            { name: 'state',                          fieldLabel: this.stateLabel,                      allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'pick_nbr',                fieldLabel: this.pick_nbrLabel,            allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'fulfillment_location_id',        fieldLabel: this.fulfillment_location_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'job_id',                  fieldLabel: this.job_idLabel,              allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Job',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'job_id', itemTpl:'{display}' },
            { name: 'request_units',                  fieldLabel: this.request_unitsLabel,              allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'complete_units',                 fieldLabel: this.complete_unitsLabel,             allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Pick Tracking',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'release_date',                   fieldLabel: this.release_dateLabel,               allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'start_date',                     fieldLabel: this.start_dateLabel,                 allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'complete_date',                  fieldLabel: this.complete_dateLabel,              allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'ship_date',                      fieldLabel: this.ship_dateLabel,                  allowBlank: true,   disabled: false,    xtype: 'datefield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)

    // TITLES (Start) =======================================================================
    Ext.applyIf(this, {
      title:         'Pick Ticket',
      subtitle:      'An order to pick a product for shipment to a customer',
      newTitle:      'Pick Ticket',
      newSubtitle:   undefined
    });
    // TITLES (End)



    this.callParent();
  }

});
