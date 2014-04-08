Ext.define('Omni.view.tills.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-tills-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Till'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-tills-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-tills-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  till_idLabel:                           Omni.i18n.model.Till.till_id,
  displayLabel:                           Omni.i18n.model.Till.display,
  location_idLabel:                       Omni.i18n.model.Till.location_id,
  till_nbrLabel:                          Omni.i18n.model.Till.till_nbr,
  is_destroyedLabel:                      Omni.i18n.model.Till.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Tills',
  subtitle:  'Create and maintain Tills',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.till_idLabel,
          dataIndex    : 'till_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_id',
          flex         : 1
        },
        {
          header       : this.till_nbrLabel,
          dataIndex    : 'till_nbr',
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
