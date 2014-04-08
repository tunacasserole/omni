Ext.define('Omni.view.locations.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-locations-Explorer',

  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Location'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-locations-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-locations-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.Location.display,
      location_nbrLabel: Omni.i18n.model.Location.location_nbr,
      location_brandLabel: Omni.i18n.model.Location.location_brand,
      line_1Label: Omni.i18n.model.Location.line_1,
      cityLabel: Omni.i18n.model.Location.city,
      state_codeLabel: Omni.i18n.model.Location.state_code,
      is_storeLabel: Omni.i18n.model.Location.is_store,
      is_warehouseLabel: Omni.i18n.model.Location.is_warehouse,
      is_enabledLabel: Omni.i18n.model.Location.is_enabled,
      open_dateLabel: Omni.i18n.model.Location.open_date,
      district_displayLabel: Omni.i18n.model.Location.district_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.location_nbrLabel,
        dataIndex: 'location_nbr',
        flex: 1,
        sortable: false
      }, {
        header: this.displayLabel,
        dataIndex: 'display',
        flex: 2,
        sortable: false
      }, {
        header: this.location_brandLabel,
        dataIndex: 'location_brand',
        flex: 1,
        sortable: false
      }, {
        header: this.district_displayLabel,
        dataIndex: 'district_display',
        flex: 1,
        sortable: false
      }, {
        header: this.line_1Label,
        dataIndex: 'line_1',
        flex: 1,
        sortable: false
      }, {
        header: this.cityLabel,
        dataIndex: 'city',
        flex: 1,
        sortable: false
      }, {
        header: this.state_codeLabel,
        dataIndex: 'state_code',
        flex: 1,
        sortable: false
      }, {
        header: this.open_dateLabel,
        dataIndex: 'open_date',
        flex: 1,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer('m/d/y')
      }, {
        header: this.is_storeLabel,
        dataIndex: 'is_store',
        flex: 1,
        sortable: false
      }, {
        header: this.is_warehouseLabel,
        dataIndex: 'is_warehouse',
        flex: 1,
        sortable: false
      }, {
        header: this.is_enabledLabel,
        dataIndex: 'is_enabled',
        flex: 1,
        sortable: false
      }, ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Location',
      subtitle: 'A facility where Products are stocked and/or sold'
    });
    // TITLES (End)



    this.callParent();
  }

});
