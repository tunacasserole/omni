Ext.define('Omni.view.uniform_lookups.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-uniform_lookups-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-uniform_lookups-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-uniform_lookups-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  uniform_lookup_idLabel                  : Omni.i18n.model.UniformLookup.uniform_lookup_id,
  displayLabel                            : Omni.i18n.model.UniformLookup.display,
  uniform_lookup_nbrLabel                 : Omni.i18n.model.UniformLookup.uniform_lookup_nbr,
  uniform_idLabel                         : Omni.i18n.model.UniformLookup.uniform_id,
  account_idLabel                         : Omni.i18n.model.UniformLookup.account_id,
  contract_idLabel                        : Omni.i18n.model.UniformLookup.contract_id,
  category_idLabel                        : Omni.i18n.model.UniformLookup.category_id,
  product_idLabel                         : Omni.i18n.model.UniformLookup.product_id,
  style_idLabel                           : Omni.i18n.model.UniformLookup.style_id,
  color_idLabel                           : Omni.i18n.model.UniformLookup.color_id,
  size_idLabel                            : Omni.i18n.model.UniformLookup.size_id,
  sku_idLabel                             : Omni.i18n.model.UniformLookup.sku_id,
  grade_idLabel                           : Omni.i18n.model.UniformLookup.grade_id,
  stateLabel                              : Omni.i18n.model.UniformLookup.state,
  date_createdLabel                       : Omni.i18n.model.UniformLookup.date_created,
  is_required_maleLabel                   : Omni.i18n.model.UniformLookup.is_required_male,
  is_required_femaleLabel                 : Omni.i18n.model.UniformLookup.is_required_female,
  is_optional_maleLabel                   : Omni.i18n.model.UniformLookup.is_optional_male,
  is_optional_femaleLabel                 : Omni.i18n.model.UniformLookup.is_optional_female,
  is_includes_logoLabel                   : Omni.i18n.model.UniformLookup.is_includes_logo,
  is_requires_logoLabel                   : Omni.i18n.model.UniformLookup.is_requires_logo,
  discount_percentLabel                   : Omni.i18n.model.UniformLookup.discount_percent,
  mark_uniform_keyLabel                   : Omni.i18n.model.UniformLookup.mark_uniform_key,
  mark_stock_numberLabel                  : Omni.i18n.model.UniformLookup.mark_stock_number,
  mark_gradesLabel                        : Omni.i18n.model.UniformLookup.mark_grades,
  price_adjustment_1Label                 : Omni.i18n.model.UniformLookup.price_adjustment_1,
  price_adjustment_2Label                 : Omni.i18n.model.UniformLookup.price_adjustment_2,
  uniform_sourceLabel                     : Omni.i18n.model.UniformLookup.uniform_source,
  is_approvedLabel                        : Omni.i18n.model.UniformLookup.is_approved,
  is_destroyedLabel                       : Omni.i18n.model.UniformLookup.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Uniform Lookups',
  subtitle : 'Create and maintain Uniform Lookups',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.UniformLookup')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : me.uniform_lookup_nbrLabel,
          dataIndex    : 'uniform_lookup_nbr',
          flex         : 1
        },
        {
          header       : me.uniform_idLabel,
          dataIndex    : 'uniform_id',
          flex         : 1
        },
        {
          header       : me.account_idLabel,
          dataIndex    : 'account_id',
          flex         : 1
        },
        {
          header       : me.contract_idLabel,
          dataIndex    : 'contract_id',
          flex         : 1
        },
        {
          header       : me.category_idLabel,
          dataIndex    : 'category_id',
          flex         : 1
        },
        {
          header       : me.product_idLabel,
          dataIndex    : 'product_id',
          flex         : 1
        },
        {
          header       : me.style_idLabel,
          dataIndex    : 'style_id',
          flex         : 1
        },
        {
          header       : me.color_idLabel,
          dataIndex    : 'color_id',
          flex         : 1
        },
        {
          header       : me.size_idLabel,
          dataIndex    : 'size_id',
          flex         : 1
        },
        {
          header       : me.sku_idLabel,
          dataIndex    : 'sku_id',
          flex         : 1
        },
        {
          header       : me.grade_idLabel,
          dataIndex    : 'grade_id',
          flex         : 1
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.date_createdLabel,
          dataIndex    : 'date_created',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_required_maleLabel,
          dataIndex    : 'is_required_male',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_required_femaleLabel,
          dataIndex    : 'is_required_female',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_optional_maleLabel,
          dataIndex    : 'is_optional_male',
          flex         : 1
        },
        {
          header       : me.is_optional_femaleLabel,
          dataIndex    : 'is_optional_female',
          flex         : 1
        },
        {
          header       : me.is_includes_logoLabel,
          dataIndex    : 'is_includes_logo',
          flex         : 1
        },
        {
          header       : me.is_requires_logoLabel,
          dataIndex    : 'is_requires_logo',
          flex         : 1
        },
        {
          header       : me.discount_percentLabel,
          dataIndex    : 'discount_percent',
          flex         : 1
        },
        {
          header       : me.mark_uniform_keyLabel,
          dataIndex    : 'mark_uniform_key',
          flex         : 1
        },
        {
          header       : me.mark_stock_numberLabel,
          dataIndex    : 'mark_stock_number',
          flex         : 1
        },
        {
          header       : me.mark_gradesLabel,
          dataIndex    : 'mark_grades',
          flex         : 1
        },
        {
          header       : me.price_adjustment_1Label,
          dataIndex    : 'price_adjustment_1',
          flex         : 1
        },
        {
          header       : me.price_adjustment_2Label,
          dataIndex    : 'price_adjustment_2',
          flex         : 1
        },
        {
          header       : me.uniform_sourceLabel,
          dataIndex    : 'uniform_source',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_approvedLabel,
          dataIndex    : 'is_approved',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});