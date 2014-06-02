Ext.define('Omni.view.mark_inventories.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-mark_inventories-Explorer',
  allowFind : true,
  allowNew  : false,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_inventories-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_inventories-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  idLabel                                 : Omni.i18n.model.MarkInventory.id,
  outlet_nbrLabel                         : Omni.i18n.model.MarkInventory.outlet_nbr,
  stock_nbrLabel                          : Omni.i18n.model.MarkInventory.stock_nbr,
  sizeLabel                               : Omni.i18n.model.MarkInventory.size,
  qohLabel                                : Omni.i18n.model.MarkInventory.qoh,
  drop_shipLabel                          : Omni.i18n.model.MarkInventory.drop_ship,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Mark Inventories',
  subtitle : 'Create and maintain Mark Inventories',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.MarkInventory')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    {
      header       : me.outlet_nbrLabel,
      dataIndex    : 'outlet_nbr',
      flex         : 1
    },
    {
      header       : me.stock_nbrLabel,
      dataIndex    : 'stock_nbr',
      flex         : 1
    },
    {
      header       : me.sizeLabel,
      dataIndex    : 'size',
      flex         : 1
    },
    {
      header       : me.qohLabel,
      dataIndex    : 'qoh',
      flex         : 1
    }
    // {
    //   header       : me.drop_shipLabel,
    //   dataIndex    : 'drop_ship',
    //   flex         : 1
    // }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
