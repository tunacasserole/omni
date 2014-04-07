Ext.define('Omni.view.container_details.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-container_details-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.ContainerDetail'),

      contextMenuConfig:{
        xtype:'omni-container_details-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-container_details-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-container_details-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      container_displayLabel:                Omni.i18n.model.ContainerDetail.container_display,
      stateLabel:                            Omni.i18n.model.ContainerDetail.state,
      sku_displayLabel:                      Omni.i18n.model.ContainerDetail.sku_display,
      purchase_detail_displayLabel:          Omni.i18n.model.ContainerDetail.purchase_detail_display,
      supplier_displayLabel:                 Omni.i18n.model.ContainerDetail.supplier_display,
      supplier_item_identifierLabel:         Omni.i18n.model.ContainerDetail.supplier_item_identifier,
      job_displayLabel:               Omni.i18n.model.ContainerDetail.job_display,
      receipt_detail_displayLabel:           Omni.i18n.model.ContainerDetail.receipt_detail_display,
      pick_displayLabel:              Omni.i18n.model.ContainerDetail.pick_display,
      origin_container_detail_displayLabel:  Omni.i18n.model.ContainerDetail.origin_container_detail_display,
      is_quality_holdLabel:                  Omni.i18n.model.ContainerDetail.is_quality_hold,
      is_duty_paidLabel:                     Omni.i18n.model.ContainerDetail.is_duty_paid
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.container_displayLabel,                           dataIndex: 'container_display',                  flex: 1,   sortable: false  },
        { header: this.stateLabel,                                       dataIndex: 'state',                              flex: 1,   sortable: false  },
        { header: this.sku_displayLabel,                                 dataIndex: 'sku_display',                        flex: 1,   sortable: false  },
        { header: this.purchase_detail_displayLabel,                     dataIndex: 'purchase_detail_display',            flex: 1,   sortable: false  },
        { header: this.supplier_displayLabel,                            dataIndex: 'supplier_display',                   flex: 1,   sortable: false  },
        { header: this.supplier_item_identifierLabel,                    dataIndex: 'supplier_item_identifier',           flex: 1,   sortable: false  },
        { header: this.job_displayLabel,                          dataIndex: 'job_display',                 flex: 1,   sortable: false  },
        { header: this.receipt_detail_displayLabel,                      dataIndex: 'receipt_detail_display',             flex: 1,   sortable: false  },
        { header: this.pick_displayLabel,                         dataIndex: 'pick_display',                flex: 1,   sortable: false  },
        { header: this.origin_container_detail_displayLabel,             dataIndex: 'origin_container_detail_display',    flex: 1,   sortable: false  },
        { header: this.is_quality_holdLabel,                             dataIndex: 'is_quality_hold',                    flex: 1,   sortable: false  },
        { header: this.is_duty_paidLabel,                                dataIndex: 'is_duty_paid',                       flex: 1,   sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Container Detail',
      subtitle:  'Detail rows for a container'
    });
    // TITLES (End)



    this.callParent();
  }

});
