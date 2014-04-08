Ext.define('Omni.view.till_activities.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-till_activities-Explorer',



  initComponent: function() {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TillActivity'),

      contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
      },

      newForms: [{
        xtype: 'omni-till_activities-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-till_activities-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      till_activity_nbrLabel: Omni.i18n.model.TillActivity.till_activity_nbr,
      till_activity_dateLabel: Omni.i18n.model.TillActivity.till_activity_date,
      till_activity_reasonLabel: Omni.i18n.model.TillActivity.till_activity_reason,
      tender_displayLabel: Omni.i18n.model.TillActivity.tender_display,
      payment_displayLabel: Omni.i18n.model.TillActivity.payment_display,
      user_idLabel: Omni.i18n.model.TillActivity.user_id
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [{
        header: this.till_activity_nbrLabel,
        dataIndex: 'till_activity_nbr',
        flex: 1,
        sortable: false
      }, {
        header: this.till_activity_dateLabel,
        dataIndex: 'till_activity_date',
        flex: 1,
        sortable: false,
        renderer: Ext.util.Format.dateRenderer('m/d/y')
      }, {
        header: this.till_activity_reasonLabel,
        dataIndex: 'till_activity_reason',
        flex: 1,
        sortable: false
      }, {
        header: this.tender_displayLabel,
        dataIndex: 'tender_display',
        flex: 1,
        sortable: false
      }, {
        header: this.payment_displayLabel,
        dataIndex: 'payment_display',
        flex: 1,
        sortable: false
      }, {
        header: this.user_idLabel,
        dataIndex: 'user_id',
        flex: 1,
        sortable: false
      }]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Till Activity',
      subtitle: 'Records every movement of a tender in or out of a till'
    });
    // TITLES (End)



    this.callParent();
  }

});
