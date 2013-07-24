Ext.define('Omni.view.adjustment_reasons.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-adjustment_reasons-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.AdjustmentReason'),

      contextMenuConfig:{
        xtype:'omni-adjustment_reasons-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-adjustment_reasons-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-adjustment_reasons-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      displayLabel:                          Omni.i18n.model.AdjustmentReason.display,
      descriptionLabel:                      Omni.i18n.model.AdjustmentReason.description,
      short_nameLabel:                       Omni.i18n.model.AdjustmentReason.short_name,
      ruleset_displayLabel:                  Omni.i18n.model.AdjustmentReason.ruleset_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.displayLabel,                                     dataIndex: 'display',                            flex: 1,   sortable: true  },
        { header: this.descriptionLabel,                                 dataIndex: 'description',                        flex: 1,   sortable: true  },
        { header: this.short_nameLabel,                                  dataIndex: 'short_name',                         flex: 1,   sortable: true  },
        { header: this.ruleset_displayLabel,                             dataIndex: 'ruleset_display',                    flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Adjustment Reason',
      subtitle:  'Inventory adjustment reason codes'
    });
    // TITLES (End)



    this.callParent();
  }

});
