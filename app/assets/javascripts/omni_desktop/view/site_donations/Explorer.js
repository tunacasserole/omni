Ext.define('Omni.view.site_donations.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-site_donations-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.SiteDonation'),

      contextMenuConfig:{
        xtype:'omni-site_donations-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-site_donations-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-site_donations-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      site_displayLabel: Omni.i18n.model.SiteDonation.site_display,
      donation_dateLabel: Omni.i18n.model.SiteDonation.donation_date,
      donation_amountLabel: Omni.i18n.model.SiteDonation.donation_amount
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.site_displayLabel, dataIndex: 'site_display',  flex: 1,  sortable: true  },
        { header: this.donation_dateLabel, dataIndex: 'donation_date',  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.donation_amountLabel, dataIndex: 'donation_amount',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site Donation',
      subtitle:  'Donations paid or due to a site'
    });
    // TITLES (End)



    this.callParent();
  }

});
