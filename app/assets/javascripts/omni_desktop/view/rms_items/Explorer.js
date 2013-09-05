Ext.define('Omni.view.rms_items.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-rms_items-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.RmsItem'),

  allowFind  :  true,


  contextMenuConfig : {
    xtype    : 'omni-rms_items-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-rms_items-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-rms_items-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  BinLocationLabel:                       Omni.i18n.model.RmsItem.BinLocation,
  BuydownPriceLabel:                      Omni.i18n.model.RmsItem.BuydownPrice,
  BuydownQuantityLabel:                   Omni.i18n.model.RmsItem.BuydownQuantity,
  CommissionAmountLabel:                  Omni.i18n.model.RmsItem.CommissionAmount,
  CommissionMaximumLabel:                 Omni.i18n.model.RmsItem.CommissionMaximum,
  CommissionModeLabel:                    Omni.i18n.model.RmsItem.CommissionMode,
  CommissionPercentProfitLabel:           Omni.i18n.model.RmsItem.CommissionPercentProfit,
  CommissionPercentSaleLabel:             Omni.i18n.model.RmsItem.CommissionPercentSale,
  DescriptionLabel:                       Omni.i18n.model.RmsItem.Description,
  FoodStampableLabel:                     Omni.i18n.model.RmsItem.FoodStampable,
  HQIDLabel:                              Omni.i18n.model.RmsItem.HQID,
  ItemNotDiscountableLabel:               Omni.i18n.model.RmsItem.ItemNotDiscountable,
  LastReceivedLabel:                      Omni.i18n.model.RmsItem.LastReceived,
  LastUpdatedLabel:                       Omni.i18n.model.RmsItem.LastUpdated,
  NotesLabel:                             Omni.i18n.model.RmsItem.Notes,
  QuantityCommittedLabel:                 Omni.i18n.model.RmsItem.QuantityCommitted,
  SerialNumberCountLabel:                 Omni.i18n.model.RmsItem.SerialNumberCount,
  TareWeightPercentLabel:                 Omni.i18n.model.RmsItem.TareWeightPercent,
  IDLabel:                                Omni.i18n.model.RmsItem.ID,
  ItemLookupCodeLabel:                    Omni.i18n.model.RmsItem.ItemLookupCode,
  DepartmentIDLabel:                      Omni.i18n.model.RmsItem.DepartmentID,
  CategoryIDLabel:                        Omni.i18n.model.RmsItem.CategoryID,
  MessageIDLabel:                         Omni.i18n.model.RmsItem.MessageID,
  PriceLabel:                             Omni.i18n.model.RmsItem.Price,
  PriceALabel:                            Omni.i18n.model.RmsItem.PriceA,
  PriceBLabel:                            Omni.i18n.model.RmsItem.PriceB,
  PriceCLabel:                            Omni.i18n.model.RmsItem.PriceC,
  SalePriceLabel:                         Omni.i18n.model.RmsItem.SalePrice,
  SaleStartDateLabel:                     Omni.i18n.model.RmsItem.SaleStartDate,
  SaleEndDateLabel:                       Omni.i18n.model.RmsItem.SaleEndDate,
  QuantityDiscountIDLabel:                Omni.i18n.model.RmsItem.QuantityDiscountID,
  TaxIDLabel:                             Omni.i18n.model.RmsItem.TaxID,
  ItemTypeLabel:                          Omni.i18n.model.RmsItem.ItemType,
  CostLabel:                              Omni.i18n.model.RmsItem.Cost,
  QuantityLabel:                          Omni.i18n.model.RmsItem.Quantity,
  ReorderPointLabel:                      Omni.i18n.model.RmsItem.ReorderPoint,
  RestockLevelLabel:                      Omni.i18n.model.RmsItem.RestockLevel,
  TareWeightLabel:                        Omni.i18n.model.RmsItem.TareWeight,
  SupplierIDLabel:                        Omni.i18n.model.RmsItem.SupplierID,
  TagAlongItemLabel:                      Omni.i18n.model.RmsItem.TagAlongItem,
  TagAlongQuantityLabel:                  Omni.i18n.model.RmsItem.TagAlongQuantity,
  ParentItemLabel:                        Omni.i18n.model.RmsItem.ParentItem,
  ParentQuantityLabel:                    Omni.i18n.model.RmsItem.ParentQuantity,
  BarcodeFormatLabel:                     Omni.i18n.model.RmsItem.BarcodeFormat,
  PriceLowerBoundLabel:                   Omni.i18n.model.RmsItem.PriceLowerBound,
  PriceUpperBoundLabel:                   Omni.i18n.model.RmsItem.PriceUpperBound,
  PictureNameLabel:                       Omni.i18n.model.RmsItem.PictureName,
  LastSoldLabel:                          Omni.i18n.model.RmsItem.LastSold,
  ExtendedDescriptionLabel:               Omni.i18n.model.RmsItem.ExtendedDescription,
  SubDescription1Label:                   Omni.i18n.model.RmsItem.SubDescription1,
  SubDescription2Label:                   Omni.i18n.model.RmsItem.SubDescription2,
  SubDescription3Label:                   Omni.i18n.model.RmsItem.SubDescription3,
  UnitOfMeasureLabel:                     Omni.i18n.model.RmsItem.UnitOfMeasure,
  SubCategoryIDLabel:                     Omni.i18n.model.RmsItem.SubCategoryID,
  QuantityEntryNotAllowedLabel:           Omni.i18n.model.RmsItem.QuantityEntryNotAllowed,
  PriceMustBeEnteredLabel:                Omni.i18n.model.RmsItem.PriceMustBeEntered,
  BlockSalesReasonLabel:                  Omni.i18n.model.RmsItem.BlockSalesReason,
  BlockSalesAfterDateLabel:               Omni.i18n.model.RmsItem.BlockSalesAfterDate,
  WeightLabel:                            Omni.i18n.model.RmsItem.Weight,
  TaxableLabel:                           Omni.i18n.model.RmsItem.Taxable,
  DBTimeStampLabel:                       Omni.i18n.model.RmsItem.DBTimeStamp,
  BlockSalesBeforeDateLabel:              Omni.i18n.model.RmsItem.BlockSalesBeforeDate,
  LastCostLabel:                          Omni.i18n.model.RmsItem.LastCost,
  ReplacementCostLabel:                   Omni.i18n.model.RmsItem.ReplacementCost,
  WebItemLabel:                           Omni.i18n.model.RmsItem.WebItem,
  BlockSalesTypeLabel:                    Omni.i18n.model.RmsItem.BlockSalesType,
  BlockSalesScheduleIDLabel:              Omni.i18n.model.RmsItem.BlockSalesScheduleID,
  SaleTypeLabel:                          Omni.i18n.model.RmsItem.SaleType,
  SaleScheduleIDLabel:                    Omni.i18n.model.RmsItem.SaleScheduleID,
  ConsignmentLabel:                       Omni.i18n.model.RmsItem.Consignment,
  InactiveLabel:                          Omni.i18n.model.RmsItem.Inactive,
  LastCountedLabel:                       Omni.i18n.model.RmsItem.LastCounted,
  DoNotOrderLabel:                        Omni.i18n.model.RmsItem.DoNotOrder,
  MSRPLabel:                              Omni.i18n.model.RmsItem.MSRP,
  DateCreatedLabel:                       Omni.i18n.model.RmsItem.DateCreated,
  ContentLabel:                           Omni.i18n.model.RmsItem.Content,
  UsuallyShipLabel:                       Omni.i18n.model.RmsItem.UsuallyShip,
  NumberFormatLabel:                      Omni.i18n.model.RmsItem.NumberFormat,
  ItemCannotBeRetLabel:                   Omni.i18n.model.RmsItem.ItemCannotBeRet,
  ItemCannotBeSoldLabel:                  Omni.i18n.model.RmsItem.ItemCannotBeSold,
  IsAutogeneratedLabel:                   Omni.i18n.model.RmsItem.IsAutogenerated,
  IsGlobalvoucherLabel:                   Omni.i18n.model.RmsItem.IsGlobalvoucher,
  DeleteZeroBalanceEntryLabel:            Omni.i18n.model.RmsItem.DeleteZeroBalanceEntry,
  TenderIDLabel:                          Omni.i18n.model.RmsItem.TenderID,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'RmsItems',
  subtitle:  'Create and maintain RmsItems',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.BinLocationLabel,
          dataIndex    : 'BinLocation',
          flex         : 1
        },
        {
          header       : this.BuydownPriceLabel,
          dataIndex    : 'BuydownPrice',
          flex         : 1
        },
        {
          header       : this.BuydownQuantityLabel,
          dataIndex    : 'BuydownQuantity',
          flex         : 1
        },
        {
          header       : this.CommissionAmountLabel,
          dataIndex    : 'CommissionAmount',
          flex         : 1
        },
        {
          header       : this.CommissionMaximumLabel,
          dataIndex    : 'CommissionMaximum',
          flex         : 1
        },
        {
          header       : this.CommissionModeLabel,
          dataIndex    : 'CommissionMode',
          flex         : 1
        },
        {
          header       : this.CommissionPercentProfitLabel,
          dataIndex    : 'CommissionPercentProfit',
          flex         : 1
        },
        {
          header       : this.CommissionPercentSaleLabel,
          dataIndex    : 'CommissionPercentSale',
          flex         : 1
        },
        {
          header       : this.DescriptionLabel,
          dataIndex    : 'Description',
          flex         : 1
        },
        {
          header       : this.FoodStampableLabel,
          dataIndex    : 'FoodStampable',
          flex         : 1
        },
        {
          header       : this.HQIDLabel,
          dataIndex    : 'HQID',
          flex         : 1
        },
        {
          header       : this.ItemNotDiscountableLabel,
          dataIndex    : 'ItemNotDiscountable',
          flex         : 1
        },
        {
          header       : this.LastReceivedLabel,
          dataIndex    : 'LastReceived',
          flex         : 1
        },
        {
          header       : this.LastUpdatedLabel,
          dataIndex    : 'LastUpdated',
          flex         : 1
        },
        {
          header       : this.NotesLabel,
          dataIndex    : 'Notes',
          flex         : 1
        },
        {
          header       : this.QuantityCommittedLabel,
          dataIndex    : 'QuantityCommitted',
          flex         : 1
        },
        {
          header       : this.SerialNumberCountLabel,
          dataIndex    : 'SerialNumberCount',
          flex         : 1
        },
        {
          header       : this.TareWeightPercentLabel,
          dataIndex    : 'TareWeightPercent',
          flex         : 1
        },
        {
          header       : this.IDLabel,
          dataIndex    : 'ID',
          flex         : 1
        },
        {
          header       : this.ItemLookupCodeLabel,
          dataIndex    : 'ItemLookupCode',
          flex         : 1
        },
        {
          header       : this.DepartmentIDLabel,
          dataIndex    : 'DepartmentID',
          flex         : 1
        },
        {
          header       : this.CategoryIDLabel,
          dataIndex    : 'CategoryID',
          flex         : 1
        },
        {
          header       : this.MessageIDLabel,
          dataIndex    : 'MessageID',
          flex         : 1
        },
        {
          header       : this.PriceLabel,
          dataIndex    : 'Price',
          flex         : 1
        },
        {
          header       : this.PriceALabel,
          dataIndex    : 'PriceA',
          flex         : 1
        },
        {
          header       : this.PriceBLabel,
          dataIndex    : 'PriceB',
          flex         : 1
        },
        {
          header       : this.PriceCLabel,
          dataIndex    : 'PriceC',
          flex         : 1
        },
        {
          header       : this.SalePriceLabel,
          dataIndex    : 'SalePrice',
          flex         : 1
        },
        {
          header       : this.SaleStartDateLabel,
          dataIndex    : 'SaleStartDate',
          flex         : 1
        },
        {
          header       : this.SaleEndDateLabel,
          dataIndex    : 'SaleEndDate',
          flex         : 1
        },
        {
          header       : this.QuantityDiscountIDLabel,
          dataIndex    : 'QuantityDiscountID',
          flex         : 1
        },
        {
          header       : this.TaxIDLabel,
          dataIndex    : 'TaxID',
          flex         : 1
        },
        {
          header       : this.ItemTypeLabel,
          dataIndex    : 'ItemType',
          flex         : 1
        },
        {
          header       : this.CostLabel,
          dataIndex    : 'Cost',
          flex         : 1
        },
        {
          header       : this.QuantityLabel,
          dataIndex    : 'Quantity',
          flex         : 1
        },
        {
          header       : this.ReorderPointLabel,
          dataIndex    : 'ReorderPoint',
          flex         : 1
        },
        {
          header       : this.RestockLevelLabel,
          dataIndex    : 'RestockLevel',
          flex         : 1
        },
        {
          header       : this.TareWeightLabel,
          dataIndex    : 'TareWeight',
          flex         : 1
        },
        {
          header       : this.SupplierIDLabel,
          dataIndex    : 'SupplierID',
          flex         : 1
        },
        {
          header       : this.TagAlongItemLabel,
          dataIndex    : 'TagAlongItem',
          flex         : 1
        },
        {
          header       : this.TagAlongQuantityLabel,
          dataIndex    : 'TagAlongQuantity',
          flex         : 1
        },
        {
          header       : this.ParentItemLabel,
          dataIndex    : 'ParentItem',
          flex         : 1
        },
        {
          header       : this.ParentQuantityLabel,
          dataIndex    : 'ParentQuantity',
          flex         : 1
        },
        {
          header       : this.BarcodeFormatLabel,
          dataIndex    : 'BarcodeFormat',
          flex         : 1
        },
        {
          header       : this.PriceLowerBoundLabel,
          dataIndex    : 'PriceLowerBound',
          flex         : 1
        },
        {
          header       : this.PriceUpperBoundLabel,
          dataIndex    : 'PriceUpperBound',
          flex         : 1
        },
        {
          header       : this.PictureNameLabel,
          dataIndex    : 'PictureName',
          flex         : 1
        },
        {
          header       : this.LastSoldLabel,
          dataIndex    : 'LastSold',
          flex         : 1
        },
        {
          header       : this.ExtendedDescriptionLabel,
          dataIndex    : 'ExtendedDescription',
          flex         : 1
        },
        {
          header       : this.SubDescription1Label,
          dataIndex    : 'SubDescription1',
          flex         : 1
        },
        {
          header       : this.SubDescription2Label,
          dataIndex    : 'SubDescription2',
          flex         : 1
        },
        {
          header       : this.SubDescription3Label,
          dataIndex    : 'SubDescription3',
          flex         : 1
        },
        {
          header       : this.UnitOfMeasureLabel,
          dataIndex    : 'UnitOfMeasure',
          flex         : 1
        },
        {
          header       : this.SubCategoryIDLabel,
          dataIndex    : 'SubCategoryID',
          flex         : 1
        },
        {
          header       : this.QuantityEntryNotAllowedLabel,
          dataIndex    : 'QuantityEntryNotAllowed',
          flex         : 1
        },
        {
          header       : this.PriceMustBeEnteredLabel,
          dataIndex    : 'PriceMustBeEntered',
          flex         : 1
        },
        {
          header       : this.BlockSalesReasonLabel,
          dataIndex    : 'BlockSalesReason',
          flex         : 1
        },
        {
          header       : this.BlockSalesAfterDateLabel,
          dataIndex    : 'BlockSalesAfterDate',
          flex         : 1
        },
        {
          header       : this.WeightLabel,
          dataIndex    : 'Weight',
          flex         : 1
        },
        {
          header       : this.TaxableLabel,
          dataIndex    : 'Taxable',
          flex         : 1
        },
        {
          header       : this.DBTimeStampLabel,
          dataIndex    : 'DBTimeStamp',
          flex         : 1
        },
        {
          header       : this.BlockSalesBeforeDateLabel,
          dataIndex    : 'BlockSalesBeforeDate',
          flex         : 1
        },
        {
          header       : this.LastCostLabel,
          dataIndex    : 'LastCost',
          flex         : 1
        },
        {
          header       : this.ReplacementCostLabel,
          dataIndex    : 'ReplacementCost',
          flex         : 1
        },
        {
          header       : this.WebItemLabel,
          dataIndex    : 'WebItem',
          flex         : 1
        },
        {
          header       : this.BlockSalesTypeLabel,
          dataIndex    : 'BlockSalesType',
          flex         : 1
        },
        {
          header       : this.BlockSalesScheduleIDLabel,
          dataIndex    : 'BlockSalesScheduleID',
          flex         : 1
        },
        {
          header       : this.SaleTypeLabel,
          dataIndex    : 'SaleType',
          flex         : 1
        },
        {
          header       : this.SaleScheduleIDLabel,
          dataIndex    : 'SaleScheduleID',
          flex         : 1
        },
        {
          header       : this.ConsignmentLabel,
          dataIndex    : 'Consignment',
          flex         : 1
        },
        {
          header       : this.InactiveLabel,
          dataIndex    : 'Inactive',
          flex         : 1
        },
        {
          header       : this.LastCountedLabel,
          dataIndex    : 'LastCounted',
          flex         : 1
        },
        {
          header       : this.DoNotOrderLabel,
          dataIndex    : 'DoNotOrder',
          flex         : 1
        },
        {
          header       : this.MSRPLabel,
          dataIndex    : 'MSRP',
          flex         : 1
        },
        {
          header       : this.DateCreatedLabel,
          dataIndex    : 'DateCreated',
          flex         : 1
        },
        {
          header       : this.ContentLabel,
          dataIndex    : 'Content',
          flex         : 1
        },
        {
          header       : this.UsuallyShipLabel,
          dataIndex    : 'UsuallyShip',
          flex         : 1
        },
        {
          header       : this.NumberFormatLabel,
          dataIndex    : 'NumberFormat',
          flex         : 1
        },
        {
          header       : this.ItemCannotBeRetLabel,
          dataIndex    : 'ItemCannotBeRet',
          flex         : 1
        },
        {
          header       : this.ItemCannotBeSoldLabel,
          dataIndex    : 'ItemCannotBeSold',
          flex         : 1
        },
        {
          header       : this.IsAutogeneratedLabel,
          dataIndex    : 'IsAutogenerated',
          flex         : 1
        },
        {
          header       : this.IsGlobalvoucherLabel,
          dataIndex    : 'IsGlobalvoucher',
          flex         : 1
        },
        {
          header       : this.DeleteZeroBalanceEntryLabel,
          dataIndex    : 'DeleteZeroBalanceEntry',
          flex         : 1
        },
        {
          header       : this.TenderIDLabel,
          dataIndex    : 'TenderID',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});