Ext.define('Omni.view.donations.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-donations-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms: [{
    xtype: 'omni-donations-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-donations-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  donation_idLabel: Omni.i18n.model.Donation.donation_id,
  displayLabel: Omni.i18n.model.Donation.display,
  account_idLabel: Omni.i18n.model.Donation.account_id,
  donation_dateLabel: Omni.i18n.model.Donation.donation_date,
  donation_amountLabel: Omni.i18n.model.Donation.donation_amount,
  is_destroyedLabel: Omni.i18n.model.Donation.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Donations',
  subtitle: 'Work with Donations',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.Donation')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [{
      //   header: me.displayLabel,
      //   dataIndex: 'display',
      //   flex: 1
      // }, {
      //   header: me.account_idLabel,
      //   dataIndex: 'account_display',
      //   flex: 1
      // }, {
        header: me.donation_dateLabel,
        dataIndex: 'donation_date',
        flex: 1
      }, {
        header: me.donation_amountLabel,
        dataIndex: 'donation_amount',
        flex: 1
      }]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
