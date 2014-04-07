Ext.define('Omni.view.rms_inventories.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-rms_inventories-Form',


  // LABELS (Start) =======================================================================
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


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'id',
      value       : this.record.get('id')
    };
    // FILTER (End)

    

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
    {
      xtype        : 'textfield',
      name         : 'Store_ID',
      fieldLabel   : me.Store_IDLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Item_ID',
      fieldLabel   : me.Item_IDLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Style',
      fieldLabel   : me.StyleLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Vendor_Style',
      fieldLabel   : me.Vendor_StyleLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Conversion',
      fieldLabel   : me.ConversionLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Stock_Number',
      fieldLabel   : me.Stock_NumberLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Description',
      fieldLabel   : me.DescriptionLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Color',
      fieldLabel   : me.ColorLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Size',
      fieldLabel   : me.SizeLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Variance',
      fieldLabel   : me.VarianceLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Supplier',
      fieldLabel   : me.SupplierLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Supplier_Name',
      fieldLabel   : me.Supplier_NameLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'QOH_All_Stores',
      fieldLabel   : me.QOH_All_StoresLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Item_QOH',
      fieldLabel   : me.Item_QOHLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Item_Description',
      fieldLabel   : me.Item_DescriptionLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'QOO_All_Stores',
      fieldLabel   : me.QOO_All_StoresLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Item_QOO',
      fieldLabel   : me.Item_QOOLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Qty_Ordered_Since_4_1_2013',
      fieldLabel   : me.Qty_Ordered_Since_4_1_2013Label,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Qty_Received_Since_4_1_2013',
      fieldLabel   : me.Qty_Received_Since_4_1_2013Label,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Sales_Price',
      fieldLabel   : me.Sales_PriceLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Cost',
      fieldLabel   : me.CostLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Total_Sold_2011',
      fieldLabel   : me.Total_Sold_2011Label,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Total_Sold_2012',
      fieldLabel   : me.Total_Sold_2012Label,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Total_Sold_2013',
      fieldLabel   : me.Total_Sold_2013Label,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Total_Sold_2014',
      fieldLabel   : me.Total_Sold_2014Label,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'Total_Sold_Past_12Months',
      fieldLabel   : me.Total_Sold_Past_12MonthsLabel,
      maxLength    : 255,
      minLength    : 0,
      allowBlank   : true
    }
          ]
        }/*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/          
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Rms Inventory',
      subtitle    : 'Edit Rms Inventory'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.rms_inventories.Form'