Ext.define('Omni.view.rms_item_dynamics.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-rms_item_dynamics-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.RmsItemDynamic'),

  allowFind  :  true,

  contextMenuConfig : {
    xtype    : 'omni-rms_item_dynamics-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-rms_item_dynamics-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-rms_item_dynamics-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  IDLabel:                                Omni.i18n.model.RmsItemDynamic.ID,
  ItemIDLabel:                            Omni.i18n.model.RmsItemDynamic.ItemID,
  StoreIDLabel:                           Omni.i18n.model.RmsItemDynamic.StoreID,
  TaxIDLabel:                             Omni.i18n.model.RmsItemDynamic.TaxID,
  QuantityLabel:                          Omni.i18n.model.RmsItemDynamic.Quantity,
  QuantityCommittedLabel:                 Omni.i18n.model.RmsItemDynamic.QuantityCommitted,
  ReorderPointLabel:                      Omni.i18n.model.RmsItemDynamic.ReorderPoint,
  RestockLevelLabel:                      Omni.i18n.model.RmsItemDynamic.RestockLevel,
  LastReceivedLabel:                      Omni.i18n.model.RmsItemDynamic.LastReceived,
  LastSoldLabel:                          Omni.i18n.model.RmsItemDynamic.LastSold,
  SnapShotQuantityLabel:                  Omni.i18n.model.RmsItemDynamic.SnapShotQuantity,
  SnapShotQuantityCommittedLabel:         Omni.i18n.model.RmsItemDynamic.SnapShotQuantityCommitted,
  DeltaQuantityLabel:                     Omni.i18n.model.RmsItemDynamic.DeltaQuantity,
  DeltaQuantityCommittedLabel:            Omni.i18n.model.RmsItemDynamic.DeltaQuantityCommitted,
  SnapShotTimeLabel:                      Omni.i18n.model.RmsItemDynamic.SnapShotTime,
  DBTimeStampLabel:                       Omni.i18n.model.RmsItemDynamic.DBTimeStamp,
  SnapShotPriceLabel:                     Omni.i18n.model.RmsItemDynamic.SnapShotPrice,
  SnapShotPriceALabel:                    Omni.i18n.model.RmsItemDynamic.SnapShotPriceA,
  SnapShotPriceBLabel:                    Omni.i18n.model.RmsItemDynamic.SnapShotPriceB,
  SnapShotPriceCLabel:                    Omni.i18n.model.RmsItemDynamic.SnapShotPriceC,
  SnapShotSalePriceLabel:                 Omni.i18n.model.RmsItemDynamic.SnapShotSalePrice,
  SnapShotSaleStartDateLabel:             Omni.i18n.model.RmsItemDynamic.SnapShotSaleStartDate,
  SnapShotSaleEndDateLabel:               Omni.i18n.model.RmsItemDynamic.SnapShotSaleEndDate,
  SnapShotCostLabel:                      Omni.i18n.model.RmsItemDynamic.SnapShotCost,
  SnapShotLastCostLabel:                  Omni.i18n.model.RmsItemDynamic.SnapShotLastCost,
  SnapShotReplacementCostLabel:           Omni.i18n.model.RmsItemDynamic.SnapShotReplacementCost,
  SnapShotPriceLowerBoundLabel:           Omni.i18n.model.RmsItemDynamic.SnapShotPriceLowerBound,
  SnapShotPriceUpperBoundLabel:           Omni.i18n.model.RmsItemDynamic.SnapShotPriceUpperBound,
  SnapShotReorderPointLabel:              Omni.i18n.model.RmsItemDynamic.SnapShotReorderPoint,
  SnapShotRestockLevelLabel:              Omni.i18n.model.RmsItemDynamic.SnapShotRestockLevel,
  SnapShotTaxIDLabel:                     Omni.i18n.model.RmsItemDynamic.SnapShotTaxID,
  PriceLabel:                             Omni.i18n.model.RmsItemDynamic.Price,
  CostLabel:                              Omni.i18n.model.RmsItemDynamic.Cost,
  PriceLevelALabel:                       Omni.i18n.model.RmsItemDynamic.PriceLevelA,
  PriceLevelBLabel:                       Omni.i18n.model.RmsItemDynamic.PriceLevelB,
  PriceLevelCLabel:                       Omni.i18n.model.RmsItemDynamic.PriceLevelC,
  MSRPLabel:                              Omni.i18n.model.RmsItemDynamic.MSRP,
  SalePriceLabel:                         Omni.i18n.model.RmsItemDynamic.SalePrice,
  SaleStartDateLabel:                     Omni.i18n.model.RmsItemDynamic.SaleStartDate,
  SaleEndDateLabel:                       Omni.i18n.model.RmsItemDynamic.SaleEndDate,
  LowerBoundLabel:                        Omni.i18n.model.RmsItemDynamic.LowerBound,
  UpperBoundLabel:                        Omni.i18n.model.RmsItemDynamic.UpperBound,
  BuydownPriceLabel:                      Omni.i18n.model.RmsItemDynamic.BuydownPrice,
  BuydownQuantityLabel:                   Omni.i18n.model.RmsItemDynamic.BuydownQuantity,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Rms Item Dynamics',
  subtitle:  'Create and maintain Rms Item Dynamics',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.IDLabel,
        //   dataIndex    : 'ID',
        //   flex         : 1
        // },
        {
          header       : this.ItemIDLabel,
          dataIndex    : 'ItemID',
          flex         : 1
        },
        {
          header       : this.StoreIDLabel,
          dataIndex    : 'StoreID',
          flex         : 1
        },
        {
          header       : this.TaxIDLabel,
          dataIndex    : 'TaxID',
          flex         : 1
        },
        {
          header       : this.QuantityLabel,
          dataIndex    : 'Quantity',
          flex         : 1
        },
        {
          header       : this.QuantityCommittedLabel,
          dataIndex    : 'QuantityCommitted',
          flex         : 1
        },
        // {
        //   header       : this.ReorderPointLabel,
        //   dataIndex    : 'ReorderPoint',
        //   flex         : 1
        // },
        // {
        //   header       : this.RestockLevelLabel,
        //   dataIndex    : 'RestockLevel',
        //   flex         : 1
        // },
        // {
        //   header       : this.LastReceivedLabel,
        //   dataIndex    : 'LastReceived',
        //   flex         : 1
        // },
        // {
        //   header       : this.LastSoldLabel,
        //   dataIndex    : 'LastSold',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotQuantityLabel,
        //   dataIndex    : 'SnapShotQuantity',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotQuantityCommittedLabel,
        //   dataIndex    : 'SnapShotQuantityCommitted',
        //   flex         : 1
        // },
        // {
        //   header       : this.DeltaQuantityLabel,
        //   dataIndex    : 'DeltaQuantity',
        //   flex         : 1
        // },
        // {
        //   header       : this.DeltaQuantityCommittedLabel,
        //   dataIndex    : 'DeltaQuantityCommitted',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotTimeLabel,
        //   dataIndex    : 'SnapShotTime',
        //   flex         : 1
        // },
        // {
        //   header       : this.DBTimeStampLabel,
        //   dataIndex    : 'DBTimeStamp',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotPriceLabel,
        //   dataIndex    : 'SnapShotPrice',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotPriceALabel,
        //   dataIndex    : 'SnapShotPriceA',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotPriceBLabel,
        //   dataIndex    : 'SnapShotPriceB',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotPriceCLabel,
        //   dataIndex    : 'SnapShotPriceC',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotSalePriceLabel,
        //   dataIndex    : 'SnapShotSalePrice',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotSaleStartDateLabel,
        //   dataIndex    : 'SnapShotSaleStartDate',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotSaleEndDateLabel,
        //   dataIndex    : 'SnapShotSaleEndDate',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotCostLabel,
        //   dataIndex    : 'SnapShotCost',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotLastCostLabel,
        //   dataIndex    : 'SnapShotLastCost',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotReplacementCostLabel,
        //   dataIndex    : 'SnapShotReplacementCost',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotPriceLowerBoundLabel,
        //   dataIndex    : 'SnapShotPriceLowerBound',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotPriceUpperBoundLabel,
        //   dataIndex    : 'SnapShotPriceUpperBound',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotReorderPointLabel,
        //   dataIndex    : 'SnapShotReorderPoint',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotRestockLevelLabel,
        //   dataIndex    : 'SnapShotRestockLevel',
        //   flex         : 1
        // },
        // {
        //   header       : this.SnapShotTaxIDLabel,
        //   dataIndex    : 'SnapShotTaxID',
        //   flex         : 1
        // },
        {
          header       : this.PriceLabel,
          dataIndex    : 'Price',
          flex         : 1
        },
        {
          header       : this.CostLabel,
          dataIndex    : 'Cost',
          flex         : 1
        }
        // {
        //   header       : this.PriceLevelALabel,
        //   dataIndex    : 'PriceLevelA',
        //   flex         : 1
        // },
        // {
        //   header       : this.PriceLevelBLabel,
        //   dataIndex    : 'PriceLevelB',
        //   flex         : 1
        // },
        // {
        //   header       : this.PriceLevelCLabel,
        //   dataIndex    : 'PriceLevelC',
        //   flex         : 1
        // },
        // {
        //   header       : this.MSRPLabel,
        //   dataIndex    : 'MSRP',
        //   flex         : 1
        // },
        // {
        //   header       : this.SalePriceLabel,
        //   dataIndex    : 'SalePrice',
        //   flex         : 1
        // },
        // {
        //   header       : this.SaleStartDateLabel,
        //   dataIndex    : 'SaleStartDate',
        //   flex         : 1
        // },
        // {
        //   header       : this.SaleEndDateLabel,
        //   dataIndex    : 'SaleEndDate',
        //   flex         : 1
        // },
        // {
        //   header       : this.LowerBoundLabel,
        //   dataIndex    : 'LowerBound',
        //   flex         : 1
        // },
        // {
        //   header       : this.UpperBoundLabel,
        //   dataIndex    : 'UpperBound',
        //   flex         : 1
        // },
        // {
        //   header       : this.BuydownPriceLabel,
        //   dataIndex    : 'BuydownPrice',
        //   flex         : 1
        // },
        // {
        //   header       : this.BuydownQuantityLabel,
        //   dataIndex    : 'BuydownQuantity',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});