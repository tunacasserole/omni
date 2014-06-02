Ext.define('Omni.view.mark_transfer_lines.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-mark_transfer_lines-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.MarkTransferLine'),

  allowFind  :  true,

  contextMenuConfig : {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_transfer_lines-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_transfer_lines-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  idLabel:                                Omni.i18n.model.MarkTransferLine.id,
  transfer_idLabel:                       Omni.i18n.model.MarkTransferLine.transfer_id,
  stock_nbrLabel:                         Omni.i18n.model.MarkTransferLine.stock_nbr,
  sizeLabel:                              Omni.i18n.model.MarkTransferLine.size,
  qtyLabel:                               Omni.i18n.model.MarkTransferLine.qty,
  dateLabel:                              Omni.i18n.model.MarkTransferLine.date,
  box_nbrLabel:                           Omni.i18n.model.MarkTransferLine.box_nbr,
  status_idLabel:                         Omni.i18n.model.MarkTransferLine.status_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Mark Transfer Detail lines',
  subtitle:  'Research Mark Transfers',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.idLabel,
        //   dataIndex    : 'id',
        //   flex         : 1
        // },
        // {
        //   header       : this.transfer_idLabel,
        //   dataIndex    : 'transfer_id',
        //   flex         : 1
        // },
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
          header       : this.dateLabel,
          dataIndex    : 'date',
          flex         : 1
        },
        {
          header       : this.box_nbrLabel,
          dataIndex    : 'box_nbr',
          flex         : 1
        },
        {
          header       : this.status_idLabel,
          dataIndex    : 'status_id',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
