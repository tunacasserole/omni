Ext.define('Omni.view.till_audits.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-till_audits-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.TillAudit'),

      contextMenuConfig:{
        xtype:'omni-till_audits-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-till_audits-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-till_audits-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      till_displayLabel: Omni.i18n.model.TillAudit.till_display,
      audit_dateLabel: Omni.i18n.model.TillAudit.audit_date,
      tender_displayLabel: Omni.i18n.model.TillAudit.tender_display,
      gl_interface_dateLabel: Omni.i18n.model.TillAudit.gl_interface_date
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.till_displayLabel, dataIndex: 'till_display',  flex: 1,  sortable: false  },
        { header: this.audit_dateLabel, dataIndex: 'audit_date',  flex: 1,  sortable: false, renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.tender_displayLabel, dataIndex: 'tender_display',  flex: 1,  sortable: false  },
        { header: this.gl_interface_dateLabel, dataIndex: 'gl_interface_date',  flex: 1,  sortable: false, renderer: Ext.util.Format.dateRenderer('m/d/y') }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Till Audit',
      subtitle:  'Audits a till by comparing user counts with system counts'
    });
    // TITLES (End)



    this.callParent();
  }

});
