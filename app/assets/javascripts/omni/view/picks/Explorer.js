Ext.define('Omni.view.picks.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-picks-Explorer',


  // LABELS (Start) ======================================================================
  stateLabel: Omni.i18n.model.Pick.state,
  pick_nbrLabel: Omni.i18n.model.Pick.pick_nbr,
  pickable_idLabel: Omni.i18n.model.Pick.pickable_id,
  pickable_typeLabel: Omni.i18n.model.Pick.pickable_type,
  fulfillment_location_displayLabel: Omni.i18n.model.Pick.fulfillment_location_display,
  job_displayLabel: Omni.i18n.model.Pick.job_display,
  request_unitsLabel: Omni.i18n.model.Pick.request_units,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Pick Ticket',
  subtitle: 'An order to pick a product for shipment to a customer',
  // TITLES (End)


  // EXPLORER CONFIG (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Pick'),

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu',
  },

  inspectorConfig: {
    xtype: 'omni-picks-Inspector'
  },

  newForms: [{
    xtype: 'omni-picks-Form',
    windowConfig: {}
  }],
  // EXPLORER CONFIG (End)


  initComponent: function() {

    var me = this;


    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.pick_nbrLabel,
        dataIndex: 'pick_nbr',
        flex: 1,
        sortable: false
      // }, {
      //   header: this.pickable_idLabel,
      //   dataIndex: 'pickable_id',
      //   flex: 1,
      //   sortable: false
      // }, {
      //   header: this.pickable_typeLabel,
      //   dataIndex: 'pickable_type',
      //   flex: 1,
      //   sortable: false
      }, {
        header: this.fulfillment_location_displayLabel,
        dataIndex: 'fulfillment_location_display',
        flex: 2,
        sortable: false
      }, {
        header: this.job_displayLabel,
        dataIndex: 'job_display',
        flex: 2,
        sortable: false
      }, {
        header: this.request_unitsLabel,
        dataIndex: 'request_units',
        flex: 1,
        sortable: false
      }, {
        header: this.stateLabel,
        dataIndex: 'state',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // EXPLORER PRE-INIT (Start) =============================================================
    // EXPLORER PRE-INIT (End)


    this.callParent();


    // EXPLORER POST-INIT (Start) ============================================================

    // EXPLORER POST-INIT (End)

  }

});
