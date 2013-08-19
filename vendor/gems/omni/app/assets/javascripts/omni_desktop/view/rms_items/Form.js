Ext.define('Omni.view.rms_items.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-rms_items-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'ID',
      value:      this.record.get('ID')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
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
      TenderIDLabel:                          Omni.i18n.model.RmsItem.TenderID    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'BinLocation',                    fieldLabel: this.BinLocationLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'BuydownPrice',                   fieldLabel: this.BuydownPriceLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'BuydownQuantity',                fieldLabel: this.BuydownQuantityLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'CommissionAmount',               fieldLabel: this.CommissionAmountLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'CommissionMaximum',              fieldLabel: this.CommissionMaximumLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'CommissionMode',                 fieldLabel: this.CommissionModeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'CommissionPercentProfit',        fieldLabel: this.CommissionPercentProfitLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'CommissionPercentSale',          fieldLabel: this.CommissionPercentSaleLabel       , allowBlank: false },    
            { xtype: 'textfield', name: 'Description',                    fieldLabel: this.DescriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'FoodStampable',                  fieldLabel: this.FoodStampableLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'HQID',                           fieldLabel: this.HQIDLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemNotDiscountable',            fieldLabel: this.ItemNotDiscountableLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'LastReceived',                   fieldLabel: this.LastReceivedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'LastUpdated',                    fieldLabel: this.LastUpdatedLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Notes',                          fieldLabel: this.NotesLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'QuantityCommitted',              fieldLabel: this.QuantityCommittedLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'SerialNumberCount',              fieldLabel: this.SerialNumberCountLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'TareWeightPercent',              fieldLabel: this.TareWeightPercentLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'ID',                             fieldLabel: this.IDLabel                          , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemLookupCode',                 fieldLabel: this.ItemLookupCodeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'DepartmentID',                   fieldLabel: this.DepartmentIDLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'CategoryID',                     fieldLabel: this.CategoryIDLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'MessageID',                      fieldLabel: this.MessageIDLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Price',                          fieldLabel: this.PriceLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceA',                         fieldLabel: this.PriceALabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceB',                         fieldLabel: this.PriceBLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceC',                         fieldLabel: this.PriceCLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'SalePrice',                      fieldLabel: this.SalePriceLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'SaleStartDate',                  fieldLabel: this.SaleStartDateLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'SaleEndDate',                    fieldLabel: this.SaleEndDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'QuantityDiscountID',             fieldLabel: this.QuantityDiscountIDLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'TaxID',                          fieldLabel: this.TaxIDLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemType',                       fieldLabel: this.ItemTypeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'Cost',                           fieldLabel: this.CostLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'Quantity',                       fieldLabel: this.QuantityLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'ReorderPoint',                   fieldLabel: this.ReorderPointLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'RestockLevel',                   fieldLabel: this.RestockLevelLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'TareWeight',                     fieldLabel: this.TareWeightLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'SupplierID',                     fieldLabel: this.SupplierIDLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'TagAlongItem',                   fieldLabel: this.TagAlongItemLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'TagAlongQuantity',               fieldLabel: this.TagAlongQuantityLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'ParentItem',                     fieldLabel: this.ParentItemLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'ParentQuantity',                 fieldLabel: this.ParentQuantityLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'BarcodeFormat',                  fieldLabel: this.BarcodeFormatLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceLowerBound',                fieldLabel: this.PriceLowerBoundLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceUpperBound',                fieldLabel: this.PriceUpperBoundLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'PictureName',                    fieldLabel: this.PictureNameLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LastSold',                       fieldLabel: this.LastSoldLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'ExtendedDescription',            fieldLabel: this.ExtendedDescriptionLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'SubDescription1',                fieldLabel: this.SubDescription1Label             , allowBlank: false },    
            { xtype: 'textfield', name: 'SubDescription2',                fieldLabel: this.SubDescription2Label             , allowBlank: false },    
            { xtype: 'textfield', name: 'SubDescription3',                fieldLabel: this.SubDescription3Label             , allowBlank: false },    
            { xtype: 'textfield', name: 'UnitOfMeasure',                  fieldLabel: this.UnitOfMeasureLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'SubCategoryID',                  fieldLabel: this.SubCategoryIDLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'QuantityEntryNotAllowed',        fieldLabel: this.QuantityEntryNotAllowedLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceMustBeEntered',             fieldLabel: this.PriceMustBeEnteredLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'BlockSalesReason',               fieldLabel: this.BlockSalesReasonLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'BlockSalesAfterDate',            fieldLabel: this.BlockSalesAfterDateLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'Weight',                         fieldLabel: this.WeightLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'Taxable',                        fieldLabel: this.TaxableLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'DBTimeStamp',                    fieldLabel: this.DBTimeStampLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'BlockSalesBeforeDate',           fieldLabel: this.BlockSalesBeforeDateLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'LastCost',                       fieldLabel: this.LastCostLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'ReplacementCost',                fieldLabel: this.ReplacementCostLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'WebItem',                        fieldLabel: this.WebItemLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'BlockSalesType',                 fieldLabel: this.BlockSalesTypeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'BlockSalesScheduleID',           fieldLabel: this.BlockSalesScheduleIDLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'SaleType',                       fieldLabel: this.SaleTypeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'SaleScheduleID',                 fieldLabel: this.SaleScheduleIDLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'Consignment',                    fieldLabel: this.ConsignmentLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Inactive',                       fieldLabel: this.InactiveLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'LastCounted',                    fieldLabel: this.LastCountedLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'DoNotOrder',                     fieldLabel: this.DoNotOrderLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'MSRP',                           fieldLabel: this.MSRPLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'DateCreated',                    fieldLabel: this.DateCreatedLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Content',                        fieldLabel: this.ContentLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'UsuallyShip',                    fieldLabel: this.UsuallyShipLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'NumberFormat',                   fieldLabel: this.NumberFormatLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemCannotBeRet',                fieldLabel: this.ItemCannotBeRetLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemCannotBeSold',               fieldLabel: this.ItemCannotBeSoldLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'IsAutogenerated',                fieldLabel: this.IsAutogeneratedLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'IsGlobalvoucher',                fieldLabel: this.IsGlobalvoucherLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'DeleteZeroBalanceEntry',         fieldLabel: this.DeleteZeroBalanceEntryLabel      , allowBlank: false },    
            { xtype: 'textfield', name: 'TenderID',                       fieldLabel: this.TenderIDLabel                    , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit RmsItems',
      newTitle: 'New Rms Item',
      newSubtitle: 'Complete the following to create a new Rms Item'
    });
    // TITLES (End)

    this.callParent();
    
  }

});