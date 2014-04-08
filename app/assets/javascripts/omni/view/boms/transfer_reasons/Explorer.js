Ext.define('Omni.view.transfer_reasons.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-transfer_reasons-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.TransferReason'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-transfer_reasons-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-transfer_reasons-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  transfer_reason_idLabel:                Omni.i18n.model.TransferReason.transfer_reason_id,
  displayLabel:                           Omni.i18n.model.TransferReason.display,
  descriptionLabel:                       Omni.i18n.model.TransferReason.description,
  short_nameLabel:                        Omni.i18n.model.TransferReason.short_name,
  is_destroyedLabel:                      Omni.i18n.model.TransferReason.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'TransferReasons',
  subtitle:  'Create and maintain TransferReasons',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.transfer_reason_idLabel,
          dataIndex    : 'transfer_reason_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.short_nameLabel,
          dataIndex    : 'short_name',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
