Ext.define('Omni.model.RmsItemDynamic', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'ID',                          type: 'integer'  },
      { name: 'ItemID',                      type: 'integer'  },
      { name: 'StoreID',                     type: 'integer'  },
      { name: 'TaxID',                       type: 'integer'  },
      { name: 'Quantity',                    type: 'integer'  },
      { name: 'QuantityCommitted',           type: 'integer'  },
      { name: 'ReorderPoint',                type: 'integer'  },
      { name: 'RestockLevel',                type: 'integer'  },
      { name: 'LastReceived',                type: 'string'   },
      { name: 'LastSold',                    type: 'string'   },
      { name: 'SnapShotQuantity',            type: 'integer'  },
      { name: 'SnapShotQuantityCommitted',   type: 'integer'  },
      { name: 'DeltaQuantity',               type: 'string'   },
      { name: 'DeltaQuantityCommitted',      type: 'string'   },
      { name: 'SnapShotTime',                type: 'string'   },
      { name: 'DBTimeStamp',                 type: 'string'   },
      { name: 'SnapShotPrice',               type: 'string'   },
      { name: 'SnapShotPriceA',              type: 'string'   },
      { name: 'SnapShotPriceB',              type: 'string'   },
      { name: 'SnapShotPriceC',              type: 'string'   },
      { name: 'SnapShotSalePrice',           type: 'string'   },
      { name: 'SnapShotSaleStartDate',       type: 'string'   },
      { name: 'SnapShotSaleEndDate',         type: 'string'   },
      { name: 'SnapShotCost',                type: 'string'   },
      { name: 'SnapShotLastCost',            type: 'string'   },
      { name: 'SnapShotReplacementCost',     type: 'integer'  },
      { name: 'SnapShotPriceLowerBound',     type: 'integer'  },
      { name: 'SnapShotPriceUpperBound',     type: 'integer'  },
      { name: 'SnapShotReorderPoint',        type: 'string'   },
      { name: 'SnapShotRestockLevel',        type: 'string'   },
      { name: 'SnapShotTaxID',               type: 'integer'  },
      { name: 'Price',                       type: 'string'   },
      { name: 'Cost',                        type: 'string'   },
      { name: 'PriceLevelA',                 type: 'string'   },
      { name: 'PriceLevelB',                 type: 'string'   },
      { name: 'PriceLevelC',                 type: 'string'   },
      { name: 'MSRP',                        type: 'string'   },
      { name: 'SalePrice',                   type: 'string'   },
      { name: 'SaleStartDate',               type: 'string'   },
      { name: 'SaleEndDate',                 type: 'string'   },
      { name: 'LowerBound',                  type: 'integer'  },
      { name: 'UpperBound',                  type: 'integer'  },
      { name: 'BuydownPrice',                type: 'integer'  },
      { name: 'BuydownQuantity',             type: 'integer'  }
    ],

  idProperty: 'ID',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.RmsItemDynamic.create,
      read:    Omni.service.RmsItemDynamic.read,
      update:  Omni.service.RmsItemDynamic.update,
      destroy: Omni.service.RmsItemDynamic.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});