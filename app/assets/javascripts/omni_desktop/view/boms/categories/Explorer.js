Ext.define('Omni.view.categories.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-categories-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Category'),

  contextMenuConfig : {
    xtype    : 'omni-categories-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-categories-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-categories-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  category_idLabel:                       Omni.i18n.model.Category.category_id,
  displayLabel:                           Omni.i18n.model.Category.display,
  category_codeLabel:                     Omni.i18n.model.Category.category_code,
  descriptionLabel:                       Omni.i18n.model.Category.description,
  category_typeLabel:                     Omni.i18n.model.Category.category_type,
  is_destroyedLabel:                      Omni.i18n.model.Category.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Categories',
  subtitle:  'Create and maintain Categories',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.category_idLabel,
          dataIndex    : 'category_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.category_codeLabel,
          dataIndex    : 'category_code',
          flex         : 1
        },
        {
          header       : this.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          header       : this.category_typeLabel,
          dataIndex    : 'category_type',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});