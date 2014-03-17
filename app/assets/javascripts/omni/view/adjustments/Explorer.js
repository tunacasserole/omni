Ext.define('Omni.view.adjustments.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-adjustments-Explorer',


    // EXPLORER CONFIG (Start) ===============================================================
  allowFind:      true,

  store:          Ext.create('Omni.store.Adjustment'),

  contextMenuConfig:{
    xtype:        'omni-adjustments-ExplorerContextMenu',
  },

  inspectorConfig: {
    xtype:        'omni-adjustments-Inspector'
  },

  newForms:[{
    xtype:        'omni-adjustments-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)

    // LABELS (Start) ======================================================================
  adjustment_nbrLabel:                      Omni.i18n.model.Adjustment.adjustment_nbr,
  stateLabel:                               Omni.i18n.model.Adjustment.state,
  location_displayLabel:                    Omni.i18n.model.Adjustment.location_display,
  sku_displayLabel:                         Omni.i18n.model.Adjustment.sku_display,
  request_dateLabel:                        Omni.i18n.model.Adjustment.request_date,
  request_user_displayLabel:                Omni.i18n.model.Adjustment.request_user_display,
  post_dateLabel:                           Omni.i18n.model.Adjustment.post_date,
  post_user_displayLabel:                   Omni.i18n.model.Adjustment.post_user_display,
  adjustment_reason_displayLabel:           Omni.i18n.model.Adjustment.adjustment_reason_display,
  // LABELS (End)

    // TITLES (Start) ======================================================================
  title:     'Adjustment',
  subtitle:  'A request to adjustment the unit or cost value of inventory',
  // TITLES (End)



  initComponent:function () {

    var me = this;


    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.adjustment_nbrLabel,                              dataIndex: 'adjustment_nbr',                     flex: 1,   sortable: true  },
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: true  },
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: true  },
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 1,   sortable: true  },
        { header: this.request_dateLabel,                                dataIndex: 'request_date',                       flex: 1,   sortable: true,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.request_user_displayLabel,                        dataIndex: 'request_user_display',               flex: 1,   sortable: true  },
        { header: this.post_dateLabel,                                   dataIndex: 'post_date',                          flex: 1,   sortable: true,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.post_user_displayLabel,                           dataIndex: 'post_user_display',                  flex: 1,   sortable: true  },
        { header: this.adjustment_reason_displayLabel,                   dataIndex: 'adjustment_reason_display',          flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
