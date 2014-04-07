Ext.define('Omni.view.districts.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-districts-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.District'),

      contextMenuConfig:{
        xtype:'omni-districts-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-districts-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-districts-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel:                          Omni.i18n.model.District.display,
      district_nbrLabel:                     Omni.i18n.model.District.district_nbr,
      region_displayLabel:                   Omni.i18n.model.District.region_display,
      user_displayLabel:                     Omni.i18n.model.District.user_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 1,   sortable: false  },
        { header: this.region_displayLabel,                              dataIndex: 'region_display',                     flex: 1,   sortable: false  },
        { header: this.user_displayLabel,                                dataIndex: 'user_display',                       flex: 1,   sortable: false  },
        { header: this.district_nbrLabel,                                dataIndex: 'district_nbr',                       flex: 1,   sortable: false  },

      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'District',
      subtitle:  'Third level of the Location Hierarchy'
    });
    // TITLES (End)



    this.callParent();
  }

});
