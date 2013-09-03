Ext.define('Omni.view.areas.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-areas-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Area'),

      contextMenuConfig:{
        xtype:'omni-areas-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-areas-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-areas-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel:                 Omni.i18n.model.Area.location_display,
      area_nbrLabel:                         Omni.i18n.model.Area.area_nbr,
      is_receivingLabel:                     Omni.i18n.model.Area.is_receiving,
      is_pickingLabel:                       Omni.i18n.model.Area.is_picking,
      is_reserveLabel:                       Omni.i18n.model.Area.is_reserve,
      is_put_locationLabel:                  Omni.i18n.model.Area.is_put_location,
      is_special_handlingLabel:              Omni.i18n.model.Area.is_special_handling,
      is_quality_controlLabel:               Omni.i18n.model.Area.is_quality_control,
      is_quick_caseLabel:                    Omni.i18n.model.Area.is_quick_case
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: true  },
        { header: this.area_nbrLabel,                                    dataIndex: 'area_nbr',                           flex: 1,   sortable: true  },
        { header: this.is_receivingLabel,                                dataIndex: 'is_receiving',                       flex: 1,   sortable: true  },
        { header: this.is_pickingLabel,                                  dataIndex: 'is_picking',                         flex: 1,   sortable: true  },
        { header: this.is_reserveLabel,                                  dataIndex: 'is_reserve',                         flex: 1,   sortable: true  },
        { header: this.is_put_locationLabel,                             dataIndex: 'is_put_location',                    flex: 1,   sortable: true  },
        { header: this.is_special_handlingLabel,                         dataIndex: 'is_special_handling',                flex: 1,   sortable: true  },
        { header: this.is_quality_controlLabel,                          dataIndex: 'is_quality_control',                 flex: 1,   sortable: true  },
        { header: this.is_quick_caseLabel,                               dataIndex: 'is_quick_case',                      flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Area',
      subtitle:  'Areas of a warehouse, such as picking, reserve, shipping'
    });
    // TITLES (End)



    this.callParent();
  }

});
