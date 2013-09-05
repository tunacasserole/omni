Ext.define('Omni.view.rms_bts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-rms_bts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'ItemID',
      value:      this.record.get('ItemID')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      ItemIDLabel:                            Omni.i18n.model.RmsBts.ItemID,    
      StyleLabel:                             Omni.i18n.model.RmsBts.Style,    
      StockNbrLabel:                          Omni.i18n.model.RmsBts.StockNbr,    
      DescriptionLabel:                       Omni.i18n.model.RmsBts.Description,    
      ColorLabel:                             Omni.i18n.model.RmsBts.Color,    
      SizeLabel:                              Omni.i18n.model.RmsBts.Size,    
      VarianceLabel:                          Omni.i18n.model.RmsBts.Variance,    
      SupplierLabel:                          Omni.i18n.model.RmsBts.Supplier,    
      QOHLabel:                               Omni.i18n.model.RmsBts.QOH,    
      ItemQOHLabel:                           Omni.i18n.model.RmsBts.ItemQOH,    
      ItemDescripLabel:                       Omni.i18n.model.RmsBts.ItemDescrip,    
      QOOLabel:                               Omni.i18n.model.RmsBts.QOO,    
      ItemQOOLabel:                           Omni.i18n.model.RmsBts.ItemQOO,    
      SalesPriceLabel:                        Omni.i18n.model.RmsBts.SalesPrice,    
      CostLabel:                              Omni.i18n.model.RmsBts.Cost,    
      JAN_2012Label:                          Omni.i18n.model.RmsBts.JAN_2012,    
      JAN_2013Label:                          Omni.i18n.model.RmsBts.JAN_2013,    
      FEB_2012Label:                          Omni.i18n.model.RmsBts.FEB_2012,    
      FEB_2013Label:                          Omni.i18n.model.RmsBts.FEB_2013,    
      MAR_2012Label:                          Omni.i18n.model.RmsBts.MAR_2012,    
      MAR_2013Label:                          Omni.i18n.model.RmsBts.MAR_2013,    
      APR_2012Label:                          Omni.i18n.model.RmsBts.APR_2012,    
      APR_2013Label:                          Omni.i18n.model.RmsBts.APR_2013,    
      MAY_2012Label:                          Omni.i18n.model.RmsBts.MAY_2012,    
      MAY_2013Label:                          Omni.i18n.model.RmsBts.MAY_2013,    
      JUN_2012Label:                          Omni.i18n.model.RmsBts.JUN_2012,    
      JUN_2013Label:                          Omni.i18n.model.RmsBts.JUN_2013,    
      JUL_2012Label:                          Omni.i18n.model.RmsBts.JUL_2012,    
      JUL_2013Label:                          Omni.i18n.model.RmsBts.JUL_2013,    
      AUG_2012Label:                          Omni.i18n.model.RmsBts.AUG_2012,    
      AUG_2013Label:                          Omni.i18n.model.RmsBts.AUG_2013,    
      SEP_2012Label:                          Omni.i18n.model.RmsBts.SEP_2012,    
      SEP_2013Label:                          Omni.i18n.model.RmsBts.SEP_2013,    
      OCT_2012Label:                          Omni.i18n.model.RmsBts.OCT_2012,    
      OCT_2013Label:                          Omni.i18n.model.RmsBts.OCT_2013,    
      NOV_2012Label:                          Omni.i18n.model.RmsBts.NOV_2012,    
      NOV_2013Label:                          Omni.i18n.model.RmsBts.NOV_2013,    
      DEC_2012Label:                          Omni.i18n.model.RmsBts.DEC_2012,    
      DEC_2013Label:                          Omni.i18n.model.RmsBts.DEC_2013,    
      TOT_2010Label:                          Omni.i18n.model.RmsBts.TOT_2010,    
      TOT_2011Label:                          Omni.i18n.model.RmsBts.TOT_2011,    
      TOT_2012Label:                          Omni.i18n.model.RmsBts.TOT_2012,    
      TOT_2013Label:                          Omni.i18n.model.RmsBts.TOT_2013    
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

            { xtype: 'textfield', name: 'ItemID',                         fieldLabel: this.ItemIDLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'Style',                          fieldLabel: this.StyleLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'StockNbr',                       fieldLabel: this.StockNbrLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'Description',                    fieldLabel: this.DescriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'Color',                          fieldLabel: this.ColorLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'Size',                           fieldLabel: this.SizeLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'Variance',                       fieldLabel: this.VarianceLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'Supplier',                       fieldLabel: this.SupplierLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'QOH',                            fieldLabel: this.QOHLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemQOH',                        fieldLabel: this.ItemQOHLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemDescrip',                    fieldLabel: this.ItemDescripLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'QOO',                            fieldLabel: this.QOOLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'ItemQOO',                        fieldLabel: this.ItemQOOLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'SalesPrice',                     fieldLabel: this.SalesPriceLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'Cost',                           fieldLabel: this.CostLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'JAN_2012',                       fieldLabel: this.JAN_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'JAN_2013',                       fieldLabel: this.JAN_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'FEB_2012',                       fieldLabel: this.FEB_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'FEB_2013',                       fieldLabel: this.FEB_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'MAR_2012',                       fieldLabel: this.MAR_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'MAR_2013',                       fieldLabel: this.MAR_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'APR_2012',                       fieldLabel: this.APR_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'APR_2013',                       fieldLabel: this.APR_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'MAY_2012',                       fieldLabel: this.MAY_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'MAY_2013',                       fieldLabel: this.MAY_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'JUN_2012',                       fieldLabel: this.JUN_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'JUN_2013',                       fieldLabel: this.JUN_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'JUL_2012',                       fieldLabel: this.JUL_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'JUL_2013',                       fieldLabel: this.JUL_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'AUG_2012',                       fieldLabel: this.AUG_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'AUG_2013',                       fieldLabel: this.AUG_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'SEP_2012',                       fieldLabel: this.SEP_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'SEP_2013',                       fieldLabel: this.SEP_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'OCT_2012',                       fieldLabel: this.OCT_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'OCT_2013',                       fieldLabel: this.OCT_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'NOV_2012',                       fieldLabel: this.NOV_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'NOV_2013',                       fieldLabel: this.NOV_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'DEC_2012',                       fieldLabel: this.DEC_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'DEC_2013',                       fieldLabel: this.DEC_2013Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'TOT_2010',                       fieldLabel: this.TOT_2010Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'TOT_2011',                       fieldLabel: this.TOT_2011Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'TOT_2012',                       fieldLabel: this.TOT_2012Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'TOT_2013',                       fieldLabel: this.TOT_2013Label                    , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit RmsBts',
      newTitle: 'New Rms Bts',
      newSubtitle: 'Complete the following to create a new Rms Bts'
    });
    // TITLES (End)

    this.callParent();
    
  }

});