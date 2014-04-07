Ext.define('Omni.model.RmsInventory', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'id',
      type       : 'integer'
    },
    {
      name       : 'Store_ID',
      type       : 'string'
    },
    {
      name       : 'Item_ID',
      type       : 'string'
    },
    {
      name       : 'Style',
      type       : 'string'
    },
    {
      name       : 'Vendor_Style',
      type       : 'string'
    },
    {
      name       : 'Conversion',
      type       : 'string'
    },
    {
      name       : 'Stock_Number',
      type       : 'string'
    },
    {
      name       : 'Description',
      type       : 'string'
    },
    {
      name       : 'Color',
      type       : 'string'
    },
    {
      name       : 'Size',
      type       : 'string'
    },
    {
      name       : 'Variance',
      type       : 'string'
    },
    {
      name       : 'Supplier',
      type       : 'string'
    },
    {
      name       : 'Supplier_Name',
      type       : 'string'
    },
    {
      name       : 'QOH_All_Stores',
      type       : 'string'
    },
    {
      name       : 'Item_QOH',
      type       : 'string'
    },
    {
      name       : 'Item_Description',
      type       : 'string'
    },
    {
      name       : 'QOO_All_Stores',
      type       : 'string'
    },
    {
      name       : 'Item_QOO',
      type       : 'string'
    },
    {
      name       : 'Qty_Ordered_Since_4_1_2013',
      type       : 'string'
    },
    {
      name       : 'Qty_Received_Since_4_1_2013',
      type       : 'string'
    },
    {
      name       : 'Sales_Price',
      type       : 'string'
    },
    {
      name       : 'Cost',
      type       : 'string'
    },
    {
      name       : 'Total_Sold_2011',
      type       : 'string'
    },
    {
      name       : 'Total_Sold_2012',
      type       : 'string'
    },
    {
      name       : 'Total_Sold_2013',
      type       : 'string'
    },
    {
      name       : 'Total_Sold_2014',
      type       : 'string'
    },
    {
      name       : 'Total_Sold_Past_12Months',
      type       : 'string'
    }

  ],

  idProperty : 'id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.RmsInventory.create,
      read       : Omni.service.RmsInventory.read,
      update     : Omni.service.RmsInventory.update,
      destroy    : Omni.service.RmsInventory.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Omni.model.RmsInventory'