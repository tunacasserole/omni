Ext.define('Omni.view.costs.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-costs-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Cost'),

  contextMenuConfig : {
    xtype: 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-costs-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-costs-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  cost_idLabel:                           Omni.i18n.model.Cost.cost_id,
  displayLabel:                           Omni.i18n.model.Cost.display,
  short_nameLabel:                        Omni.i18n.model.Cost.short_name,
  descriptionLabel:                       Omni.i18n.model.Cost.description,
  is_destroyedLabel:                      Omni.i18n.model.Cost.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Cost Models',
  subtitle:  'Create and maintain Cost Models',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.cost_idLabel,
        //   dataIndex    : 'cost_id',
        //   flex         : 1
        // },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.short_nameLabel,
          dataIndex    : 'short_name',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        }
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
