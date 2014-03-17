Ext.define('Omni.view.bins.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-bins-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Bin'),

      contextMenuConfig:{
        xtype:'omni-bins-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-bins-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-bins-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      area_displayLabel:                     Omni.i18n.model.Bin.area_display,
      area_short_nameLabel:                  Omni.i18n.model.Bin.area_short_name,
      aisleLabel:                            Omni.i18n.model.Bin.aisle,
      sectionLabel:                          Omni.i18n.model.Bin.section,
      levelLabel:                            Omni.i18n.model.Bin.level,
      positionLabel:                         Omni.i18n.model.Bin.position,
      bin_nbrLabel:                          Omni.i18n.model.Bin.bin_nbr,
      bin_codeLabel:                         Omni.i18n.model.Bin.bin_code,
      bin_typeLabel:                         Omni.i18n.model.Bin.bin_type,
      last_activity_dateLabel:               Omni.i18n.model.Bin.last_activity_date,
      zoneLabel:                             Omni.i18n.model.Bin.zone,
      pick_zoneLabel:                        Omni.i18n.model.Bin.pick_zone,
      is_emptyLabel:                         Omni.i18n.model.Bin.is_empty,
      is_request_label_printLabel:           Omni.i18n.model.Bin.is_request_label_print,
      bin_label_typeLabel:                   Omni.i18n.model.Bin.bin_label_type,
      is_enabledLabel:                       Omni.i18n.model.Bin.is_enabled
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.area_displayLabel,                                dataIndex: 'area_display',                       flex: 1,   sortable: true  },
        { header: this.area_short_nameLabel,                             dataIndex: 'area_short_name',                    flex: 1,   sortable: true  },
        { header: this.aisleLabel,                                       dataIndex: 'aisle',                              flex: 1,   sortable: true  },
        { header: this.sectionLabel,                                     dataIndex: 'section',                            flex: 1,   sortable: true  },
        { header: this.levelLabel,                                       dataIndex: 'level',                              flex: 1,   sortable: true  },
        { header: this.positionLabel,                                    dataIndex: 'position',                           flex: 1,   sortable: true  },
        { header: this.bin_nbrLabel,                                     dataIndex: 'bin_nbr',                            flex: 1,   sortable: true  },
        { header: this.bin_codeLabel,                                    dataIndex: 'bin_code',                           flex: 1,   sortable: true  },
        { header: this.bin_typeLabel,                                    dataIndex: 'bin_type',                           flex: 1,   sortable: true  },
        { header: this.last_activity_dateLabel,                          dataIndex: 'last_activity_date',                 flex: 1,   sortable: true,   renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.zoneLabel,                                        dataIndex: 'zone',                               flex: 1,   sortable: true  },
        { header: this.pick_zoneLabel,                                   dataIndex: 'pick_zone',                          flex: 1,   sortable: true  },
        { header: this.is_emptyLabel,                                    dataIndex: 'is_empty',                           flex: 1,   sortable: true  },
        { header: this.is_request_label_printLabel,                      dataIndex: 'is_request_label_print',             flex: 1,   sortable: true  },
        { header: this.bin_label_typeLabel,                              dataIndex: 'bin_label_type',                     flex: 1,   sortable: true  },
        { header: this.is_enabledLabel,                                  dataIndex: 'is_enabled',                         flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Bin',
      subtitle:  'Defines each bin in a warehouse'
    });
    // TITLES (End)



    this.callParent();
  }

});
