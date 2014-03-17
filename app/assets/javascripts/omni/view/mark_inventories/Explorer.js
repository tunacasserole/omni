Ext.define('Omni.view.mark_inventories.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-mark_inventories-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.MarkInventory'),

  allowFind  :  true,
  
  contextMenuConfig : {
    xtype    : 'omni-mark_inventories-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_inventories-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_inventories-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  outlet_nbrLabel:                        Omni.i18n.model.MarkInventory.outlet_nbr,
  stock_nbrLabel:                         Omni.i18n.model.MarkInventory.stock_nbr,
  sizeLabel:                              Omni.i18n.model.MarkInventory.size,
  qohLabel:                               Omni.i18n.model.MarkInventory.qoh,
  drop_shipLabel:                         Omni.i18n.model.MarkInventory.drop_ship,
  idLabel:                                Omni.i18n.model.MarkInventory.id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Mark Inventory',
  subtitle:  'Work with Mark Inventory',
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
          header       : this.qohLabel,
          dataIndex    : 'qoh',
          flex         : 1
        },
        {
          header       : this.drop_shipLabel,
          dataIndex    : 'drop_ship',
          flex         : 1
        }
        // {
        //   header       : this.idLabel,
        //   dataIndex    : 'id',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});