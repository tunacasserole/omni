Ext.define('Omni.view.mark_inventories.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-mark_inventories-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'id',
      value:      this.record.get('id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      outlet_nbrLabel:                        Omni.i18n.model.MarkInventory.outlet_nbr,    
      stock_nbrLabel:                         Omni.i18n.model.MarkInventory.stock_nbr,    
      sizeLabel:                              Omni.i18n.model.MarkInventory.size,    
      qohLabel:                               Omni.i18n.model.MarkInventory.qoh,    
      drop_shipLabel:                         Omni.i18n.model.MarkInventory.drop_ship,    
      idLabel:                                Omni.i18n.model.MarkInventory.id    
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

            { xtype: 'textfield', name: 'outlet_nbr',                     fieldLabel: this.outlet_nbrLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'stock_nbr',                      fieldLabel: this.stock_nbrLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'size',                           fieldLabel: this.sizeLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh',                            fieldLabel: this.qohLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'drop_ship',                      fieldLabel: this.drop_shipLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'id',                             fieldLabel: this.idLabel                          , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit MarkInventories',
      newTitle: 'New Mark Inventory',
      newSubtitle: 'Complete the following to create a new Mark Inventory'
    });
    // TITLES (End)

    this.callParent();
    
  }

});