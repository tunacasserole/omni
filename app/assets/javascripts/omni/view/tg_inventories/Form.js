Ext.define('Omni.view.tg_inventories.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-tg_inventories-Form',


  // LABELS (Start) =======================================================================
  ITEMLabel                               : Omni.i18n.model.TgInventory.ITEM,
  OH_60Label                              : Omni.i18n.model.TgInventory.OH_60,
  OH_61Label                              : Omni.i18n.model.TgInventory.OH_61,
  OH_62Label                              : Omni.i18n.model.TgInventory.OH_62,
  OH_63Label                              : Omni.i18n.model.TgInventory.OH_63,
  OH_64Label                              : Omni.i18n.model.TgInventory.OH_64,
  OH_65Label                              : Omni.i18n.model.TgInventory.OH_65,
  OH_66Label                              : Omni.i18n.model.TgInventory.OH_66,
  OO_60Label                              : Omni.i18n.model.TgInventory.OO_60,
  OO_61Label                              : Omni.i18n.model.TgInventory.OO_61,
  OO_62Label                              : Omni.i18n.model.TgInventory.OO_62,
  OO_63Label                              : Omni.i18n.model.TgInventory.OO_63,
  OO_64Label                              : Omni.i18n.model.TgInventory.OO_64,
  OO_65Label                              : Omni.i18n.model.TgInventory.OO_65,
  OO_66Label                              : Omni.i18n.model.TgInventory.OO_66,
  SOLD_60Label                            : Omni.i18n.model.TgInventory.SOLD_60,
  SOLD_61Label                            : Omni.i18n.model.TgInventory.SOLD_61,
  SOLD_62Label                            : Omni.i18n.model.TgInventory.SOLD_62,
  SOLD_63Label                            : Omni.i18n.model.TgInventory.SOLD_63,
  SOLD_64Label                            : Omni.i18n.model.TgInventory.SOLD_64,
  SOLD_65Label                            : Omni.i18n.model.TgInventory.SOLD_65,
  SOLD_66Label                            : Omni.i18n.model.TgInventory.SOLD_66,
  PROJ_60Label                            : Omni.i18n.model.TgInventory.PROJ_60,
  PROJ_61Label                            : Omni.i18n.model.TgInventory.PROJ_61,
  PROJ_62Label                            : Omni.i18n.model.TgInventory.PROJ_62,
  PROJ_63Label                            : Omni.i18n.model.TgInventory.PROJ_63,
  PROJ_64Label                            : Omni.i18n.model.TgInventory.PROJ_64,
  PROJ_65Label                            : Omni.i18n.model.TgInventory.PROJ_65,
  PROJ_66Label                            : Omni.i18n.model.TgInventory.PROJ_66,
  valueLabel                              : Omni.i18n.model.TgInventory.value,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'ITEM',
      value       : this.record.get('ITEM')
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
      name         : 'OH_60',
      fieldLabel   : me.OH_60Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OH_61',
      fieldLabel   : me.OH_61Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OH_62',
      fieldLabel   : me.OH_62Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OH_63',
      fieldLabel   : me.OH_63Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OH_64',
      fieldLabel   : me.OH_64Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OH_65',
      fieldLabel   : me.OH_65Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OH_66',
      fieldLabel   : me.OH_66Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_60',
      fieldLabel   : me.OO_60Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_61',
      fieldLabel   : me.OO_61Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_62',
      fieldLabel   : me.OO_62Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_63',
      fieldLabel   : me.OO_63Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_64',
      fieldLabel   : me.OO_64Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_65',
      fieldLabel   : me.OO_65Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'OO_66',
      fieldLabel   : me.OO_66Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_60',
      fieldLabel   : me.SOLD_60Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_61',
      fieldLabel   : me.SOLD_61Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_62',
      fieldLabel   : me.SOLD_62Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_63',
      fieldLabel   : me.SOLD_63Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_64',
      fieldLabel   : me.SOLD_64Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_65',
      fieldLabel   : me.SOLD_65Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'SOLD_66',
      fieldLabel   : me.SOLD_66Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_60',
      fieldLabel   : me.PROJ_60Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_61',
      fieldLabel   : me.PROJ_61Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_62',
      fieldLabel   : me.PROJ_62Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_63',
      fieldLabel   : me.PROJ_63Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_64',
      fieldLabel   : me.PROJ_64Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_65',
      fieldLabel   : me.PROJ_65Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'PROJ_66',
      fieldLabel   : me.PROJ_66Label,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'value',
      fieldLabel   : me.valueLabel,
      maxLength    : 100,
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
      title       : 'Tg Inventory',
      subtitle    : 'Edit Tg Inventory'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.tg_inventories.Form'