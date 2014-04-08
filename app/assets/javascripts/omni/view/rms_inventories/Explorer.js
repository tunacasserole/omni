Ext.define('Omni.view.rms_inventories.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-rms_inventories-Explorer',
  allowFind : true,
  allowNew  : false,

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-rms_inventories-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-rms_inventories-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  idLabel                                 : Omni.i18n.model.RmsInventory.id,
  Store_IDLabel                           : Omni.i18n.model.RmsInventory.Store_ID,
  Item_IDLabel                            : Omni.i18n.model.RmsInventory.Item_ID,
  StyleLabel                              : Omni.i18n.model.RmsInventory.Style,
  Vendor_StyleLabel                       : Omni.i18n.model.RmsInventory.Vendor_Style,
  ConversionLabel                         : Omni.i18n.model.RmsInventory.Conversion,
  Stock_NumberLabel                       : Omni.i18n.model.RmsInventory.Stock_Number,
  DescriptionLabel                        : Omni.i18n.model.RmsInventory.Description,
  ColorLabel                              : Omni.i18n.model.RmsInventory.Color,
  SizeLabel                               : Omni.i18n.model.RmsInventory.Size,
  VarianceLabel                           : Omni.i18n.model.RmsInventory.Variance,
  SupplierLabel                           : Omni.i18n.model.RmsInventory.Supplier,
  Supplier_NameLabel                      : Omni.i18n.model.RmsInventory.Supplier_Name,
  QOH_All_StoresLabel                     : Omni.i18n.model.RmsInventory.QOH_All_Stores,
  Item_QOHLabel                           : Omni.i18n.model.RmsInventory.Item_QOH,
  Item_DescriptionLabel                   : Omni.i18n.model.RmsInventory.Item_Description,
  QOO_All_StoresLabel                     : Omni.i18n.model.RmsInventory.QOO_All_Stores,
  Item_QOOLabel                           : Omni.i18n.model.RmsInventory.Item_QOO,
  Qty_Ordered_Since_4_1_2013Label         : Omni.i18n.model.RmsInventory.Qty_Ordered_Since_4_1_2013,
  Qty_Received_Since_4_1_2013Label        : Omni.i18n.model.RmsInventory.Qty_Received_Since_4_1_2013,
  Sales_PriceLabel                        : Omni.i18n.model.RmsInventory.Sales_Price,
  CostLabel                               : Omni.i18n.model.RmsInventory.Cost,
  Total_Sold_2011Label                    : Omni.i18n.model.RmsInventory.Total_Sold_2011,
  Total_Sold_2012Label                    : Omni.i18n.model.RmsInventory.Total_Sold_2012,
  Total_Sold_2013Label                    : Omni.i18n.model.RmsInventory.Total_Sold_2013,
  Total_Sold_2014Label                    : Omni.i18n.model.RmsInventory.Total_Sold_2014,
  Total_Sold_Past_12MonthsLabel           : Omni.i18n.model.RmsInventory.Total_Sold_Past_12Months,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Rms Inventories',
  subtitle : 'Create and maintain Rms Inventories',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.RmsInventory')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
    {
      header       : me.Store_IDLabel,
      dataIndex    : 'Store_ID',
      flex         : 1
    },
    {
      header       : me.Item_IDLabel,
      dataIndex    : 'Item_ID',
      flex         : 1
    },
    {
      header       : me.StyleLabel,
      dataIndex    : 'Style',
      flex         : 1
    },
    {
      header       : me.Vendor_StyleLabel,
      dataIndex    : 'Vendor_Style',
      flex         : 1
    },
    {
      header       : me.ConversionLabel,
      dataIndex    : 'Conversion',
      flex         : 1
    },
    {
      header       : me.Stock_NumberLabel,
      dataIndex    : 'Stock_Number',
      flex         : 1
    },
    {
      header       : me.DescriptionLabel,
      dataIndex    : 'Description',
      flex         : 1
    },
    {
      header       : me.ColorLabel,
      dataIndex    : 'Color',
      flex         : 1
    },
    {
      header       : me.SizeLabel,
      dataIndex    : 'Size',
      flex         : 1
    },
    {
      header       : me.VarianceLabel,
      dataIndex    : 'Variance',
      flex         : 1
    },
    {
      header       : me.SupplierLabel,
      dataIndex    : 'Supplier',
      flex         : 1
    },
    {
      header       : me.Supplier_NameLabel,
      dataIndex    : 'Supplier_Name',
      flex         : 1
    },
    {
      header       : me.QOH_All_StoresLabel,
      dataIndex    : 'QOH_All_Stores',
      flex         : 1
    },
    {
      header       : me.Item_QOHLabel,
      dataIndex    : 'Item_QOH',
      flex         : 1
    },
    {
      header       : me.Item_DescriptionLabel,
      dataIndex    : 'Item_Description',
      flex         : 1
    },
    {
      header       : me.QOO_All_StoresLabel,
      dataIndex    : 'QOO_All_Stores',
      flex         : 1
    },
    {
      header       : me.Item_QOOLabel,
      dataIndex    : 'Item_QOO',
      flex         : 1
    },
    {
      header       : me.Qty_Ordered_Since_4_1_2013Label,
      dataIndex    : 'Qty_Ordered_Since_4_1_2013',
      flex         : 1
    },
    {
      header       : me.Qty_Received_Since_4_1_2013Label,
      dataIndex    : 'Qty_Received_Since_4_1_2013',
      flex         : 1
    },
    {
      header       : me.Sales_PriceLabel,
      dataIndex    : 'Sales_Price',
      flex         : 1
    },
    {
      header       : me.CostLabel,
      dataIndex    : 'Cost',
      flex         : 1
    },
    {
      header       : me.Total_Sold_2011Label,
      dataIndex    : 'Total_Sold_2011',
      flex         : 1
    },
    {
      header       : me.Total_Sold_2012Label,
      dataIndex    : 'Total_Sold_2012',
      flex         : 1
    },
    {
      header       : me.Total_Sold_2013Label,
      dataIndex    : 'Total_Sold_2013',
      flex         : 1
    },
    {
      header       : me.Total_Sold_2014Label,
      dataIndex    : 'Total_Sold_2014',
      flex         : 1
    },
    {
      header       : me.Total_Sold_Past_12MonthsLabel,
      dataIndex    : 'Total_Sold_Past_12Months',
      flex         : 1
    }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
