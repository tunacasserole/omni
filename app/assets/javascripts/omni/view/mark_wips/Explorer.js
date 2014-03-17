Ext.define('Omni.view.mark_wips.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-mark_wips-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.MarkWip'),

  allowFind  :  true,
    
  contextMenuConfig : {
    xtype    : 'omni-mark_wips-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_wips-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_wips-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  outlet_nbrLabel:                        Omni.i18n.model.MarkWip.outlet_nbr,
  stock_nbrLabel:                         Omni.i18n.model.MarkWip.stock_nbr,
  sizeLabel:                              Omni.i18n.model.MarkWip.size,
  cut_wipLabel:                           Omni.i18n.model.MarkWip.cut_wip,
  plant_wipLabel:                         Omni.i18n.model.MarkWip.plant_wip,
  cont_wipLabel:                          Omni.i18n.model.MarkWip.cont_wip,
  status_idLabel:                         Omni.i18n.model.MarkWip.status_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Mark WIP',
  subtitle:  'Research Mark WIP',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.outlet_nbrLabel,
          dataIndex    : 'outlet_nbr',
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
          header       : this.cut_wipLabel,
          dataIndex    : 'cut_wip',
          flex         : 1
        },
        {
          header       : this.plant_wipLabel,
          dataIndex    : 'plant_wip',
          flex         : 1
        },
        {
          header       : this.cont_wipLabel,
          dataIndex    : 'cont_wip',
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