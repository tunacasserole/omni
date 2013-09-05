Ext.define('Omni.view.rms_bts.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-rms_bts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.RmsBts'),

  contextMenuConfig : {
    xtype    : 'omni-rms_bts-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-rms_bts-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-rms_bts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  TOT_2013Label:                          Omni.i18n.model.RmsBts.TOT_2013,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'RmsBts',
  subtitle:  'Create and maintain RmsBts',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.ItemIDLabel,
          dataIndex    : 'ItemID',
          flex         : 1
        },
        {
          header       : this.StyleLabel,
          dataIndex    : 'Style',
          flex         : 1
        },
        {
          header       : this.StockNbrLabel,
          dataIndex    : 'StockNbr',
          flex         : 1
        },
        {
          header       : this.DescriptionLabel,
          dataIndex    : 'Description',
          flex         : 1
        },
        {
          header       : this.ColorLabel,
          dataIndex    : 'Color',
          flex         : 1
        },
        {
          header       : this.SizeLabel,
          dataIndex    : 'Size',
          flex         : 1
        },
        {
          header       : this.VarianceLabel,
          dataIndex    : 'Variance',
          flex         : 1
        },
        {
          header       : this.SupplierLabel,
          dataIndex    : 'Supplier',
          flex         : 1
        },
        {
          header       : this.QOHLabel,
          dataIndex    : 'QOH',
          flex         : 1
        },
        {
          header       : this.ItemQOHLabel,
          dataIndex    : 'ItemQOH',
          flex         : 1
        },
        {
          header       : this.ItemDescripLabel,
          dataIndex    : 'ItemDescrip',
          flex         : 1
        },
        {
          header       : this.QOOLabel,
          dataIndex    : 'QOO',
          flex         : 1
        },
        {
          header       : this.ItemQOOLabel,
          dataIndex    : 'ItemQOO',
          flex         : 1
        },
        {
          header       : this.SalesPriceLabel,
          dataIndex    : 'SalesPrice',
          flex         : 1
        },
        {
          header       : this.CostLabel,
          dataIndex    : 'Cost',
          flex         : 1
        },
        {
          header       : this.JAN_2012Label,
          dataIndex    : 'JAN_2012',
          flex         : 1
        },
        {
          header       : this.JAN_2013Label,
          dataIndex    : 'JAN_2013',
          flex         : 1
        },
        {
          header       : this.FEB_2012Label,
          dataIndex    : 'FEB_2012',
          flex         : 1
        },
        {
          header       : this.FEB_2013Label,
          dataIndex    : 'FEB_2013',
          flex         : 1
        },
        {
          header       : this.MAR_2012Label,
          dataIndex    : 'MAR_2012',
          flex         : 1
        },
        {
          header       : this.MAR_2013Label,
          dataIndex    : 'MAR_2013',
          flex         : 1
        },
        {
          header       : this.APR_2012Label,
          dataIndex    : 'APR_2012',
          flex         : 1
        },
        {
          header       : this.APR_2013Label,
          dataIndex    : 'APR_2013',
          flex         : 1
        },
        {
          header       : this.MAY_2012Label,
          dataIndex    : 'MAY_2012',
          flex         : 1
        },
        {
          header       : this.MAY_2013Label,
          dataIndex    : 'MAY_2013',
          flex         : 1
        },
        {
          header       : this.JUN_2012Label,
          dataIndex    : 'JUN_2012',
          flex         : 1
        },
        {
          header       : this.JUN_2013Label,
          dataIndex    : 'JUN_2013',
          flex         : 1
        },
        {
          header       : this.JUL_2012Label,
          dataIndex    : 'JUL_2012',
          flex         : 1
        },
        {
          header       : this.JUL_2013Label,
          dataIndex    : 'JUL_2013',
          flex         : 1
        },
        {
          header       : this.AUG_2012Label,
          dataIndex    : 'AUG_2012',
          flex         : 1
        },
        {
          header       : this.AUG_2013Label,
          dataIndex    : 'AUG_2013',
          flex         : 1
        },
        {
          header       : this.SEP_2012Label,
          dataIndex    : 'SEP_2012',
          flex         : 1
        },
        {
          header       : this.SEP_2013Label,
          dataIndex    : 'SEP_2013',
          flex         : 1
        },
        {
          header       : this.OCT_2012Label,
          dataIndex    : 'OCT_2012',
          flex         : 1
        },
        {
          header       : this.OCT_2013Label,
          dataIndex    : 'OCT_2013',
          flex         : 1
        },
        {
          header       : this.NOV_2012Label,
          dataIndex    : 'NOV_2012',
          flex         : 1
        },
        {
          header       : this.NOV_2013Label,
          dataIndex    : 'NOV_2013',
          flex         : 1
        },
        {
          header       : this.DEC_2012Label,
          dataIndex    : 'DEC_2012',
          flex         : 1
        },
        {
          header       : this.DEC_2013Label,
          dataIndex    : 'DEC_2013',
          flex         : 1
        },
        {
          header       : this.TOT_2010Label,
          dataIndex    : 'TOT_2010',
          flex         : 1
        },
        {
          header       : this.TOT_2011Label,
          dataIndex    : 'TOT_2011',
          flex         : 1
        },
        {
          header       : this.TOT_2012Label,
          dataIndex    : 'TOT_2012',
          flex         : 1
        },
        {
          header       : this.TOT_2013Label,
          dataIndex    : 'TOT_2013',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});