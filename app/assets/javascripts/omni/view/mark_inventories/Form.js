Ext.define('Omni.view.mark_inventories.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-mark_inventories-Form',


  // LABELS (Start) =======================================================================
  idLabel                                 : Omni.i18n.model.MarkInventory.id,
  outlet_nbrLabel                         : Omni.i18n.model.MarkInventory.outlet_nbr,
  stock_nbrLabel                          : Omni.i18n.model.MarkInventory.stock_nbr,
  sizeLabel                               : Omni.i18n.model.MarkInventory.size,
  qohLabel                                : Omni.i18n.model.MarkInventory.qoh,
  drop_shipLabel                          : Omni.i18n.model.MarkInventory.drop_ship,
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
      name         : 'outlet_nbr',
      fieldLabel   : me.outlet_nbrLabel,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : false
    },
    {
      xtype        : 'textfield',
      name         : 'stock_nbr',
      fieldLabel   : me.stock_nbrLabel,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : false
    },
    {
      xtype        : 'textfield',
      name         : 'size',
      fieldLabel   : me.sizeLabel,
      maxLength    : 3,
      minLength    : 0,
      allowBlank   : false
    },
    {
      xtype        : 'textfield',
      name         : 'qoh',
      fieldLabel   : me.qohLabel,
      maxLength    : 100,
      minLength    : 0,
      allowBlank   : true
    },
    {
      xtype        : 'textfield',
      name         : 'drop_ship',
      fieldLabel   : me.drop_shipLabel,
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
      title       : 'Mark Inventory',
      subtitle    : 'Edit Mark Inventory'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.mark_inventories.Form'