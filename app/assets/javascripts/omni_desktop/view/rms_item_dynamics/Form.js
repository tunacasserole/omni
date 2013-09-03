Ext.define('Omni.view.rms_item_dynamics.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-rms_item_dynamics-Form',


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
      BuydownQuantityLabel:                   Omni.i18n.model.RmsItemDynamic.BuydownQuantity    
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

            { xtype: 'textfield', name: 'ID',                             fieldLabel: this.IDLabel                          , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemID',                         fieldLabel: this.ItemIDLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'StoreID',                        fieldLabel: this.StoreIDLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'TaxID',                          fieldLabel: this.TaxIDLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Quantity',                       fieldLabel: this.QuantityLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'QuantityCommitted',              fieldLabel: this.QuantityCommittedLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'ReorderPoint',                   fieldLabel: this.ReorderPointLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'RestockLevel',                   fieldLabel: this.RestockLevelLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'LastReceived',                   fieldLabel: this.LastReceivedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'LastSold',                       fieldLabel: this.LastSoldLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotQuantity',               fieldLabel: this.SnapShotQuantityLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotQuantityCommitted',      fieldLabel: this.SnapShotQuantityCommittedLabel   , allowBlank: false },    
            { xtype: 'textfield', name: 'DeltaQuantity',                  fieldLabel: this.DeltaQuantityLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'DeltaQuantityCommitted',         fieldLabel: this.DeltaQuantityCommittedLabel      , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotTime',                   fieldLabel: this.SnapShotTimeLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'DBTimeStamp',                    fieldLabel: this.DBTimeStampLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotPrice',                  fieldLabel: this.SnapShotPriceLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotPriceA',                 fieldLabel: this.SnapShotPriceALabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotPriceB',                 fieldLabel: this.SnapShotPriceBLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotPriceC',                 fieldLabel: this.SnapShotPriceCLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotSalePrice',              fieldLabel: this.SnapShotSalePriceLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotSaleStartDate',          fieldLabel: this.SnapShotSaleStartDateLabel       , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotSaleEndDate',            fieldLabel: this.SnapShotSaleEndDateLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotCost',                   fieldLabel: this.SnapShotCostLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotLastCost',               fieldLabel: this.SnapShotLastCostLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotReplacementCost',        fieldLabel: this.SnapShotReplacementCostLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotPriceLowerBound',        fieldLabel: this.SnapShotPriceLowerBoundLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotPriceUpperBound',        fieldLabel: this.SnapShotPriceUpperBoundLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotReorderPoint',           fieldLabel: this.SnapShotReorderPointLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotRestockLevel',           fieldLabel: this.SnapShotRestockLevelLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'SnapShotTaxID',                  fieldLabel: this.SnapShotTaxIDLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'Price',                          fieldLabel: this.PriceLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Cost',                           fieldLabel: this.CostLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceLevelA',                    fieldLabel: this.PriceLevelALabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceLevelB',                    fieldLabel: this.PriceLevelBLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'PriceLevelC',                    fieldLabel: this.PriceLevelCLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'MSRP',                           fieldLabel: this.MSRPLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'SalePrice',                      fieldLabel: this.SalePriceLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'SaleStartDate',                  fieldLabel: this.SaleStartDateLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'SaleEndDate',                    fieldLabel: this.SaleEndDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LowerBound',                     fieldLabel: this.LowerBoundLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'UpperBound',                     fieldLabel: this.UpperBoundLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'BuydownPrice',                   fieldLabel: this.BuydownPriceLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'BuydownQuantity',                fieldLabel: this.BuydownQuantityLabel             , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit RmsItemDynamics',
      newTitle: 'New Rms Item Dynamic',
      newSubtitle: 'Complete the following to create a new Rms Item Dynamic'
    });
    // TITLES (End)

    this.callParent();
    
  }

});