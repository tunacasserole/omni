Ext.define('Omni.view.regions.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-regions-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Region'),

      contextMenuConfig:{
        xtype:'omni-regions-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-regions-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-regions-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      short_nameLabel:                       Omni.i18n.model.Region.short_name,
      displayLabel:                          Omni.i18n.model.Region.display,
      region_nbrLabel:                       Omni.i18n.model.Region.region_nbr,
      company_displayLabel:                  Omni.i18n.model.Region.company_display,
      user_displayLabel:                     Omni.i18n.model.Region.user_display,
      user_idLabel:                          Omni.i18n.model.Region.user_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.short_nameLabel,                        dataIndex: 'short_name',                         flex: 1,   sortable: true  },
        { header: this.displayLabel,                           dataIndex: 'display',                            flex: 1,   sortable: true  },
        { header: this.region_nbrLabel,                        dataIndex: 'region_nbr',                         flex: 1,   sortable: true  },
        { header: this.company_displayLabel,                   dataIndex: 'company_display',                    flex: 1,   sortable: true  },
        { header: this.user_displayLabel,                      dataIndex: 'user_display',                       flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Region',
      subtitle:  'Second level of the Location Hierarchy'
    });
    // TITLES (End)



    this.callParent();
  }

});
