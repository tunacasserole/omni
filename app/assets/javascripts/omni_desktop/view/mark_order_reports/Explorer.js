Ext.define('Omni.view.mark_order_reports.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-mark_order_reports-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.MarkOrderReport'),

  contextMenuConfig : {
    xtype    : 'omni-mark_order_reports-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_order_reports-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_order_reports-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  idLabel:                                Omni.i18n.model.MarkOrderReport.id,
  stock_nbrLabel:                         Omni.i18n.model.MarkOrderReport.stock_nbr,
  sizeLabel:                              Omni.i18n.model.MarkOrderReport.size,
  qtyLabel:                               Omni.i18n.model.MarkOrderReport.qty,
  year_enteredLabel:                      Omni.i18n.model.MarkOrderReport.year_entered,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'MarkOrderReports',
  subtitle:  'Create and maintain MarkOrderReports',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.idLabel,
          dataIndex    : 'id',
          flex         : 1
        },
        {
          header       : this.stock_nbrLabel,
          dataIndex    : 'stock_nbr',
          flex         : 1
        },
        {
          header       : this.sizeLabel,
          dataIndex    : 'size',
          flex         : 1
        },
        {
          header       : this.qtyLabel,
          dataIndex    : 'qty',
          flex         : 1
        },
        {
          header       : this.year_enteredLabel,
          dataIndex    : 'year_entered',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});