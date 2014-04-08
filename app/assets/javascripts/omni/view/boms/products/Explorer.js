Ext.define('Omni.view.products.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-products-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Product'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-products-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-products-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  displayLabel:                           Omni.i18n.model.Product.display,
  product_nbrLabel:                       Omni.i18n.model.Product.product_nbr,
  descriptionLabel:                       Omni.i18n.model.Product.description,
  category_idLabel:                       Omni.i18n.model.Product.category_id,
  is_destroyedLabel:                      Omni.i18n.model.Product.is_destroyed,
  product_idLabel:                        Omni.i18n.model.Product.product_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Products',
  subtitle:  'Create and maintain Products',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.product_nbrLabel,
          dataIndex    : 'product_nbr',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.category_idLabel,
          dataIndex    : 'category_id',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        },
        {
          header       : this.product_idLabel,
          dataIndex    : 'product_id',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
