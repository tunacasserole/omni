Ext.define('Omni.view.mark_transfers.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-mark_transfers-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.MarkTransfer'),

  allowFind  :  true,

  contextMenuConfig : {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_transfers-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_transfers-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  idLabel:                                Omni.i18n.model.MarkTransfer.id,
  from_outlet_nbrLabel:                   Omni.i18n.model.MarkTransfer.from_outlet_nbr,
  to_outlet_nbrLabel:                     Omni.i18n.model.MarkTransfer.to_outlet_nbr,
  dateLabel:                              Omni.i18n.model.MarkTransfer.date,
  tracking_nbrLabel:                      Omni.i18n.model.MarkTransfer.tracking_nbr,
  status_idLabel:                         Omni.i18n.model.MarkTransfer.status_id,
  user_idLabel:                           Omni.i18n.model.MarkTransfer.user_id,
  ship_dateLabel:                         Omni.i18n.model.MarkTransfer.ship_date,
  accepted_user_idLabel:                  Omni.i18n.model.MarkTransfer.accepted_user_id,
  commentLabel:                           Omni.i18n.model.MarkTransfer.comment,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Mark Transfers',
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
        {
          header       : this.from_outlet_nbrLabel,
          dataIndex    : 'from_outlet_nbr',
          flex         : 1
        },
        {
          header       : this.to_outlet_nbrLabel,
          dataIndex    : 'to_outlet_nbr',
          flex         : 1
        },
        {
          header       : this.dateLabel,
          dataIndex    : 'date',
          flex         : 1
        },
        {
          header       : this.tracking_nbrLabel,
          dataIndex    : 'tracking_nbr',
          flex         : 1
        },
        {
          header       : this.status_idLabel,
          dataIndex    : 'status_id',
          flex         : 1
        },
        {
          header       : this.user_idLabel,
          dataIndex    : 'user_id',
          flex         : 1
        },
        {
          header       : this.ship_dateLabel,
          dataIndex    : 'ship_date',
          flex         : 1
        },
        {
          header       : this.accepted_user_idLabel,
          dataIndex    : 'accepted_user_id',
          flex         : 1
        },
        {
          header       : this.commentLabel,
          dataIndex    : 'comment',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
